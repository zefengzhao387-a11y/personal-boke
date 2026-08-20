const SITE = {
  name: "Rainy.",
  author: "泽.",
  initials: "泽",
  role: "独立开发者 · 设计爱好者 · 长期写作者",
  headline: "网站没有做任何安全墙，各位黑客手下留情",
  bio: "本人技术迷，不信奉天赋论，也不信奉努力论，只认为贪心+动态规划相权衡是个好算法",
  location: "中国 · UTC+8",
  email: "3529487709@qq.com",
  douyin: "Jay_MapleLeaves",
  wechat: "JayChouer-0202Rain",
  qq: "3529487709",
  github: "https://github.com/zefengzhao387-a11y",
  status: "生活还能蒸",
};

let POSTS = [
  {
    slug: "begin-again",
    title: "我为什么重新开始写博客",
    date: "2026-08-08",
    displayDate: "2026 年 8 月 8 日",
    shortDate: "08.08",
    day: "08",
    tag: "随笔",
    readTime: "6 分钟",
    excerpt: "社交媒体越来越快，我却想重新拥有一块允许想法慢慢长大的地方。",
    toc: [["attention", "把注意力还给自己"], ["keep", "这一次，我想留下什么"]],
    content: `
      <p>重新写博客，不是因为我突然有了更多答案。恰恰相反，是因为那些还没有答案的东西越来越多，而它们需要一个比动态、短评和收藏夹更安静的容器。</p>
      <p>过去几年里，我习惯把想法压缩成一句话。它足够快，也足够轻，但轻到常常来不及留下痕迹。一周之后，我记得自己曾经被什么击中过，却再也找不到那一刻完整的轮廓。</p>
      <h2 id="attention">把注意力还给自己</h2>
      <p>博客对我而言不是内容产品，更像一间有门的房间。门可以打开，让别人进来坐坐；也可以关上，让一个念头不被掌声和数字打断。这里没有需要追赶的节奏，也没有必须维持的人设。</p>
      <blockquote><p>写作不是把已经想明白的事誊写下来，而是在句子里发现自己真正相信什么。</p></blockquote>
      <p>很多真正改变我的东西都发生在计划之外：一次临时改变的路线，一本偶然翻开的书，一段没有结论的谈话。这个网站会为它们留出位置。</p>
      <h2 id="keep">这一次，我想留下什么</h2>
      <ul><li>正在形成、还不够完美的想法；</li><li>做过的东西，以及它们背后的取舍；</li><li>日常里那些微小却难以替代的时刻。</li></ul>
      <p>如果你偶然来到这里，不必急着得到结论。挑一篇感兴趣的文章读读，也许我们会在某个问题上短暂相遇。</p>
    `,
  },
  {
    slug: "a-simple-system-for-life",
    title: "把复杂生活装进一个简单系统",
    date: "2026-07-27",
    displayDate: "2026 年 7 月 27 日",
    shortDate: "07.27",
    day: "27",
    tag: "方法",
    readTime: "8 分钟",
    excerpt: "好的系统不要求你成为更自律的人，它只在你分心时，替你记住下一步。",
    toc: [["three-actions", "只保留三个动作"], ["blank-space", "给空白留位置"]],
    content: `
      <p>我试过很多管理方法：复杂的标签、漂亮的仪表盘、精确到半小时的计划。它们在搭建时都令人兴奋，却很少陪我度过真正混乱的一周。</p>
      <p>问题不在工具，而在我曾经误以为系统的任务是控制生活。后来我才明白，一个有用的系统首先应该接住生活——尤其是在我没有状态、没有耐心，也没有完整时间的时候。</p>
      <h2 id="three-actions">只保留三个动作</h2>
      <p>现在我的方法很简单：捕捉、澄清、推进。所有突然出现的事情先进入同一个入口；每天结束前决定它是什么；第二天只挑出少量真正需要推进的事项。</p>
      <blockquote><p>系统的价值，不是让每一天都井然有序，而是让失序之后的返回变得容易。</p></blockquote>
      <h2 id="blank-space">给空白留位置</h2>
      <p>我不再把日程塞满。每周至少留出一个没有明确产出的时段，用来散步、整理、发呆，或者跟随一个临时出现的问题。那些看起来没有效率的空白，常常是新想法进入生活的唯一入口。</p>
    `,
  },
  {
    slug: "design-is-a-decision",
    title: "设计不是把东西变漂亮",
    date: "2026-07-12",
    displayDate: "2026 年 7 月 12 日",
    shortDate: "07.12",
    day: "12",
    tag: "设计",
    readTime: "7 分钟",
    excerpt: "每一个看得见的界面背后，都藏着一组关于什么更重要的判断。",
    toc: [["priority", "界面是一组优先级"], ["sentence", "从一句具体的话开始"]],
    content: `
      <p>“帮我美化一下”大概是设计工作里最常见，也最容易让人走偏的一句话。它把设计描述成最后一层表皮：功能先完成，然后再涂上颜色、调整字号、加一点动效。</p>
      <p>但真正影响体验的决定，往往早在颜色出现之前就发生了。我们把什么放在第一屏？默认选中了什么？谁需要多走一步？什么信息被安静地省略？</p>
      <h2 id="priority">界面是一组优先级</h2>
      <p>一个按钮更大，意味着它更值得被看见；一段说明更短，意味着我们决定把理解成本留给别处；一个流程少了一步，也可能意味着风险被转移到了用户身上。</p>
      <blockquote><p>审美不是设计的装饰。它是秩序被感知时，留下的形状。</p></blockquote>
      <h2 id="sentence">从一句具体的话开始</h2>
      <p>开始设计前，我会先写一句话：这个页面要帮助谁，在什么时刻，完成哪一个决定。它不能是“提升体验”这样的空话，而必须具体到能排除一些选择。</p>
    `,
  },
  {
    slug: "working-with-ai",
    title: "和 AI 一起工作之后，我保留了什么",
    date: "2026-06-24",
    displayDate: "2026 年 6 月 24 日",
    shortDate: "06.24",
    day: "24",
    tag: "技术",
    readTime: "9 分钟",
    excerpt: "速度改变了工作的方法，但判断、品味和对结果负责，依然无法被外包。",
    toc: [["questions", "答案变多之后，问题更重要"], ["keep-three", "我选择保留的三件事"]],
    content: `
      <p>AI 最先改变我的，并不是某个具体工具，而是开始工作的门槛。过去需要腾出一整段时间才能启动的任务，现在可以从一次不完整的对话开始。</p>
      <p>速度带来了轻松，也带来一种新的错觉：既然第一版来得如此容易，最后一公里似乎也应该同样自动完成。实际情况相反，生成越快，判断越密集。</p>
      <h2 id="questions">答案变多之后，问题更重要</h2>
      <p>当可行方案不再稀缺，真正稀缺的是选择依据。我必须知道什么值得留下、什么只是听起来合理，以及一个顺滑的答案究竟遗漏了谁的处境。</p>
      <blockquote><p>工具可以替我展开可能性，但不能替我决定哪一种可能值得成为现实。</p></blockquote>
      <h2 id="keep-three">我选择保留的三件事</h2>
      <ul><li>提出好问题之前，那段看似缓慢的观察；</li><li>面对多个正确答案时，基于语境做出的偏爱；</li><li>最终作品带来影响时，不把责任推回工具。</li></ul>
    `,
  },
  {
    slug: "another-kind-of-speed",
    title: "慢一点，也是一种速度",
    date: "2026-05-31",
    displayDate: "2026 年 5 月 31 日",
    shortDate: "05.31",
    day: "31",
    tag: "日常",
    readTime: "5 分钟",
    excerpt: "有些路并不是走得越快越好，因为沿途本身就是它要交付的东西。",
    toc: [["direction", "速度也有方向"]],
    content: `
      <p>我曾经把“快”理解为一种纯粹的优势。更快回复，更快完成，更快到达下一个目标。直到有一天，我发现自己能够清楚说出最近完成了什么，却很难说出最近真正感受过什么。</p>
      <h2 id="direction">速度也有方向</h2>
      <p>慢并不天然高贵。拖延、犹豫和漫无目的也可能只是消耗。我想寻找的不是动作的迟缓，而是一种让注意力能够跟上身体的速度。</p>
      <blockquote><p>如果抵达时已经忘了为什么出发，那么更快只会让迷路提前发生。</p></blockquote>
      <p>有些事情值得迅速完成，把时间还给更重要的部分；有些事情则需要在其中停留，因为过程本身就是结果。</p>
    `,
  },
];

let NOTES = [
  { id: "site-rebuild", date: "2026-08-10", displayDate: "8 月 10 日", tag: "近况", text: "重新整理个人网站。比起继续增加页面，我更想先弄清楚哪些内容值得长期留在首页。" },
  { id: "css-structure", date: "2026-08-04", displayDate: "8 月 4 日", tag: "开发", text: "最近写 CSS 的一个变化：先决定内容关系，再决定选择器。结构清楚之后，大部分样式其实不需要聪明。" },
  { id: "reading-notes", date: "2026-07-29", displayDate: "7 月 29 日", tag: "阅读", text: "读书笔记不一定要复述整本书。记录一个真正改变了判断的句子，已经足够有用。" },
  { id: "small-tools", date: "2026-07-18", displayDate: "7 月 18 日", tag: "工具", text: "越来越喜欢只解决一个问题的小工具。边界清楚，比功能丰富更让人安心。" },
  { id: "walk", date: "2026-07-06", displayDate: "7 月 6 日", tag: "日常", text: "傍晚走路时没有带耳机。城市没有因此变得更安静，但我终于听见自己正在想什么。" },
  { id: "writing", date: "2026-06-30", displayDate: "6 月 30 日", tag: "写作", text: "发布不是写作的终点。过一段时间回来删掉一句多余的话，文章才逐渐变成自己的。" },
];

const LOCAL_POSTS = POSTS.map((post) => ({ ...post, toc: post.toc.map((item) => [...item]) }));
const LOCAL_NOTES = NOTES.map((note) => ({ ...note }));

const DEFAULT_MESSAGES = [
  { name: "林屿", date: "2026-08-09", text: "很喜欢这里的节奏。页面没有催着人往下翻，像真的在窗边坐了一会儿。" },
  { name: "迟墨", date: "2026-08-02", text: "从《设计不是把东西变漂亮》过来。期待继续看到关于取舍和过程的记录。" },
];

const TRACKS = [
  { title: "雨下一整晚", subtitle: "周杰伦 · 跨时代", src: "./assets/audio/rain-all-night.ogg", duration: 0 },
  { title: "手语", subtitle: "周杰伦", src: "./assets/audio/jay-sign-language.ogg", duration: 0 },
  { title: "知了", subtitle: "陈默之", src: "./assets/audio/cicada.ogg", duration: 0 },
  { title: "会呼吸的痛", subtitle: "梁静茹", src: "./assets/audio/breathing-pain.ogg", duration: 0 },
  { title: "想自由", subtitle: "林宥嘉", src: "./assets/audio/want-freedom.ogg", duration: 0 },
  { title: "阴天", subtitle: "莫文蔚", src: "./assets/audio/cloudy-day.ogg", duration: 0 },
  { title: "一样的月光", subtitle: "徐佳莹", src: "./assets/audio/same-moonlight.ogg", duration: 0 },
  { title: "手写的从前", subtitle: "周杰伦", src: "./assets/audio/handwritten-past.ogg", duration: 0 },
];

const state = {
  tag: "全部",
  query: "",
  currentPost: null,
  trackIndex: 0,
  playing: false,
  elapsed: 0,
  audio: null,
  preloadedTracks: 0,
  preloadStatus: "waiting",
  adminSection: "posts",
  adminPosts: [],
  adminNotes: [],
  adminSelectedSlug: "",
  adminLoaded: false,
  adminLoading: false,
  guestMessages: [],
  guestMessagesLoaded: false,
  guestMessagesLoading: false,
  guestMessagesRemote: false,
  techNews: [],
  techNewsLoaded: false,
  techNewsLoading: false,
  techNewsError: "",
};

const weatherDynamics = { wind: 0, intensity: 1 };
let animatedRoute = "";
let homeScrollCleanup = null;
let homeEntered = false;
let signalSurfacesCleanup = null;
let entranceAnimation = null;
let readingProgressFrame = 0;

const app = document.querySelector("#main-content");
const searchDialog = document.querySelector("[data-search-dialog]");
const globalSearch = document.querySelector("[data-global-search]");
const globalResults = document.querySelector("[data-global-results]");

