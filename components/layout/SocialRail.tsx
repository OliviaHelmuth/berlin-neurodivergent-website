import { site } from "@/content/site";

const links = [
  { label: "Ko-fi", href: site.social.kofi },
  { label: "Meetup", href: site.social.meetup },
  { label: "Instagram", href: site.social.instagram },
];

export function SocialRail() {
  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-xs font-medium text-zinc-600 shadow-sm transition-colors hover:border-teal-600 hover:text-teal-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
          aria-label={link.label}
        >
          {link.label.slice(0, 2)}
        </a>
      ))}
    </div>
  );
}
