import { createArticle } from "@/app/admin/actions/articles";
import { ArticleForm } from "@/components/admin/ArticleForm";

export const metadata = { title: "New article" };

export default function NewArticlePage() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">New article</h1>
      <ArticleForm action={createArticle} submitLabel="Create article" />
    </div>
  );
}
