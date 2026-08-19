# Tasks

The live backlog — single source of truth for what's next. See `docs/PRD.md`
for why, `.claude/plans/fancy-kindling-moler.md` for the full architecture.

Update checkboxes as you go, not in a batch at the end of a session.

## Database

- [ ] Provision Neon via Vercel's Storage/Marketplace tab
- [ ] Add Drizzle schema: `admin_users`, `event_series`, `events`, `articles`
- [ ] Run initial migration
- [ ] `scripts/seed-events.ts` — import the 63 historical events from
      `docs/site-audit.md` §3

## Admin panel

- [ ] Auth.js (Credentials provider + JWT session) guarding `/admin/*`
- [ ] `scripts/create-admin.ts` CLI to create the first staff login
- [ ] `/admin/events` — create/edit/delete, draft↔published toggle,
      "duplicate" action for recurring series
- [ ] `/admin/articles` — same, for News and Updates posts
- [ ] Server Actions + `revalidatePath` so edits show up on the public site
      immediately

## Public site

- [ ] `/news` list + article detail pages once the articles schema exists
- [ ] Swap partner logo placeholders for real files once the org supplies
      them

## Waiting on the org (not code work)

- [ ] Real Impressum details: legal name/form, address, contact, register
      ID if applicable
- [ ] Final partner logo files
- [ ] Confirm or commission a rewrite of the "What is Neurodivergence"
      essay (currently attributed to Dr. Davy Lin — needs their OK to reuse)
- [ ] Exact Instagram / Meetup URLs

## Pre-launch

- [ ] Remove `noindex` from the legal pages once real content replaces the
      placeholders
- [ ] `sitemap.ts` / `robots.ts`
- [ ] Custom domain, if the org has one
- [ ] Optional: free-tier Vercel Analytics
