import {
  pgTable,
  pgEnum,
  uuid,
  text,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

export const adminRoleEnum = pgEnum("admin_role", ["admin", "editor"]);
export const contentStatusEnum = pgEnum("content_status", [
  "draft",
  "published",
]);

export const adminUsers = pgTable("admin_users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  role: adminRoleEnum("role").notNull().default("editor"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Lightweight recurrence tagging, not an RRULE engine — recurring events are
// individual dated rows sharing an eventSeriesId (see events table below).
export const eventSeries = pgTable("event_series", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const events = pgTable("events", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  emoji: varchar("emoji", { length: 8 }),
  description: text("description").notNull().default(""),
  venueName: text("venue_name").notNull(),
  venueAddress: text("venue_address"),
  // Upcoming vs. past is a derived query against startAt, never a manual flag.
  startAt: timestamp("start_at", { withTimezone: true }).notNull(),
  endAt: timestamp("end_at", { withTimezone: true }),
  eventSeriesId: uuid("event_series_id").references(() => eventSeries.id),
  rsvpUrl: text("rsvp_url"),
  imageUrl: text("image_url"),
  status: contentStatusEnum("status").notNull().default("draft"),
  // Unique per seeded row so scripts/seed-events.ts can upsert idempotently.
  sourceKey: text("source_key").unique(),
  createdBy: uuid("created_by").references(() => adminUsers.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const articles = pgTable("articles", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt"),
  body: text("body").notNull().default(""),
  coverImageUrl: text("cover_image_url"),
  status: contentStatusEnum("status").notNull().default("draft"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  authorId: uuid("author_id").references(() => adminUsers.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
