import type { StudyUniversityRecord } from "@/types/study";

const REVIEW_DATE = "2026-11-24";

export const STUDY_UNIVERSITIES: readonly StudyUniversityRecord[] = [
  {
    slug: "technical-university-of-munich",
    name: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    institutionType: "Public University",
    summary:
      "Public research university in Bavaria offering bachelor's, master's, and doctoral programmes across engineering, natural sciences, life sciences, and management.",
    officialWebsiteUrl: "https://www.tum.de/en/",
    officialAdmissionsUrl: "https://www.tum.de/en/studies/application",
    availableDegreeLevels: ["Bachelor's", "Master's", "PhD / Doctoral"],
    programmeCategories: ["Engineering", "Computer Science", "Natural Sciences", "Management"],
    applicationCycle: "2027/2028 Academic Cycle",
    applicationNotes:
      "Application periods and admission requirements differ by degree level, programme, and applicant qualification; verify exact dates on the official TUM admissions portal.",
    sourceUrl: "https://www.tum.de/en/studies/application",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "university-of-amsterdam",
    name: "University of Amsterdam",
    country: "Netherlands",
    city: "Amsterdam",
    institutionType: "Public University",
    summary:
      "Public research university in Amsterdam offering bachelor's, master's, and doctoral degree programmes across humanities, social sciences, sciences, economics, and law.",
    officialWebsiteUrl: "https://www.uva.nl/en",
    officialAdmissionsUrl: "https://www.uva.nl/en/education/admissions",
    availableDegreeLevels: ["Bachelor's", "Master's", "PhD / Doctoral"],
    programmeCategories: ["Social Sciences", "Humanities", "Economics & Business", "Sciences"],
    applicationCycle: "2027/2028 Academic Cycle",
    applicationNotes:
      "Admission criteria and deadlines vary by degree level, programme, and prior educational background; consult official UvA admissions pages directly.",
    sourceUrl: "https://www.uva.nl/en/education/admissions",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "university-of-vienna",
    name: "University of Vienna",
    country: "Austria",
    city: "Vienna",
    institutionType: "Public University",
    summary:
      "Public university in Vienna offering bachelor's, master's, diploma, and doctoral programmes across a wide range of academic disciplines.",
    officialWebsiteUrl: "https://www.univie.ac.at/en/",
    officialAdmissionsUrl: "https://studieren.univie.ac.at/en/admission-procedure/",
    availableDegreeLevels: ["Bachelor's", "Master's", "PhD / Doctoral"],
    programmeCategories: ["Humanities", "Social Sciences", "Natural Sciences", "Law & Economics"],
    applicationCycle: "2027/2028 Academic Cycle",
    applicationNotes:
      "Admission procedures and registration windows vary by study programme and applicant category; check official University of Vienna admission guidance.",
    sourceUrl: "https://studieren.univie.ac.at/en/admission-procedure/",
    lastReviewed: REVIEW_DATE,
  },
] as const;
