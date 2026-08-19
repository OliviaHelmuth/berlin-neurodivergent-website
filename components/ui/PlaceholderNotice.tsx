export function PlaceholderNotice({ page }: { page: string }) {
  return (
    <div
      role="note"
      className="mb-8 rounded-lg border-2 border-dashed border-amber-500 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
    >
      <strong>Draft placeholder — not final.</strong> The {page} below is a
      structural placeholder pending real details from Neurodivergent
      Berlin&apos;s leadership. Do not treat this page as accurate or legally
      binding until it has been reviewed and completed.
    </div>
  );
}
