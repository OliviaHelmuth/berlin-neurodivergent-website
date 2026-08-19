import { Container } from "@/components/ui/Container";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { site } from "@/content/site";

export const metadata = { title: "Terms of Use", robots: { index: false, follow: false } };

const sections = [
  { heading: "Acceptance of terms", body: "[org to confirm wording]" },
  { heading: "Permitted use", body: "[org to confirm wording]" },
  { heading: "User conduct", body: "[org to confirm wording — e.g. safety/harassment policy for events]" },
  { heading: "Content ownership", body: "[org to confirm wording]" },
  { heading: "User-generated content license", body: "[org to confirm wording]" },
  { heading: "Third-party links", body: "[org to confirm wording]" },
  { heading: "Liability disclaimer", body: "[org to confirm wording]" },
  { heading: "Indemnification", body: "[org to confirm wording]" },
  { heading: "Right to modify these terms", body: "[org to confirm wording]" },
  { heading: "Contact", body: `Questions about these terms can be sent to ${site.contactEmail}.` },
];

export default function TermsOfUsePage() {
  return (
    <Container className="py-16">
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Terms of Use</h1>
      <PlaceholderNotice page="Terms of Use" />
      <p className="mb-6 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
        The version on the live site still contains unfilled template placeholders (e.g. literal
        &quot;[Community Name]&quot; text) rather than {site.name}&apos;s actual name — this rebuild replaces
        it with a properly customized version once the org reviews the sections below.
      </p>
      <div className="max-w-xl space-y-6 text-sm text-zinc-700 dark:text-zinc-300">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">{s.heading}</h2>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
