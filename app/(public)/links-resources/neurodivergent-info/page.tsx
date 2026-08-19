import { Container } from "@/components/ui/Container";

export const metadata = { title: "Neurodivergent Info" };

const topics = [
  "ADHD medications overview",
  "Autistic burnout",
  "Autism / ADHD self-test tools",
  "ADHD supplements research",
  "ADHD vs. autism overlap",
  "Neuroscience perspectives on neurodivergence",
];

export default function NeurodivergentInfoPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Neurodivergent Info</h1>
      <p className="mb-8 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
        Links below are community-submitted external resources, not medical advice.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {topics.map((topic) => (
          <li
            key={topic}
            className="rounded-lg border border-zinc-200 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            {topic}{" "}
            <span className="text-xs text-zinc-400">(link TBD — confirm exact URLs with org)</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
