import Link from "next/link";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { events, eventSeries } from "@/lib/db/schema";
import { duplicateEvent, deleteEvent, toggleEventStatus } from "@/app/admin/actions/events";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { EventsFilterBar } from "@/components/events/EventsFilterBar";
import {
  defaultSortFor,
  eventOrderBy,
  eventWhenCondition,
  type EventsSort,
  type EventsWhen,
} from "@/lib/db/queries/events";

export const metadata = { title: "Events" };

function parseWhen(value?: string): EventsWhen {
  return value === "past" ? "past" : "upcoming";
}

function parseSort(value: string | undefined, when: EventsWhen): EventsSort {
  if (value === "asc" || value === "desc") return value;
  return defaultSortFor(when);
}

export default async function AdminEventsPage({
  searchParams,
}: {
  searchParams: Promise<{ when?: string; sort?: string }>;
}) {
  const params = await searchParams;
  const when = parseWhen(params.when);
  const sort = parseSort(params.sort, when);

  const rows = await db
    .select({
      id: events.id,
      title: events.title,
      startAt: events.startAt,
      status: events.status,
      seriesName: eventSeries.name,
    })
    .from(events)
    .leftJoin(eventSeries, eq(events.eventSeriesId, eventSeries.id))
    .where(eventWhenCondition(when))
    .orderBy(eventOrderBy(sort));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Events</h1>
        <Link
          href="/admin/events/new"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          New event
        </Link>
      </div>

      <EventsFilterBar basePath="/admin/events" when={when} sort={sort} />

      <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Series</th>
              <th className="px-4 py-3 font-medium">Start</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-zinc-100 last:border-0 dark:border-zinc-900">
                <td className="px-4 py-3 text-zinc-900 dark:text-zinc-50">{row.title}</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{row.seriesName ?? "—"}</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                  {row.startAt.toLocaleString("en-GB", { timeZone: "Europe/Berlin", dateStyle: "medium", timeStyle: "short" })}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      row.status === "published"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Link href={`/admin/events/${row.id}/edit`} className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
                      Edit
                    </Link>
                    <form action={duplicateEvent.bind(null, row.id)}>
                      <button type="submit" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
                        Duplicate
                      </button>
                    </form>
                    <form action={toggleEventStatus.bind(null, row.id, row.status)}>
                      <button type="submit" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
                        {row.status === "published" ? "Unpublish" : "Publish"}
                      </button>
                    </form>
                    <DeleteButton
                      action={deleteEvent.bind(null, row.id)}
                      confirmMessage={`Delete "${row.title}"? This can't be undone.`}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-zinc-500 dark:text-zinc-500">
                  {when === "upcoming" ? "No upcoming events." : "No past events."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
