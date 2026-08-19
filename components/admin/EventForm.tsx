import { utcToBerlinInput } from "@/lib/events/time";

const inputClasses =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50";
const labelClasses = "text-sm font-medium text-zinc-700 dark:text-zinc-300";

type EventDefaults = {
  title?: string;
  slug?: string;
  emoji?: string | null;
  description?: string;
  venueName?: string;
  venueAddress?: string | null;
  startAt?: Date;
  endAt?: Date | null;
  eventSeriesId?: string | null;
  rsvpUrl?: string | null;
  imageUrl?: string | null;
  status?: string;
};

export function EventForm({
  action,
  defaults,
  seriesOptions,
  submitLabel,
}: {
  action: (formData: FormData) => Promise<void>;
  defaults?: EventDefaults;
  seriesOptions: { id: string; name: string }[];
  submitLabel: string;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className={labelClasses}>
          Title
        </label>
        <input id="title" name="title" required defaultValue={defaults?.title} className={inputClasses} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="slug" className={labelClasses}>
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            defaultValue={defaults?.slug}
            placeholder="auto-generated from title if left blank"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="emoji" className={labelClasses}>
            Emoji
          </label>
          <input id="emoji" name="emoji" defaultValue={defaults?.emoji ?? ""} className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className={labelClasses}>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={defaults?.description}
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="venueName" className={labelClasses}>
            Venue name
          </label>
          <input
            id="venueName"
            name="venueName"
            required
            defaultValue={defaults?.venueName}
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="venueAddress" className={labelClasses}>
            Venue address
          </label>
          <input
            id="venueAddress"
            name="venueAddress"
            defaultValue={defaults?.venueAddress ?? ""}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="startAt" className={labelClasses}>
            Start (Berlin time)
          </label>
          <input
            id="startAt"
            name="startAt"
            type="datetime-local"
            required
            defaultValue={defaults?.startAt ? utcToBerlinInput(defaults.startAt) : undefined}
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="endAt" className={labelClasses}>
            End (Berlin time, optional)
          </label>
          <input
            id="endAt"
            name="endAt"
            type="datetime-local"
            defaultValue={defaults?.endAt ? utcToBerlinInput(defaults.endAt) : undefined}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="eventSeriesId" className={labelClasses}>
            Recurring series
          </label>
          <select
            id="eventSeriesId"
            name="eventSeriesId"
            defaultValue={defaults?.eventSeriesId ?? ""}
            className={inputClasses}
          >
            <option value="">None</option>
            {seriesOptions.map((series) => (
              <option key={series.id} value={series.id}>
                {series.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="status" className={labelClasses}>
            Status
          </label>
          <select id="status" name="status" defaultValue={defaults?.status ?? "draft"} className={inputClasses}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="rsvpUrl" className={labelClasses}>
            RSVP URL
          </label>
          <input id="rsvpUrl" name="rsvpUrl" defaultValue={defaults?.rsvpUrl ?? ""} className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="imageUrl" className={labelClasses}>
            Image URL
          </label>
          <input id="imageUrl" name="imageUrl" defaultValue={defaults?.imageUrl ?? ""} className={inputClasses} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 w-fit rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        {submitLabel}
      </button>
    </form>
  );
}