function heroTemplate(kicker, title, summary = "") {
  return `
    <section class="hero">
      <div class="hero-inner">
        <p class="hero-topline">${kicker}</p>
        <h1>${title}</h1>
        ${summary ? `<p class="hero-summary">${summary}</p>` : ""}
        <div class="hero-weather"><i></i><span data-hero-clock>雨 · 雾蓝清晨 · 中国 UTC+8</span></div>
      </div>
    </section>`;
}

function profilePanel() {
  return `
    <section class="panel profile-panel">
      <div class="profile-head">
        <div class="profile-avatar" aria-hidden="true"><img src="./assets/avatar-ze.jpg" alt="" /></div>
        <div class="profile-identity"><h2>${SITE.author}</h2><p>${SITE.role}</p></div>
      </div>
      <p class="status-line"><i></i><span>${SITE.status}</span></p>
      <p class="profile-bio">${SITE.bio}</p>
      <div class="profile-links">
        <a class="profile-email" href="mailto:${SITE.email}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h17v11h-17v-11Zm.8.8 7.7 6 7.7-6M4.3 16.7l5.2-5m10.2 5-5.2-5" /></svg>
          <span>${SITE.email}</span>
        </a>
        <div class="profile-socials">
          <span class="douyin-handle social-handle" tabindex="0" role="img" aria-label="抖音号：${SITE.douyin}" data-tooltip="抖音号：${SITE.douyin}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.15 3v10.05a4.55 4.55 0 1 1-3.05-4.3v2.88a1.9 1.9 0 1 0 .35 1.1V3h2.7Zm0 2.2c.92 1.45 2.25 2.32 4.05 2.55v2.78a7.43 7.43 0 0 1-4.05-1.46V5.2Z" /></svg>
          </span>
          <span class="wechat-handle social-handle" tabindex="0" role="img" aria-label="微信号：${SITE.wechat}" data-tooltip="微信号：${SITE.wechat}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.35 4.1c-4.03 0-7.3 2.62-7.3 5.85 0 1.85 1.08 3.5 2.75 4.57l-.68 2.17 2.55-1.25c.85.24 1.75.36 2.68.36.2 0 .4-.01.6-.03a5.9 5.9 0 0 1-.25-1.68c0-3.37 3.22-6.1 7.2-6.1.2 0 .39.01.58.03C16.35 5.73 13.2 4.1 9.35 4.1Zm-2.4 3.2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Zm4.85 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Zm5.1 1.95c-3.14 0-5.68 2.16-5.68 4.84s2.54 4.84 5.68 4.84c.72 0 1.42-.12 2.06-.32l2.03 1-.54-1.76c1.3-.89 2.13-2.24 2.13-3.76 0-2.68-2.54-4.84-5.68-4.84Zm-1.87 2.7a.76.76 0 1 1 0 1.52.76.76 0 0 1 0-1.52Zm3.75 0a.76.76 0 1 1 0 1.52.76.76 0 0 1 0-1.52Z" /></svg>
          </span>
          <span class="qq-handle social-handle" tabindex="0" role="img" aria-label="QQ：${SITE.qq}" data-tooltip="QQ：${SITE.qq}">
            <svg class="qq-logo" viewBox="0 0 71 83" aria-hidden="true">
              <path d="M2 58L3 58L3 54L4 54L4 50L5 50L5 47L6 47L6 45L7 45L7 42L8 42L8 39L9 39L9 37L10 37L10 29L11 29L11 22L12 22L12 18L13 18L13 16L14 16L14 14L15 14L15 12L16 12L16 11L17 11L17 9L18 9L18 8L19 8L19 7L20 7L20 6L22 6L22 5L23 5L23 4L25 4L25 3L28 3L28 2L42 2L42 3L45 3L45 4L47 4L47 5L49 5L49 6L50 6L50 7L51 7L51 8L52 8L52 9L53 9L53 10L54 10L54 11L55 11L55 13L56 13L56 15L57 15L57 17L58 17L58 20L59 20L59 24L60 24L60 36L61 36L61 38L62 38L62 41L63 41L63 43L64 43L64 46L65 46L65 49L66 49L66 52L67 52L67 56L68 56L68 66L65 66L65 65L64 65L64 63L63 63L63 62L62 62L62 61L60 61L60 65L59 65L59 67L58 67L58 69L57 69L57 70L56 70L56 71L55 71L55 72L54 72L54 74L56 74L56 75L58 75L58 76L59 76L59 77L60 77L60 79L59 79L59 80L53 80L53 81L45 81L45 80L25 80L25 81L18 81L18 80L11 80L11 79L10 79L10 78L11 78L11 76L12 76L12 75L14 75L14 74L17 74L17 73L16 73L16 72L15 72L15 71L14 71L14 69L13 69L13 68L12 68L12 66L11 66L11 63L10 63L10 60L9 60L9 61L8 61L8 63L7 63L7 64L6 64L6 65L5 65L5 66L2 66Z" />
            </svg>
          </span>
          <a class="github-handle social-handle" href="${SITE.github}" target="_blank" rel="noopener noreferrer" aria-label="打开 GitHub：${SITE.github}" data-tooltip="GitHub：${SITE.github}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.7 9.7 0 0 0-3.07 18.9c.49.09.67-.21.67-.47v-1.86c-2.73.59-3.31-1.16-3.31-1.16-.45-1.14-1.09-1.44-1.09-1.44-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.88 1.5 2.3 1.07 2.86.82.09-.63.34-1.07.62-1.32-2.18-.25-4.47-1.09-4.47-4.85 0-1.07.38-1.95 1.01-2.64-.1-.25-.44-1.25.1-2.6 0 0 .83-.26 2.68 1.01a9.3 9.3 0 0 1 4.88 0c1.86-1.27 2.68-1.01 2.68-1.01.54 1.35.2 2.35.1 2.6.63.69 1.01 1.57 1.01 2.64 0 3.77-2.3 4.6-4.48 4.84.35.3.66.9.66 1.82v2.69c0 .26.18.57.67.47A9.7 9.7 0 0 0 12 2.5Z" /></svg>
          </a>
        </div>
      </div>
    </section>`;
}

function sideNav() {
  return `
    <nav class="panel side-nav" aria-label="站点分区">
      <a href="#/writing"><span>文章归档</span><span>${String(POSTS.length).padStart(2, "0")}</span></a>
      <a href="#/notes"><span>短记片段</span><span>${String(NOTES.length).padStart(2, "0")}</span></a>
      <a href="#/guestbook"><span>来访留言</span><span>OPEN</span></a>
      <a href="./feed.xml"><span>RSS 订阅</span><span>XML</span></a>
    </nav>`;
}

function quotePanel() {
  return `
    <section class="panel quote-panel">
      <span>today's line</span>
      <blockquote>天外有天无尽处，<br>守心尽己自生光。</blockquote>
      <cite>— 写在雨停以前</cite>
    </section>`;
}

function leftStack() {
  return `<aside class="left-stack">${profilePanel()}${sideNav()}${quotePanel()}</aside>`;
}

function playerPanel() {
  const track = TRACKS[state.trackIndex];
  return `
    <section class="panel player-panel${state.playing ? " is-playing" : ""}" data-player-panel>
      <div class="player-top"><span class="panel-label">listening deck</span><span class="player-live"><i></i><span data-preload-status>${preloadStatusLabel()}</span></span></div>
      <div class="vinyl-stage" aria-hidden="true">
        <div class="platter"><div class="vinyl"><div class="record-label"><span>RAINY.</span><b>R</b></div></div></div>
        <div class="tonearm-base"></div><div class="tonearm"><i></i></div><div class="deck-led"></div>
      </div>
      <div class="track-copy"><small>now playing · <b data-track-position>${String(state.trackIndex + 1).padStart(2, "0")} / ${String(TRACKS.length).padStart(2, "0")}</b></small><strong data-track-title>${track.title}</strong><span data-track-subtitle>${track.subtitle}</span></div>
      <div class="player-progress" data-player-seek role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i data-player-progress></i></div>
      <div class="player-time"><span data-player-current>00:00</span><span data-player-duration>${formatTime(track.duration)}</span></div>
      <div class="player-controls">
        <button type="button" data-player-prev aria-label="上一首歌曲"${TRACKS.length < 2 ? " disabled aria-hidden=\"true\"" : ""}>↶</button>
        <button class="player-main${state.playing ? " is-playing" : ""}" type="button" data-player-main aria-label="${state.playing ? "暂停" : "播放"}"><span class="player-icon" aria-hidden="true"></span></button>
        <button type="button" data-player-next aria-label="下一首歌曲"${TRACKS.length < 2 ? " disabled aria-hidden=\"true\"" : ""}>↷</button>
      </div>
    </section>`;
}

function todayPanel() {
  return `
    <section class="panel today-panel">
      <span class="panel-label">now / local</span>
      <div class="today-time"><strong data-clock>--:--</strong><span data-date>正在读取时间</span></div>
      <div class="site-stat-list">
        <div><span>文章</span><strong>${POSTS.length}</strong></div>
        <div><span>短记</span><strong>${NOTES.length}</strong></div>
        <div><span>上次更新</span><strong>08.10</strong></div>
      </div>
    </section>`;
}

function tagPanel() {
  const tags = [...new Set(POSTS.map((post) => post.tag))];
  return `<section class="panel tag-panel"><span class="panel-label">topics</span><div class="tag-cloud">${tags.map((tag) => `<button type="button" data-quick-tag="${tag}">${tag}</button>`).join("")}</div></section>`;
}

function rightStack() {
  return `<aside class="right-stack">${playerPanel()}${todayPanel()}${tagPanel()}</aside>`;
}

function formatNewsTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "刚刚更新";
  const diff = Date.now() - date.getTime();
  const hours = Math.max(0, Math.floor(diff / 3600000));
  if (hours < 1) return "刚刚更新";
  if (hours < 24) return `${hours} 小时前`;
  const days = Math.floor(hours / 24);
  return days === 1 ? "昨天" : `${days} 天前`;
}

function techNewsItemsTemplate() {
  if (state.techNewsLoading && !state.techNews.length) {
    return `<div class="tech-news-loading" aria-label="正在接收今日技术新闻"><i></i><span>正在接收今日技术讯号</span></div>`;
  }
  if (state.techNewsError && !state.techNews.length) {
    return `<div class="tech-news-empty"><strong>今日讯号暂未接通</strong><span>稍后刷新页面，会再次尝试获取。</span><button type="button" data-news-retry>重新接收</button></div>`;
  }
  return state.techNews.map((item, index) => `
    <a class="tech-news-item${index === 0 ? " is-lead" : ""}" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
      <span class="tech-news-rank">${String(index + 1).padStart(2, "0")}</span>
      <span class="tech-news-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.source)} · ${formatNewsTime(item.publishedAt)}${item.score ? ` · 热度 ${item.score}` : ""}</small></span>
      <span class="tech-news-arrow" aria-hidden="true">↗</span>
    </a>`).join("");
}

function techNewsPanel() {
  const date = new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit" }).format(new Date()).replace("/", ".");
  return `
    <section class="main-panel tech-news-panel" data-tech-news-panel>
      <header class="tech-news-head">
        <div><span class="tech-news-live"><i></i>daily signal</span><h2>今日技术热榜</h2></div>
        <time data-tech-news-date>${date}</time>
      </header>
      <div class="tech-news-list" data-tech-news-list aria-live="polite">${techNewsItemsTemplate()}</div>
      <footer><span>自动更新 · Hacker News / 开源中国</span><span>只做索引，内容归原作者所有</span></footer>
    </section>`;
}

async function loadTechNews(force = false) {
  if (state.techNewsLoading || (state.techNewsLoaded && !force)) return;
  state.techNewsLoading = true;
  state.techNewsError = "";
  const list = document.querySelector("[data-tech-news-list]");
  if (list) list.innerHTML = techNewsItemsTemplate();
  try {
    const response = await fetch("./api/tech-news", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`技术新闻请求失败（${response.status}）`);
    const payload = await response.json();
    state.techNews = Array.isArray(payload.items) ? payload.items.slice(0, 7) : [];
    if (!state.techNews.length) throw new Error("今日暂无可用技术新闻");
    state.techNewsLoaded = true;
  } catch (error) {
    state.techNewsError = error?.message || "技术新闻暂时无法获取";
  } finally {
    state.techNewsLoading = false;
    const currentList = document.querySelector("[data-tech-news-list]");
    if (currentList) {
      currentList.innerHTML = techNewsItemsTemplate();
      currentList.querySelector("[data-news-retry]")?.addEventListener("click", () => void loadTechNews(true));
    }
  }
}

