// Historical events transcribed from docs/site-audit.md §3 (fully exhausted
// Wix "Load More" pull — 63 events, Feb 2024 through Aug 2026). Only
// title/date/venue were captured in the audit's list view, not full
// descriptions or exact times — see seed-events.ts for how the gaps are
// filled (placeholder description, inferred 18:00 Europe/Berlin start time).
export type SeedEvent = {
  date: string; // YYYY-MM-DD, local Berlin date as captured in the audit
  title: string;
  venueName: string;
};

export const eventsSeed: SeedEvent[] = [
  // 2024 — 11 events
  { date: "2024-02-29", title: "NeuroCinema: Watch a Movie about Neurodivergence (Learning Disability Docu)", venueName: "Berlin" },
  { date: "2024-04-25", title: "Offline Co-working Thursdays and ND-Chat", venueName: "Holiday Inn Express Berlin City Centre" },
  { date: "2024-06-29", title: "Abstract Art Workshop for Neurodivergent Individuals", venueName: "Berlin" },
  { date: "2024-09-19", title: "Neurodivergent Coworking Thursdays and Meetup (recurring)", venueName: "Berlin" },
  { date: "2024-09-26", title: "Time Management while Neurodivergent", venueName: "Berlin" },
  { date: "2024-10-12", title: "Neurodivergent Stroll: Cozy Autumn Walk and Cafe Hangout", venueName: "Berlin" },
  { date: "2024-10-28", title: "Neurocinema: Neurodivergent Film-Festival (Day 1)", venueName: "Berlin" },
  { date: "2024-10-29", title: "Neurocinema: Neurodivergent Film-Festival (Day 2)", venueName: "Online (Zoom)" },
  { date: "2024-10-30", title: "Neurocinema: Neurodivergent Film-Festival (Day 3)", venueName: "Berlin" },
  { date: "2024-10-31", title: "Neurocinema: Neurodivergent Film-Festival (Day 4)", venueName: "Berlin" },
  { date: "2024-11-01", title: "Neurocinema: Neurodivergent Film-Festival (Day 5)", venueName: "Berlin" },

  // 2025 — 30 events (includes Neurocinema Film-Fest 2025, 4 screenings same day)
  { date: "2025-02-22", title: "Berlin Neurodivergent Meetup (ADHD, Autistic, AuDHD, Dyslexic, etc)", venueName: "Berlin" },
  { date: "2025-03-08", title: "Neurodivergent Arts and Craft Meetup", venueName: "Berlin" },
  { date: "2025-03-15", title: "Neurodivergent Reading Club: Silent Reading & Connection", venueName: "Berlin" },
  { date: "2025-03-25", title: "Movie Night & Discussion for Autistic & AuDHD Minds", venueName: "Berlin" },
  { date: "2025-04-19", title: "Neurodivergent Board & Card Game Meetup", venueName: "Berlin" },
  { date: "2025-04-28", title: "Yoga in the Park for Neurodivergent People", venueName: "Berlin" },
  { date: "2025-05-07", title: "Neurodivergent Dog Lovers Meetup", venueName: "Berlin" },
  { date: "2025-05-10", title: "Neurodivergent Dog Lovers Meetup", venueName: "Berlin" },
  { date: "2025-05-14", title: "Yoga in the Park for Neurodivergent People (Beginner)", venueName: "Berlin" },
  { date: "2025-05-24", title: "Neurodivergent Spring Cleaning Swap", venueName: "Berlin" },
  { date: "2025-06-08", title: "Neurodivergent Board & Card Game Meetup", venueName: "Berlin" },
  { date: "2025-06-13", title: "Neurodivergent Walk – Pride Week", venueName: "Berlin" },
  { date: "2025-06-21", title: "Neurodivergent Day Trip: Spreewald", venueName: "Berlin" },
  { date: "2025-06-27", title: "Neurodivergent Music Therapy: Song Sharing and Discussion", venueName: "Berlin" },
  { date: "2025-07-12", title: "Berlin Neurodivergent Meetup (ADHD, Autistic, Dyslexic, Tourette, etc)", venueName: "Berlin" },
  { date: "2025-07-19", title: "Neurodivergent Speedfriending – Outdoors (5th edition)", venueName: "Berlin" },
  { date: "2025-07-31", title: "Neurodivergent Co-working & Networking (recurring)", venueName: "Berlin" },
  { date: "2025-08-08", title: "Neurodivergent Music Therapy: Song Sharing and Discussion", venueName: "Berlin" },
  { date: "2025-08-09", title: "Neurodivergent Board & Card Game Meetup", venueName: "Berlin" },
  { date: "2025-08-16", title: "Berlin Neurodivergent Meetup (ADHD, Autistic, Dyslexic, Tourette, etc)", venueName: "Berlin" },
  { date: "2025-08-21", title: "Neurodivergent Film Screening & Discussion", venueName: "Berlin" },
  { date: "2025-09-06", title: "Neurodivergent Speedfriending – Outdoors (6th edition)", venueName: "Berlin" },
  { date: "2025-09-13", title: "Neurodivergent Parent Meetup (ADHD, Autistic, Dyslexic, etc)", venueName: "Berlin" },
  { date: "2025-10-03", title: "Neurodivergent Board & Card Game Meetup", venueName: "Berlin" },
  { date: "2025-10-11", title: "Neurocinema Film-Fest 2025: Film Screening 1", venueName: "Berlin" },
  { date: "2025-10-11", title: "Neurocinema Film-Fest 2025: Film Screening 2", venueName: "Berlin" },
  { date: "2025-10-11", title: "Neurocinema Film-Fest 2025: Film Screening 3", venueName: "Berlin" },
  { date: "2025-10-11", title: "Neurocinema Film-Fest 2025: Film Screening 4", venueName: "Berlin" },
  { date: "2025-11-07", title: "Neurodivergent Music Therapy: Song Sharing and Discussion", venueName: "Berlin" },
  { date: "2025-11-10", title: "Neurodivergent Lantern Walk", venueName: "Berlin" },

  // 2026 — 22 events (year to date)
  { date: "2026-01-01", title: "Neurodivergent Co-working & Networking (recurring)", venueName: "Berlin" },
  { date: "2026-01-10", title: "Neurodivergent Board & Card Game Meetup", venueName: "Berlin" },
  { date: "2026-02-02", title: "Neurodivergent Creative Sharing Circle (recurring)", venueName: "Berlin" },
  { date: "2026-02-05", title: "Neurodivergent Co-working & Networking", venueName: "Humboldt Forum" },
  { date: "2026-03-05", title: "Neurodivergent Co-working & Networking (recurring)", venueName: "Humboldt Forum" },
  { date: "2026-03-14", title: "Neurodivergent Board & Card Game Meetup", venueName: "Berlin" },
  { date: "2026-03-14", title: "Neurodivergent Sharing Circle: PMDD, PCOS, and PMS", venueName: "with the rubbles of old palaces" },
  { date: "2026-03-24", title: "Neurodivergent Music Therapy: Song Sharing and Discussion", venueName: "RuDi – Das Stralauer Kultur- und Nachbarschaftszentrum" },
  { date: "2026-04-08", title: "Neurodivergent Sharing Circle: People of Color", venueName: "BIWOC* Rising" },
  { date: "2026-04-18", title: "Neurodivergent Speedfriending", venueName: "Flughafen Tempelhof – Eingang Okerstraße" },
  { date: "2026-04-25", title: "Neurodivergent Spring Cleaning Swap", venueName: "Park am Gleisdreieck" },
  { date: "2026-05-02", title: "Neurodivergent Language Meetup: German (Conversation)", venueName: "Taiji Chan studio" },
  { date: "2026-05-05", title: "Neurodivergent Webinar: Nourish Without the Stress (Anna Hamer, Nutritional Therapist)", venueName: "Online (Google Meet)" },
  { date: "2026-05-09", title: "Neurodivergent Board & Card Game Meetup", venueName: "Berlin" },
  { date: "2026-06-03", title: "Neurodivergent Music Therapy: Song Sharing and Discussion", venueName: "with the rubbles of old palaces" },
  { date: "2026-06-13", title: "Neurodivergent Walk – Pride Week", venueName: "Landwehrkanal near Böcklerstatue" },
  { date: "2026-06-20", title: "Neurodivergent Language Meetup: German (location change)", venueName: "KAFFEEKREIS" },
  { date: "2026-07-03", title: "Neurodivergent Workshop with FUTURIUM: What the Future Holds", venueName: "Futurium" },
  { date: "2026-07-11", title: "Neurodivergent Board & Card Game Meetup", venueName: "Berlin" },
  { date: "2026-07-23", title: "Neurodivergent Co-working & Networking (recurring)", venueName: "Humboldt Forum" },
  { date: "2026-07-28", title: "Neurodivergent Music Therapy: Song Sharing and Discussion with Jordan Elias", venueName: "with the rubbles of old palaces" },
  { date: "2026-08-03", title: "Neurodivergent Creative Sharing Circle (recurring)", venueName: "Berlin" },
];
