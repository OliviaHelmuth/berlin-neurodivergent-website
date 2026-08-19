const inputClasses =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50";
const labelClasses = "text-sm font-medium text-zinc-700 dark:text-zinc-300";

type ArticleDefaults = {
  title?: string;
  slug?: string;
  excerpt?: string | null;
  body?: string;
  coverImageUrl?: string | null;
  status?: string;
};

export function ArticleForm({
  action,
  defaults,
  submitLabel,
}: {
  action: (formData: FormData) => Promise<void>;
  defaults?: ArticleDefaults;
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
          <label htmlFor="status" className={labelClasses}>
            Status
          </label>
          <select id="status" name="status" defaultValue={defaults?.status ?? "draft"} className={inputClasses}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="excerpt" className={labelClasses}>
          Excerpt
        </label>
        <textarea id="excerpt" name="excerpt" rows={2} defaultValue={defaults?.excerpt ?? ""} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="body" className={labelClasses}>
          Body
        </label>
        <textarea id="body" name="body" rows={12} defaultValue={defaults?.body} className={inputClasses} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="coverImageUrl" className={labelClasses}>
          Cover image URL
        </label>
        <input
          id="coverImageUrl"
          name="coverImageUrl"
          defaultValue={defaults?.coverImageUrl ?? ""}
          className={inputClasses}
        />
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
