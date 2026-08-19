import "server-only";
import { and, asc, desc, eq, gte, lt } from "drizzle-orm";
import { db } from "@/lib/db";
import { events } from "@/lib/db/schema";

export type EventsWhen = "upcoming" | "past";
export type EventsSort = "asc" | "desc";

// Upcoming vs. past is always derived from start_at against server time, per
// the schema's design (lib/db/schema.ts) — never a manual flag. Shared here
// so the admin events list can filter the same way, minus the published-only
// restriction that only applies to the public site.
export function eventWhenCondition(when: EventsWhen) {
  return when === "upcoming" ? gte(events.startAt, new Date()) : lt(events.startAt, new Date());
}

export function eventOrderBy(sort: EventsSort) {
  return sort === "asc" ? asc(events.startAt) : desc(events.startAt);
}

// Upcoming reads soonest-first; past reads latest-first ("what happened most
// recently") — each view's natural order, used whenever no explicit sort is
// chosen (see EventsFilterBar, which only puts `sort` in the URL once the
// visitor picks one).
export function defaultSortFor(when: EventsWhen): EventsSort {
  return when === "past" ? "desc" : "asc";
}

export function getEvents({
  when = "upcoming",
  sort,
  limit,
}: { when?: EventsWhen; sort?: EventsSort; limit?: number } = {}) {
  const query = db
    .select()
    .from(events)
    .where(and(eq(events.status, "published"), eventWhenCondition(when)))
    .orderBy(eventOrderBy(sort ?? defaultSortFor(when)));
  return limit ? query.limit(limit) : query;
}

export async function getPublishedEventBySlug(slug: string) {
  const [row] = await db
    .select()
    .from(events)
    .where(and(eq(events.slug, slug), eq(events.status, "published")))
    .limit(1);
  return row ?? null;
}
