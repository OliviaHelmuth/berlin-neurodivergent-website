import Link from "next/link";
import { partners } from "@/content/partners";
import { footerLegalNav } from "@/content/nav";
import { site } from "@/content/site";

function PartnerRow({ title, category }: { title: string; category: "support" | "network" }) {
  const items = partners.filter((p) => p.category === category);
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">{title}</p>
      <div className="flex flex-wrap items-center gap-6">
        {items.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            title={partner.name}
            className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- local placeholder SVGs; swap to next/image once real logo files are supplied */}
            <img
              src={partner.logoSrc}
              alt={partner.name}
              width={96}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div>
          <p className="text-lg font-bold text-teal-700 dark:text-teal-400">{site.name}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{site.tagline}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <PartnerRow title="With support from" category="support" />
          <PartnerRow title="Network" category="network" />
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name} and contributors</p>
          <nav className="flex gap-4">
            {footerLegalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-teal-700 dark:hover:text-teal-400">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
