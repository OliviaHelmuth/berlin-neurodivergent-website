import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DonateButton } from "@/components/layout/DonateButton";

export const metadata = { title: "Neurocinema" };

const guidelines = [
  "18+ event",
  "Non-neurodivergent people are welcome",
  "Zero tolerance for harassment or bigotry",
];

export default function NeurocinemaPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Neurocinema</h1>
      <p className="mb-6 max-w-xl text-zinc-600 dark:text-zinc-400">
        A film festival celebrating neurodivergence through cinema.
      </p>

      <ul className="mb-8 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
        {guidelines.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>

      <div className="mb-10 rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
        <p className="font-semibold text-zinc-900 dark:text-zinc-50">Neurocinema 2026 — Coming Soon</p>
      </div>

      <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Previous editions</h2>
      <div className="mb-10 flex gap-4">
        <Link href="/neurocinema/2025" className="text-teal-700 underline dark:text-teal-400">
          2025 gallery
        </Link>
        <Link href="/neurocinema/2024" className="text-teal-700 underline dark:text-teal-400">
          2024 gallery
        </Link>
      </div>

      <DonateButton />
    </Container>
  );
}
