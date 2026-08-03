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
3. Add your domain (e.g. playbookstrategies.com or katherinerowe.com) under **Settings → Domains**, then set `NEXT_PUBLIC_SITE_URL` in Vercel env vars to that domain for correct canonical URLs and social previews.

## Google Analytics

Add your GA4 measurement ID in Vercel (**Settings → Environment Variables**):

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — e.g. `G-XXXXXXXXXX`

Redeploy after adding the variable. Analytics stays disabled locally unless you add the same var to `.env.local`.

## Contact form (Supabase)

Leads are stored in the **Sports Biz IQ** Supabase project (`playbook_leads` table).

1. Apply the migration in `sports-biz-iq/supabase/migrations/20260802200000_playbook_leads.sql` (or run `supabase/leads.sql` in the SQL editor).
2. Add the same Supabase env vars used by Sports Biz IQ to Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

View leads in Supabase → **Table Editor** → `playbook_leads`.

**Resend (email notifications)**
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` — verified sender in Resend, e.g. `Playbook Strategies <hello@yourdomain.com>`
- `CONTACT_TO_EMAIL` — optional, defaults to `katherine@katherinerowe.com`

Leads are always saved to Supabase. Resend sends you an email alert when configured.

## Assets

- `public/headshot.jpg` — About section photo (swap anytime)
- `public/playbook-strategies-one-pager.pdf` — the downloadable one-pager (replace with new versions as you update it)

## Editing content

All copy lives in `app/page.jsx` as small data arrays near the top
(`areas`, `steps`, `caseGroups`, `who`, `experience`) — edit those to update
the site without touching layout. Brand colors are CSS variables at the top of
`app/globals.css`.
