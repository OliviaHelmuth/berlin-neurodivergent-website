import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getPublishedArticleBySlug } from "@/lib/db/queries/articles";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);
  return { title: article?.title ?? "Post not found" };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);
  if (!article) notFound();

  return (
    <Container className="py-16">
      <Link href="/news" className="mb-6 inline-block text-sm text-teal-700 underline dark:text-teal-400">
        ← All news
      </Link>

      <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
        {article.publishedAt?.toLocaleDateString("en-GB", { timeZone: "Europe/Berlin", dateStyle: "long" })}
      </p>
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">{article.title}</h1>

      <div className="max-w-2xl whitespace-pre-wrap text-zinc-700 dark:text-zinc-300">{article.body}</div>
    </Container>
  );
}
