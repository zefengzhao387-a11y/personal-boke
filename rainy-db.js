(function () {
  "use strict";

  const config = window.RAINY_CONFIG || {};
  const baseUrl = String(config.supabaseUrl || "").replace(/\/$/, "");
  const anonKey = String(config.supabasePublishableKey || config.supabaseAnonKey || "");
  const legacyJwtKey = anonKey.split(".").length === 3;
  const useRemoteContent = config.useRemoteContent === true;
  const storageKey = "rainy-author-session";

  function isConfigured() {
    try { return new URL(baseUrl).protocol === "https:" && anonKey.length > 20; }
    catch { return false; }
  }

  function getSession() {
    try {
      const session = JSON.parse(localStorage.getItem(storageKey) || "null");
      return session && session.access_token ? session : null;
    } catch {
      return null;
    }
  }

  function saveSession(session) {
    if (session?.access_token) localStorage.setItem(storageKey, JSON.stringify(session));
    else localStorage.removeItem(storageKey);
    return session || null;
  }

  async function refreshSession(refreshToken) {
    const headers = { apikey: anonKey, "Content-Type": "application/json" };
    if (legacyJwtKey) headers.Authorization = `Bearer ${anonKey}`;
    const response = await fetch(`${baseUrl}/auth/v1/token?grant_type=refresh_token`, {
      method: "POST",
      headers,
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
    if (!response.ok) { saveSession(null); return null; }
    return saveSession(await response.json());
  }

  async function request(path, options = {}) {
    if (!isConfigured()) throw new Error("Supabase 尚未配置");
    const session = options.auth === false ? null : getSession();
    const headers = {
      apikey: anonKey,
      ...(options.body !== undefined ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {}),
    };
    if (session?.access_token) headers.Authorization = `Bearer ${session.access_token}`;
    else if (legacyJwtKey) headers.Authorization = `Bearer ${anonKey}`;
    const response = await fetch(`${baseUrl}${path}`, {
      method: options.method || "GET",
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
    });
    if (response.status === 401 && session?.refresh_token && !options.retried && !path.startsWith("/auth/")) {
      const refreshed = await refreshSession(session.refresh_token);
      if (refreshed) return request(path, { ...options, retried: true });
    }
    if (!response.ok) {
      let detail = "";
      try {
        const payload = await response.json();
        detail = payload.message || payload.msg || payload.error_description || payload.error || "";
      } catch {
        detail = await response.text();
      }
      const error = new Error(detail || `请求失败（${response.status}）`);
      error.status = response.status;
      throw error;
    }
    if (response.status === 204) return null;
    const text = await response.text();
    return text ? JSON.parse(text) : null;
  }

  async function signIn(email, password) {
    const session = await request("/auth/v1/token?grant_type=password", {
      method: "POST",
      auth: false,
      body: { email, password },
    });
    return saveSession(session);
  }

  async function signOut() {
    const session = getSession();
    if (session) {
      try { await request("/auth/v1/logout", { method: "POST" }); }
      catch { /* 本地会话仍然会被清除。 */ }
    }
    saveSession(null);
  }

  async function listPublished(table) {
    const fields = table === "posts"
      ? "id,slug,title,excerpt,content_markdown,content_html,category,status,published_at,read_time,toc,updated_at"
      : "id,slug,content,category,status,published_at,updated_at";
    return request(`/rest/v1/${table}?select=${fields}&status=eq.published&order=published_at.desc`, { auth: false });
  }

  async function listOwn(table) {
    return request(`/rest/v1/${table}?select=*&order=updated_at.desc`);
  }

  async function upsert(table, value, conflict = "slug") {
    const rows = await request(`/rest/v1/${table}?on_conflict=${encodeURIComponent(conflict)}`, {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: value,
    });
    return rows?.[0] || null;
  }

  async function update(table, id, value) {
    const rows = await request(`/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: value,
    });
    return rows?.[0] || null;
  }

  async function remove(table, id) {
    return request(`/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: { Prefer: "return=minimal" },
    });
  }

  window.RainyDB = Object.freeze({
    isConfigured,
    useRemoteContent,
    getSession,
    signIn,
    signOut,
    listPublished,
    listOwn,
    upsert,
    update,
    remove,
  });
})();
