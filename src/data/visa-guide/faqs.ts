import type { VisaFaqItem } from "@/types/visa-guide";

const REVIEW_DATE = "2026-11-24";

export const VISA_FAQS: readonly VisaFaqItem[] = [
  {
    id: "faq-what-is-schengen-visa",
    question: "What is a Schengen visa?",
    answer:
      "A Schengen short-stay visa (Category C) is an authorisation issued by a participating Schengen state allowing short stays—generally up to 90 days in any 180-day period—for purposes such as tourism, business, family visits, or short courses, subject to border entry conditions and visa rules.",
    visaCategory: "schengen-short-stay",
    country: "Schengen Area",
    isStudentContext: false,
    officialSourceUrl: "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "faq-schengen-vs-national",
    question: "What is the difference between a Schengen visa and a national visa?",
    answer:
      "A Schengen short-stay visa (Type C) covers short visits across the Schengen Area under harmonised EU rules. A national long-stay visa (Type D) or national residence permit is issued under the destination country's own immigration laws for longer stays such as degree studies, employment, or family reunification.",
    visaCategory: "national-long-stay",
    country: "EU & Schengen States",
    isStudentContext: false,
    officialSourceUrl: "https://immigration-portal.ec.europa.eu/index_en",
    sourceAuthority: "European Commission — EU Immigration Portal",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "faq-student-visa-vs-schengen",
    question: "Do students need a Schengen visa or a national student visa?",
    answer:
      "Students enrolling in multi-semester degree programmes generally require a national student visa and/or study residence permit issued under the destination country's national immigration rules—not a Schengen short-stay tourist visa. Very short summer courses within short-stay limits may fall under short-stay rules depending on nationality and destination.",
    visaCategory: "student-visa",
    country: "EU & Schengen States",
    isStudentContext: true,
    officialSourceUrl: "https://immigration-portal.ec.europa.eu/general-information/already-eu_en",
    sourceAuthority: "European Commission — EU Immigration Portal",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "faq-eu-vs-schengen",
    question: "Are the European Union and the Schengen Area the same?",
    answer:
      "No. The European Union (EU) is a political and economic union of 27 Member States, whereas the Schengen Area is a passport-free travel zone that includes most EU countries as well as several non-EU countries (such as Switzerland, Norway, Iceland, and Liechtenstein), while some EU Member States (such as Ireland and Cyprus) do not apply the full Schengen border acquis.",
    visaCategory: "general",
    country: "EU & Schengen States",
    isStudentContext: false,
    officialSourceUrl: "https://home-affairs.ec.europa.eu/policies/schengen/schengen-area_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "faq-responsible-embassy",
    question: "How do I identify the correct embassy or consulate?",
    answer:
      "For a Schengen short-stay visa, you generally apply at the consulate (or authorised visa centre) of the country that is your sole or main destination—determined by length or purpose of stay—in your country of legal residence. For national student or long-stay visas, apply through the diplomatic mission or national portal designated by that specific destination country.",
    visaCategory: "schengen-short-stay",
    country: "Schengen Area",
    isStudentContext: false,
    officialSourceUrl:
      "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "faq-required-documents",
    question: "What documents might be required?",
    answer:
      "While exact requirements vary by country, visa subtype, and applicant nationality, applications commonly involve a valid passport, application form, biometric photos, proof of purpose (such as itinerary, invitation, or university admission), accommodation proof, financial means, and qualifying medical/travel insurance.",
    visaCategory: "general",
    country: "EU & Schengen States",
    isStudentContext: false,
    officialSourceUrl:
      "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "faq-travel-other-schengen",
    question: "Can I travel to other Schengen countries?",
    answer:
      "Holders of a uniform Schengen visa (without territorial restrictions) or a valid national long-stay visa / residence permit issued by a Schengen state may generally travel within other Schengen states for short stays of up to 90 days in any 180-day period, provided they carry their valid passport and visa/residence permit and meet entry conditions.",
    visaCategory: "schengen-short-stay",
    country: "Schengen Area",
    isStudentContext: false,
    officialSourceUrl: "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "faq-verify-official-requirements",
    question: "Where can I verify current visa requirements?",
    answer:
      "Always verify current visa rules, document checklists, fees, and appointment procedures directly on the European Commission's Migration and Home Affairs / EU Immigration Portal or the official website of the destination country's foreign ministry, immigration authority, or responsible embassy/consulate.",
    visaCategory: "general",
    country: "EU & Schengen States",
    isStudentContext: false,
    officialSourceUrl: "https://immigration-portal.ec.europa.eu/index_en",
    sourceAuthority: "European Commission — EU Immigration Portal",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
] as const;
