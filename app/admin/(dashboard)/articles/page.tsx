import Link from "next/link";
import { desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { articles } from "@/lib/db/schema";
import { deleteArticle, toggleArticleStatus } from "@/app/admin/actions/articles";
import { DeleteButton } from "@/components/admin/DeleteButton";

export const metadata = { title: "Articles" };

export default async function AdminArticlesPage() {
  const rows = await db
    .select({
      id: articles.id,
      title: articles.title,
      status: articles.status,
      publishedAt: articles.publishedAt,
      updatedAt: articles.updatedAt,
    })
    .from(articles)
    .orderBy(desc(articles.updatedAt));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Articles</h1>
        <Link
          href="/admin/articles/new"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          New article
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Published</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-zinc-100 last:border-0 dark:border-zinc-900">
                <td className="px-4 py-3 text-zinc-900 dark:text-zinc-50">{row.title}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      row.status === "published"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                  {row.publishedAt
                    ? row.publishedAt.toLocaleDateString("en-GB", { timeZone: "Europe/Berlin" })
                    : "—"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Link href={`/admin/articles/${row.id}/edit`} className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
                      Edit
                    </Link>
                    <form action={toggleArticleStatus.bind(null, row.id, row.status)}>
                      <button type="submit" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
                        {row.status === "published" ? "Unpublish" : "Publish"}
                      </button>
                    </form>
                    <DeleteButton
                      action={deleteArticle.bind(null, row.id)}
                      confirmMessage={`Delete "${row.title}"? This can't be undone.`}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-zinc-500 dark:text-zinc-500">
                  No articles yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
