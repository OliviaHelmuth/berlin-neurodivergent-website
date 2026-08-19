import { Container } from "@/components/ui/Container";

export const metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Events</h1>
      <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
        This page will list upcoming and past events, pulled live from the database (split purely
        by date — no manual flagging). Not wired up yet: the events schema, seed data (63
        historical events captured back to Feb 2024, see{" "}
        <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-900">
          docs/site-audit.md
        </code>
        ), and the admin panel come in the next build phase.
      </p>
    </Container>
  );
}
