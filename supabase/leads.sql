-- Run this in the Sports Biz IQ Supabase project (jdkkzjyeluzfubrldqlu).
-- Canonical migration: sports-biz-iq/supabase/migrations/20260802200000_playbook_leads.sql

create table if not exists public.playbook_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  interest text,
  message text not null,
  source text not null default 'website',
  created_at timestamptz not null default now()
);

create index if not exists playbook_leads_created_at_idx
  on public.playbook_leads (created_at desc);

alter table public.playbook_leads enable row level security;

comment on table public.playbook_leads is
  'Inbound leads from the Playbook Strategies marketing site.';
