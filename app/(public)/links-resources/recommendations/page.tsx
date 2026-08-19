import { Container } from "@/components/ui/Container";

export const metadata = { title: "Neurodivergent Recommendations" };

const items = [
  "CBT-style support chatbot",
  "Real-time transcription tool",
  "AI brainstorming tool",
  "Medication reminder / pill organizer",
];

export default function RecommendationsPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Recommendations</h1>
      <p className="mb-8 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
        Community-curated tool recommendations with personal blurbs — placeholder list below;
        original first-person reviews from the org should replace these before launch.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-zinc-200 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </Container>
  );
}
