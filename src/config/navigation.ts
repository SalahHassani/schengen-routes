import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";

export interface NavSubItem {
  label: string;
  description: string;
  href: string;
  comingSoon?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: readonly NavSubItem[];
}

export const PRIMARY_NAVIGATION: readonly NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Study",
    href: "/study",
    children: [
      {
        label: "Countries",
        description: "European higher-education destinations",
        href: "/study",
        comingSoon: true,
      },
      {
        label: "Universities",
        description: "Accredited public & private institutions",
        href: "/study",
        comingSoon: true,
      },
      {
        label: "Bachelor's Programmes",
        description: "Undergraduate degrees taught in English",
        href: "/study",
        comingSoon: true,
      },
      {
        label: "Master's Programmes",
        description: "Postgraduate & specialized master's tracks",
        href: "/study",
        comingSoon: true,
      },
      {
        label: "Scholarships",
        description: "Merit, government & institutional funding",
        href: "/study",
        comingSoon: true,
      },
      {
        label: "Application Deadlines",
        description: "Verified intake windows & timelines",
        href: "/study",
        comingSoon: true,
      },
    ],
  },
  {
    label: "Visa Guide",
    href: "/visa-guide",
    children: [
      {
        label: "Schengen Visa",
        description: "Short-stay Type C entry & travel rules",
        href: "/visa-guide",
        comingSoon: true,
      },
      {
        label: "Student Visa",
        description: "National Type D study residence permits",
        href: "/visa-guide",
        comingSoon: true,
      },
      {
        label: "Country Guides",
        description: "Consular procedures by Schengen state",
        href: "/visa-guide",
        comingSoon: true,
      },
      {
        label: "Document Checklists",
        description: "Structured preparation & source links",
        href: "/visa-guide",
        comingSoon: true,
      },
    ],
  },
  {
    label: "Travel",
    href: "/travel",
    children: [
      {
        label: "Destinations",
        description: "Curated European regions & routes",
        href: "/travel",
        comingSoon: true,
      },
      {
        label: "Travel Guides",
        description: "Practical itineraries & seasonal planning",
        href: "/travel",
        comingSoon: true,
      },
      {
        label: "Transportation",
        description: "Rail passes, flights & intercity transit",
        href: "/travel",
        comingSoon: true,
      },
      {
        label: "Accommodation",
        description: "Student housing & short-stay options",
        href: "/travel",
        comingSoon: true,
      },
    ],
  },
  {
    label: "Explore",
    href: "/explore",
    children: [
      {
        label: "European Cities",
        description: "Architecture, neighbourhoods & local life",
        href: "/explore",
        comingSoon: true,
      },
      {
        label: "Culture",
        description: "Heritage, traditions & European perspectives",
        href: "/explore",
        comingSoon: true,
      },
      {
        label: "Landmarks",
        description: "Iconic sites & hidden cultural gems",
        href: "/explore",
        comingSoon: true,
      },
      {
        label: "Student Life",
        description: "Living, budgeting & settling in Europe",
        href: "/explore",
        comingSoon: true,
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const CONSULTATION_CTA = {
  label: "Get Consultation",
  href: "/contact",
} as const;

export const FOOTER_EXPLORE_LINKS = PRIMARY_NAVIGATION.filter((item) =>
  ["/", "/study", "/visa-guide", "/travel", "/explore"].includes(item.href)
);

export const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: CONSULTATION_CTA.label, href: CONSULTATION_CTA.href },
] as const;

export const FOOTER_SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: SOCIAL_LINKS.instagram.handle,
    href: SOCIAL_LINKS.instagram.url,
  },
  {
    label: "Facebook",
    handle: SOCIAL_LINKS.facebook.name,
    href: SOCIAL_LINKS.facebook.url,
  },
  {
    label: "TikTok",
    handle: SOCIAL_LINKS.tiktok.handle,
    href: SOCIAL_LINKS.tiktok.url,
  },
] as const;

export const FOOTER_CONTACT_INFO = {
  email: CONTACT.email,
  emailHref: `mailto:${CONTACT.email}`,
  whatsappDisplay: CONTACT.whatsappDisplay,
  whatsappDirectUrl: CONTACT.whatsappDirectUrl,
  whatsappCommunityUrl: CONTACT.whatsappCommunityUrl,
} as const;
