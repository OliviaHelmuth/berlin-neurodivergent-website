"use server";

import { randomBytes } from "node:crypto";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { events } from "@/lib/db/schema";
import { requireAdmin } from "@/lib/auth/session";
import { slugify } from "@/lib/slug";
import { berlinInputToUTC } from "@/lib/events/time";

function eventValuesFromForm(formData: FormData) {
  const title = (formData.get("title") as string)?.trim();
  const venueName = (formData.get("venueName") as string)?.trim();
  const startAtInput = formData.get("startAt") as string;
  if (!title || !venueName || !startAtInput) {
    throw new Error("Title, venue, and start date are required.");
  }

  const slugInput = (formData.get("slug") as string)?.trim();
  const endAtInput = formData.get("endAt") as string;
  const eventSeriesId = formData.get("eventSeriesId") as string;
  const status = formData.get("status") as string;

  return {
    title,
    slug: slugInput || slugify(title),
    emoji: (formData.get("emoji") as string)?.trim() || null,
    description: (formData.get("description") as string)?.trim() || "",
    venueName,
    venueAddress: (formData.get("venueAddress") as string)?.trim() || null,
    startAt: berlinInputToUTC(startAtInput),
    endAt: endAtInput ? berlinInputToUTC(endAtInput) : null,
    eventSeriesId: eventSeriesId || null,
    rsvpUrl: (formData.get("rsvpUrl") as string)?.trim() || null,
    imageUrl: (formData.get("imageUrl") as string)?.trim() || null,
    status: status === "published" ? ("published" as const) : ("draft" as const),
  };
}

function revalidateEventPaths() {
  revalidatePath("/admin/events");
  revalidatePath("/events");
}

export async function createEvent(formData: FormData) {
  const user = await requireAdmin();
  const values = eventValuesFromForm(formData);

  await db.insert(events).values({ ...values, createdBy: user.id });

  revalidateEventPaths();
  redirect("/admin/events");
}

export async function updateEvent(id: string, formData: FormData) {
  await requireAdmin();
  const values = eventValuesFromForm(formData);

  await db.update(events).set(values).where(eq(events.id, id));

  revalidateEventPaths();
  redirect("/admin/events");
}

export async function deleteEvent(id: string) {
  await requireAdmin();
  await db.delete(events).where(eq(events.id, id));
  revalidateEventPaths();
}

export async function toggleEventStatus(id: string, currentStatus: string) {
  await requireAdmin();
  await db
    .update(events)
    .set({ status: currentStatus === "published" ? "draft" : "published" })
    .where(eq(events.id, id));
  revalidateEventPaths();
}

export async function duplicateEvent(id: string) {
  const user = await requireAdmin();
  const [original] = await db.select().from(events).where(eq(events.id, id)).limit(1);
  if (!original) throw new Error("Event not found.");

  const suffix = randomBytes(3).toString("hex");
  const [copy] = await db
    .insert(events)
    .values({
      ...original,
      id: undefined,
      slug: `${original.slug}-copy-${suffix}`,
      status: "draft",
      sourceKey: null,
      createdBy: user.id,
      createdAt: undefined,
      updatedAt: undefined,
    })
    .returning({ id: events.id });

  revalidateEventPaths();
  redirect(`/admin/events/${copy.id}/edit`);
}
