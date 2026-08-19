export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Contact", href: "/about/contact" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Neurocinema", href: "/neurocinema" },
  {
    label: "Links & Resources",
    href: "/links-resources/what-is-neurodivergence",
    children: [
      { label: "What is Neurodivergence", href: "/links-resources/what-is-neurodivergence" },
      { label: "Neurodivergent Info", href: "/links-resources/neurodivergent-info" },
      { label: "Recommendations", href: "/links-resources/recommendations" },
      { label: "Book Recommendations", href: "/links-resources/book-recommendations" },
    ],
  },
  { label: "News", href: "/news" },
];

export const footerLegalNav = [
  { label: "Impressum", href: "/legal/impressum" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
];
