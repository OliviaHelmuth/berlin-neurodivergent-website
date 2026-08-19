# Neurodivergent Berlin — Current Site Audit

Source: https://www.neurodivergent-berlin.com/ — audited 2026-08-19.
Purpose: factual inventory to support an authorized redesign/rebuild. Prose sections are summarized, not reproduced verbatim (see note at bottom on content reuse).

## Confirmed stack

- **Platform: Wix** (Wix Studio/Editor site) — confirmed via `static.wixstatic.com` asset CDN across every image, and Wix's characteristic client-side routing/menu structure.
- **Events**: rendered by Wix's built-in **Events app** (client-side widget with an "Upcoming" list, a "Past Events" list, and a paginated "Load More" button) — not a custom booking system, not Meetup embeds (Meetup is only linked to, not embedded).
- **No exposed API** and no separate backend to reverse-engineer — content lives entirely inside Wix's proprietary CMS/editor. There is nothing to "port" architecturally; a rebuild is a from-scratch build informed by this content/IA, not a migration.
- No third-party analytics/tracking scripts were detected in rendered output.
- Donations run through an external platform (Ko-fi), not a custom payment integration.

## 1. Home (`/`)

Layout, top to bottom:
- Sticky header: logo/wordmark, nav (About Us, Events, Neurocinema, Links & Resources), "Donate" button (→ Ko-fi).
- Floating right-edge social rail: Ko-fi, Meetup, Instagram icons.
- Hero: full-bleed photo, "Berlin Neurodivergent Community" headline + short welcome paragraph, a "Neurocinema Film Festival 2026 — Coming Soon" callout.
- Three-card "Gather / Connect / Support" section linking to About Us, Events, and a get-involved CTA.
- "Upcoming Events" preview strip — pulls live from the Events app (4 cards shown: title, date, location, "Details"/"Learn More" links, "Multiple Dates" tag where recurring).
- "News and Updates" — 3 blog-style article teasers with images (community updates, e.g. a Pride Walk recap, a partner org's youth-mobility project, a museum "quiet hour" accessibility event), each with "Read More".
- Footer (see §7).

## 2. About Us

### Our Story (`/about`)
Peer-led/volunteer-run community statement; who it's for (broad list of neurodivergent identities, no diagnosis required); "how the community works" (donation-supported, no one turned away, safety-first); a community disclaimer about volunteer capacity/limitations; a short values list; a "Participate, Volunteer or Support" CTA.

### Contact (`/contact-8`)
Short "Join the Community" blurb, then three actions: **Contact Us** → `mailto:neurodivergentberlin@gmail.com`, **Join our socials** → Instagram, **Donate** → Ko-fi. No web form — email is the only direct contact channel found.

## 3. Events (`/events`)

Two lists on one page, both from the Wix Events app:

**Upcoming** (as of audit date): 4 events, e.g. "New to Neurodivergence Meetup" (Sat Aug 22), "Neurodivergent Co-working & Networking" (recurring, Thu Aug 27), "Neurodivergent Speedfriending" (Sat Aug 29), "Neurodivergent Creative Sharing Circle" (recurring, Mon Sep 7). Each card: emoji-heavy title, date, venue name, "Details"/"Learn More" link into a per-event Wix page; recurring events are tagged "Multiple Dates".

**Past** (paginated via "Load More"; the list is now fully exhausted — the button disappeared after the final pull). **63 past events total**, spanning **Thu, Feb 29, 2024 → Mon, Aug 03, 2026** (most recent). Full list, oldest to newest, grouped by year (venue "Berlin" = generic/no specific venue given in the list view):

<details>
<summary>2024 — 11 events</summary>

| Date | Title | Venue |
|---|---|---|
| Thu, Feb 29 | NeuroCinema: Watch a Movie about Neurodivergence (Learning Disability Docu) | Berlin |
| Thu, Apr 25 | Offline Co-working Thursdays and ND-Chat | Holiday Inn Express Berlin City Centre |
| Sat, Jun 29 | Abstract Art Workshop for Neurodivergent Individuals | Berlin |
| Thu, Sep 19 | Neurodivergent Coworking Thursdays and Meetup (recurring) | Berlin |
| Thu, Sep 26 | Time Management while Neurodivergent | Berlin |
| Sat, Oct 12 | Neurodivergent Stroll: Cozy Autumn Walk and Cafe Hangout | Berlin |
| Mon, Oct 28 | Neurocinema: Neurodivergent Film-Festival (Day 1) | Berlin |
| Tue, Oct 29 | Neurocinema: Neurodivergent Film-Festival (Day 2) | Online (Zoom) |
| Wed, Oct 30 | Neurocinema: Neurodivergent Film-Festival (Day 3) | (not listed) |
| Thu, Oct 31 | Neurocinema: Neurodivergent Film-Festival (Day 4) | Berlin |
| Fri, Nov 01 | Neurocinema: Neurodivergent Film-Festival (Day 5) | Berlin |

</details>

<details>
<summary>2025 — 30 events (includes Neurocinema Film-Fest 2025, 4 screenings same day)</summary>

| Date | Title | Venue |
|---|---|---|
| Sat, Feb 22 | Berlin Neurodivergent Meetup (ADHD, Autistic, AuDHD, Dyslexic, etc) | Berlin |
| Sat, Mar 08 | Neurodivergent Arts and Craft Meetup | Berlin |
| Sat, Mar 15 | Neurodivergent Reading Club: Silent Reading & Connection | Berlin |
| Tue, Mar 25 | Movie Night & Discussion for Autistic & AuDHD Minds | Berlin |
| Sat, Apr 19 | Neurodivergent Board & Card Game Meetup | Berlin |
| Mon, Apr 28 | Yoga in the Park for Neurodivergent People | Berlin |
| Wed, May 07 | Neurodivergent Dog Lovers Meetup | Berlin |
| Sat, May 10 | Neurodivergent Dog Lovers Meetup | Berlin |
| Wed, May 14 | Yoga in the Park for Neurodivergent People (Beginner) | Berlin |
| Sat, May 24 | Neurodivergent Spring Cleaning Swap | Berlin |
| Sun, Jun 08 | Neurodivergent Board & Card Game Meetup | Berlin |
| Fri, Jun 13 | Neurodivergent Walk – Pride Week | Berlin |
| Sat, Jun 21 | Neurodivergent Day Trip: Spreewald | Berlin |
| Fri, Jun 27 | Neurodivergent Music Therapy: Song Sharing and Discussion | Berlin |
| Sat, Jul 12 | Berlin Neurodivergent Meetup (ADHD, Autistic, Dyslexic, Tourette, etc) | Berlin |
| Sat, Jul 19 | Neurodivergent Speedfriending – Outdoors (5th edition) | Berlin |
| Thu, Jul 31 | Neurodivergent Co-working & Networking (recurring) | Berlin |
| Fri, Aug 08 | Neurodivergent Music Therapy: Song Sharing and Discussion | Berlin |
| Sat, Aug 09 | Neurodivergent Board & Card Game Meetup | Berlin |
| Sat, Aug 16 | Berlin Neurodivergent Meetup (ADHD, Autistic, Dyslexic, Tourette, etc) | Berlin |
| Thu, Aug 21 | Neurodivergent Film Screening & Discussion | Berlin |
| Sat, Sep 06 | Neurodivergent Speedfriending – Outdoors (6th edition) | Berlin |
| Sat, Sep 13 | Neurodivergent Parent Meetup (ADHD, Autistic, Dyslexic, etc) | Berlin |
| Fri, Oct 03 | Neurodivergent Board & Card Game Meetup | Berlin |
| Sat, Oct 11 | Neurocinema Film-Fest 2025: Film Screening 1 | Berlin |
| Sat, Oct 11 | Neurocinema Film-Fest 2025: Film Screening 2 | Berlin |
| Sat, Oct 11 | Neurocinema Film-Fest 2025: Film Screening 3 | Berlin |
| Sat, Oct 11 | Neurocinema Film-Fest 2025: Film Screening 4 | Berlin |
| Fri, Nov 07 | Neurodivergent Music Therapy: Song Sharing and Discussion | Berlin |
| Mon, Nov 10 | Neurodivergent Lantern Walk | Berlin |

</details>

<details>
<summary>2026 — 22 events (year to date)</summary>

| Date | Title | Venue |
|---|---|---|
| Thu, Jan 01 | Neurodivergent Co-working & Networking (recurring) | Berlin |
| Sat, Jan 10 | Neurodivergent Board & Card Game Meetup | Berlin |
| Mon, Feb 02 | Neurodivergent Creative Sharing Circle (recurring) | Berlin |
| Thu, Feb 05 | Neurodivergent Co-working & Networking | Humboldt Forum |
| Thu, Mar 05 | Neurodivergent Co-working & Networking (recurring) | Humboldt Forum |
| Sat, Mar 14 | Neurodivergent Board & Card Game Meetup | Berlin |
| Sat, Mar 14 | Neurodivergent Sharing Circle: PMDD, PCOS, and PMS | with the rubbles of old palaces |
| Tue, Mar 24 | Neurodivergent Music Therapy: Song Sharing and Discussion | RuDi – Das Stralauer Kultur- und Nachbarschaftszentrum |
| Wed, Apr 08 | Neurodivergent Sharing Circle: People of Color | BIWOC* Rising |
| Sat, Apr 18 | Neurodivergent Speedfriending | Flughafen Tempelhof – Eingang Okerstraße |
| Sat, Apr 25 | Neurodivergent Spring Cleaning Swap | Park am Gleisdreieck |
| Sat, May 02 | Neurodivergent Language Meetup: German (Conversation) | Taiji Chan studio |
| Tue, May 05 | Neurodivergent Webinar: Nourish Without the Stress (Anna Hamer, Nutritional Therapist) | Online (Google Meet) |
| Sat, May 09 | Neurodivergent Board & Card Game Meetup | Berlin |
| Wed, Jun 03 | Neurodivergent Music Therapy: Song Sharing and Discussion | with the rubbles of old palaces |
| Sat, Jun 13 | Neurodivergent Walk – Pride Week | Landwehrkanal near Böcklerstatue |
| Sat, Jun 20 | Neurodivergent Language Meetup: German (location change) | KAFFEEKREIS |
| Fri, Jul 03 | Neurodivergent Workshop with FUTURIUM: What the Future Holds | Futurium |
| Sat, Jul 11 | Neurodivergent Board & Card Game Meetup | Berlin |
| Thu, Jul 23 | Neurodivergent Co-working & Networking (recurring) | Humboldt Forum |
| Tue, Jul 28 | Neurodivergent Music Therapy: Song Sharing and Discussion with Jordan Elias | with the rubbles of old palaces |
| Mon, Aug 03 | Neurodivergent Creative Sharing Circle (recurring) | Berlin |

</details>

Recurring series across the archive: Co-working & Networking, Creative Sharing Circle, Music Therapy song-sharing, Board & Card Game Meetup, Language Meetup (German), Speedfriending, Pride Week walk, Spring Cleaning Swap, topic-specific sharing circles (People of Color, PMDD/PCOS/PMS), Dog Lovers Meetup, Yoga in the Park, plus one-off specials (a nutrition webinar, a Futurium workshop, a Spreewald day trip, an abstract-art workshop, a reading club) and two Neurocinema festival runs (a 5-day 2024 edition, a 1-day/4-screening 2025 edition).

Each event's "Details" link opens a Wix event detail page (RSVP button present on upcoming events) — full per-event descriptions/RSVP data were not individually opened for every past event; titles/dates/venues above are what render in the list view.

## 4. Neurocinema (`/neurocinema`)

- Intro copy ("Celebrating Neurodivergence through Movies"), 3 event guidelines (18+, non-neurodivergent people welcome, zero tolerance for harassment/bigotry), photo credit line, an "About the Film-Festival" blurb, and a Donate CTA.
- "Neurocinema 2026" — Coming Soon (no FilmFreeway or submission-platform link was found anywhere on this page or elsewhere on the site — that's a "Nearest Cinema" feature guess I could not confirm; see Open Questions).
- "Previous" section with **2025** (`/neurocinema/neurocinema-2025`) and **2024** (`/neurocinema2024`) sub-pages, each rendering a photo gallery grid from past festival editions.
- Short "Neurodivergence" glossary blurb repeated at the bottom (same definition as elsewhere on the site).

## 5. Links & Resources

Dropdown nav with 4 sub-pages:

- **What is Neurodivergence** (`/what-is-neurodivergence`) — a long, individually-authored, citation-backed essay ("About the author: Dr. Davy Lin") covering neurodiversity vs. neurodivergence, prevalence, shared traits, societal barriers, and the neurodiversity movement, with 10 numbered references. **Note:** this is signed, referenced work by a named contributor — a rebuild should either get that author's sign-off to reuse it or commission fresh copy, not just copy-paste it.
- **Neurodivergent Info** (`/neurodivergent-info`) — disclaimer about user-submitted external links, then 6 resource cards (ADHD meds chart, autistic burnout, autism/ADHD self-test tools, ADHD supplements research, ADHD-vs-autism overlap, neuroscience perspectives). Confirmed outbound links include webmd.com, embrace-autism.com, neurodivergentinsights.com — likely more behind cards not individually opened.
- **Neurodivergent Recommendations** (`/neurodivergent-recommendations`) — 5 tool recommendations with personal blurbs (a CBT chatbot, real-time transcription, an AI brainstorming tool, a medication reminder/pill organizer).
- **Book Recommendations** (`/book-recommendations`) — 4 books with personal reviews (*Unmasking Autism* – Devon Price, *Divergent Mind*, *Empire of Normality* – Robert Chapman, *How to Keep House While Drowning*).

All four pages read as community-curated, personally-voiced content (first-person reviews) rather than neutral copy — worth preserving that tone/attribution model in the rebuild even if specific picks change.

## 6. Footer (site-wide)

- Column 1: org name + one-line tagline ("The community for Neurodivergent Berlin").
- "With support from:" — 3 institutional partner logos (see §7).
- "Network:" — 6 partner/network org logos (see §7).
- Bottom bar: `© 2024 Neurodivergent Berlin and contributors` | Impressum | Terms of Use | Privacy Policy.
- Legal-page bug found on the live site: the **"Impressum" footer link actually points to `/terms-of-use`** — there is no separate Impressum page/content anywhere on the site (see §9/§12).

## 7. Partner / supporter logos ("official assets, partners only")

Names + their own official websites (logo image files themselves live on Wix's CDN as resized copies — recommend requesting current logo files directly from each partner rather than re-using the scraped/recompressed Wix versions):

**With support from:**
| Partner | Site |
|---|---|
| FEIN (Freiwilliges Engagement in Nachbarschaften, Berlin Senate program) | berlin.de/sen/stadtentwicklung/.../fein/ |
| Bezirksamt Friedrichshain-Kreuzberg | berlin.de/ba-friedrichshain-kreuzberg/ |
| ZLB — Zentral- und Landesbibliothek Berlin | zlb.de |

**Network:**
| Partner | Site |
|---|---|
| With the Rubbles of Old Palaces | withtherubbles.org |
| Kiezraum | kiezraum.org |
| Klappe Auf | klappe-auf.com |
| Drugstore Berlin | drugstore-berlin.de |
| RuDi — Das Stralauer Kultur- und Nachbarschaftszentrum | rudizentrum.de |
| BIWOC* Rising | biwoc-rising.org |
| Futurium | futurium.de/en |

## 8. Donate

- Single mechanism, site-wide: **Ko-fi** — `https://ko-fi.com/neurodivergentberlin`. Used identically for the header "Donate" button, the social rail icon, the Contact page, and the Neurocinema page CTA — i.e. it's one external link, not a custom checkout.
- No Stripe/PayPal-direct/bank-transfer integration found. This is the easiest "make it work" item for a rebuild: it's just linking out to the org's existing Ko-fi page — confirm with the org that this is still their live/correct Ko-fi handle before wiring it up.

## 9. Impressum

**Not present as a distinct page.** The footer's "Impressum" link resolves to `/terms-of-use`, and that page's content is generic Terms-of-Use boilerplate with no legal-identity block (no responsible-person name, no postal address, no register/VAT ID). No `mailto:` beyond the general `neurodivergentberlin@gmail.com` contact address was found tied to legal identity.

**This is a real compliance gap** (German TMG §5 requires an Impressum naming the person/entity responsible for the site) that the rebuild should fix — but doing so requires the org supplying the actual legal-identity details (responsible person, address, any Vereinsregister/association ID if they're formally registered), since none of that exists on the current site to carry over.

## 10. Terms of Use

Generic templated terms (acceptance of terms, permitted use, user conduct rules, content ownership, user-generated content license, third-party links disclaimer, liability disclaimer, indemnification, right to modify, contact). **Notable: the live page still contains unfilled template placeholders reading "[Community Name]"** instead of the org's actual name in several clauses — another sign this page was never fully customized from a template and is worth rewriting properly rather than porting as-is.

## 11. Privacy Policy

Generic templated policy: what's collected (name/email/phone if voluntarily given; anonymous usage/analytics data), how it's collected (directly, or via third-party/social platforms), how it's used, sharing limits, third-party-links disclaimer, a children's-privacy (<13) clause, and a right to update the policy. **Gaps for a Berlin-based org**: no GDPR-specific language (no lawful-basis statement, no listed data-subject rights, no supervisory-authority contact, no retention periods), no cookie-specific disclosure, and no named processors — Wix and Ko-fi (both of which do process visitor/donor data) aren't mentioned anywhere. A rebuild should write a proper GDPR-compliant policy that actually names the services in use (hosting provider, Ko-fi, any analytics added).

## Open questions / things I couldn't fully reach

- **Past-events archive: fully exhausted.** Paginated "Load More" to the end — the button disappeared after the final click, confirming no further pages remain. **63 total past events captured, earliest Thu, Feb 29, 2024** ("NeuroCinema: Watch a Movie about Neurodivergence"). Full list is in §3. Not re-verified: whether the Events app silently caps history at some point before Feb 2024 (i.e. whether even-older events were ever created and are now unreachable) — if the org needs a complete historical record predating that, ask them directly rather than assuming this is the full lifetime archive.
- **"Nearest Cinema" / FilmFreeway**: an early automated pass suggested a FilmFreeway submission link existed; I could not find one anywhere on the live Neurocinema page or elsewhere. Likely either removed, or it only appears during an active submissions window — worth asking the org directly rather than assuming.
- **Individual past-event detail pages** (full descriptions, RSVP counts, photos) were not opened one-by-one — only the list view's title/date/venue was captured for each.
- **Resource cards on `/neurodivergent-info`**: only 3 of 6 cards' outbound links were captured before I moved on; the rest should be re-checked if the rebuild wants a complete outbound-link list.
- **Partner logo source files**: I captured partner names, their own websites, and the *filenames* Wix stores (e.g. `rudi_logo100.png`, `BIWIC_Logo_RGB_jpg_croped.jpg`) but not direct hot-linkable image URLs — recommend sourcing current logo files from each partner directly for the rebuild rather than re-hosting scraped/Wix-recompressed copies, since usage of another org's logo is properly that org's call, not just a copy-paste.

## Note on reusing this content

Several sections (`/about`, `/what-is-neurodivergence`, the recommendations pages, Terms of Use, Privacy Policy) are original written works — some individually authored and attributed (e.g. the neurodivergence essay), some templated boilerplate that's actually broken (Terms of Use placeholders, missing Impressum). For the rebuild: factual/structural items in this audit (nav structure, event data, partner names+links, the Ko-fi donate mechanism, the contact email) are safe to reimplement directly since this is an authorized redesign for the same org. The long-form prose pieces should be treated as a rewrite-with-the-org's-input job, not a copy-paste job — both because the Terms/Privacy pages are legally deficient as written, and because the neurodivergence essay carries individual authorship that deserves either fresh writing or the original author's explicit OK to reuse.
