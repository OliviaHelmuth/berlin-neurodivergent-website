import { Container } from "@/components/ui/Container";
import { EventCard } from "@/components/events/EventCard";
import { EventsFilterBar } from "@/components/events/EventsFilterBar";
import { defaultSortFor, getEvents, type EventsSort, type EventsWhen } from "@/lib/db/queries/events";

export const metadata = { title: "Events" };

function parseWhen(value?: string): EventsWhen {
  return value === "past" ? "past" : "upcoming";
}

function parseSort(value: string | undefined, when: EventsWhen): EventsSort {
  if (value === "asc" || value === "desc") return value;
  return defaultSortFor(when);
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ when?: string; sort?: string }>;
}) {
  const params = await searchParams;
  const when = parseWhen(params.when);
  const sort = parseSort(params.sort, when);
  const list = await getEvents({ when, sort });

  return (
    <Container className="py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Events</h1>
      <p className="mb-8 max-w-xl text-zinc-600 dark:text-zinc-400">
        Peer-led meetups, workshops, and socials across Berlin.
      </p>

      <EventsFilterBar basePath="/events" when={when} sort={sort} />

      {list.length === 0 ? (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {when === "upcoming"
            ? "No upcoming events posted right now — check back soon."
            : "No past events yet."}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {list.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </Container>
  );
}
