import { NextResponse } from "next/server";
import { auth } from "@/auth";

// Optimistic check only (reads the JWT cookie, no DB hit) — matches
// Next.js's auth guide. Every /admin/* page also calls requireAdmin()
// (lib/auth/session.ts) as the real gate.
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isLoginPage = req.nextUrl.pathname === "/admin/login";

  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", req.nextUrl));
  }

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/admin/events", req.nextUrl));
  }
});

export const config = {
  matcher: ["/admin/:path*"],
};