function homeTemplate() {
  const [lead, ...rest] = POSTS;
  return `
    <section class="hero home-overture" data-home-overture>
      <div class="home-overture-inner">
        <div class="home-identity">
          <p class="hero-topline">personal notes · 2026</p>
          <h1>${SITE.name}</h1>
          <p class="hero-summary">某只会用vibe coding进行taken浪费行为的愚蠢少年——</p>
          <div class="hero-weather"><i></i><span data-hero-clock>雨 · 雾蓝清晨 · 中国 UTC+8</span></div>
        </div>
        <blockquote class="home-overture-quote" data-overture-copy>
          <span>天外有天无尽处，</span>
          <span>守心尽己自生光。</span>
        </blockquote>
      </div>
      <button class="home-scroll-cue" type="button" data-home-scroll>
        <span>向下阅读</span><i aria-hidden="true"></i>
      </button>
    </section>
    <section class="home-journal" id="home-journal" data-home-journal>
      <div class="portal home-portal">
      <aside class="left-stack">${profilePanel()}${sideNav()}</aside>
      <div class="main-stack">
        <section class="main-panel welcome-panel">
          <div class="welcome-layout">
            <div class="welcome-copy">
              <p class="welcome-eyebrow">写给偶然到访的人</p>
              <h2>${SITE.headline}</h2>
              <p>不定期随便写点什么——</p>
            </div>
            <aside class="welcome-issue" aria-hidden="true"><span>rain letter</span><strong>08</strong><small>2026 · 雾蓝刊</small></aside>
          </div>
        </section>
        ${techNewsPanel()}
        <section class="main-panel editorial-section">
          <div class="section-head"><h2>最近写下</h2><a href="#/writing">全部文章</a></div>
          <a class="lead-story" href="#/post/${lead.slug}">
            <div><div class="story-meta"><span>${lead.tag}</span><span>${lead.readTime}</span></div><h3>${lead.title}</h3><p>${lead.excerpt}</p></div>
            <div class="lead-date"><strong>${lead.day}</strong>${lead.shortDate.slice(0, 2)} / 2026</div>
          </a>
          ${rest.slice(0, 3).map((post) => `<a class="story-row" href="#/post/${post.slug}"><time datetime="${post.date}">${post.shortDate}</time><h3>${post.title}</h3><span>${post.tag}</span></a>`).join("")}
        </section>
        <section class="main-panel editorial-section">
          <div class="section-head"><h2>桌边短记</h2><a href="#/notes">全部短记</a></div>
          <div class="notes-grid">${NOTES.slice(0, 3).map((note) => `<a class="note-card" href="#/notes/${note.id}"><time>${note.displayDate} · ${note.tag}</time><p>${note.text}</p></a>`).join("")}</div>
        </section>
      </div>
      ${rightStack()}
      </div>
    </section>`;
}

function pageTitle(eyebrow, title, copy) {
  return `<header class="page-title"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2><p>${copy}</p></header>`;
}

function filteredPosts() {
  const query = state.query.trim().toLocaleLowerCase("zh-CN");
  return POSTS.filter((post) => {
    const tagMatch = state.tag === "全部" || post.tag === state.tag;
    const text = `${post.title} ${post.excerpt} ${post.tag}`.toLocaleLowerCase("zh-CN");
    return tagMatch && (!query || text.includes(query));
  });
}

function archiveResults() {
  const posts = filteredPosts();
  if (!posts.length) return `<div class="empty-state"><h3>没有找到相关文章</h3><p>换一个关键词，或者清除当前筛选。</p></div>`;
  return posts.map((post) => `
    <a class="archive-post" href="#/post/${post.slug}">
      <div class="archive-meta"><time datetime="${post.date}">${post.displayDate}</time><span>${post.tag} · ${post.readTime}</span></div>
      <div><h3>${post.title}</h3><p>${post.excerpt}</p></div><span class="archive-cta">阅读</span>
    </a>`).join("");
}

function writingTemplate() {
  const tags = ["全部", ...new Set(POSTS.map((post) => post.tag))];
  return `
    ${heroTemplate("archive · writing", "文章", "长一点、完整一点的思考。按时间倒序，也可以从一个主题开始。")}
    <div class="subpage-grid">${leftStack()}
      <section class="main-panel page-panel">
        ${pageTitle("writing archive", "写作归档", `共 ${POSTS.length} 篇文章。这里保留结论，也保留结论形成以前的犹豫。`)}
        <div class="archive-tools">
          <div class="tag-filters">${tags.map((tag) => `<button type="button" class="tag-button${tag === state.tag ? " active" : ""}" data-filter="${tag}">${tag}</button>`).join("")}</div>
          <label class="archive-search"><span class="sr-only">搜索文章</span><input type="search" value="${escapeHtml(state.query)}" placeholder="搜索文章……" data-writing-search /></label>
        </div>
        <div data-archive-results>${archiveResults()}</div>
      </section>${rightStack()}</div>`;
}

function notesTemplate(selectedId = "") {
  return `
    ${heroTemplate("fragments · notes", "短记", "比文章短，比动态慢。记录那些还没准备好成为结论的东西。")}
    <div class="subpage-grid">${leftStack()}
      <section class="main-panel page-panel">
        ${pageTitle("small observations", "桌边短记", "一些正在形成的想法、工具记录和日常片段。")} 
        <div class="notes-list">${NOTES.map((note) => `<article class="note-item${selectedId === note.id ? " selected" : ""}" id="note-${note.id}"><div class="note-meta"><time datetime="${note.date}">${note.displayDate}</time><span>${note.tag}</span></div><p>${note.text}</p><a href="#/notes/${note.id}" aria-label="链接到这条短记">#</a></article>`).join("")}</div>
      </section>${rightStack()}</div>`;
}

function getMessages() {
  if (state.guestMessagesRemote) return state.guestMessages;
  try {
    const saved = JSON.parse(localStorage.getItem("quiet-window-messages") || "[]");
    return Array.isArray(saved) ? [...saved, ...DEFAULT_MESSAGES] : DEFAULT_MESSAGES;
  } catch { return DEFAULT_MESSAGES; }
}

function formatGuestDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "刚刚" : date.toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
}

function normalizeGuestMessage(message) {
  return {
    id: message.id || "",
    name: String(message.name || "访客"),
    text: String(message.message || message.text || ""),
    date: message.created_at ? formatGuestDate(message.created_at) : String(message.date || "刚刚"),
  };
}

function messagesTemplate() {
  const messages = getMessages();
  if (!messages.length) return `<div class="guest-empty">雨声还很安静，来留下第一句话吧。</div>`;
  return messages.map((message) => `
    <article class="guest-message"><div class="guest-avatar" aria-hidden="true">${escapeHtml(message.name.slice(0, 1))}</div><div><div class="guest-message-head"><strong>${escapeHtml(message.name)}</strong><time>${escapeHtml(message.date)}</time></div><p>${escapeHtml(message.text)}</p></div></article>`).join("");
}

function updateGuestMessageView() {
  const list = document.querySelector("[data-message-list]");
  const count = document.querySelector("[data-message-count]");
  if (list) list.innerHTML = messagesTemplate();
  if (count) count.textContent = `${getMessages().length} 条`;
}

async function loadGuestMessages() {
  if (!window.RainyDB?.isConfigured() || !window.RainyDB.listGuestMessages || state.guestMessagesLoading) return;
  state.guestMessagesLoading = true;
  try {
    const messages = await window.RainyDB.listGuestMessages();
    state.guestMessages = messages.map(normalizeGuestMessage);
    state.guestMessagesRemote = true;
    state.guestMessagesLoaded = true;
    updateGuestMessageView();
  } catch (error) {
    state.guestMessagesRemote = false;
    console.warn("Rainy. 暂时无法读取公共留言。", error);
    if (getRoute() === "/guestbook") showToast("公共留言暂时无法读取，正在显示本机内容");
  } finally {
    state.guestMessagesLoading = false;
  }
}

function guestbookTemplate() {
  const count = getMessages().length;
  const remoteReady = window.RainyDB?.isConfigured();
  return `
    ${heroTemplate("leave a trace · guestbook", "留言", "如果恰好路过，可以把一句话留在这里。雨停之后，我仍然会看见。")}
    <div class="subpage-grid">${leftStack()}
      <section class="main-panel page-panel">
        ${pageTitle("guestbook", "来访者手记", "不必写得完整。一个问候、一点建议，或者今天路过时的心情都可以。")} 
        <div class="guest-intro">${remoteReady ? "留言会保存到云端，并在这里与所有来访者共享；邮箱只用于联系，不会公开展示。" : "数据库尚未配置，留言目前只会保存在当前浏览器。"}</div>
        <form class="guest-form" data-guest-form novalidate>
          <div class="form-row"><label>你的称呼<input name="name" maxlength="16" required placeholder="怎么称呼你" /></label><label>邮箱（不会展示）<input name="email" type="email" placeholder="可不填" /></label></div>
          <label class="guest-honeypot" aria-hidden="true">网站<input name="website" tabindex="-1" autocomplete="off" /></label>
          <label>想说的话<textarea name="message" maxlength="240" required placeholder="写下一点什么……"></textarea></label>
          <div class="form-bottom"><small>最多 240 字 · ${remoteReady ? "发布后所有访客可见" : "发布后保存在本机"}</small><button class="submit-button" type="submit">留下这句话</button></div>
        </form>
        <div class="guest-list-head"><h3>窗边的字迹</h3><span data-message-count>${count} 条</span></div>
        <div data-message-list>${messagesTemplate()}</div>
      </section>${rightStack()}</div>`;
}

function aboutTemplate() {
  return `
    ${heroTemplate("about this room", "关于", "这里不是简历的延伸，而是一处可以长期更新、允许变化的个人空间。")}
    <div class="subpage-grid">${leftStack()}
      <section class="main-panel page-panel">
        ${pageTitle("about me", "关于我和这间书房", "我关心技术如何被理解，设计如何影响选择，以及普通生活里那些值得被认真记录的部分。")} 
        <div class="about-layout">
          <aside class="about-profile"><div class="about-avatar"><img src="./assets/avatar-ze.jpg" alt="${SITE.author}的头像" /></div><h3>${SITE.author}</h3><p>${SITE.role}</p><a href="mailto:${SITE.email}">${SITE.email}</a></aside>
          <div class="about-copy">
            <section><h3>我是谁</h3><p>我是一名对技术如何改变人的生活保持好奇的创作者，也在意设计、文字与日常经验之间那些不容易被分类的联系。</p><p>这个网站是我的长期空间。我在这里公开思考过程，而不只展示整理好的结论；记录如何做出选择，也诚实保留那些后来被证明不够正确的判断。</p></section>
            <section><h3>我相信</h3><ul><li>具体的问题，比宏大的答案更值得追逐。</li><li>结论会过时，形成结论的方法值得留下。</li><li>不制造紧迫感，也是对读者注意力的尊重。</li></ul></section>
            <section><h3>关于网站</h3><p>它由原生 HTML、CSS 与 JavaScript 构成，没有构建工具。文章、短记、搜索、主题、环境音和本地留言都留在少量文件里，方便长期维护。</p></section>
          </div>
        </div>
      </section>${rightStack()}</div>`;
}

function articleTemplate(post) {
  const index = POSTS.findIndex((item) => item.slug === post.slug);
  const next = POSTS[(index + 1) % POSTS.length];
  return `
    ${heroTemplate("reading · editorial", post.tag, "把页面留白调大一点，让一篇文章拥有自己的呼吸。")}
    <article class="article-wrap article-paper">
      <header class="article-header"><a class="back-link" href="#/writing">文章归档</a><div class="article-meta"><span>${post.tag}</span><time datetime="${post.date}">${post.displayDate}</time><span>${post.readTime}</span></div><h1>${post.title}</h1><p class="article-deck">${post.excerpt}</p></header>
      <div class="article-layout">
        <aside class="article-aside"><p>CONTENTS</p>${post.toc.map(([id, title]) => `<button type="button" data-toc-target="${id}">${title}</button>`).join("")}</aside>
        <div class="article-content">${post.content}</div>
        <aside class="article-actions"><button type="button" data-copy-link>复制链接</button><button type="button" data-native-share>分享文章</button></aside>
      </div>
      <a class="next-post" href="#/post/${next.slug}"><span>下一篇</span><strong>${next.title}</strong><span class="next-post-cta">继续阅读</span></a>
    </article>`;
}

function inlineMarkdown(value) {
  const code = [];
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, (_, content) => {
      code.push(`<code>${content}</code>`);
      return `\u0000CODE${code.length - 1}\u0000`;
    })
    .replace(/!\[([^\]]*)\]\((https?:\/\/[^\s)]+|\.?\.?\/[^\s)]+)(?:\s+&quot;[^&]*&quot;)?\)/g, '<img src="$2" alt="$1" loading="lazy" decoding="async">')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\.?\.?\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/~~([^~]+)~~/g, "<del>$1</del>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\u0000CODE(\d+)\u0000/g, (_, index) => code[Number(index)]);
}

function headingId(value, index) {
  const slug = value.toLocaleLowerCase("zh-CN")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  return slug || `section-${index + 1}`;
}

function markdownToArticle(markdown) {
  const lines = String(markdown || "").replace(/\r/g, "").split("\n");
  const html = [];
  const toc = [];
  let paragraph = [];
  let listTag = "";
  let codeFence = null;
  let codeLines = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${paragraph.map(inlineMarkdown).join("<br>")}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (listTag) html.push(`</${listTag}>`);
    listTag = "";
  };

  lines.forEach((line) => {
    const fence = line.match(/^```\s*([\w-]*)\s*$/);
    if (fence) {
      flushParagraph(); closeList();
      if (codeFence !== null) {
        const language = codeFence ? ` class="language-${escapeHtml(codeFence)}"` : "";
        html.push(`<pre><code${language}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeFence = null; codeLines = [];
      } else {
        codeFence = fence[1] || "";
      }
      return;
    }
    if (codeFence !== null) { codeLines.push(line); return; }
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    const item = line.match(/^[-*+]\s+(.+)$/);
    const orderedItem = line.match(/^\d+[.)]\s+(.+)$/);
    const quote = line.match(/^>\s?(.+)$/);
    const image = line.match(/^!\[[^\]]*\]\([^)]+\)\s*$/);
    if (h2) {
      flushParagraph(); closeList();
      const id = headingId(h2[1], toc.length);
      toc.push([id, h2[1]]);
      html.push(`<h2 id="${id}">${inlineMarkdown(h2[1])}</h2>`);
    } else if (h3) {
      flushParagraph(); closeList();
      html.push(`<h3>${inlineMarkdown(h3[1])}</h3>`);
    } else if (item || orderedItem) {
      flushParagraph();
      const nextTag = orderedItem ? "ol" : "ul";
      if (listTag && listTag !== nextTag) closeList();
      if (!listTag) { html.push(`<${nextTag}>`); listTag = nextTag; }
      html.push(`<li>${inlineMarkdown((item || orderedItem)[1])}</li>`);
    } else if (quote) {
      flushParagraph(); closeList();
      html.push(`<blockquote><p>${inlineMarkdown(quote[1])}</p></blockquote>`);
    } else if (image) {
      flushParagraph(); closeList();
      html.push(`<figure>${inlineMarkdown(line)}</figure>`);
    } else if (/^([-*_])(?:\s*\1){2,}\s*$/.test(line)) {
      flushParagraph(); closeList(); html.push("<hr>");
    } else if (!line.trim()) {
      flushParagraph(); closeList();
    } else {
      closeList(); paragraph.push(line.trim());
    }
  });
  if (codeFence !== null) html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  flushParagraph(); closeList();
  return { html: html.join("\n"), toc };
}

function htmlToMarkdown(value) {
  if (!value) return "";
  const documentFragment = new DOMParser().parseFromString(`<main>${value}</main>`, "text/html");
  return [...documentFragment.querySelector("main").children].map((node) => {
    const text = node.textContent.trim();
    if (!text) return "";
    if (node.tagName === "H2") return `## ${text}`;
    if (node.tagName === "H3") return `### ${text}`;
    if (node.tagName === "BLOCKQUOTE") return `> ${text}`;
    if (node.tagName === "UL" || node.tagName === "OL") return [...node.querySelectorAll(":scope > li")].map((item) => `- ${item.textContent.trim()}`).join("\n");
    return text;
  }).filter(Boolean).join("\n\n");
}

