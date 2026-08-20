# Rainy.

一套无需构建工具的个人博客，采用“雾蓝雨窗 + 私人电台 + 编辑部文章排版”的视觉方向。直接打开 `index.html` 即可浏览；使用本地服务器时，RSS 和相对资源路径的行为更接近正式环境。

```powershell
python -m http.server 8000
```

然后访问 `http://127.0.0.1:8000/`。

## 修改个人信息与内容

- `script.js` 顶部的 `SITE`：站名、姓名、简介、邮箱和状态。
- `POSTS`：文章标题、摘要、日期、分类、目录与正文。
- `NOTES`：短记内容。
- `TRACKS`：播放器中显示的环境音名称和时长。
- `styles.css` 顶部变量：雾蓝色板、字体和全站宽度。

## 私人写作后台

后台入口为 `#/admin`，例如本地开发时访问：

```text
http://127.0.0.1:8000/#/admin
```

后台支持：

- 作者邮箱和密码登录；不提供公开注册入口。
- 新建、编辑和删除文章与短记。
- Markdown 正文、实时排版预览和自动目录。
- 草稿与公开发布状态。
- 将 `script.js` 中现有的本地文章一键迁移到数据库。
- 登录过期后自动刷新作者会话。

### 连接 Supabase

1. 创建 Supabase 项目。
2. 在 Dashboard 的 SQL Editor 中运行 `supabase-schema.sql`。
3. 在 Authentication 中关闭公开注册，然后手动创建唯一的作者账号。
4. 从项目设置复制 Project URL 和 Publishable key，填入 `config.js`。
5. 打开 `#/admin` 登录，点击“导入本地内容”。
6. 确认前后台内容无误后，把 `config.js` 中的 `useRemoteContent` 改为 `true`。

`Publishable key` 本身是前端公开配置，不是管理员密钥；文章写入、修改和删除权限由 `supabase-schema.sql` 中的 RLS 策略强制控制。不要把 Secret key 或旧版 `service_role key` 写进任何前端文件。

数据库脚本也会创建 `guest_messages` 公共留言表。访客可以发布并读取留言，但无法修改或删除；邮箱只授权作者账号读取，不会通过公开接口返回。以后更新脚本时可以在 SQL Editor 中安全地整段重新运行。

未填写 Supabase 配置或 `useRemoteContent` 仍为 `false` 时，公开博客继续读取 `script.js` 内的本地内容，不会出现空白页。

## 用 Typora 一键发布

现在可以把 Typora 当作博客的本地写作客户端。文章保存为普通 Markdown 文件，通过 Typora 的“自定义命令”直接写入 Supabase；公开文章刷新博客即可出现，不需要重新部署 Vercel。本地图片会上传到 `blog-assets`，原文中的图片路径也会自动替换。

### 第一次设置

1. 在 Supabase SQL Editor 中重新运行一次 `supabase-schema.sql`，创建文章图片仓库。
2. 在 PowerShell 中运行：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File ".\tools\setup-typora.ps1"
```

3. 输入博客后台的作者邮箱和密码。密码使用 Windows 当前账户加密，保存在本机 `%LOCALAPPDATA%\RainyBlogPublisher`，不会进入 Git 仓库。

### 添加 Typora 导出菜单

在 Typora 打开“文件 → 偏好设置 → 导出”，点击 `+`，选择“自定义命令”，名称填写 `发布到 Rainy.`。关闭保存文件对话框，并填写下面的命令（把项目路径换成这台电脑上的实际绝对路径）：

```text
powershell -NoProfile -ExecutionPolicy Bypass -File "C:\Users\35294\Documents\Codex\2026-08-15\ni-ha\outputs\recovered-personal-blog\tools\publish-typora.ps1" "${currentPath}"
```

建议开启“导出后显示命令输出”。以后写完并保存文章，选择“文件 → 导出 → 发布到 Rainy.”即可。也可以在命令行直接测试：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File ".\tools\publish-typora.ps1" ".\content\Typora发布示例.md"
```

只想检查文章信息而不联网发布时，可运行 `node .\tools\publish-typora.mjs ".\content\Typora发布示例.md" --check`。

文章开头使用 YAML 信息区；`status: draft` 保存为后台草稿，改成 `status: published` 才会在公开博客出现。`slug` 建议使用稳定的英文链接名；不填写时，发布器会根据文件名或标题生成一个稳定链接。完整范例见 `content/Typora发布示例.md`。

标题、品牌和主要导航使用本机已安装的华文新魏，获得稍粗且略带书写装饰的效果；长正文使用华文楷体，时间、日期和播放器进度继续使用等宽字体。

## 页面与功能

- 三栏桌面首页：个人资料、编辑式内容流、音乐和站点信息。
- 每日技术热榜：Vercel 每天自动聚合 Hacker News 热门技术内容与开源中国资讯，并通过服务端缓存展示在首页。
- 文章归档：主题筛选和即时搜索。
- 文章阅读：目录、阅读进度、复制链接、系统分享和下一篇。
- 短记、关于和留言页面。
- 全站搜索：顶部搜索按钮或 `Ctrl/⌘ + K`。
- 深浅主题，自动记住选择。
- 原创程序化环境音：浏览器实时合成，不加载第三方音频。
- GSAP 3.15：作为本地依赖保存在 `vendor/`，统一控制雨势、背景呼吸和页面入场动画，不依赖在线 CDN。
- ScrollTrigger 3.15：控制顶部栏在页面顶部保持透明、向下滚动后柔和显现雾面背景。
- 公共留言：配置 Supabase 后保存到 `guest_messages`；未配置时自动退回当前浏览器的 `localStorage`。

每日技术热榜由 `api/tech-news.js` 提供数据，`vercel.json` 在每天 00:00 UTC（北京时间 08:00）调用一次接口。Vercel Hobby 方案即可运行每日任务，不需要额外密钥。

## 视觉素材

- `assets/rain-window-city-v1.png`：重新生成的无损雨窗背景。
- `assets/rain-window-city-v1-web.jpg`：网站加载的压缩版本。

## 发布前

在 `feed.xml` 中把 `https://example.com` 替换成正式域名。这个目录可以直接部署到 GitHub Pages、Cloudflare Pages、Netlify、Vercel 或任意静态文件服务器。
