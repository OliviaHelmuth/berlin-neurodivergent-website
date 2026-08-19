"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { articles } from "@/lib/db/schema";
import { requireAdmin } from "@/lib/auth/session";
import { slugify } from "@/lib/slug";

function articleValuesFromForm(formData: FormData) {
  const title = (formData.get("title") as string)?.trim();
  if (!title) throw new Error("Title is required.");

  const slugInput = (formData.get("slug") as string)?.trim();
  const status = formData.get("status") as string;

  return {
    title,
    slug: slugInput || slugify(title),
    excerpt: (formData.get("excerpt") as string)?.trim() || null,
    body: (formData.get("body") as string)?.trim() || "",
    coverImageUrl: (formData.get("coverImageUrl") as string)?.trim() || null,
    status: status === "published" ? ("published" as const) : ("draft" as const),
  };
}

function revalidateArticlePaths() {
  revalidatePath("/admin/articles");
  revalidatePath("/news");
}

// The one rule for the publishedAt transition, used by every mutation below
// instead of each reimplementing it (and drifting — toggleArticleStatus used
// to fall through to `undefined` instead of `null` on unpublish).
function nextPublishedAt(nextStatus: "draft" | "published", current: Date | null): Date | null {
  if (nextStatus !== "published") return current;
  return current ?? new Date();
}

export async function createArticle(formData: FormData) {
  const user = await requireAdmin();
  const values = articleValuesFromForm(formData);

  await db.insert(articles).values({
    ...values,
    authorId: user.id,
    publishedAt: nextPublishedAt(values.status, null),
  });

  revalidateArticlePaths();
  redirect("/admin/articles");
}

export async function updateArticle(id: string, formData: FormData) {
  await requireAdmin();
  const values = articleValuesFromForm(formData);

  const [original] = await db
    .select({ publishedAt: articles.publishedAt })
    .from(articles)
    .where(eq(articles.id, id))
    .limit(1);

  await db
    .update(articles)
    .set({
      ...values,
      publishedAt: nextPublishedAt(values.status, original?.publishedAt ?? null),
    })
    .where(eq(articles.id, id));

  revalidateArticlePaths();
  redirect("/admin/articles");
}

export async function deleteArticle(id: string) {
  await requireAdmin();
  await db.delete(articles).where(eq(articles.id, id));
  revalidateArticlePaths();
}

export async function toggleArticleStatus(id: string, currentStatus: string) {
  await requireAdmin();
  const nextStatus = currentStatus === "published" ? "draft" : "published";

  const [original] = await db
    .select({ publishedAt: articles.publishedAt })
    .from(articles)
    .where(eq(articles.id, id))
    .limit(1);

  await db
    .update(articles)
    .set({
      status: nextStatus,
      publishedAt: nextPublishedAt(nextStatus, original?.publishedAt ?? null),
    })
    .where(eq(articles.id, id));

  revalidateArticlePaths();
}
