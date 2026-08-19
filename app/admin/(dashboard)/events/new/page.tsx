import { db } from "@/lib/db";
import { eventSeries } from "@/lib/db/schema";
import { createEvent } from "@/app/admin/actions/events";
import { EventForm } from "@/components/admin/EventForm";

export const metadata = { title: "New event" };

export default async function NewEventPage() {
  const seriesOptions = await db.select({ id: eventSeries.id, name: eventSeries.name }).from(eventSeries);

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">New event</h1>
      <EventForm action={createEvent} seriesOptions={seriesOptions} submitLabel="Create event" />
    </div>
  );
}
