export type Partner = {
  name: string;
  url: string;
  logoSrc: string;
  category: "support" | "network";
};

// Names and sites are confirmed from the site audit (docs/site-audit.md §7).
// Logo files are placeholders (public/images/partners/PLACEHOLDER-*) pending
// the org sourcing current official logo files directly from each partner —
// do not re-host recompressed copies pulled from the old site.
export const partners: Partner[] = [
  {
    name: "FEIN (Freiwilliges Engagement in Nachbarschaften)",
    url: "https://www.berlin.de/sen/stadtentwicklung/",
    logoSrc: "/images/partners/PLACEHOLDER-fein.svg",
    category: "support",
  },
  {
    name: "Bezirksamt Friedrichshain-Kreuzberg",
    url: "https://www.berlin.de/ba-friedrichshain-kreuzberg/",
    logoSrc: "/images/partners/PLACEHOLDER-bezirksamt-fk.svg",
    category: "support",
  },
  {
    name: "ZLB — Zentral- und Landesbibliothek Berlin",
    url: "https://www.zlb.de",
    logoSrc: "/images/partners/PLACEHOLDER-zlb.svg",
    category: "support",
  },
  {
    name: "With the Rubbles of Old Palaces",
    url: "https://www.withtherubbles.org",
    logoSrc: "/images/partners/PLACEHOLDER-with-the-rubbles.svg",
    category: "network",
  },
  {
    name: "Kiezraum",
    url: "https://www.kiezraum.org",
    logoSrc: "/images/partners/PLACEHOLDER-kiezraum.svg",
    category: "network",
  },
  {
    name: "Klappe Auf",
    url: "https://www.klappe-auf.com",
    logoSrc: "/images/partners/PLACEHOLDER-klappe-auf.svg",
    category: "network",
  },
  {
    name: "Drugstore Berlin",
    url: "https://www.drugstore-berlin.de",
    logoSrc: "/images/partners/PLACEHOLDER-drugstore-berlin.svg",
    category: "network",
  },
  {
    name: "RuDi — Das Stralauer Kultur- und Nachbarschaftszentrum",
    url: "https://www.rudizentrum.de",
    logoSrc: "/images/partners/PLACEHOLDER-rudi.svg",
    category: "network",
  },
  {
    name: "BIWOC* Rising",
    url: "https://www.biwoc-rising.org",
    logoSrc: "/images/partners/PLACEHOLDER-biwoc-rising.svg",
    category: "network",
  },
  {
    name: "Futurium",
    url: "https://futurium.de/en",
    logoSrc: "/images/partners/PLACEHOLDER-futurium.svg",
    category: "network",
  },
];
