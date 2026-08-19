// Reusable sanity check: lists published events from right now onward, using
// the actual current time on every run — never a hardcoded date. Mirrors the
// upcoming/past split the public site itself uses
// (lib/db/queries/events.ts), reimplemented here since that module is
// server-only and can't be imported outside the Next.js runtime.
//
// Usage: npm run db:check-upcoming
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, asc, eq, gte } from "drizzle-orm";
import { events } from "../lib/db/schema";

async function main() {
  // Dynamic import: see scripts/seed-events.ts for why this must come after
  // dotenv's config() rather than as a static top-level import.
  const { db } = await import("../lib/db");

  const now = new Date();
  const rows = await db
    .select({
      title: events.title,
      startAt: events.startAt,
      venueName: events.venueName,
      status: events.status,
    })
    .from(events)
    .where(and(gte(events.startAt, now), eq(events.status, "published")))
    .orderBy(asc(events.startAt));

  console.log(`Published upcoming events as of ${now.toISOString()}: ${rows.length}`);
  for (const row of rows) {
    const when = row.startAt.toLocaleString("en-GB", {
      timeZone: "Europe/Berlin",
      dateStyle: "medium",
      timeStyle: "short",
    });
    console.log(`${when} | ${row.title} | ${row.venueName}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