function dateParts(value) {
  const date = String(value || new Date().toISOString()).slice(0, 10);
  const [year, month, day] = date.split("-");
  return { date, displayDate: `${year} 年 ${Number(month)} 月 ${Number(day)} 日`, shortDate: `${month}.${day}`, day };
}

function normalizeRemotePost(row) {
  const parsed = row.content_markdown ? markdownToArticle(row.content_markdown) : { html: row.content_html || "", toc: row.toc || [] };
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    ...dateParts(row.published_at || row.updated_at),
    tag: row.category || "随笔",
    readTime: row.read_time || "1 分钟",
    excerpt: row.excerpt || "",
    toc: Array.isArray(row.toc) && row.toc.length ? row.toc : parsed.toc,
    content: row.content_html || parsed.html,
    contentMarkdown: row.content_markdown || htmlToMarkdown(row.content_html),
    status: row.status || "draft",
    source: "remote",
  };
}

function normalizeRemoteNote(row) {
  const parts = dateParts(row.published_at || row.updated_at);
  return {
    id: row.id,
    slug: row.slug,
    date: parts.date,
    displayDate: `${Number(parts.date.slice(5, 7))} 月 ${Number(parts.date.slice(8, 10))} 日`,
    tag: row.category || "近况",
    text: row.content,
    status: row.status || "draft",
    source: "remote",
  };
}

function localAdminPosts() {
  return LOCAL_POSTS.map((post) => ({ ...post, contentMarkdown: htmlToMarkdown(post.content), status: "published", source: "local" }));
}

function localAdminNotes() {
  return LOCAL_NOTES.map((note) => ({ ...note, slug: note.id, status: "published", source: "local" }));
}

function mergeBySlug(localRows, remoteRows) {
  const map = new Map(localRows.map((row) => [row.slug, row]));
  remoteRows.forEach((row) => map.set(row.slug, row));
  return [...map.values()].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

function adminSetupTemplate() {
  return `<section class="admin-shell admin-gate">
    <span class="admin-kicker">AUTHOR STUDIO / SETUP</span>
    <h1>先接上你的私人内容库</h1>
    <p>后台代码已经准备好。创建 Supabase 项目后，把项目地址和 anon key 填进 <code>config.js</code>，再运行 <code>supabase-schema.sql</code>。</p>
    <ol><li>在 Supabase 中创建一个项目。</li><li>运行数据库脚本。</li><li>关闭公开注册，只手动创建你的账号。</li><li>填写配置后重新打开此页面。</li></ol>
    <a class="admin-back" href="#/">返回博客</a>
  </section>`;
}

function adminLoginTemplate() {
  return `<section class="admin-shell admin-gate">
    <span class="admin-kicker">AUTHOR STUDIO / PRIVATE</span>
    <h1>泽. 的写作入口</h1>
    <p>这里只接受数据库中预先创建的作者账号。</p>
    <form class="admin-login" data-admin-login novalidate>
      <label><span>邮箱</span><input name="email" type="email" autocomplete="username" required></label>
      <label><span>密码</span><input name="password" type="password" autocomplete="current-password" required></label>
      <button type="submit">进入书房</button>
      <p class="admin-form-status" data-admin-status aria-live="polite"></p>
    </form>
    <a class="admin-back" href="#/">返回博客</a>
  </section>`;
}

function adminListTemplate(items, kind) {
  if (!items.length) return `<div class="admin-empty">还没有内容。先写下第一${kind === "posts" ? "篇文章" : "条短记"}。</div>`;
  return items.map((item) => `<button class="admin-entry${state.adminSelectedSlug === item.slug ? " active" : ""}" type="button" data-admin-select="${escapeHtml(item.slug)}">
    <span><b>${escapeHtml(kind === "posts" ? item.title : item.text.slice(0, 24))}</b><small>${escapeHtml(item.tag)} · ${item.source === "local" ? "本地待迁移" : item.status === "published" ? "已发布" : "草稿"}</small></span>
    <time>${escapeHtml(item.date)}</time>
  </button>`).join("");
}

function blankPost() {
  const today = new Date().toISOString().slice(0, 10);
  return { slug: `new-post-${today}`, title: "", excerpt: "", tag: "随笔", date: today, readTime: "", contentMarkdown: "", status: "draft", source: "new" };
}

function blankNote() {
  const today = new Date().toISOString().slice(0, 10);
  return { slug: `note-${today}`, text: "", tag: "近况", date: today, status: "draft", source: "new" };
}

function postEditorTemplate() {
  const selected = state.adminPosts.find((item) => item.slug === state.adminSelectedSlug) || blankPost();
  const preview = markdownToArticle(selected.contentMarkdown || "").html || `<p class="admin-preview-empty">正文预览会出现在这里。</p>`;
  return `<form class="admin-editor" data-admin-post-form data-record-id="${escapeHtml(selected.id || "")}">
    <div class="admin-editor-heading"><div><span>ARTICLE</span><h2>${selected.id || selected.source === "local" ? "编辑文章" : "新文章"}</h2></div><div class="admin-editor-actions"><button type="button" data-admin-new>新建</button>${selected.id ? `<button class="danger" type="button" data-admin-delete="posts">删除</button>` : ""}<button class="primary" type="submit">保存</button></div></div>
    <p class="admin-form-status" data-admin-status aria-live="polite"></p>
    <div class="admin-fields">
      <label class="wide"><span>标题</span><input name="title" value="${escapeHtml(selected.title)}" maxlength="120" required></label>
      <label><span>英文链接</span><input name="slug" value="${escapeHtml(selected.slug)}" pattern="[a-z0-9]+(?:-[a-z0-9]+)*" required></label>
      <label><span>分类</span><input name="category" value="${escapeHtml(selected.tag)}" maxlength="24" required></label>
      <label><span>日期</span><input name="date" type="date" value="${escapeHtml(selected.date)}" required></label>
      <label><span>阅读时间</span><input name="readTime" value="${escapeHtml(selected.readTime || "")}" placeholder="自动计算"></label>
      <label class="wide"><span>摘要</span><textarea name="excerpt" rows="3" maxlength="360" required>${escapeHtml(selected.excerpt)}</textarea></label>
      <label class="wide"><span>发布状态</span><select name="status"><option value="draft"${selected.status === "draft" ? " selected" : ""}>保存为草稿</option><option value="published"${selected.status === "published" ? " selected" : ""}>公开发布</option></select></label>
    </div>
    <div class="admin-compose">
      <label><span>正文 · Markdown</span><textarea name="content" data-admin-markdown spellcheck="true" required>${escapeHtml(selected.contentMarkdown || "")}</textarea></label>
      <section class="admin-preview"><span>实时预览</span><article class="article-content" data-admin-preview>${preview}</article></section>
    </div>
  </form>`;
}

function noteEditorTemplate() {
  const selected = state.adminNotes.find((item) => item.slug === state.adminSelectedSlug) || blankNote();
  return `<form class="admin-editor admin-note-editor" data-admin-note-form data-record-id="${escapeHtml(selected.id || "")}">
    <div class="admin-editor-heading"><div><span>NOTE</span><h2>${selected.id || selected.source === "local" ? "编辑短记" : "新短记"}</h2></div><div class="admin-editor-actions"><button type="button" data-admin-new>新建</button>${selected.id ? `<button class="danger" type="button" data-admin-delete="notes">删除</button>` : ""}<button class="primary" type="submit">保存</button></div></div>
    <p class="admin-form-status" data-admin-status aria-live="polite"></p>
    <div class="admin-fields">
      <label><span>英文链接</span><input name="slug" value="${escapeHtml(selected.slug)}" pattern="[a-z0-9]+(?:-[a-z0-9]+)*" required></label>
      <label><span>分类</span><input name="category" value="${escapeHtml(selected.tag)}" maxlength="24" required></label>
      <label><span>日期</span><input name="date" type="date" value="${escapeHtml(selected.date)}" required></label>
      <label><span>发布状态</span><select name="status"><option value="draft"${selected.status === "draft" ? " selected" : ""}>保存为草稿</option><option value="published"${selected.status === "published" ? " selected" : ""}>公开发布</option></select></label>
      <label class="wide"><span>短记内容</span><textarea name="content" rows="10" maxlength="1200" required>${escapeHtml(selected.text)}</textarea></label>
    </div>
  </form>`;
}

function adminWorkspaceTemplate() {
  const isPosts = state.adminSection === "posts";
  const items = isPosts ? state.adminPosts : state.adminNotes;
  return `<section class="admin-shell admin-workspace">
    <header class="admin-topbar"><div><span class="admin-kicker">RAINY. AUTHOR STUDIO</span><h1>写作后台</h1></div><div><a href="#/">查看博客</a><button type="button" data-admin-import>导入本地内容</button><button type="button" data-admin-logout>退出</button></div></header>
    <nav class="admin-tabs" aria-label="内容类型"><button class="${isPosts ? "active" : ""}" type="button" data-admin-section="posts">文章 <span>${state.adminPosts.length}</span></button><button class="${!isPosts ? "active" : ""}" type="button" data-admin-section="notes">短记 <span>${state.adminNotes.length}</span></button></nav>
    ${state.adminLoading ? `<div class="admin-loading">正在读取私人内容库……</div>` : `<div class="admin-layout"><aside class="admin-index"><div class="admin-index-head"><span>${isPosts ? "文章" : "短记"}列表</span><button type="button" data-admin-new>＋ 新建</button></div>${adminListTemplate(items, state.adminSection)}</aside>${isPosts ? postEditorTemplate() : noteEditorTemplate()}</div>`}
  </section>`;
}

function adminTemplate() {
  if (!window.RainyDB?.isConfigured()) return adminSetupTemplate();
  if (!window.RainyDB.getSession()) return adminLoginTemplate();
  return adminWorkspaceTemplate();
}

function adminStatus(message, isError = false) {
  const status = document.querySelector("[data-admin-status]");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("error", isError);
}

function estimateReadTime(markdown) {
  const count = String(markdown || "").replace(/\s/g, "").length;
  return `${Math.max(1, Math.ceil(count / 420))} 分钟`;
}

function publishedAt(date, status) {
  return status === "published" ? new Date(`${date}T00:00:00+08:00`).toISOString() : null;
}

function postPayload(post) {
  const parsed = markdownToArticle(post.contentMarkdown);
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content_markdown: post.contentMarkdown,
    content_html: parsed.html,
    category: post.tag,
    status: post.status,
    published_at: publishedAt(post.date, post.status),
    read_time: post.readTime || estimateReadTime(post.contentMarkdown),
    toc: parsed.toc,
  };
}

