const HN_BASE = "https://hacker-news.firebaseio.com/v0";
const OSCHINA_FEED = "https://www.oschina.net/news/rss";

function decodeEntities(value = "") {
  const entities = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => entities[name] || match)
    .replace(/<[^>]+>/g, "")
    .trim();
}

function tag(block, name) {
  return block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"))?.[1] || "";
}

async function fetchJson(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error(`Upstream request failed: ${response.status}`);
  return response.json();
}

async function hackerNewsItems() {
  const ids = await fetchJson(`${HN_BASE}/topstories.json`);
  const stories = await Promise.all(ids.slice(0, 48).map((id) => fetchJson(`${HN_BASE}/item/${id}.json`).catch(() => null)));
  const cutoff = Date.now() - (4 * 86400000);
  return stories
    .filter((story) => {
      if (story?.type !== "story" || !story.url || !story.title || story.time * 1000 < cutoff) return false;
      let hostname = "";
      try {
        const parsed = new URL(story.url);
        if (!["http:", "https:"].includes(parsed.protocol)) return false;
        hostname = parsed.hostname;
      } catch { return false; }
      const subject = `${story.title} ${hostname}`;
      return /(\bAI\b|artificial intelligence|LLM|agent|model|open.?source|software|program|developer|code|coding|github|linux|browser|database|server|cloud|security|privacy|web|javascript|typescript|python|rust|golang|apple|google|microsoft|meta|nvidia|android|hardware|chip|computer|robot|api|framework|terminal|protocol|engineering|algorithm|data|network)/i.test(subject);
    })
    .sort((a, b) => ((b.score || 0) + (b.descendants || 0) * .35) - ((a.score || 0) + (a.descendants || 0) * .35))
    .slice(0, 5)
    .map((story) => ({
      id: `hn-${story.id}`,
      title: story.title,
      url: story.url,
      source: "Hacker News",
      publishedAt: new Date(story.time * 1000).toISOString(),
      score: story.score || 0,
    }));
}

async function oschinaItems() {
  const response = await fetch(OSCHINA_FEED, { signal: AbortSignal.timeout(8000), headers: { "User-Agent": "RainyBlog/1.0" } });
  if (!response.ok) throw new Error(`OSCHINA feed failed: ${response.status}`);
  const xml = await response.text();
  return [...xml.matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi)]
    .slice(0, 5)
    .map((match, index) => {
      const block = match[1];
      const link = decodeEntities(tag(block, "link"));
      const title = decodeEntities(tag(block, "title"));
      const published = new Date(decodeEntities(tag(block, "pubDate")));
      if (!title || !/^https?:\/\//i.test(link)) return null;
      return {
        id: `osc-${index}-${Buffer.from(link).toString("base64url").slice(-10)}`,
        title,
        url: link,
        source: "开源中国",
        publishedAt: Number.isNaN(published.getTime()) ? new Date().toISOString() : published.toISOString(),
        score: 0,
      };
    })
    .filter(Boolean);
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") return response.status(405).json({ error: "Method not allowed" });
  try {
    const results = await Promise.allSettled([hackerNewsItems(), oschinaItems()]);
    const hn = results[0].status === "fulfilled" ? results[0].value : [];
    const osc = results[1].status === "fulfilled" ? results[1].value : [];
    const items = [];
    const max = Math.max(hn.length, osc.length);
    for (let index = 0; index < max && items.length < 7; index += 1) {
      if (hn[index]) items.push(hn[index]);
      if (osc[index] && items.length < 7) items.push(osc[index]);
    }
    if (!items.length) throw new Error("All news sources are unavailable");
    response.setHeader("Cache-Control", "public, s-maxage=21600, stale-while-revalidate=86400");
    response.setHeader("Access-Control-Allow-Origin", "*");
    return response.status(200).json({ generatedAt: new Date().toISOString(), items });
  } catch (error) {
    return response.status(503).json({ error: "Technology news is temporarily unavailable" });
  }
};
