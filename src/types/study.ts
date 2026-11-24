export type DegreeLevel = "Bachelor's" | "Master's" | "Foundation" | "PhD / Doctoral";

export type InstitutionType = "Public University" | "University of Applied Sciences";

export type DeadlineStatus =
  | "Not announced"
  | "Upcoming"
  | "Open"
  | "Closing soon"
  | "Closed"
  | "Awaiting official confirmation";

export interface SourceReference {
  label: string;
  url: string;
}

export interface ApplicationSchedule {
  id: string;
  label: string;
  country: string;
  institutionName?: string;
  programmeOrScope: string;
  applicationCycle: string;
  /** ISO date string (YYYY-MM-DD) when applications open, or null if not yet published */
  applicationOpeningDate: string | null;
  /** ISO date string (YYYY-MM-DD) for application submission deadline, or null if not yet published */
  applicationDeadline: string | null;
  /** ISO date string (YYYY-MM-DD) or cycle label when semester/intake begins */
  intakeStartDate: string | null;
  /** Explicit flag when official dates require confirmation for the active cycle */
  awaitingOfficialConfirmation?: boolean;
  sourceUrl: string;
  lastReviewed: string;
}

export interface StudyCountryRecord {
  slug: string;
  name: string;
  region: string;
  imageSrc: string;
  imageAlt: string;
  summary: string;
  officialLanguages: readonly string[];
  commonStudyCities: readonly string[];
  educationSystemOverview: string;
  availableDegreeLevels: readonly DegreeLevel[];
  tuitionOverview: string | null;
  scholarshipOverview: string | null;
  admissionOverview: string | null;
  applicationCycle: string;
  applicationOpeningDate: string | null;
  applicationDeadline: string | null;
  intakeStartDate: string | null;
  officialLinks: readonly SourceReference[];
  sourceUrl: string;
  lastReviewed: string;
}

export interface StudyUniversityRecord {
  slug: string;
  name: string;
  country: string;
  city: string;
  institutionType: InstitutionType;
  summary: string;
  officialWebsiteUrl: string;
  officialAdmissionsUrl: string;
  availableDegreeLevels: readonly DegreeLevel[];
  programmeCategories: readonly string[];
  applicationCycle: string;
  applicationNotes: string;
  sourceUrl: string;
  lastReviewed: string;
}

export interface StudyProgrammeRecord {
  slug: string;
  name: string;
  universitySlug: string;
  universityName: string;
  country: string;
  city: string;
  degreeLevel: DegreeLevel;
  fieldOfStudy: string;
  languageOfInstruction: string;
  duration: string | null;
  tuitionInfo: string | null;
  applicationCycle: string;
  applicationOpeningDate: string | null;
  applicationDeadline: string | null;
  intakeStartDate: string | null;
  entryRequirementsSummary: string | null;
  officialProgrammeUrl: string;
  sourceUrl: string;
  lastReviewed: string;
}

export interface StudyScholarshipRecord {
  slug: string;
  name: string;
  provider: string;
  country: string;
  eligibleNationalities: readonly string[];
  eligibleDegreeLevels: readonly DegreeLevel[];
  fundingType: string;
  fundingAmountInfo: string | null;
  coverageSummary: string | null;
  eligibilitySummary: string | null;
  applicationCycle: string;
  applicationOpeningDate: string | null;
  applicationDeadline: string | null;
  officialApplicationUrl: string;
  sourceUrl: string;
  lastReviewed: string;
}

export interface UniversityFilterState {
  searchQuery: string;
  country: string;
  institutionType: string;
}

export interface ProgrammeFilterState {
  searchQuery: string;
  country: string;
  degreeLevel: string;
  subject: string;
  language: string;
  university: string;
}
