import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

// scrypt over bcrypt/argon2: both need a native binary that free-tier
// serverless functions would have to rebuild per platform (same reason this
// project picked Drizzle over Prisma) — node:crypto ships with Node itself.
const KEY_LENGTH = 64;

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, KEY_LENGTH).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;

  const storedHash = Buffer.from(hash, "hex");
  const suppliedHash = scryptSync(password, salt, KEY_LENGTH);
  if (storedHash.length !== suppliedHash.length) return false;

  return timingSafeEqual(storedHash, suppliedHash);
}
