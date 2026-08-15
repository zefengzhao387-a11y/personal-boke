// Supabase 项目配置。Publishable key 可以放在前端，真正权限由数据库 RLS 控制。
// 创建项目后替换下面两项；未配置时网站继续使用 script.js 内的本地文章。
window.RAINY_CONFIG = Object.freeze({
  supabaseUrl: "https://lmfjoetocmfyjkcpdjtn.supabase.co",
  supabasePublishableKey: "sb_publishable_NdbeZ1hBS6b85kJPFppr4w_e7y0JLd7",
  // 首次进入后台并完成“导入本地内容”后，再改为 true。
  useRemoteContent: true,
});
