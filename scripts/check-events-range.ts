// Reusable sanity check: lists events whose start_at falls within a given
// Berlin-local date range (inclusive), e.g. to spot-check seeded/past events
// without hardcoding dates in a throwaway script.
//
// Usage: npm run db:check-range -- --from 2026-08-03 --to 2026-08-18
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, asc, gte, lte } from "drizzle-orm";
import { events } from "../lib/db/schema";
import { berlinInputToUTC } from "../lib/events/time";

function parseArgs() {
  const args = process.argv.slice(2);
  const get = (flag: string) => {
    const idx = args.indexOf(flag);
    return idx === -1 ? undefined : args[idx + 1];
  };

  const from = get("--from");
  const to = get("--to");
  if (!from || !to) {
    throw new Error("Usage: npm run db:check-range -- --from YYYY-MM-DD --to YYYY-MM-DD");
  }

  return { from, to };
}

async function main() {
  const { from, to } = parseArgs();
  // Dynamic import: see scripts/seed-events.ts for why this must come after
  // dotenv's config() rather than as a static top-level import.
  const { db } = await import("../lib/db");

  const rangeStart = berlinInputToUTC(`${from}T00:00`);
  const rangeEnd = berlinInputToUTC(`${to}T23:59`);

  const rows = await db
    .select({
      title: events.title,
      startAt: events.startAt,
      venueName: events.venueName,
      status: events.status,
    })
    .from(events)
    .where(and(gte(events.startAt, rangeStart), lte(events.startAt, rangeEnd)))
    .orderBy(asc(events.startAt));

  console.log(`Events from ${from} to ${to} (Berlin local): ${rows.length}`);
  for (const row of rows) {
    const when = row.startAt.toLocaleString("en-GB", {
      timeZone: "Europe/Berlin",
      dateStyle: "medium",
      timeStyle: "short",
    });
    console.log(`${when} | ${row.title} | ${row.venueName} | ${row.status}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
