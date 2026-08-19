import { Container } from "@/components/ui/Container";
import { DonateButton } from "@/components/layout/DonateButton";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Our Story</h1>
      <div className="prose prose-zinc max-w-2xl dark:prose-invert">
        <p>
          [Placeholder — full &quot;Our Story&quot; copy to be written with the org. In brief: this is a
          volunteer-run, peer-led community for neurodivergent adults in Berlin, open to anyone
          who identifies as neurodivergent regardless of formal diagnosis, funded by donations,
          and run on a safety-first, no-one-turned-away basis within the limits of volunteer
          capacity.]
        </p>
      </div>
      <div className="mt-10">
        <DonateButton />
      </div>
    </Container>
  );
}
