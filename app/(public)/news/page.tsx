import { Container } from "@/components/ui/Container";

export const metadata = { title: "News and Updates" };

export default function NewsPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">News and Updates</h1>
      <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
        Articles will be manageable from the admin panel once the <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-900">articles</code> schema
        and CRUD screens are built. No posts yet.
      </p>
    </Container>
  );
}
