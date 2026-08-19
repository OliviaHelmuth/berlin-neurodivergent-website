import { Container } from "@/components/ui/Container";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata = { title: "Privacy Policy", robots: { index: false, follow: false } };

const sections = [
  {
    heading: "Controller",
    body: "[to be supplied — same responsible entity as the Impressum]",
  },
  {
    heading: "Data we process",
    body: "Name/email if voluntarily given (e.g. contact form or event RSVP), and basic hosting/analytics logs.",
  },
  {
    heading: "Purpose and lawful basis (GDPR Art. 6)",
    body: "[org to confirm — e.g. consent for newsletter, legitimate interest for basic site operation]",
  },
  {
    heading: "Third-party services / processors",
    body: "This site is hosted on Vercel and uses Neon for its database; donations are handled entirely by Ko-fi, an external platform with its own privacy policy. [org to confirm any analytics tool added]",
  },
  {
    heading: "Data retention",
    body: "[org to confirm retention periods]",
  },
  {
    heading: "Your rights (GDPR Art. 12–22)",
    body: "You have the right to access, rectify, or delete your data, restrict or object to processing, and data portability. [org to confirm request-handling process]",
  },
  {
    heading: "Supervisory authority",
    body: "You may lodge a complaint with the Berlin Commissioner for Data Protection and Freedom of Information (BlnBDI).",
  },
  {
    heading: "Cookies",
    body: "[org to confirm — no tracking cookies were detected on the current live site, but this section must reflect what the rebuilt site actually sets]",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Privacy Policy</h1>
      <PlaceholderNotice page="Privacy Policy" />
      <p className="mb-6 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
        The policy on the live site is generic and doesn&apos;t name Wix or Ko-fi as data
        processors, nor include GDPR-specific language — this version scaffolds the required
        GDPR structure, naming the services this rebuild actually uses.
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
