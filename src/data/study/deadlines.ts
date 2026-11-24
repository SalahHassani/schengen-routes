import type { ApplicationSchedule } from "@/types/study";

const REVIEW_DATE = "2026-11-24";

/**
 * Verified institutional/portal schedule references for the 2027/2028 cycle.
 * Dates remain null until the respective university publishes exact window dates
 * for the active intake, ensuring statuses reflect official confirmation state.
 */
export const STUDY_APPLICATION_SCHEDULES: readonly ApplicationSchedule[] = [
  {
    id: "tum-2027-28",
    label: "Technical University of Munich — Degree Programme Applications",
    country: "Germany",
    institutionName: "Technical University of Munich",
    programmeOrScope:
      "Bachelor's and Master's application windows vary by degree programme and applicant qualification.",
    applicationCycle: "2027/2028 Academic Cycle",
    applicationOpeningDate: null,
    applicationDeadline: null,
    intakeStartDate: null,
    awaitingOfficialConfirmation: true,
    sourceUrl: "https://www.tum.de/en/studies/application",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "uva-2027-28",
    label: "University of Amsterdam — Bachelor's & Master's Admissions",
    country: "Netherlands",
    institutionName: "University of Amsterdam",
    programmeOrScope:
      "Application opening and closing dates depend on programme selection (numerus fixus vs. standard) and prior diploma.",
    applicationCycle: "2027/2028 Academic Cycle",
    applicationOpeningDate: null,
    applicationDeadline: null,
    intakeStartDate: null,
    awaitingOfficialConfirmation: true,
    sourceUrl: "https://www.uva.nl/en/education/admissions",
    lastReviewed: REVIEW_DATE,
  },
  {
    id: "univie-2027-28",
    label: "University of Vienna — Admission & Registration Windows",
    country: "Austria",
    institutionName: "University of Vienna",
    programmeOrScope:
      "Admission periods differ between programmes with entrance procedures and standard degree programmes.",
    applicationCycle: "2027/2028 Academic Cycle",
    applicationOpeningDate: null,
    applicationDeadline: null,
    intakeStartDate: null,
    awaitingOfficialConfirmation: true,
    sourceUrl: "https://studieren.univie.ac.at/en/admission-procedure/",
    lastReviewed: REVIEW_DATE,
  },
] as const;
