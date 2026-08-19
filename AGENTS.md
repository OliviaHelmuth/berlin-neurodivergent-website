<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Authorized rebuild of neurodivergent-berlin.com (a Berlin neurodivergent
peer-support community's site, currently on Wix) for the org itself — not an
unaffiliated clone. Full content/structure audit of the live site:
`docs/site-audit.md`. Approved build architecture (DB schema, route
structure, deployment order): `.claude/plans/fancy-kindling-moler.md`. Read
whichever is relevant before working on content parity or backend structure
— don't re-derive either from scratch.

## Hard constraints

- **Free-tier hosting only.** Vercel Hobby + Neon free tier. Don't introduce
  a paid service or dependency without flagging it first.
- **Never fabricate real-world facts.** Legal identity (Impressum), partner
  logos, and social-media URLs are placeholders on purpose (see inline
  comments in `app/(public)/legal/*`, `content/partners.ts`,
  `content/site.ts`) because the real values don't exist yet or weren't
  confirmed during the audit. Fill them in only from information the org
  actually supplies — a plausible-looking guess is worse than a visible
  placeholder.
- **Don't port the old site's prose verbatim.** `docs/site-audit.md`
  deliberately summarizes rather than quotes long-form copy (About Us,
  Terms, Privacy Policy). The "What is Neurodivergence" essay is
  individually authored/cited — don't copy it in; it needs either the
  author's sign-off or fresh commissioned copy.

## Stack decisions (already settled — see the plan file for full reasoning)

- Drizzle ORM, not Prisma — no native binary, pairs with Neon's HTTP driver
  on serverless functions without a paid connection proxy.
- Auth.js: Credentials provider + JWT sessions, no DB session table — admin
  staff count is tiny (1–5 people), so magic-link/email auth is unneeded
  complexity.
- Static, rarely-edited content (About, Neurocinema intro, all four Links &
  Resources sub-pages, partner list) lives as typed data in `content/*.ts`,
  not MDX. Only `events` and `articles` are database-backed and
  admin-editable — don't move other content into the DB without reopening
  that decision with the user.

## Route structure

- `app/(public)/` — public site, shares the header/footer/social-rail layout
  from `app/(public)/layout.tsx`. New visitor-facing pages go here.
- `app/admin/` — the (not-yet-built) auth-guarded admin panel. Never share
  its layout with `(public)`.

## Repo root also contains

`docs/` (audit), `.agents/` and `skills-lock.json` (installed Claude Code
skill plugin metadata), `.claude/` (this session's local Claude Code state)
— none of these are app code, leave them alone when restructuring the Next.js
project.

## Documentation lookup order

This project moves fast on its dependencies (Next.js 16, and soon
Drizzle/Auth.js/Neon) — don't answer library or API questions from training
data, it's likely stale. Check in this order: 1) relevant installed skill
(e.g. `vercel:nextjs`) 2) live official docs, fetched fresh 3) this repo's
own code/config. If none settle it, say so rather than guessing.

## Deployment state

Pushed to GitHub: `OliviaHelmuth/berlin-neurodivergent-website` (public).
Not connected to Vercel yet. Confirm with the user before deploying; don't
assume a prior "yes" carries forward.

## Agent skills

### Issue tracker

Tasks tracked as a single flat checklist in `tasks/TASKS.md` — not GitHub
Issues (tried, then deliberately removed). See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context layout (root `CONTEXT.md` + `docs/adr/`, created lazily by `/domain-modeling`). See `docs/agents/domain.md`.
