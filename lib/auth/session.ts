import "server-only";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

// Defense-in-depth backstop for proxy.ts, per Next.js's auth guide
// (DAL section) — proxy runs on prefetches too, so it stays optimistic-only.
export async function requireAdmin() {
  const session = await auth();
  if (!session?.user) {
    redirect("/admin/login");
  }
  return session.user;
}