function notePayload(note) {
  return { slug: note.slug, content: note.text, category: note.tag, status: note.status, published_at: publishedAt(note.date, note.status) };
}

async function loadAdminData() {
  if (!window.RainyDB?.getSession() || state.adminLoading) return;
  state.adminLoading = true;
  if (getRoute() === "/admin") render();
  try {
    const [posts, notes] = await Promise.all([window.RainyDB.listOwn("posts"), window.RainyDB.listOwn("notes")]);
    state.adminPosts = mergeBySlug(localAdminPosts(), posts.map(normalizeRemotePost));
    state.adminNotes = mergeBySlug(localAdminNotes(), notes.map(normalizeRemoteNote));
    state.adminLoaded = true;
  } catch (error) {
    showToast(`后台读取失败：${error.message}`);
  } finally {
    state.adminLoading = false;
    if (getRoute() === "/admin") render();
  }
}

async function loadRemoteContent() {
  if (!window.RainyDB?.isConfigured() || !window.RainyDB.useRemoteContent) return;
  try {
    const [posts, notes] = await Promise.all([window.RainyDB.listPublished("posts"), window.RainyDB.listPublished("notes")]);
    POSTS = posts.map(normalizeRemotePost);
    NOTES = notes.map(normalizeRemoteNote);
  } catch (error) {
    console.warn("Rainy. 暂时无法读取远程内容，继续显示本地版本。", error);
  }
}

async function refreshAdminAndPublic() {
  state.adminLoaded = false;
  state.adminSelectedSlug = "";
  await loadRemoteContent();
  await loadAdminData();
}

async function submitAdminPost(form) {
  const data = new FormData(form);
  const post = {
    slug: String(data.get("slug") || "").trim(),
    title: String(data.get("title") || "").trim(),
    excerpt: String(data.get("excerpt") || "").trim(),
    contentMarkdown: String(data.get("content") || "").trim(),
    tag: String(data.get("category") || "").trim(),
    status: String(data.get("status") || "draft"),
    date: String(data.get("date") || ""),
    readTime: String(data.get("readTime") || "").trim(),
  };
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) throw new Error("英文链接只能使用小写字母、数字和短横线");
  if (!post.title || !post.contentMarkdown) throw new Error("标题和正文不能为空");
  const recordId = form.dataset.recordId;
  if (recordId) await window.RainyDB.update("posts", recordId, postPayload(post));
  else await window.RainyDB.upsert("posts", postPayload(post));
  showToast(post.status === "published" ? "文章已经发布" : "草稿已经保存");
  await refreshAdminAndPublic();
}

async function submitAdminNote(form) {
  const data = new FormData(form);
  const note = {
    slug: String(data.get("slug") || "").trim(),
    text: String(data.get("content") || "").trim(),
    tag: String(data.get("category") || "").trim(),
    status: String(data.get("status") || "draft"),
    date: String(data.get("date") || ""),
  };
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(note.slug)) throw new Error("英文链接只能使用小写字母、数字和短横线");
  if (!note.text) throw new Error("短记内容不能为空");
  const recordId = form.dataset.recordId;
  if (recordId) await window.RainyDB.update("notes", recordId, notePayload(note));
  else await window.RainyDB.upsert("notes", notePayload(note));
  showToast(note.status === "published" ? "短记已经发布" : "短记草稿已经保存");
  await refreshAdminAndPublic();
}

async function importLocalContent() {
  const approved = confirm("把当前本地文章和短记复制到私人数据库？同名内容会更新，其他内容不会删除。");
  if (!approved) return;
  showToast("正在迁移本地内容……");
  for (const post of localAdminPosts()) await window.RainyDB.upsert("posts", postPayload(post));
  for (const note of localAdminNotes()) await window.RainyDB.upsert("notes", notePayload(note));
  showToast("本地内容已经迁移到后台");
  await refreshAdminAndPublic();
}

function bindAdminEvents() {
  document.querySelector("[data-admin-login]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    adminStatus("正在验证身份……");
    try {
      await window.RainyDB.signIn(String(data.get("email") || "").trim(), String(data.get("password") || ""));
      state.adminLoaded = false;
      render();
      await loadAdminData();
    } catch (error) { adminStatus(`无法登录：${error.message}`, true); }
  });
  document.querySelector("[data-admin-logout]")?.addEventListener("click", async () => {
    await window.RainyDB.signOut();
    state.adminLoaded = false; state.adminPosts = []; state.adminNotes = []; state.adminSelectedSlug = "";
    render();
  });
  document.querySelectorAll("[data-admin-section]").forEach((button) => button.addEventListener("click", () => {
    state.adminSection = button.dataset.adminSection; state.adminSelectedSlug = ""; render();
  }));
  document.querySelectorAll("[data-admin-select]").forEach((button) => button.addEventListener("click", () => {
    state.adminSelectedSlug = button.dataset.adminSelect; render();
  }));
  document.querySelectorAll("[data-admin-new]").forEach((button) => button.addEventListener("click", () => {
    state.adminSelectedSlug = ""; render();
  }));
  document.querySelector("[data-admin-markdown]")?.addEventListener("input", (event) => {
    document.querySelector("[data-admin-preview]").innerHTML = markdownToArticle(event.target.value).html || `<p class="admin-preview-empty">正文预览会出现在这里。</p>`;
  });
  document.querySelector("[data-admin-post-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault(); adminStatus("正在保存……");
    try { await submitAdminPost(event.currentTarget); }
    catch (error) { adminStatus(`保存失败：${error.message}`, true); }
  });
  document.querySelector("[data-admin-note-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault(); adminStatus("正在保存……");
    try { await submitAdminNote(event.currentTarget); }
    catch (error) { adminStatus(`保存失败：${error.message}`, true); }
  });
  document.querySelector("[data-admin-delete]")?.addEventListener("click", async (event) => {
    const kind = event.currentTarget.dataset.adminDelete;
    const items = kind === "posts" ? state.adminPosts : state.adminNotes;
    const item = items.find((row) => row.slug === state.adminSelectedSlug);
    if (!item?.id || !confirm(`确定删除“${kind === "posts" ? item.title : item.text.slice(0, 18)}”吗？此操作无法撤销。`)) return;
    try { await window.RainyDB.remove(kind, item.id); showToast("内容已经删除"); await refreshAdminAndPublic(); }
    catch (error) { adminStatus(`删除失败：${error.message}`, true); }
  });
  document.querySelector("[data-admin-import]")?.addEventListener("click", async () => {
    try { await importLocalContent(); }
    catch (error) { showToast(`迁移失败：${error.message}`); }
  });
}

function notFoundTemplate() {
  return `<div class="not-found"><span>404 / LOST IN THE RAIN</span><h1>这页被雨冲走了</h1><p>链接可能已经改变，或者内容还没有发布。</p><a href="#/">返回首页</a></div>`;
}

