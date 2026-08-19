import { Container } from "@/components/ui/Container";

export const metadata = { title: "Neurocinema 2025" };

export default function Neurocinema2025Page() {
  return (
    <Container className="py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Neurocinema 2025</h1>
      <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
        Photo gallery placeholder — drop festival photos into{" "}
        <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-900">
          public/images/gallery/2025/
        </code>{" "}
        and render them here once supplied by the org.
      </p>
    </Container>
  );
}
