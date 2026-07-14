# Playbook Strategies — Website

Single-page Next.js site, ready for Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo (or run `npx vercel` from this directory).
2. In Vercel: **Add New Project → Import** the repo. No configuration needed — Vercel auto-detects Next.js.
3. Add your domain (e.g. playbookstrategies.com or katherinerowe.com) under **Settings → Domains**.

## Assets

- `public/headshot.jpg` — About section photo (swap anytime)
- `public/playbook-strategies-one-pager.pdf` — the downloadable one-pager (replace with new versions as you update it)

## Editing content

All copy lives in `app/page.jsx` as small data arrays near the top
(`areas`, `steps`, `cases`, `who`, `experience`) — edit those to update
the site without touching layout. Brand colors are CSS variables at the
top of `app/globals.css`.
