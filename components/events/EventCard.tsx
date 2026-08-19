import Link from "next/link";
import type { events } from "@/lib/db/schema";

type Event = typeof events.$inferSelect;

function formatEventDate(date: Date) {
  return date.toLocaleString("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function EventCard({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="block rounded-lg border border-zinc-200 p-4 transition-colors hover:border-teal-400 dark:border-zinc-800 dark:hover:border-teal-600"
    >
      <p className="text-sm font-medium text-teal-700 dark:text-teal-400">{formatEventDate(event.startAt)}</p>
      <h3 className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">
        {event.emoji ? `${event.emoji} ` : ""}
        {event.title}
      </h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{event.venueName}</p>
    </Link>
  );
}
