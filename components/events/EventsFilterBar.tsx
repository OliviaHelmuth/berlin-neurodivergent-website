import Link from "next/link";
import type { EventsSort, EventsWhen } from "@/lib/db/queries/events";

const pillBase = "rounded-full px-3 py-1 text-sm font-medium transition-colors";
const pillActive = "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900";
const pillInactive =
  "border border-zinc-300 text-zinc-600 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-400";

export function EventsFilterBar({
  basePath,
  when,
  sort,
}: {
  basePath: string;
  when: EventsWhen;
  sort: EventsSort;
}) {
  // Switching "when" leaves sort unset, so the target view falls back to its
  // own natural default (soonest-first for upcoming, latest-first for past)
  // instead of carrying over whatever was chosen for the other view.
  function hrefForWhen(nextWhen: EventsWhen) {
    return `${basePath}?when=${nextWhen}`;
  }

  function hrefForSort(nextSort: EventsSort) {
    const params = new URLSearchParams({ when, sort: nextSort });
    return `${basePath}?${params.toString()}`;
  }

  return (
    <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3">
      <div className="flex gap-2">
        <Link href={hrefForWhen("upcoming")} className={`${pillBase} ${when === "upcoming" ? pillActive : pillInactive}`}>
          Upcoming
        </Link>
        <Link href={hrefForWhen("past")} className={`${pillBase} ${when === "past" ? pillActive : pillInactive}`}>
          Past events
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">Sort</span>
        <Link href={hrefForSort("asc")} className={`${pillBase} ${sort === "asc" ? pillActive : pillInactive}`}>
          Date ↑
        </Link>
        <Link href={hrefForSort("desc")} className={`${pillBase} ${sort === "desc" ? pillActive : pillInactive}`}>
          Date ↓
        </Link>
      </div>
    </div>
  );
}
