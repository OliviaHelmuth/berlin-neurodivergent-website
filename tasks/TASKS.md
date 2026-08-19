# Tasks

The live backlog — single source of truth for what's next. See `docs/PRD.md`
for why, `.claude/plans/fancy-kindling-moler.md` for the full architecture.

Update checkboxes as you go, not in a batch at the end of a session.

## Database

- [x] Provision Neon via Vercel's Storage/Marketplace tab
- [x] Add Drizzle schema: `admin_users`, `event_series`, `events`, `articles`
- [x] Run initial migration
- [x] `scripts/seed-events.ts` — import the 63 historical events from
      `docs/site-audit.md` §3

## Admin panel

- [x] Auth.js (Credentials provider + JWT session) guarding `/admin/*`
- [x] `scripts/create-admin.ts` CLI to create the first staff login
- [x] `/admin/events` — create/edit/delete, draft↔published toggle,
      "duplicate" action for recurring series
- [x] `/admin/articles` — same, for News and Updates posts
- [x] Server Actions + `revalidatePath` so edits show up on the public site
      immediately (targets `/events` and `/news` — those pages themselves
      still need to be wired to the DB, see "Public site" below)

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
