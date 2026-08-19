// Seeds the historical events archive from scripts/data/events-seed.ts
// (transcribed from docs/site-audit.md §3). Idempotent: re-running upserts
// on sourceKey rather than creating duplicates, so it's safe to run again if
// the seed data list ever grows.
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq, sql as rawSql } from "drizzle-orm";
import { events, eventSeries } from "../lib/db/schema";
import { eventsSeed, type SeedEvent } from "./data/events-seed";
import type { db as DbType } from "../lib/db";

// Recurring series called out in docs/site-audit.md §3 ("Recurring series
// across the archive"). Matched by substring against the raw title; the
// canonical name is what gets stored on event_series and the "(recurring)"
// marker is stripped from the event's own title once linked.
const SERIES_MATCHERS: { pattern: RegExp; name: string }[] = [
  { pattern: /co-?working/i, name: "Neurodivergent Co-working & Networking" },
  { pattern: /creative sharing circle/i, name: "Neurodivergent Creative Sharing Circle" },
  { pattern: /music therapy/i, name: "Neurodivergent Music Therapy: Song Sharing" },
  { pattern: /board & card game/i, name: "Neurodivergent Board & Card Game Meetup" },
  { pattern: /language meetup/i, name: "Neurodivergent Language Meetup (German)" },
  { pattern: /speedfriending/i, name: "Neurodivergent Speedfriending" },
  { pattern: /pride week/i, name: "Neurodivergent Pride Week Walk" },
  { pattern: /spring cleaning swap/i, name: "Neurodivergent Spring Cleaning Swap" },
  { pattern: /dog lovers meetup/i, name: "Neurodivergent Dog Lovers Meetup" },
  { pattern: /yoga in the park/i, name: "Yoga in the Park for Neurodivergent People" },
  { pattern: /berlin neurodivergent meetup/i, name: "Berlin Neurodivergent Meetup" },
];

function matchSeries(title: string) {
  return SERIES_MATCHERS.find((m) => m.pattern.test(title)) ?? null;
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Times weren't captured in the audit (list view only shows the date) — this
// infers 18:00 local Berlin time and approximates CET/CEST by month, since
// this is placeholder seed data, not confirmed schedule data.
function startAtFor(dateISO: string) {
  const month = Number(dateISO.slice(5, 7));
  const isCEST = month >= 4 && month <= 10; // late-Mar to late-Oct in reality; month-level approximation is fine for seed data
  const offset = isCEST ? "+02:00" : "+01:00";
  return new Date(`${dateISO}T18:00:00${offset}`);
}

async function upsertSeries(db: typeof DbType, name: string, cache: Map<string, string>) {
  if (cache.has(name)) return cache.get(name)!;

  const existing = await db
    .select({ id: eventSeries.id })
    .from(eventSeries)
    .where(eq(eventSeries.name, name))
    .limit(1);

  const id =
    existing[0]?.id ??
    (
      await db.insert(eventSeries).values({ name }).returning({ id: eventSeries.id })
    )[0].id;

  cache.set(name, id);
  return id;
}

async function seedEvent(db: typeof DbType, raw: SeedEvent, seriesCache: Map<string, string>) {
  const match = matchSeries(raw.title);
  const seriesId = match ? await upsertSeries(db, match.name, seriesCache) : null;
  const title = raw.title.replace(/\s*\(recurring\)\s*$/i, "").trim();
  const sourceKey = `wix-audit:${raw.date}:${slugify(raw.title)}`;
  const slug = `${slugify(title)}-${raw.date}`;

  await db
    .insert(events)
    .values({
      slug,
      title,
      description:
        "Historical event — imported from the site audit; full description pending.",
      venueName: raw.venueName,
      startAt: startAtFor(raw.date),
      eventSeriesId: seriesId,
      status: "published",
      sourceKey,
    })
    .onConflictDoUpdate({
      target: events.sourceKey,
      set: {
        title,
        venueName: raw.venueName,
        startAt: startAtFor(raw.date),
        eventSeriesId: seriesId,
        updatedAt: rawSql`now()`,
      },
    });
}

async function main() {
  // Dynamic import: a static `import { db } from "../lib/db"` at the top of
  // this file would be hoisted above the dotenv config() call above (ES
  // module import hoisting runs all imports before other top-level code),
  // so DATABASE_URL wouldn't be set yet when lib/db/index.ts calls neon().
  // Importing here, after config() has already run, avoids that.
  const { db } = await import("../lib/db");

  const seriesCache = new Map<string, string>();
  let count = 0;

  for (const raw of eventsSeed) {
    await seedEvent(db, raw, seriesCache);
    count++;
  }

  console.log(`Seeded/updated ${count} events, ${seriesCache.size} series.`);
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