function burstOvertureCopy(copy) {
  if (!copy || matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  const bounds = copy.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return () => {};

  const sample = document.createElement("canvas");
  sample.width = Math.ceil(bounds.width);
  sample.height = Math.ceil(bounds.height);
  const sampleContext = sample.getContext("2d", { willReadFrequently: true });
  if (!sampleContext) return () => {};

  sampleContext.textBaseline = "top";
  copy.querySelectorAll("span").forEach((line) => {
    const lineBounds = line.getBoundingClientRect();
    const style = getComputedStyle(line);
    sampleContext.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    sampleContext.letterSpacing = style.letterSpacing;
    sampleContext.fillStyle = style.color;
    sampleContext.fillText(line.textContent, lineBounds.left - bounds.left, lineBounds.top - bounds.top);
  });

  const pixels = sampleContext.getImageData(0, 0, sample.width, sample.height).data;
  const step = innerWidth < 700 ? 5 : 4;
  const points = [];
  for (let y = 0; y < sample.height; y += step) {
    for (let x = 0; x < sample.width; x += step) {
      const alpha = pixels[(y * sample.width + x) * 4 + 3];
      if (alpha > 72) points.push({ x, y, alpha: alpha / 255 });
    }
  }

  const keepEvery = Math.max(1, Math.ceil(points.length / 1500));
  const particles = points.filter((_, index) => index % keepEvery === 0).map((point) => {
    const dx = point.x - bounds.width * .5;
    const dy = point.y - bounds.height * .5;
    const distance = Math.hypot(dx, dy) || 1;
    const speed = 58 + Math.random() * 142;
    return {
      ...point,
      vx: dx / distance * speed + (Math.random() - .5) * 78,
      vy: dy / distance * speed + (Math.random() - .5) * 68 - 18,
      size: .7 + Math.random() * 1.35,
      delay: Math.random() * 90
    };
  });

  const canvas = document.createElement("canvas");
  const pixelRatio = Math.min(devicePixelRatio || 1, 2);
  const burstPadding = 180;
  const canvasWidth = bounds.width + burstPadding * 2;
  const canvasHeight = bounds.height + burstPadding * 2;
  canvas.className = "overture-particle-burst";
  canvas.width = Math.ceil(canvasWidth * pixelRatio);
  canvas.height = Math.ceil(canvasHeight * pixelRatio);
  canvas.style.left = `${bounds.left - burstPadding}px`;
  canvas.style.top = `${bounds.top - burstPadding}px`;
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;
  document.body.appendChild(canvas);
  copy.classList.add("is-particle-source");

  const context = canvas.getContext("2d");
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  const startedAt = performance.now();
  let animationFrame = 0;
  let removed = false;

  const remove = () => {
    if (removed) return;
    removed = true;
    cancelAnimationFrame(animationFrame);
    canvas.remove();
  };

  const draw = (now) => {
    const elapsed = now - startedAt;
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    particles.forEach((particle) => {
      const age = Math.max(0, elapsed - particle.delay);
      const progress = Math.min(1, age / 700);
      const travel = progress * (1.1 - .1 * progress);
      const x = burstPadding + particle.x + particle.vx * travel;
      const y = burstPadding + particle.y + particle.vy * travel + 56 * progress * progress;
      const opacity = particle.alpha * Math.pow(1 - progress, 1.45);
      if (opacity <= .01) return;
      context.beginPath();
      context.arc(x, y, particle.size * (1 - progress * .35), 0, Math.PI * 2);
      context.fillStyle = `rgba(224, 240, 246, ${opacity})`;
      context.fill();
    });
    if (elapsed < 820) animationFrame = requestAnimationFrame(draw);
    else remove();
  };

  animationFrame = requestAnimationFrame(draw);
  return remove;
}

function initHomeScrollStory() {
  if (homeScrollCleanup) homeScrollCleanup();
  homeScrollCleanup = null;

  const overture = document.querySelector("[data-home-overture]");
  const copy = document.querySelector("[data-overture-copy]");
  const journal = document.querySelector("[data-home-journal]");
  const scrollButton = document.querySelector("[data-home-scroll]");
  if (!overture || !copy || !journal || !scrollButton) {
    app.classList.remove("home-entered");
    return;
  }

  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealOverture = () => overture.classList.add("is-ready");
  const revealJournal = () => journal.classList.add("is-visible");
  let touchStartY = 0;
  let transitionTimer = 0;
  let entering = false;
  let particleCleanup = null;

  const removeEntryListeners = () => {
    removeEventListener("wheel", onWheel);
    removeEventListener("scroll", onScroll);
    removeEventListener("touchstart", onTouchStart);
    removeEventListener("touchmove", onTouchMove);
    removeEventListener("keydown", onKeyDown);
    scrollButton.removeEventListener("click", enterHome);
  };

  const finishEntry = () => {
    app.classList.add("home-entered");
    document.body.classList.remove("home-transitioning");
    scrollTo({ top: 0, behavior: "auto" });
  };

  function enterHome() {
    if (entering || !overture.classList.contains("is-ready")) return;
    entering = true;
    homeEntered = true;
    if (scrollY > 0) scrollTo({ top: 0, behavior: "auto" });
    removeEntryListeners();
    revealJournal();
    particleCleanup = burstOvertureCopy(copy);
    overture.classList.add("is-exiting");
    document.body.classList.add("home-transitioning");
    if (reducedMotion) finishEntry();
    else transitionTimer = setTimeout(finishEntry, 720);
  }

  function onWheel(event) { if (event.deltaY > 6) { event.preventDefault(); enterHome(); } }
  function onScroll() { if (scrollY > 4) enterHome(); }
  function onTouchStart(event) { touchStartY = event.touches[0]?.clientY || 0; }
  function onTouchMove(event) { if (touchStartY - (event.touches[0]?.clientY || touchStartY) > 10) { event.preventDefault(); enterHome(); } }
  function onKeyDown(event) { if (["ArrowDown", "PageDown", "End", " "].includes(event.key)) { event.preventDefault(); enterHome(); } }

  if (homeEntered) {
    revealOverture();
    revealJournal();
    overture.classList.add("is-exiting");
    app.classList.add("home-entered");
  } else {
    app.classList.remove("home-entered");
    const intro = document.querySelector("[data-rainy-intro]");
    if (intro && !intro.classList.contains("is-leaving")) addEventListener("rainy:intro-complete", revealOverture, { once: true });
    else requestAnimationFrame(revealOverture);
    addEventListener("wheel", onWheel, { passive: false });
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("touchstart", onTouchStart, { passive: true });
    addEventListener("touchmove", onTouchMove, { passive: false });
    addEventListener("keydown", onKeyDown);
    scrollButton.addEventListener("click", enterHome);
  }

  homeScrollCleanup = () => {
    clearTimeout(transitionTimer);
    particleCleanup?.();
    removeEventListener("rainy:intro-complete", revealOverture);
    removeEntryListeners();
    document.body.classList.remove("home-transitioning");
  };
}

function getRoute() {
  const raw = location.hash;
  return raw && raw.startsWith("#/") ? raw.slice(1).split("?")[0] : "/";
}

function render() {
  const route = getRoute();
  const previousRoute = animatedRoute;
  let markup;
  let page = "home";
  let title = `${SITE.name} — ${SITE.author}的个人博客`;
  let selectedNote = "";
  state.currentPost = null;

  if (route === "/") markup = homeTemplate();
  else if (route === "/writing") { markup = writingTemplate(); page = "writing"; title = `文章 — ${SITE.name}`; }
  else if (route === "/notes" || route.startsWith("/notes/")) { selectedNote = route.startsWith("/notes/") ? route.replace("/notes/", "") : ""; markup = notesTemplate(selectedNote); page = "notes"; title = `短记 — ${SITE.name}`; }
  else if (route === "/guestbook") { markup = guestbookTemplate(); page = "guestbook"; title = `留言 — ${SITE.name}`; }
  else if (route === "/about") { markup = aboutTemplate(); page = "about"; title = `关于 — ${SITE.name}`; }
  else if (route === "/admin") { markup = adminTemplate(); page = "admin"; title = `写作后台 — ${SITE.name}`; }
  else if (route.startsWith("/post/")) {
    const post = POSTS.find((item) => item.slug === route.replace("/post/", ""));
    if (post) { markup = articleTemplate(post); page = "writing"; title = `${post.title} — ${SITE.name}`; state.currentPost = post; }
    else markup = notFoundTemplate();
  } else markup = notFoundTemplate();

  cleanupPageEffects();
  app.innerHTML = markup;
  document.title = title;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const active = link.dataset.nav === page;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
  });
  closeMenu();
  bindPageEvents();
  updateClock();
  updatePlayerUi();
  window.scrollTo({ top: 0, behavior: "auto" });
  document.querySelector("[data-reading-progress]").classList.toggle("active", Boolean(state.currentPost));
  updateReadingProgress();
  if (route !== animatedRoute) {
    animatedRoute = route;
    animateIn({ homeReturn: route === "/" && Boolean(previousRoute) });
  }
  if (selectedNote) requestAnimationFrame(() => document.querySelector(`#note-${CSS.escape(selectedNote)}`)?.scrollIntoView({ block: "center" }));
  if (route === "/admin" && window.RainyDB?.getSession() && !state.adminLoaded && !state.adminLoading) void loadAdminData();
}

function cleanupPageEffects() {
  if (entranceAnimation) {
    entranceAnimation.kill();
    entranceAnimation = null;
  }
  homeScrollCleanup?.();
  homeScrollCleanup = null;
  signalSurfacesCleanup?.();
  signalSurfacesCleanup = null;
}

function bindPageEvents() {
  initHomeScrollStory();
  initSignalSurfaces();
  bindAdminEvents();
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
    state.tag = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelector("[data-archive-results]").innerHTML = archiveResults();
  }));

  document.querySelector("[data-writing-search]")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    document.querySelector("[data-archive-results]").innerHTML = archiveResults();
  });

  document.querySelectorAll("[data-quick-tag]").forEach((button) => button.addEventListener("click", () => {
    state.tag = button.dataset.quickTag;
    if (getRoute() === "/writing") render(); else location.hash = "#/writing";
  }));

  document.querySelectorAll("[data-toc-target]").forEach((button) => button.addEventListener("click", () => document.getElementById(button.dataset.tocTarget)?.scrollIntoView({ behavior: "smooth", block: "start" })));
  document.querySelector("[data-copy-link]")?.addEventListener("click", copyCurrentLink);
  document.querySelector("[data-native-share]")?.addEventListener("click", shareCurrentPost);
  document.querySelector("[data-guest-form]")?.addEventListener("submit", submitGuestMessage);
  if (getRoute() === "/guestbook") void loadGuestMessages();
  if (getRoute() === "/") void loadTechNews();

  document.querySelectorAll("[data-player-main]").forEach((button) => button.addEventListener("click", togglePlayback));
  document.querySelectorAll("[data-player-prev]").forEach((button) => button.addEventListener("click", () => changeTrack(-1)));
  document.querySelectorAll("[data-player-next]").forEach((button) => button.addEventListener("click", () => changeTrack(1)));
  document.querySelectorAll("[data-player-seek]").forEach((bar) => {
    bar.addEventListener("click", seekTrack);
    bar.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      seekBy(event.key === "ArrowRight" ? 5 : -5);
    });
  });
}

function initSignalSurfaces() {
  signalSurfacesCleanup?.();
  signalSurfacesCleanup = null;

  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canTrackPointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const surfaces = [...document.querySelectorAll(".panel, .main-panel, .article-paper")];
  const listenerCleanups = [];

  surfaces.forEach((surface) => {
    surface.classList.add("is-signal-surface");
    surface.style.setProperty("--signal-x", "50%");
    surface.style.setProperty("--signal-y", "50%");
    let animationFrame = 0;
    let bounds = null;

    const cacheBounds = () => { bounds = surface.getBoundingClientRect(); };

    const moveSpotlight = (event) => {
      if (!canTrackPointer) return;
      if (animationFrame) return;
      animationFrame = requestAnimationFrame(() => {
        if (!bounds) cacheBounds();
        surface.style.setProperty("--signal-x", `${event.clientX - bounds.left}px`);
        surface.style.setProperty("--signal-y", `${event.clientY - bounds.top}px`);
        surface.style.setProperty("--signal-strength", "1");
        animationFrame = 0;
      });
    };
    const dimSpotlight = () => { bounds = null; surface.style.setProperty("--signal-strength", "0"); };

    if (canTrackPointer) {
      surface.addEventListener("pointerenter", cacheBounds, { passive: true });
      surface.addEventListener("pointermove", moveSpotlight, { passive: true });
      surface.addEventListener("pointerleave", dimSpotlight, { passive: true });
    }
    listenerCleanups.push(() => {
      cancelAnimationFrame(animationFrame);
      surface.removeEventListener("pointerenter", cacheBounds);
      surface.removeEventListener("pointermove", moveSpotlight);
      surface.removeEventListener("pointerleave", dimSpotlight);
    });
  });

  const revealItems = [...document.querySelectorAll(".page-title > *, .section-head, .lead-story, .story-row, .note-card, .note-item, .archive-post, .about-copy section, .tech-news-item")];
  revealItems.forEach((item, index) => {
    item.classList.add("signal-reveal");
    item.style.setProperty("--signal-delay", `${Math.min(index % 4, 3) * 55}ms`);
  });

  let observer = null;
  if (!reducedMotion && "IntersectionObserver" in window) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-signal-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -5%" });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-signal-visible"));
  }

  signalSurfacesCleanup = () => {
    listenerCleanups.forEach((cleanup) => cleanup());
    observer?.disconnect();
  };
}

async function submitGuestMessage(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const text = String(data.get("message") || "").trim();
  const website = String(data.get("website") || "").trim();
  if (!name || !text) { showToast("请填写称呼和留言内容"); return; }
  if (email && !/^\S+@\S+\.\S+$/.test(email)) { showToast("邮箱格式不正确"); return; }
  if (website) { form.reset(); showToast("留言已经送到窗边"); return; }

  const button = form.querySelector("button[type='submit']");
  const originalLabel = button?.textContent || "留下这句话";
  if (button) { button.disabled = true; button.textContent = "正在发布…"; }

  if (window.RainyDB?.isConfigured() && window.RainyDB.createGuestMessage) {
    try {
      const created = await window.RainyDB.createGuestMessage({
        name: name.slice(0, 16),
        email: email.slice(0, 254),
        message: text.slice(0, 240),
      });
      state.guestMessagesRemote = true;
      state.guestMessagesLoaded = true;
      if (created) state.guestMessages.unshift(normalizeGuestMessage(created));
      else await loadGuestMessages();
      updateGuestMessageView();
      form.reset();
      showToast("留言已发布，所有来访者都能看见");
    } catch (error) {
      console.warn("Rainy. 留言发布失败。", error);
      showToast("留言暂时没有发布成功，请稍后再试");
    } finally {
      if (button) { button.disabled = false; button.textContent = originalLabel; }
    }
    return;
  }

  const saved = getSavedMessages();
  saved.unshift({ name: name.slice(0, 16), text: text.slice(0, 240), date: new Date().toLocaleDateString("zh-CN") });
  localStorage.setItem("quiet-window-messages", JSON.stringify(saved));
  updateGuestMessageView();
  form.reset();
  showToast("留言已保存在这台设备上");
  if (button) { button.disabled = false; button.textContent = originalLabel; }
}

function getSavedMessages() {
  try { const value = JSON.parse(localStorage.getItem("quiet-window-messages") || "[]"); return Array.isArray(value) ? value : []; }
  catch { return []; }
}

async function copyCurrentLink() {
  try { await navigator.clipboard.writeText(location.href); showToast("链接已复制"); }
  catch { showToast("浏览器未允许复制，请从地址栏复制"); }
}

async function shareCurrentPost() {
  if (navigator.share && state.currentPost) {
    try { await navigator.share({ title: state.currentPost.title, text: state.currentPost.excerpt, url: location.href }); }
    catch { /* The share sheet was dismissed. */ }
  } else copyCurrentLink();
}

function ensureAudio() {
  if (state.audio) return state.audio;
  const audio = new Audio();
  audio.preload = "auto";
  audio.volume = 0.72;
  audio.addEventListener("loadedmetadata", () => {
    if (Number.isFinite(audio.duration)) TRACKS[state.trackIndex].duration = audio.duration;
    updatePlayerUi();
  });
  audio.addEventListener("timeupdate", updatePlayerUi);
  audio.addEventListener("play", () => { state.playing = true; updatePlayerUi(); });
  audio.addEventListener("pause", () => { state.playing = false; updatePlayerUi(); });
  audio.addEventListener("ended", () => changeTrack(1, true));
  audio.addEventListener("error", () => {
    state.playing = false;
    updatePlayerUi();
    showToast("音频加载失败，请刷新后重试");
  });
  state.audio = audio;
  loadCurrentTrack();
  return audio;
}

