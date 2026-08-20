import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, '..');
const markdownFile = process.argv[2];
const checkOnly = process.argv.includes('--check');

if (!markdownFile) fail('请传入一个 Markdown 文件。');

const mimeTypes = new Map([
  ['.jpg', 'image/jpeg'], ['.jpeg', 'image/jpeg'], ['.png', 'image/png'],
  ['.webp', 'image/webp'], ['.gif', 'image/gif'], ['.svg', 'image/svg+xml'],
]);

function fail(message) {
  console.error(`\n发布失败：${message}`);
  process.exit(1);
}

function parseScalar(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseDocument(source) {
  const normalized = source.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const match = normalized.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  const meta = {};
  let body = normalized;
  if (match) {
    for (const line of match[1].split('\n')) {
      const entry = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
      if (entry) meta[entry[1]] = parseScalar(entry[2]);
    }
    body = normalized.slice(match[0].length);
  }
  const titleMatch = body.match(/^#\s+(.+)\s*$/m);
  const title = meta.title || titleMatch?.[1]?.trim() || path.basename(markdownFile, path.extname(markdownFile));
  if (titleMatch) body = body.replace(titleMatch[0], '').replace(/^\s+/, '');
  return { meta, title, body };
}

function stableSlug(meta, title) {
  const explicit = String(meta.slug || '').toLowerCase().trim();
  if (explicit) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(explicit)) fail('slug 只能使用小写英文、数字和连字符。');
    return explicit;
  }
  const fromName = path.basename(markdownFile, path.extname(markdownFile)).toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  if (fromName) return fromName;
  const date = String(meta.date || new Date().toISOString().slice(0, 10)).replace(/\D/g, '').slice(0, 8);
  const hash = crypto.createHash('sha1').update(title).digest('hex').slice(0, 8);
  return `post-${date}-${hash}`;
}

function plainText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^[#>*+-]+\s*/gm, '')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function encodeObjectPath(value) {
  return value.split('/').map(encodeURIComponent).join('/');
}

async function requestJson(url, options, label) {
  const response = await fetch(url, options);
  const text = await response.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!response.ok) {
    const detail = data?.msg || data?.message || data?.error_description || data?.error || text || response.statusText;
    fail(`${label}：${detail}`);
  }
  return data;
}

async function loadProjectConfig() {
  const source = await fs.readFile(path.join(projectDir, 'config.js'), 'utf8');
  const url = source.match(/supabaseUrl:\s*["']([^"']+)/)?.[1];
  const key = source.match(/supabasePublishableKey:\s*["']([^"']+)/)?.[1];
  if (!url || !key) fail('config.js 中没有可用的 Supabase 配置。');
  return { url: url.replace(/\/$/, ''), key };
}

async function uploadLocalImages(markdown, slug, auth, config) {
  const imagePattern = /!\[([^\]]*)\]\((?:<([^>]+)>|([^\s)]+))(?:\s+["']([^"']*)["'])?\)/g;
  const matches = [...markdown.matchAll(imagePattern)];
  let output = markdown;
  const uploaded = new Map();

  for (const match of matches) {
    const source = match[2] || match[3];
    if (/^(?:https?:|data:|\/\/)/i.test(source)) continue;
    const decoded = decodeURIComponent(source.replace(/^file:\/\//i, ''));
    const localPath = path.resolve(path.dirname(markdownFile), decoded);
    const extension = path.extname(localPath).toLowerCase();
    const contentType = mimeTypes.get(extension);
    if (!contentType) fail(`不支持这张图片的格式：${source}`);

    let publicUrl = uploaded.get(localPath);
    if (!publicUrl) {
      let bytes;
      try { bytes = await fs.readFile(localPath); } catch { fail(`找不到文章中的图片：${localPath}`); }
      const safeBase = path.basename(localPath, extension).normalize('NFKD')
        .replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48) || 'image';
      const digest = crypto.createHash('sha1').update(bytes).digest('hex').slice(0, 10);
      const objectPath = `${slug}/${safeBase}-${digest}${extension}`;
      const uploadUrl = `${config.url}/storage/v1/object/blog-assets/${encodeObjectPath(objectPath)}`;
      await requestJson(uploadUrl, {
        method: 'POST',
        headers: {
          apikey: config.key,
          Authorization: `Bearer ${auth.access_token}`,
          'Content-Type': contentType,
          'x-upsert': 'true',
        },
        body: bytes,
      }, `图片上传失败（请先重新运行 supabase-schema.sql）`);
      publicUrl = `${config.url}/storage/v1/object/public/blog-assets/${encodeObjectPath(objectPath)}`;
      uploaded.set(localPath, publicUrl);
      console.log(`  图片已上传：${path.basename(localPath)}`);
    }
    const replacement = `![${match[1]}](${publicUrl}${match[4] ? ` "${match[4]}"` : ''})`;
    output = output.replace(match[0], replacement);
  }
  return { markdown: output, imageCount: uploaded.size };
}

const config = await loadProjectConfig();
const source = await fs.readFile(path.resolve(markdownFile), 'utf8');
const document = parseDocument(source);
const slug = stableSlug(document.meta, document.title);
const status = String(document.meta.status || 'draft').toLowerCase();
if (!['draft', 'published'].includes(status)) fail('status 只能是 draft 或 published。');
if (checkOnly) {
  console.log(JSON.stringify({ title: document.title, slug, status, category: document.meta.category || '随笔' }, null, 2));
  process.exit(0);
}

const email = process.env.RAINY_AUTHOR_EMAIL;
const password = process.env.RAINY_AUTHOR_PASSWORD;
if (!email || !password) fail('未找到本机作者凭据，请先运行 setup-typora.ps1。');

console.log(`\nRainy. / 正在发布「${document.title}」`);
const auth = await requestJson(`${config.url}/auth/v1/token?grant_type=password`, {
  method: 'POST',
  headers: { apikey: config.key, 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
}, '作者登录失败');

const processed = await uploadLocalImages(document.body, slug, auth, config);
const clean = plainText(processed.markdown);
const excerpt = String(document.meta.excerpt || clean.slice(0, 150)).slice(0, 360);
const dateValue = document.meta.date ? new Date(`${document.meta.date}T00:00:00+08:00`) : new Date();
const count = (processed.markdown.match(/[\u3400-\u9fff]|\b[\p{L}\p{N}]+\b/gu) || []).length;
const payload = {
  slug,
  title: document.title.slice(0, 120),
  excerpt,
  content_markdown: processed.markdown,
  content_html: '',
  category: String(document.meta.category || '随笔').slice(0, 24),
  status,
  published_at: status === 'published' ? dateValue.toISOString() : null,
  read_time: String(document.meta.read_time || `${Math.max(1, Math.ceil(count / 420))} 分钟`).slice(0, 24),
  toc: [],
};

const result = await requestJson(`${config.url}/rest/v1/posts?on_conflict=slug`, {
  method: 'POST',
  headers: {
    apikey: config.key,
    Authorization: `Bearer ${auth.access_token}`,
    'Content-Type': 'application/json',
    Prefer: 'resolution=merge-duplicates,return=representation',
  },
  body: JSON.stringify(payload),
}, '文章保存失败');

console.log(`发布成功：${status === 'published' ? '已公开' : '草稿'}`);
console.log(`文章链接：https://personal-boke-one.vercel.app/#/post/${result?.[0]?.slug || slug}`);
console.log(`本次上传图片：${processed.imageCount} 张\n`);
