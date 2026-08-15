-- Rainy. 第一阶段数据库结构
-- 在 Supabase Dashboard -> SQL Editor 中整段运行。

create extension if not exists pgcrypto;

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null check (char_length(title) between 1 and 120),
  excerpt text not null default '' check (char_length(excerpt) <= 360),
  content_markdown text not null default '',
  content_html text not null default '',
  category text not null default '随笔' check (char_length(category) <= 24),
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  read_time text not null default '1 分钟' check (char_length(read_time) <= 24),
  toc jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  content text not null check (char_length(content) between 1 and 1200),
  category text not null default '近况' check (char_length(category) <= 24),
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 兼容旧版 posts 表：CREATE TABLE IF NOT EXISTS 不会为旧表补列。
alter table if exists public.posts
  add column if not exists status text not null default 'draft';

alter table if exists public.notes
  add column if not exists status text not null default 'draft';

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at before update on public.posts
for each row execute function public.set_updated_at();

drop trigger if exists notes_set_updated_at on public.notes;
create trigger notes_set_updated_at before update on public.notes
for each row execute function public.set_updated_at();

alter table public.posts enable row level security;
alter table public.notes enable row level security;

drop policy if exists "published posts are public" on public.posts;
create policy "published posts are public"
on public.posts for select
to anon, authenticated
using (status = 'published' or author_id = (select auth.uid()));

drop policy if exists "author inserts posts" on public.posts;
create policy "author inserts posts"
on public.posts for insert
to authenticated
with check (author_id = (select auth.uid()));

drop policy if exists "author updates posts" on public.posts;
create policy "author updates posts"
on public.posts for update
to authenticated
using (author_id = (select auth.uid()))
with check (author_id = (select auth.uid()));

drop policy if exists "author deletes posts" on public.posts;
create policy "author deletes posts"
on public.posts for delete
to authenticated
using (author_id = (select auth.uid()));

drop policy if exists "published notes are public" on public.notes;
create policy "published notes are public"
on public.notes for select
to anon, authenticated
using (status = 'published' or author_id = (select auth.uid()));

drop policy if exists "author inserts notes" on public.notes;
create policy "author inserts notes"
on public.notes for insert
to authenticated
with check (author_id = (select auth.uid()));

drop policy if exists "author updates notes" on public.notes;
create policy "author updates notes"
on public.notes for update
to authenticated
using (author_id = (select auth.uid()))
with check (author_id = (select auth.uid()));

drop policy if exists "author deletes notes" on public.notes;
create policy "author deletes notes"
on public.notes for delete
to authenticated
using (author_id = (select auth.uid()));

grant usage on schema public to anon, authenticated;
grant select on public.posts, public.notes to anon;
grant select, insert, update, delete on public.posts, public.notes to authenticated;

-- Public guestbook. Visitor email is stored for the author but never exposed publicly.
create table if not exists public.guest_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 16),
  email text not null default '' check (char_length(email) <= 254),
  message text not null check (char_length(btrim(message)) between 1 and 240),
  status text not null default 'visible' check (status in ('visible', 'hidden')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists guest_messages_set_updated_at on public.guest_messages;
create trigger guest_messages_set_updated_at before update on public.guest_messages
for each row execute function public.set_updated_at();

alter table public.guest_messages enable row level security;

drop policy if exists "visible guest messages are public" on public.guest_messages;
create policy "visible guest messages are public"
on public.guest_messages for select
to anon, authenticated
using (status = 'visible' or (select auth.role()) = 'authenticated');

drop policy if exists "visitors insert guest messages" on public.guest_messages;
create policy "visitors insert guest messages"
on public.guest_messages for insert
to anon, authenticated
with check (status = 'visible');

drop policy if exists "author updates guest messages" on public.guest_messages;
create policy "author updates guest messages"
on public.guest_messages for update
to authenticated
using (true)
with check (true);

drop policy if exists "author deletes guest messages" on public.guest_messages;
create policy "author deletes guest messages"
on public.guest_messages for delete
to authenticated
using (true);

revoke all on public.guest_messages from anon, authenticated;
grant select (id, name, message, created_at) on public.guest_messages to anon, authenticated;
grant insert (name, email, message) on public.guest_messages to anon, authenticated;
grant select (email, status, updated_at), update, delete on public.guest_messages to authenticated;

-- 运行成功后：在 Authentication -> Providers 中关闭公开注册，
-- 然后只在 Dashboard 中手动创建你自己的作者账号。
