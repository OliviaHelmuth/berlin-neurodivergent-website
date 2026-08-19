import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DonateButton } from "@/components/layout/DonateButton";
import { EventCard } from "@/components/events/EventCard";
import { getEvents } from "@/lib/db/queries/events";

const cards = [
  {
    title: "Gather",
    body: "Peer-led meetups, sharing circles, and social events across Berlin.",
    href: "/about",
  },
  {
    title: "Connect",
    body: "See what's coming up next and find an event that fits.",
    href: "/events",
  },
  {
    title: "Support",
    body: "Get involved as a volunteer, or support the community with a donation.",
    href: "/about/contact",
  },
];

export default async function HomePage() {
  const upcoming = await getEvents({ when: "upcoming", sort: "asc", limit: 3 });

  return (
    <>
      <section className="border-b border-zinc-200 bg-gradient-to-b from-teal-50 to-white py-20 dark:border-zinc-800 dark:from-teal-950/20 dark:to-black">
        <Container className="flex flex-col items-start gap-6">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            A peer-led community for neurodivergent people in Berlin
          </h1>
          <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
            Events, resources, and a space to connect — no diagnosis required.
          </p>
          <div className="flex gap-4">
            <Link
              href="/events"
              className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              See upcoming events
            </Link>
            <DonateButton />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-xl border border-zinc-200 p-6 transition-colors hover:border-teal-400 dark:border-zinc-800 dark:hover:border-teal-600"
              >
                <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{card.title}</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{card.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
        <Container>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Upcoming events</h2>
          {upcoming.length === 0 ? (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              No upcoming events posted right now — check back soon.
            </p>
          ) : (
            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
          <Link href="/events" className="text-sm text-teal-700 underline dark:text-teal-400">
            See the full events page →
          </Link>
        </Container>
      </section>
    </>
  );
}
