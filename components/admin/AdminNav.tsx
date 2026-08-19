import Link from "next/link";
import { logoutAction } from "@/app/admin/actions/auth";

export function AdminNav({ userLabel }: { userLabel: string }) {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <nav className="flex items-center gap-6">
          <span className="font-semibold text-zinc-900 dark:text-zinc-50">Admin</span>
          <Link href="/admin/events" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
            Events
          </Link>
          <Link href="/admin/articles" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
            Articles
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-sm text-zinc-500 dark:text-zinc-500">{userLabel}</span>
          <form action={logoutAction}>
            <button type="submit" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