async function togglePlayback() {
  const audio = ensureAudio();
  if (!audio) return;
  if (!audio.paused) {
    audio.pause();
    return;
  }
  try { await audio.play(); }
  catch { showToast("浏览器阻止了播放，请再次点击播放按钮"); }
}

function loadCurrentTrack() {
  if (!state.audio) return;
  const track = TRACKS[state.trackIndex];
  state.elapsed = 0;
  state.audio.src = track.cachedSrc || track.src;
  state.audio.load();
  updatePlayerUi();
}

let audioPreloadPromise = null;

function preloadStatusLabel() {
  if (state.preloadStatus === "ready") return `READY ${TRACKS.length}/${TRACKS.length}`;
  if (state.preloadStatus === "partial") return `READY ${state.preloadedTracks}/${TRACKS.length}`;
  if (state.preloadStatus === "on-demand") return "ON DEMAND";
  if (state.preloadStatus === "loading") return `LOADING ${state.preloadedTracks}/${TRACKS.length}`;
  return "HI-FI";
}

function preloadAllTracks() {
  if (audioPreloadPromise) return audioPreloadPromise;

  if (location.protocol === "file:" || navigator.connection?.saveData) {
    state.preloadStatus = "on-demand";
    updatePlayerUi();
    return Promise.resolve();
  }

  state.preloadStatus = "loading";
  updatePlayerUi();
  let cursor = 0;
  let failures = 0;

  const worker = async () => {
    while (cursor < TRACKS.length) {
      const index = cursor++;
      const track = TRACKS[index];
      try {
        const response = await fetch(track.src, { cache: "force-cache" });
        if (!response.ok) throw new Error(`Audio request failed: ${response.status}`);
        await response.arrayBuffer();
        state.preloadedTracks += 1;
      } catch {
        failures += 1;
      }
      updatePlayerUi();
    }
  };

  const concurrency = navigator.connection?.effectiveType === "4g" ? 2 : 1;
  audioPreloadPromise = Promise.all(Array.from({ length: concurrency }, worker)).then(() => {
    state.preloadStatus = failures ? "partial" : "ready";
    updatePlayerUi();
  });
  return audioPreloadPromise;
}

async function changeTrack(direction, autoplay = false) {
  const wasPlaying = autoplay || Boolean(state.audio && !state.audio.paused);
  state.trackIndex = (state.trackIndex + direction + TRACKS.length) % TRACKS.length;
  ensureAudio();
  loadCurrentTrack();
  if (wasPlaying) {
    try { await state.audio.play(); }
    catch { showToast("下一首歌曲需要再次点击播放"); }
  }
}

function seekTrack(event) {
  const audio = ensureAudio();
  if (!audio || !Number.isFinite(audio.duration) || !audio.duration) return;
  const rect = event.currentTarget.getBoundingClientRect();
  audio.currentTime = Math.max(0, Math.min(audio.duration, ((event.clientX - rect.left) / rect.width) * audio.duration));
  updatePlayerUi();
}

function seekBy(seconds) {
  const audio = ensureAudio();
  if (!audio || !Number.isFinite(audio.duration) || !audio.duration) return;
  audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
  updatePlayerUi();
}

function updatePlayerUi() {
  const track = TRACKS[state.trackIndex];
  const audio = state.audio;
  const duration = audio && Number.isFinite(audio.duration) ? audio.duration : track.duration;
  const elapsed = audio && Number.isFinite(audio.currentTime) ? audio.currentTime : state.elapsed;
  state.elapsed = elapsed;
  document.querySelectorAll("[data-player-panel]").forEach((panel) => panel.classList.toggle("is-playing", state.playing));
  document.querySelectorAll("[data-player-toggle]").forEach((button) => {
    button.classList.toggle("is-playing", state.playing);
    button.setAttribute("aria-label", state.playing ? "暂停音乐" : "播放音乐");
  });
  document.querySelectorAll("[data-player-main]").forEach((button) => {
    button.classList.toggle("is-playing", state.playing);
    button.setAttribute("aria-label", state.playing ? "暂停" : "播放");
  });
  document.querySelectorAll("[data-track-title]").forEach((node) => { node.textContent = track.title; });
  document.querySelectorAll("[data-track-subtitle]").forEach((node) => { node.textContent = track.subtitle; });
  document.querySelectorAll("[data-track-position]").forEach((node) => { node.textContent = `${String(state.trackIndex + 1).padStart(2, "0")} / ${String(TRACKS.length).padStart(2, "0")}`; });
  document.querySelectorAll("[data-preload-status]").forEach((node) => { node.textContent = preloadStatusLabel(); });
  document.querySelectorAll("[data-player-current]").forEach((node) => { node.textContent = formatTime(elapsed); });
  document.querySelectorAll("[data-player-duration]").forEach((node) => { node.textContent = formatTime(duration); });
  const progress = duration ? Math.min(100, (elapsed / duration) * 100) : 0;
  document.querySelectorAll("[data-player-progress]").forEach((node) => { node.style.width = `${progress}%`; });
  document.querySelectorAll("[data-player-seek]").forEach((node) => node.setAttribute("aria-valuenow", String(Math.round(progress))));
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "--:--";
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("quiet-window-theme", theme);
  const dark = theme === "dark";
  document.querySelector("[data-theme-toggle]").setAttribute("aria-label", dark ? "切换为浅色主题" : "切换为深色主题");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", dark ? "#142330" : "#dce6e9");
}

function initTheme() {
  setTheme(localStorage.getItem("quiet-window-theme") || "dark");
  document.querySelector("[data-theme-toggle]").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
}

function initHeaderScroll() {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  const setScrolled = (scrolled) => header.classList.toggle("is-scrolled", scrolled);
  setScrolled(scrollY > 24);

  let scheduled = false;
  addEventListener("scroll", () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      setScrolled(scrollY > 24);
      scheduled = false;
    });
  }, { passive: true });
}

function openMenu() {
  const menu = document.querySelector("[data-mobile-menu]");
  const button = document.querySelector("[data-menu-toggle]");
  menu.hidden = false;
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-label", "关闭导航");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  const menu = document.querySelector("[data-mobile-menu]");
  const button = document.querySelector("[data-menu-toggle]");
  if (!menu || !button) return;
  menu.hidden = true;
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", "打开导航");
  document.body.classList.remove("menu-open");
}

function initMenu() {
  document.querySelector("[data-menu-toggle]").addEventListener("click", () => document.querySelector("[data-mobile-menu]").hidden ? openMenu() : closeMenu());
  document.querySelectorAll("[data-mobile-menu] a").forEach((link) => link.addEventListener("click", closeMenu));
}

function searchContent(query) {
  const q = query.trim().toLocaleLowerCase("zh-CN");
  const posts = POSTS.filter((post) => !q || `${post.title} ${post.excerpt} ${post.tag}`.toLocaleLowerCase("zh-CN").includes(q)).map((post) => ({ type: "文章", title: post.title, meta: `${post.tag} · ${post.readTime}`, url: `#/post/${post.slug}` }));
  const notes = NOTES.filter((note) => !q || `${note.text} ${note.tag}`.toLocaleLowerCase("zh-CN").includes(q)).map((note) => ({ type: "短记", title: note.text, meta: `${note.tag} · ${note.displayDate}`, url: `#/notes/${note.id}` }));
  return [...posts, ...notes].slice(0, 9);
}

function updateSearchResults(query = "") {
  const results = searchContent(query);
  globalResults.innerHTML = results.length ? results.map((item) => `<a class="search-result" href="${item.url}" data-search-result><span>${item.type}</span><div><strong>${item.title}</strong><small>${item.meta}</small></div><b>查看</b></a>`).join("") : `<div class="search-empty">没有找到相关内容</div>`;
  document.querySelectorAll("[data-search-result]").forEach((link) => link.addEventListener("click", () => searchDialog.close()));
}

function initSearch() {
  document.querySelector("[data-search-open]").addEventListener("click", () => { updateSearchResults(); searchDialog.showModal(); requestAnimationFrame(() => globalSearch.focus()); });
  document.querySelector("[data-search-close]").addEventListener("click", () => searchDialog.close());
  globalSearch.addEventListener("input", (event) => updateSearchResults(event.target.value));
  searchDialog.addEventListener("click", (event) => { const box = searchDialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) searchDialog.close(); });
  document.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); if (!searchDialog.open) { updateSearchResults(); searchDialog.showModal(); requestAnimationFrame(() => globalSearch.focus()); } } });
}

function updateClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false }).format(now);
  const date = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "short" }).format(now);
  document.querySelectorAll("[data-clock]").forEach((node) => { node.textContent = time; });
  document.querySelectorAll("[data-date]").forEach((node) => { node.innerHTML = `${date}<br>雾蓝雨天`; });
  document.querySelectorAll("[data-hero-clock]").forEach((node) => { node.textContent = `${time} · 雨 · 雾蓝清晨 · 中国 UTC+8`; });
}

function updateReadingProgress() {
  const bar = document.querySelector("[data-reading-progress]");
  if (!state.currentPost) { bar.style.transform = "scaleX(0)"; return; }
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
}

function scheduleReadingProgress() {
  if (readingProgressFrame) return;
  readingProgressFrame = requestAnimationFrame(() => {
    readingProgressFrame = 0;
    updateReadingProgress();
  });
}

function initRainAnimation() {
  const canvas = document.querySelector("[data-rain-canvas]");
  if (!canvas) return;
  const context = canvas.getContext("2d", { alpha: true });
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let drops = [];
  let glassTrails = [];
  let frame = 0;
  let previousTime = 0;
  let resizeFrame = 0;
  const lowPowerDevice = innerWidth < 760 || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  const frameInterval = 1000 / (lowPowerDevice ? 24 : 32);

  const makeDrop = (initial = false) => {
    const depth = Math.random();
    const length = 11 + depth * 31 + Math.random() * 19;
    return {
      x: Math.random() * width,
      y: initial ? Math.random() * height : -length - Math.random() * height * .28,
      length,
      speed: 3.1 + depth * 6.8 + Math.random() * 2.4,
      width: .42 + depth * .82,
      alpha: .1 + depth * .31,
      drift: -.11 - depth * .16,
    };
  };

  const makeGlassTrail = (initial = false) => ({
    x: width * (.08 + Math.random() * .84),
    y: initial ? Math.random() * height : -80 - Math.random() * 180,
    length: 58 + Math.random() * 118,
    speed: .28 + Math.random() * .44,
    wobble: 1.5 + Math.random() * 3.5,
    phase: Math.random() * Math.PI * 2,
    alpha: .07 + Math.random() * .08,
    delay: initial ? Math.random() * 120 : 80 + Math.random() * 260,
  });

  const rebuildRain = () => {
    const dropCount = Math.min(lowPowerDevice ? 44 : 68, Math.max(28, Math.round((width * height) / 34000)));
    const trailCount = Math.min(5, Math.max(3, Math.round(width / 360)));
    drops = Array.from({ length: dropCount }, () => makeDrop(true));
    glassTrails = Array.from({ length: trailCount }, () => makeGlassTrail(true));
  };

  const resize = () => {
    width = Math.max(1, innerWidth);
    height = Math.max(1, innerHeight);
    pixelRatio = Math.min(devicePixelRatio || 1, lowPowerDevice ? 1 : 1.1);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    rebuildRain();
  };

  const draw = (time) => {
    if (reducedMotion.matches || document.hidden) { frame = 0; return; }
    if (previousTime && time - previousTime < frameInterval) {
      frame = requestAnimationFrame(draw);
      return;
    }
    const delta = previousTime ? Math.min(2, (time - previousTime) / 16.67) : 1;
    previousTime = time;
    context.clearRect(0, 0, width, height);
    const dark = document.documentElement.dataset.theme !== "light";
    const rainColor = dark ? "220,239,247" : "39,73,89";

    context.lineCap = "round";
    for (const drop of drops) {
      const rainForce = Math.max(.72, Math.min(1.42, weatherDynamics.intensity));
      drop.x += (drop.drift + weatherDynamics.wind * (.72 + drop.width * .32)) * delta;
      drop.y += drop.speed * rainForce * delta;
      if (drop.y - drop.length > height || drop.x < -20) Object.assign(drop, makeDrop(false), { x: Math.random() * (width + 80) });
      context.strokeStyle = `rgba(${rainColor},${Math.min(.72, drop.alpha * .78 * rainForce)})`;
      context.lineWidth = drop.width;
      context.beginPath();
      context.moveTo(drop.x, drop.y - drop.length);
      context.lineTo(drop.x + drop.drift * 4.5, drop.y);
      context.stroke();
    }

    for (const trail of glassTrails) {
      if (trail.delay > 0) { trail.delay -= delta; continue; }
      trail.y += trail.speed * delta;
      if (trail.y - trail.length > height) Object.assign(trail, makeGlassTrail(false));
      const top = trail.y - trail.length;
      const bend = Math.sin(trail.phase + trail.y * .012) * trail.wobble;
      context.strokeStyle = `rgba(${rainColor},${trail.alpha * 1.3})`;
      context.lineWidth = 1.05;
      context.beginPath();
      context.moveTo(trail.x, top);
      context.bezierCurveTo(trail.x + bend, top + trail.length * .34, trail.x - bend * .5, top + trail.length * .72, trail.x + bend, trail.y);
      context.stroke();
      context.fillStyle = `rgba(${rainColor},${trail.alpha * 1.8})`;
      context.beginPath();
      context.ellipse(trail.x + bend, trail.y + 2, 1.25, 3.4, 0, 0, Math.PI * 2);
      context.fill();
    }

    frame = requestAnimationFrame(draw);
  };

  const start = () => {
    if (frame || reducedMotion.matches || document.hidden || document.body.classList.contains("intro-active")) return;
    previousTime = 0;
    frame = requestAnimationFrame(draw);
  };

  const stop = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    context.clearRect(0, 0, width, height);
  };

  addEventListener("resize", () => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      resize();
    });
  }, { passive: true });
  const handleVisibility = () => document.hidden ? stop() : start();
  document.addEventListener("visibilitychange", handleVisibility);
  addEventListener("rainy:intro-complete", start, { once: true });
  reducedMotion.addEventListener("change", () => reducedMotion.matches ? stop() : start());
  resize();
  start();
}

