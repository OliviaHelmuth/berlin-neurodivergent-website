import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { events, eventSeries } from "@/lib/db/schema";
import { updateEvent } from "@/app/admin/actions/events";
import { EventForm } from "@/components/admin/EventForm";

export const metadata = { title: "Edit event" };

export default async function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [event] = await db.select().from(events).where(eq(events.id, id)).limit(1);
  if (!event) notFound();

  const seriesOptions = await db.select({ id: eventSeries.id, name: eventSeries.name }).from(eventSeries);

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Edit event</h1>
      <EventForm
        action={updateEvent.bind(null, event.id)}
        defaults={event}
        seriesOptions={seriesOptions}
        submitLabel="Save changes"
      />
    </div>
  );
}
