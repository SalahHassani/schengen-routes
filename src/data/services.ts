export interface ServicePillar {
  id: "study" | "visa-guide" | "travel" | "explore";
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  highlights: readonly string[];
}

export interface StudyHighlight {
  title: string;
  description: string;
}

export interface ValuePrinciple {
  number: string;
  title: string;
  description: string;
}

export interface HelpStep {
  step: string;
  title: string;
  description: string;
}

export interface PlatformUpdateItem {
  id: string;
  category:
    | "University Admissions"
    | "Scholarships"
    | "Application Deadlines"
    | "Visa Information"
    | "European Travel Updates";
  title: string;
  summary: string;
  statusLabel: string;
  href: string;
}

export const SERVICE_PILLARS: readonly ServicePillar[] = [
  {
    id: "study",
    badge: "Higher Education",
    title: "Study in Europe",
    description:
      "Discover universities, programmes, scholarships, admissions and opportunities across Europe.",
    ctaLabel: "Explore Study",
    href: "/study",
    highlights: ["Universities & Programmes", "Scholarships", "Admission Guidance"],
  },
  {
    id: "visa-guide",
    badge: "Entry & Permits",
    title: "Visa Guide",
    description:
      "Understand visa procedures, document requirements and country-specific guidance through structured information.",
    ctaLabel: "Explore Visa Guides",
    href: "/visa-guide",
    highlights: ["Schengen & Student Visas", "Country Guides", "Document Checklists"],
  },
  {
    id: "travel",
    badge: "Mobility & Routes",
    title: "Travel Europe",
    description:
      "Discover destinations, travel guides, transportation information and practical travel inspiration.",
    ctaLabel: "Explore Travel",
    href: "/travel",
    highlights: ["Destinations & Itineraries", "Transportation", "Accommodation"],
  },
  {
    id: "explore",
    badge: "Culture & Cities",
    title: "Explore Europe",
    description:
      "Discover European cities, culture, landmarks, student life and unforgettable experiences.",
    ctaLabel: "Start Exploring",
    href: "/explore",
    highlights: ["European Cities", "Culture & Landmarks", "Student Life"],
  },
] as const;

export const STUDY_OPPORTUNITY_HIGHLIGHTS: readonly StudyHighlight[] = [
  {
    title: "Universities",
    description: "Explore accredited public and private European higher-education institutions.",
  },
  {
    title: "Bachelor's Programmes",
    description: "Review undergraduate degree pathways and English-taught study options.",
  },
  {
    title: "Master's Programmes",
    description: "Compare postgraduate specialisations and academic entry structures.",
  },
  {
    title: "Scholarships",
    description: "Identify institutional, national, and European merit funding categories.",
  },
  {
    title: "Application Deadlines",
    description: "Track seasonal intake windows and document preparation milestones.",
  },
] as const;

export const WHY_SCHENGEN_ROUTES: readonly ValuePrinciple[] = [
  {
    number: "01",
    title: "One Platform, Multiple Services",
    description: "Access education discovery, visa information, travel and European exploration.",
  },
  {
    number: "02",
    title: "Clear Information",
    description: "Find structured and understandable guidance.",
  },
  {
    number: "03",
    title: "European Opportunities",
    description: "Discover destinations, institutions and experiences.",
  },
  {
    number: "04",
    title: "Guidance and Support",
    description: "Contact the team when you need assistance.",
  },
] as const;

export const HOW_WE_HELP_STEPS: readonly HelpStep[] = [
  {
    step: "Step 01",
    title: "Discover",
    description: "Explore European study, visa, travel and destination information.",
  },
  {
    step: "Step 02",
    title: "Understand",
    description: "Review relevant requirements, options and practical guidance.",
  },
  {
    step: "Step 03",
    title: "Plan",
    description: "Organise your next steps using the available information.",
  },
  {
    step: "Step 04",
    title: "Connect",
    description: "Contact SchengeN Routes when you need assistance.",
  },
] as const;

/**
 * Editorial placeholder items for Milestone 3.
 * Structured so future milestones can replace this array with dynamic announcements.
 */
export const PLATFORM_UPDATES_PREVIEW: readonly PlatformUpdateItem[] = [
  {
    id: "update-admissions",
    category: "University Admissions",
    title: "European University Directory & Intake Structure",
    summary:
      "Upcoming country-by-country profiles covering public universities, English-taught degrees, and general admission pathways.",
    statusLabel: "Editorial Preview",
    href: "/study",
  },
  {
    id: "update-scholarships",
    category: "Scholarships",
    title: "Funding & Scholarship Overview Hub",
    summary:
      "A structured index of national, university-level, and European mobility scholarship categories currently in preparation.",
    statusLabel: "Editorial Preview",
    href: "/study",
  },
  {
    id: "update-visa",
    category: "Visa Information",
    title: "Schengen & National Student Visa Checklists",
    summary:
      "Step-by-step document preparation outlines paired with direct references to official consular portals.",
    statusLabel: "Editorial Preview",
    href: "/visa-guide",
  },
  {
    id: "update-travel",
    category: "European Travel Updates",
    title: "Cross-Border Rail & Student Arrival Guides",
    summary:
      "Practical planning resources for intercity travel, accommodation orientation, and settling into European cities.",
    statusLabel: "Editorial Preview",
    href: "/travel",
  },
] as const;
