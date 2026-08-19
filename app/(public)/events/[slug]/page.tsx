import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getPublishedEventBySlug } from "@/lib/db/queries/events";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getPublishedEventBySlug(slug);
  return { title: event?.title ?? "Event not found" };
}

function formatEventDateTime(date: Date) {
  return date.toLocaleString("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getPublishedEventBySlug(slug);
  if (!event) notFound();

  return (
    <Container className="py-16">
      <Link href="/events" className="mb-6 inline-block text-sm text-teal-700 underline dark:text-teal-400">
        ← All events
      </Link>

      <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        {event.emoji ? `${event.emoji} ` : ""}
        {event.title}
      </h1>

      <p className="mb-1 font-medium text-teal-700 dark:text-teal-400">
        {formatEventDateTime(event.startAt)}
        {event.endAt ? ` – ${formatEventDateTime(event.endAt)}` : ""}
      </p>
      <p className="mb-8 text-zinc-600 dark:text-zinc-400">
        {event.venueName}
        {event.venueAddress ? `, ${event.venueAddress}` : ""}
      </p>

      {event.description && (
        <div className="mb-8 max-w-2xl whitespace-pre-wrap text-zinc-700 dark:text-zinc-300">
          {event.description}
        </div>
      )}

      {event.rsvpUrl && (
        <a
          href={event.rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
        >
          RSVP
        </a>
      )}
    </Container>
  );
}