function initAmbientAnimation() {
  if (!window.gsap) return;
  const root = document.documentElement;
  const media = gsap.matchMedia();

  media.add("(prefers-reduced-motion: no-preference)", () => {
    root.classList.add("gsap-ready");
    gsap.set(".weather-glow", { willChange: "transform,opacity" });

    const lightBreath = gsap.timeline({ repeat: -1, yoyo: true })
      .to(".weather-glow", { xPercent: -7, yPercent: 4, scale: 1.16, opacity: .92, duration: 9, ease: "sine.inOut" });

    const gustCycle = gsap.timeline({ repeat: -1, repeatDelay: 6 })
      .to(weatherDynamics, { wind: -.34, intensity: 1.28, duration: 3.2, ease: "sine.inOut" })
      .to(weatherDynamics, { wind: -.08, intensity: 1.08, duration: 4.8, ease: "power2.out" })
      .to(weatherDynamics, { wind: 0, intensity: .92, duration: 5.5, ease: "sine.inOut" })
      .to(weatherDynamics, { intensity: 1, duration: 2.5, ease: "sine.out" });

    const ambientAnimations = [lightBreath, gustCycle];
    const handleVisibility = () => ambientAnimations.forEach((animation) => animation.paused(document.hidden));
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      ambientAnimations.forEach((animation) => animation.kill());
      gsap.set(".weather-glow", { clearProps: "willChange,transform,opacity" });
      Object.assign(weatherDynamics, { wind: 0, intensity: 1 });
      root.classList.remove("gsap-ready");
    };
  });
}

function animateIn({ homeReturn = false } = {}) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (document.querySelector("[data-home-overture]") && !homeReturn) return;
  if (window.gsap) {
    if (entranceAnimation) entranceAnimation.kill();
    const homeIdentity = homeReturn ? document.querySelector(".home-identity") : null;
    const homePanels = homeReturn ? document.querySelectorAll(".home-journal .home-portal > *") : [];
    const heroTopline = document.querySelector(".hero-topline");
    const heroTitle = document.querySelector(".hero h1");
    const heroDetails = document.querySelectorAll(".hero-summary, .hero-weather");
    const panels = homeReturn ? [] : document.querySelectorAll(".main-panel, .left-stack > *, .right-stack > *, .article-paper");
    entranceAnimation = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => { entranceAnimation = null; },
    });
    const entrance = entranceAnimation;
    entrance.addLabel("hero");
    if (homeIdentity) entrance.fromTo(homeIdentity, { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, duration: .72, clearProps: "transform,opacity,visibility" }, "hero");
    if (homePanels.length) entrance.fromTo(homePanels, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: .68, stagger: .07, clearProps: "transform,opacity,visibility" }, "hero+=.18");
    if (heroTopline) entrance.fromTo(heroTopline, { autoAlpha: 0, x: -18 }, { autoAlpha: 1, x: 0, duration: .7 }, "hero");
    if (heroTitle) entrance.fromTo(heroTitle, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: .9 }, "hero+=.28");
    if (heroDetails.length) entrance.fromTo(heroDetails, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: .65, stagger: .08 }, "hero+=.62");
    if (panels.length) entrance.fromTo(panels, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: .62, stagger: { each: .055, from: "start" }, clearProps: "transform,opacity,visibility" }, "hero+=.8");
    if (homeIdentity || homePanels.length || heroTopline || heroTitle || heroDetails.length || panels.length) return;
  }
  document.querySelectorAll(".main-panel, .left-stack > *, .right-stack > *, .article-paper").forEach((node, index) => {
    node.animate([{ opacity: 0, transform: "translateY(14px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 520, delay: Math.min(index * 45, 240), easing: "cubic-bezier(.22,1,.36,1)", fill: "both" });
  });
}

function initParticleIntro() {
  const intro = document.querySelector("[data-rainy-intro]");
  const canvas = document.querySelector("[data-rainy-intro-canvas]");
  const enter = document.querySelector("[data-rainy-intro-enter]");
  if (!intro || !canvas || !enter) return;

  document.body.classList.add("intro-active");
  const context = canvas.getContext("2d", { alpha: true });
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: -1000, y: -1000, active: false };
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let particles = [];
  let animationFrame = 0;
  let formed = false;
  let leaving = false;
  let leaveStarted = 0;
  let started = performance.now();
  let previousDrawTime = 0;
  const introFrameInterval = 1000 / (innerWidth < 760 ? 24 : 32);

  const easeOutQuart = (value) => 1 - ((1 - value) ** 4);
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const createParticles = () => {
    const mask = document.createElement("canvas");
    mask.width = Math.max(1, Math.round(width));
    mask.height = Math.max(1, Math.round(height));
    const maskContext = mask.getContext("2d", { willReadFrequently: true });
    const fontSize = Math.min(width < 640 ? width * .245 : width * .17, 180);
    const font = `800 ${Math.max(64, fontSize)}px Georgia, "Times New Roman", serif`;
    maskContext.font = font;
    maskContext.textAlign = "center";
    maskContext.textBaseline = "middle";
    maskContext.fillStyle = "#fff";
    maskContext.fillText("Rainy.", width / 2, height * .46);

    const pixels = maskContext.getImageData(0, 0, mask.width, mask.height).data;
    const sample = width < 640 ? 6 : 5;
    const scatter = Math.min(190, width * .38);
    const nextParticles = [];

    for (let y = 0; y < height; y += sample) {
      for (let x = 0; x < width; x += sample) {
        if (pixels[((Math.floor(y) * mask.width) + Math.floor(x)) * 4 + 3] < 150) continue;
        const angle = Math.random() * Math.PI * 2;
        const distance = scatter * (.35 + Math.random() * .9);
        const blue = Math.random() < .085;
        nextParticles.push({
          x: x + Math.cos(angle) * distance,
          y: y + Math.sin(angle) * distance + (Math.random() - .5) * 80,
          tx: x,
          ty: y,
          delay: ((x / Math.max(1, width)) * 420) + Math.random() * 180,
          phase: Math.random() * Math.PI * 2,
          size: blue ? 2.55 : 2.05 + Math.random() * .35,
          color: blue ? "87, 139, 210" : "238, 246, 249",
        });
      }
    }
    particles = nextParticles;
  };

  const resize = () => {
    width = Math.max(320, innerWidth);
    height = Math.max(480, innerHeight);
    pixelRatio = Math.min(devicePixelRatio || 1, 1.25);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    createParticles();
    if (!leaving) started = performance.now() - (formed ? 2600 : 0);
  };

  const draw = (time) => {
    if (!leaving && previousDrawTime && time - previousDrawTime < introFrameInterval) {
      animationFrame = requestAnimationFrame(draw);
      return;
    }
    previousDrawTime = time;
    const elapsed = time - started;
    const fall = leaving ? clamp((time - leaveStarted) / 850, 0, 1) : 0;
    context.clearRect(0, 0, width, height);
    context.shadowColor = "rgba(150, 203, 226, .34)";
    context.shadowBlur = 4;

    for (const particle of particles) {
      const progress = reducedMotion ? 1 : easeOutQuart(clamp((elapsed - 180 - particle.delay) / 1600, 0, 1));
      const drift = Math.sin(time * .0008 + particle.phase) * .8 * progress;
      let x = particle.x + (particle.tx - particle.x) * progress + drift;
      let y = particle.y + (particle.ty - particle.y) * progress + Math.cos(time * .00065 + particle.phase) * .55 * progress;

      if (pointer.active && !leaving) {
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 120 && distance > .1) {
          const force = ((120 - distance) / 120) ** 2 * 42;
          x += (dx / distance) * force;
          y += (dy / distance) * force;
        }
      }

      if (leaving) {
        y += (fall ** 2) * (height * .72 + (particle.ty % 90));
        x += Math.sin(particle.phase) * fall * 18;
      }

      const alpha = (leaving ? 1 - fall : clamp(progress * 1.2, 0, 1)) * (particle.color.startsWith("87") ? .92 : .78);
      if (alpha <= .01) continue;
      context.fillStyle = `rgba(${particle.color}, ${alpha})`;
      context.beginPath();
      context.arc(x, y, particle.size, 0, Math.PI * 2);
      context.fill();
    }

    if (!formed && elapsed > (reducedMotion ? 0 : 2350)) {
      formed = true;
      intro.classList.add("is-formed");
    }
    if (!leaving || fall < 1) animationFrame = requestAnimationFrame(draw);
  };

  const onPointerMove = (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  };
  const onPointerLeave = () => { pointer.active = false; };

  const leave = () => {
    if (leaving) return;
    leaving = true;
    leaveStarted = performance.now();
    intro.classList.add("is-leaving");
    document.body.classList.remove("intro-active");
    removeEventListener("pointermove", onPointerMove);
    removeEventListener("pointerleave", onPointerLeave);
    removeEventListener("resize", resize);
    removeEventListener("keydown", onKeyDown);
    setTimeout(() => {
      cancelAnimationFrame(animationFrame);
      intro.remove();
      dispatchEvent(new CustomEvent("rainy:intro-complete"));
    }, 900);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") leave();
  };

  addEventListener("pointermove", onPointerMove, { passive: true });
  addEventListener("pointerleave", onPointerLeave, { passive: true });
  addEventListener("resize", resize, { passive: true });
  addEventListener("keydown", onKeyDown);
  enter.addEventListener("click", leave);
  resize();
  animationFrame = requestAnimationFrame(draw);
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("visible"), 2200);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
}

function initMeta() {
  document.querySelectorAll("[data-site-name]").forEach((node) => { node.textContent = SITE.name; });
  document.querySelectorAll("[data-author]").forEach((node) => { node.textContent = SITE.author; });
  document.querySelectorAll("[data-email-link]").forEach((node) => { node.href = `mailto:${SITE.email}`; });
  document.querySelector("[data-year]").textContent = new Date().getFullYear();
}

addEventListener("hashchange", render);
addEventListener("scroll", scheduleReadingProgress, { passive: true });
document.querySelectorAll("[data-player-toggle]").forEach((button) => button.addEventListener("click", togglePlayback));
setInterval(updateClock, 30000);

initTheme();
initHeaderScroll();
initMenu();
initSearch();
initMeta();
initParticleIntro();
render();

const scheduleAudioPreload = () => {
  const start = () => {
    if ("requestIdleCallback" in window) requestIdleCallback(preloadAllTracks, { timeout: 1800 });
    else setTimeout(preloadAllTracks, 350);
  };
  if (document.readyState === "complete") start();
  else addEventListener("load", start, { once: true });
};

scheduleAudioPreload();

const startVisualEffects = () => {
  initRainAnimation();
  if (document.body.classList.contains("intro-active")) addEventListener("rainy:intro-complete", initAmbientAnimation, { once: true });
  else initAmbientAnimation();
};

if ("requestIdleCallback" in window) requestIdleCallback(startVisualEffects, { timeout: 650 });
else setTimeout(startVisualEffects, 120);

if (window.RainyDB?.isConfigured() && window.RainyDB.useRemoteContent) {
  loadRemoteContent().then(render);
}
