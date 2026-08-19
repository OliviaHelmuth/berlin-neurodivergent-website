import { Container } from "@/components/ui/Container";
import { DonateButton } from "@/components/layout/DonateButton";
import { site } from "@/content/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Join the Community</h1>
      <p className="mb-8 max-w-xl text-zinc-600 dark:text-zinc-400">
        Reach out, follow along, or support the community directly.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href={`mailto:${site.contactEmail}`}
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 hover:border-teal-600 hover:text-teal-700 dark:border-zinc-700 dark:text-zinc-100"
        >
          Contact Us — {site.contactEmail}
        </a>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 hover:border-teal-600 hover:text-teal-700 dark:border-zinc-700 dark:text-zinc-100"
        >
          Join our socials
        </a>
        <DonateButton />
      </div>
    </Container>
  );
}
