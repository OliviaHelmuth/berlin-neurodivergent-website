// Currently-live upcoming events, captured by hand from
// https://www.neurodivergent-berlin.com/events on 2026-08-19 (title, exact
// time, and venue only — full event descriptions are the org's own written
// copy and aren't ported here, matching the historical seed's approach).
// This is a one-time top-up alongside the historical archive, not an
// ongoing scraper — new events go through the admin panel from here on.
export type UpcomingSeedEvent = {
  date: string; // YYYY-MM-DD, Berlin local
  startTime: string; // HH:MM 24h, Berlin local
  endTime?: string; // HH:MM 24h, Berlin local
  title: string;
  emoji?: string;
  venueName: string;
  venueAddress?: string;
};

export const upcomingEventsSeed: UpcomingSeedEvent[] = [
  {
    date: "2026-08-22",
    startTime: "15:00",
    endTime: "17:00",
    title: "New to Neurodivergence Meetup (ADHD, Autistic, AuDHD, etc)",
    emoji: "♾️",
    venueName: "Taiji Chan",
    venueAddress: "Park am Gleisdreieck, Möckernstraße, 10963 Berlin, Germany",
  },
  {
    date: "2026-08-27",
    startTime: "15:00",
    endTime: "18:00",
    title: "Neurodivergent Co-working & Networking",
    emoji: "💼",
    venueName: "Humboldt Forum",
    venueAddress: "Schloßpl., 10178 Berlin, Germany",
  },
  {
    date: "2026-08-29",
    startTime: "15:00",
    endTime: "18:00",
    title: "Neurodivergent Speedfriending",
    emoji: "✨",
    venueName: "Schöneberger Wiese",
    venueAddress: "Kreuzberg, 10963 Berlin, Germany",
  },
  // Recurring monthly (first Monday) — 4 of the 6 published occurrences were
  // visible on the live site without further pagination; later ones can be
  // added through the admin panel as they're announced.
  {
    date: "2026-09-07",
    startTime: "18:00",
    endTime: "20:00",
    title: "Neurodivergent Creative Sharing Circle",
    venueName: "Berlin",
    venueAddress: "Blücherpl. 1, 10961 Berlin, Germany",
  },
  {
    date: "2026-10-05",
    startTime: "18:00",
    endTime: "20:00",
    title: "Neurodivergent Creative Sharing Circle",
    venueName: "Berlin",
    venueAddress: "Blücherpl. 1, 10961 Berlin, Germany",
  },
  {
    date: "2026-11-02",
    startTime: "18:00",
    endTime: "20:00",
    title: "Neurodivergent Creative Sharing Circle",
    venueName: "Berlin",
    venueAddress: "Blücherpl. 1, 10961 Berlin, Germany",
  },
  {
    date: "2026-12-07",
    startTime: "18:00",
    endTime: "20:00",
    title: "Neurodivergent Creative Sharing Circle",
    venueName: "Berlin",
    venueAddress: "Blücherpl. 1, 10961 Berlin, Germany",
  },
];
