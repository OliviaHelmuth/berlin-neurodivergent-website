// Bootstraps an admin_users row (first staff login, or any subsequent one).
// Refuses to run if the email already exists, so re-running is safe.
//
// Usage: npm run db:create-admin -- --email you@example.com --name "Your Name" [--role editor] [--password ...]
// If --password is omitted, a random one is generated and printed once.
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { randomBytes } from "node:crypto";
import { adminUsers } from "../lib/db/schema";
import { hashPassword } from "../lib/auth/password";

function parseArgs() {
  const args = process.argv.slice(2);
  const get = (flag: string) => {
    const idx = args.indexOf(flag);
    return idx === -1 ? undefined : args[idx + 1];
  };

  const roleInput = get("--role") ?? "admin";
  if (roleInput !== "admin" && roleInput !== "editor") {
    throw new Error(`--role must be "admin" or "editor", got "${roleInput}"`);
  }
  const role: "admin" | "editor" = roleInput;

  const email = get("--email");
  if (!email) throw new Error("--email is required");

  const name = get("--name");
  if (!name) throw new Error("--name is required");

  return { email: email.toLowerCase(), name, role, password: get("--password") };
}

async function main() {
  const { email, name, role, password: providedPassword } = parseArgs();
  // Dynamic import: see scripts/seed-events.ts for why this must come after
  // dotenv's config() rather than as a static top-level import.
  const { db } = await import("../lib/db");

  const [existing] = await db
    .select({ id: adminUsers.id })
    .from(adminUsers)
    .where(eq(adminUsers.email, email))
    .limit(1);

  if (existing) {
    console.error(`An admin user with email ${email} already exists.`);
    process.exit(1);
  }

  const password = providedPassword ?? randomBytes(15).toString("base64url");
  const passwordHash = hashPassword(password);

  await db.insert(adminUsers).values({ email, name, role, passwordHash });

  console.log(`Created ${role} user ${email}.`);
  if (!providedPassword) {
    console.log(`Generated password: ${password}`);
    console.log("Store this securely — it isn't saved anywhere else. Sign in at /admin/login.");
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
