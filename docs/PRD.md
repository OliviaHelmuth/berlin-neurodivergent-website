# PRD — Neurodivergent Berlin website rebuild

## Summary

Neurodivergent Berlin (a peer-led, volunteer-run community for neurodivergent
adults in Berlin) runs its current site on Wix. This project rebuilds it as a
Next.js site on Vercel, authorized by the org, keeping the same content and
sections but with better design, a working admin panel for staff, and a
fully free-tier hosting stack. This is not a general clone or portfolio
piece — it's a redesign for the actual organization, informed by a full
audit of the live site (`docs/site-audit.md`).

## Problem statement

The current Wix site has no way for volunteer staff to add or edit events
and news posts without going into Wix's own editor — there's no lightweight
admin workflow. It also has real gaps that need fixing, not carrying over:
no working Impressum (German legal-identity page — the footer link is
broken and points to Terms of Use instead), a Terms of Use page with
unfilled template placeholders, and a Privacy Policy that doesn't name the
services actually processing visitor data. The org wants a rebuild that
fixes these gaps, keeps hosting cost at $0, and gives staff a simple way to
manage events and articles themselves going forward.

## Target users

- **Site visitors** — people looking for community events, the Neurocinema
  film festival, resources on neurodivergence, or a way to donate.
- **Org staff / volunteers** — the people who'll use the admin panel to add
  events and write news posts, without needing to touch code or a Wix
  editor.
- **Partner organizations** — referenced by name/logo in the footer; their
  assets appear on the site but they don't interact with it directly.

## Goals

- Full content parity with the current site's sections: Home, About Us (Our
  Story, Contact), Events (upcoming + historical), Neurocinema (+ 2024/2025
  photo galleries), Links & Resources (all 4 sub-pages), footer with partner
  logos, and the three legal pages.
- A working Donate button, reusing the org's existing Ko-fi link
  (`ko-fi.com/neurodivergentberlin`) — no new payment integration.
- An admin panel (auth-gated) where staff can create/edit/delete events and
  publish articles, with changes appearing on the public site immediately.
- Correctly structured Impressum, Terms of Use, and Privacy Policy pages —
  even if they start as clearly marked placeholders pending real
  legal-identity details from the org.
- The full historical events archive (63 events, back to Feb 2024) migrated
  in as seed data, so the new site doesn't launch empty.
- Zero hosting cost: Vercel Hobby + Neon free tier, no paid services.

## Non-goals

- No custom payment/checkout flow — Ko-fi stays external.
- No mobile app — responsive web only.
- No user accounts, comments, or forum features for site visitors — the
  admin panel is for org staff only, not public contributors.
- No ongoing scraper against the old Wix site — the events migration is a
  one-time seed; new events go through the admin panel from here on.
- No verbatim reuse of the old site's long-form prose (About Us story, the
  "What is Neurodivergence" essay, Terms/Privacy text) — that content gets
  rewritten or explicitly permissioned, not copy-pasted.

## Success criteria

- All public routes listed under Goals render with real (or clearly
  placeholder-labeled) content, no 404s.
- Donate button resolves to the correct Ko-fi URL from every page it
  appears on (header, Contact, Neurocinema).
- Admin login works; a staff account can create, edit, and delete an event
  and an article, and see the change reflected on the public site without a
  redeploy.
- Seeded events table matches `docs/site-audit.md` §3 in count and content;
  re-running the seed script doesn't create duplicates.
- Impressum, Terms of Use, and Privacy Policy each render with a visible
  "placeholder, pending org review" notice and are `noindex`ed until real
  content replaces them.
- Total monthly hosting cost: $0.

## Open questions / dependencies on the org

These can't be resolved from the audit alone — they need input from
Neurodivergent Berlin directly:

- Real Impressum details: legal name/form, address, contact, register ID if
  applicable, person responsible for content.
- Final partner logo files (current placeholders are generic SVGs).
- Confirmation (or a rewrite) of the "What is Neurodivergence" essay's
  reuse, since it's individually authored and attributed to Dr. Davy Lin.
- Exact Instagram and Meetup URLs (not captured verbatim during the audit).
- Whether the org wants a custom domain attached once the site is live.
