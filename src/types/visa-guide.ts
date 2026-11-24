export type VisaCategoryId =
  "schengen-short-stay" | "student-visa" | "national-long-stay" | "other-national";

export type VisaPurpose =
  | "Tourism"
  | "Business"
  | "Family Visit"
  | "Short Course"
  | "Airport Transit"
  | "Higher Education / Study"
  | "Employment"
  | "Family Reunification"
  | "Research / Other National";

export type ReviewStatus = "Verified" | "Review due" | "Under review" | "Archived";

export type DocumentClassification =
  | "Generally required"
  | "Conditional or situation-dependent"
  | "Country-specific or authority-specific";

export interface VisaSourceReference {
  authority: string;
  label: string;
  url: string;
}

export interface VisaCategoryRecord {
  id: VisaCategoryId;
  slug: string;
  title: string;
  shortLabel: string;
  summary: string;
  distinctionNote: string;
  typicalPurposes: readonly VisaPurpose[];
  isStudentContext: boolean;
  guideHref: string;
  officialSourceUrl: string;
  sourceAuthority: string;
  publishedDate: string;
  lastReviewed: string;
  reviewStatus: ReviewStatus;
}

export interface CountryVisaGuideRecord {
  slug: string;
  name: string;
  region: string;
  imageSrc: string;
  imageAlt: string;
  summary: string;
  /** Stored separately from isSchengenMember — never inferred */
  isSchengenMember: boolean;
  /** Stored separately from isSchengenMember — never inferred */
  isEuMember: boolean;
  membershipNote: string;
  officialForeignMinistry: VisaSourceReference;
  officialImmigrationAuthority: VisaSourceReference;
  officialVisaPortal: VisaSourceReference;
  embassyGuidanceNote: string;
  shortStayOverview: string;
  nationalLongStayOverview: string;
  studentVisaOverview: string;
  residencePermitOverview: string;
  applicationProcedureSummary: string;
  documentRequirementsSummary: string;
  appointmentInfo: string;
  /** Only populated when verified from official fee schedules; otherwise null */
  verifiedFeesNote: string | null;
  /** Only populated when verified from official sources; otherwise null */
  verifiedProcessingTimeNote: string | null;
  editorialNotes: string;
  sources: readonly VisaSourceReference[];
  publishedDate: string;
  lastReviewed: string;
  reviewStatus: ReviewStatus;
}

export interface DocumentChecklistItem {
  id: string;
  checklistCategory: string;
  documentName: string;
  visaCategory: VisaCategoryId;
  visaCategoryLabel: string;
  country: string;
  applicantCategory: string;
  purpose: VisaPurpose;
  isStudentContext: boolean;
  classification: DocumentClassification;
  explanation: string;
  officialSourceUrl: string;
  sourceAuthority: string;
  lastReviewed: string;
  reviewStatus: ReviewStatus;
}

export interface ApplicationProcessStep {
  id: string;
  visaCategory: VisaCategoryId;
  visaCategoryLabel: string;
  country: string;
  stepNumber: number;
  stepTitle: string;
  explanation: string;
  requiredAction: string;
  relevantDocuments: readonly string[];
  officialLink: string;
  sourceAuthority: string;
  lastReviewed: string;
  reviewStatus: ReviewStatus;
}

export interface VisaFaqItem {
  id: string;
  question: string;
  answer: string;
  visaCategory: VisaCategoryId | "general";
  country: string;
  isStudentContext: boolean;
  officialSourceUrl: string;
  sourceAuthority: string;
  lastReviewed: string;
  reviewStatus: ReviewStatus;
}

export interface VisaGuideFilterState {
  searchQuery: string;
  country: string;
  visaCategory: string;
  purpose: string;
  context: "all" | "student" | "non-student";
}
