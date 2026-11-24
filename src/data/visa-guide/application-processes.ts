import type { ApplicationProcessStep } from "@/types/visa-guide";

const REVIEW_DATE = "2026-11-24";

export const APPLICATION_PROCESS_STEPS: readonly ApplicationProcessStep[] = [
  {
    id: "step-1-category",
    visaCategory: "schengen-short-stay",
    visaCategoryLabel: "General European Visa Workflow",
    country: "Applicable Schengen & EU Destinations",
    stepNumber: 1,
    stepTitle: "Identify the correct visa category",
    explanation:
      "Confirm whether your intended stay falls under a Schengen short-stay visa, a national student visa / study residence procedure, or another national long-stay category.",
    requiredAction:
      "Check duration of stay, purpose of travel, and whether your nationality is visa-exempt for short stays.",
    relevantDocuments: ["Passport / nationality details", "Purpose of travel summary"],
    officialLink: "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "step-2-requirements",
    visaCategory: "schengen-short-stay",
    visaCategoryLabel: "General European Visa Workflow",
    country: "Applicable Schengen & EU Destinations",
    stepNumber: 2,
    stepTitle: "Review official requirements",
    explanation:
      "Consult the destination country's official foreign ministry, immigration authority, or diplomatic mission checklist for your country of residence.",
    requiredAction:
      "Download the official checklist corresponding to your exact visa subtype and country of application.",
    relevantDocuments: ["Official consular checklist"],
    officialLink: "https://immigration-portal.ec.europa.eu/index_en",
    sourceAuthority: "European Commission — EU Immigration Portal",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "step-3-documents",
    visaCategory: "student-visa",
    visaCategoryLabel: "General European Visa Workflow",
    country: "Applicable Schengen & EU Destinations",
    stepNumber: 3,
    stepTitle: "Prepare supporting documents",
    explanation:
      "Assemble identity, financial, insurance, accommodation, and purpose-specific documents (such as university admission letters or employer/host invitations), ensuring translations or legalisations match official instructions.",
    requiredAction:
      "Verify validity dates, coverage minimums, and authentication rules before booking.",
    relevantDocuments: [
      "Valid passport",
      "Financial proof",
      "Insurance certificate",
      "Admission or invitation letter",
    ],
    officialLink:
      "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "step-4-authority",
    visaCategory: "schengen-short-stay",
    visaCategoryLabel: "General European Visa Workflow",
    country: "Applicable Schengen & EU Destinations",
    stepNumber: 4,
    stepTitle: "Determine the responsible embassy or visa application centre",
    explanation:
      "For Schengen short stays, applications are generally lodged with the consulate of the sole or main destination country (or the country of first entry if no main destination can be determined).",
    requiredAction:
      "Identify the consulate or officially authorised external service provider covering your legal place of residence.",
    relevantDocuments: ["Proof of legal residence in the consular district"],
    officialLink:
      "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "step-5-appointment",
    visaCategory: "schengen-short-stay",
    visaCategoryLabel: "General European Visa Workflow",
    country: "Applicable Schengen & EU Destinations",
    stepNumber: 5,
    stepTitle: "Book an appointment where required",
    explanation:
      "Most diplomatic missions and authorised visa centres require an advance appointment and may impose earliest/latest submission windows prior to travel.",
    requiredAction:
      "Schedule your appointment exclusively through official consular or authorised partner portals.",
    relevantDocuments: ["Appointment confirmation receipt", "Completed application form"],
    officialLink:
      "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "step-6-submission",
    visaCategory: "schengen-short-stay",
    visaCategoryLabel: "General European Visa Workflow",
    country: "Applicable Schengen & EU Destinations",
    stepNumber: 6,
    stepTitle: "Submit the application",
    explanation:
      "Present your application form, passport, and supporting evidence and pay the applicable official visa/service fee where required.",
    requiredAction:
      "Retain your submission receipt and tracking reference issued by the receiving authority.",
    relevantDocuments: ["Complete application dossier", "Fee payment receipt"],
    officialLink:
      "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "step-7-biometrics",
    visaCategory: "schengen-short-stay",
    visaCategoryLabel: "General European Visa Workflow",
    country: "Applicable Schengen & EU Destinations",
    stepNumber: 7,
    stepTitle: "Complete biometrics or an interview where required",
    explanation:
      "Applicants typically provide fingerprints and a facial photograph (unless exempt under applicable rules) and may be invited for an interview for national long-stay or student visas.",
    requiredAction: "Attend in person as instructed by the consulate or visa application centre.",
    relevantDocuments: ["Original passport", "Appointment notice"],
    officialLink:
      "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en",
    sourceAuthority: "European Commission — Migration and Home Affairs",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "step-8-decision",
    visaCategory: "national-long-stay",
    visaCategoryLabel: "General European Visa Workflow",
    country: "Applicable Schengen & EU Destinations",
    stepNumber: 8,
    stepTitle: "Wait for the decision",
    explanation:
      "The competent consular or immigration authority assesses the application; processing periods vary by visa category, season, and whether national immigration authorities must be consulted.",
    requiredAction:
      "Monitor official tracking channels and respond promptly if additional documents are requested.",
    relevantDocuments: ["Application tracking number"],
    officialLink: "https://immigration-portal.ec.europa.eu/index_en",
    sourceAuthority: "European Commission — EU Immigration Portal",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    id: "step-9-arrival",
    visaCategory: "student-visa",
    visaCategoryLabel: "General European Visa Workflow",
    country: "Applicable Schengen & EU Destinations",
    stepNumber: 9,
    stepTitle: "Follow the relevant entry and post-arrival instructions",
    explanation:
      "Verify visa sticker details upon collection, carry supporting documents at border control, and complete mandatory local address registration or residence permit formalities after arrival.",
    requiredAction:
      "Complete municipal registration, health insurance activation, or residence permit card collection within national deadlines.",
    relevantDocuments: [
      "Passport with visa sticker",
      "Proof of accommodation & insurance",
      "Post-arrival registration forms",
    ],
    officialLink: "https://immigration-portal.ec.europa.eu/general-information/already-eu_en",
    sourceAuthority: "European Commission — EU Immigration Portal",
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
] as const;
