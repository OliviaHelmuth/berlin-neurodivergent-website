import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getPublishedArticles } from "@/lib/db/queries/articles";

export const metadata = { title: "News and Updates" };

function formatDate(date: Date | null) {
  if (!date) return "";
  return date.toLocaleDateString("en-GB", { timeZone: "Europe/Berlin", dateStyle: "long" });
}

export default async function NewsPage() {
  const posts = await getPublishedArticles();

  return (
    <Container className="py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">News and Updates</h1>
      <p className="mb-10 max-w-xl text-zinc-600 dark:text-zinc-400">
        Announcements and updates from the community.
      </p>

      {posts.length === 0 ? (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">No posts yet — check back soon.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.slug}`}
              className="block rounded-lg border border-zinc-200 p-6 transition-colors hover:border-teal-400 dark:border-zinc-800 dark:hover:border-teal-600"
            >
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{formatDate(post.publishedAt)}</p>
              <h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">{post.title}</h2>
              {post.excerpt && (
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
}
