import { Container } from "@/components/ui/Container";

export const metadata = { title: "What is Neurodivergence" };

export default function WhatIsNeurodivergencePage() {
  return (
    <Container className="py-16">
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">What is Neurodivergence</h1>
      <div className="max-w-2xl rounded-lg border-2 border-dashed border-amber-500 bg-amber-50 p-6 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
        <p>
          The current site hosts a long-form, individually authored and cited essay on
          neurodiversity vs. neurodivergence here, credited to a named contributor. Reusing that
          exact text requires the author&apos;s explicit permission. Until that&apos;s confirmed
          with the org, this page should either link out to the author&apos;s original piece, or
          host freshly commissioned copy covering the same ground (neurodiversity vs.
          neurodivergence, prevalence, shared traits, societal barriers, the neurodiversity
          movement).
        </p>
      </div>
    </Container>
  );
}
