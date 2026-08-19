import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { articles } from "@/lib/db/schema";
import { updateArticle } from "@/app/admin/actions/articles";
import { ArticleForm } from "@/components/admin/ArticleForm";

export const metadata = { title: "Edit article" };

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [article] = await db.select().from(articles).where(eq(articles.id, id)).limit(1);
  if (!article) notFound();

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Edit article</h1>
      <ArticleForm action={updateArticle.bind(null, article.id)} defaults={article} submitLabel="Save changes" />
    </div>
  );
}
