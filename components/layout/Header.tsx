import Link from "next/link";
import { primaryNav } from "@/content/nav";
import { site } from "@/content/site";
import { DonateButton } from "./DonateButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-black/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-teal-700 dark:text-teal-400">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {primaryNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="text-sm font-medium text-zinc-700 hover:text-teal-700 dark:text-zinc-200 dark:hover:text-teal-400"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-10 min-w-[220px] rounded-lg border border-zinc-200 bg-white py-2 opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100 dark:border-zinc-800 dark:bg-zinc-950">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-teal-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <DonateButton />
      </div>
    </header>
  );
}
