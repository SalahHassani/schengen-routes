import type { VisaCategoryRecord } from "@/types/visa-guide";

const PUBLISHED_DATE = "2026-11-24";
const REVIEW_DATE = "2026-11-24";

export const VISA_CATEGORIES: readonly VisaCategoryRecord[] = [
  {
    id: "schengen-short-stay",
    slug: "schengen-visa",
    title: "Schengen Short-Stay Visa",
    shortLabel: "Short-Stay (Type C)",
    summary:
      "Covers short stays in the Schengen Area—such as tourism, business visits, family visits, short courses, or airport transit where applicable—subject to Schengen rules and exemptions.",
    distinctionNote:
      "Governed by the EU Visa Code for short visits across participating Schengen states; it is not a long-term residence or degree-study residence permit.",
    typicalPurposes: ["Tourism", "Business", "Family Visit", "Short Course", "Airport Transit"],
    isStudentContext: false,
    guideHref: "/visa-guide/schengen-visa",
    officialSourceUrl: "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    publishedDate: PUBLISHED_DATE,
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "student-visa",
    slug: "student-visa",
    title: "Student Visa and Study Residence",
    shortLabel: "Student & Study Residence",
    summary:
      "Explains country-specific entry visas and study residence permit frameworks for international students admitted to recognised higher-education institutions.",
    distinctionNote:
      "Student visas and study residence permits are issued under national immigration rules (and EU Directive 2016/801 where applicable), not as Schengen short-stay tourist visas.",
    typicalPurposes: ["Higher Education / Study"],
    isStudentContext: true,
    guideHref: "/visa-guide/student-visa",
    officialSourceUrl: "https://immigration-portal.ec.europa.eu/general-information/already-eu_en",
    sourceAuthority: "European Commission — EU Immigration Portal",
    publishedDate: PUBLISHED_DATE,
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "national-long-stay",
    slug: "national-visas",
    title: "National Long-Stay Visas",
    shortLabel: "Long-Stay (Type D)",
    summary:
      "Covers country-specific long-stay visas and national residence procedures for stays exceeding short-stay limits, including employment and family reunification.",
    distinctionNote:
      "National long-stay (Type D) visas and residence permits are regulated by each destination country's national immigration legislation.",
    typicalPurposes: ["Employment", "Family Reunification"],
    isStudentContext: false,
    guideHref: "/visa-guide/national-visas",
    officialSourceUrl: "https://immigration-portal.ec.europa.eu/index_en",
    sourceAuthority: "European Commission — EU Immigration Portal",
    publishedDate: PUBLISHED_DATE,
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "other-national",
    slug: "national-visas",
    title: "Other National Visa Categories",
    shortLabel: "Special National Categories",
    summary:
      "Covers specialised national entry and residence pathways—such as academic research, traineeships, or country-specific programmes—defined by national authorities.",
    distinctionNote:
      "Eligibility rules, permit titles, and application channels differ substantially from one European country to another.",
    typicalPurposes: ["Research / Other National"],
    isStudentContext: false,
    guideHref: "/visa-guide/national-visas",
    officialSourceUrl: "https://immigration-portal.ec.europa.eu/index_en",
    sourceAuthority: "European Commission — EU Immigration Portal",
    publishedDate: PUBLISHED_DATE,
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
] as const;
