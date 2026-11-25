import type { StudyCountryRecord } from "@/types/study";

const REVIEW_DATE = "2026-11-24";

export const STUDY_COUNTRIES: readonly StudyCountryRecord[] = [
  {
    slug: "germany",
    name: "Germany",
    region: "Western & Central Europe",
    imageSrc: "/assets/images/unique/extra-city-02.jpg",
    imageAlt: "Historic Alpine castle and forested landscape in Bavaria, Germany",
    summary:
      "Explore public universities, universities of applied sciences, and degree pathways across Germany.",
    officialLanguages: ["German"],
    commonStudyCities: ["Munich", "Berlin", "Heidelberg", "Aachen"],
    educationSystemOverview:
      "Germany offers research-oriented universities (Universitäten) and practice-focused universities of applied sciences (Hochschulen / HAW) within the European Higher Education Area.",
    availableDegreeLevels: ["Bachelor's", "Master's", "PhD / Doctoral"],
    tuitionOverview:
      "Tuition rules vary by federal state, institution type, and degree programme; semester contributions and specific programme fees must be confirmed directly on each university's admissions page.",
    scholarshipOverview:
      "Public and foundation scholarship programmes exist; verify eligibility criteria and current application cycles directly on official scholarship portals.",
    admissionOverview:
      "Admission depends on prior academic qualifications, language proficiency requirements, and whether a programme has local or central admissions.",
    applicationCycle: "2027/2028 Academic Cycle",
    applicationOpeningDate: null,
    applicationDeadline: null,
    intakeStartDate: null,
    officialLinks: [
      {
        label: "Study in Germany (Official Portal)",
        url: "https://www.study-in-germany.de/en/",
      },
      {
        label: "DAAD — German Academic Exchange Service",
        url: "https://www.daad.de/en/",
      },
    ],
    sourceUrl: "https://www.study-in-germany.de/en/",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "italy",
    name: "Italy",
    region: "Southern Europe",
    imageSrc: "/assets/images/unique/extra-city-03.jpg",
    imageAlt: "Panoramic view of the historic cathedral dome and skyline of Florence, Italy",
    summary:
      "Discover Italian state universities, polytechnics, and degree programmes across historic university cities.",
    officialLanguages: ["Italian"],
    commonStudyCities: ["Bologna", "Milan", "Rome", "Turin"],
    educationSystemOverview:
      "Italy's higher education system follows the three-cycle Bologna structure (Laurea, Laurea Magistrale, and Dottorato di Ricerca) alongside AFAM institutions.",
    availableDegreeLevels: ["Bachelor's", "Master's", "PhD / Doctoral"],
    tuitionOverview:
      "Fees and exemptions vary by institution and programme; review official university and national ministry guidance before applying.",
    scholarshipOverview:
      "Regional and national student support schemes exist; verify current terms and deadlines directly with official authorities.",
    admissionOverview:
      "Admission requirements and pre-enrolment procedures vary by university, degree level, and applicant background.",
    applicationCycle: "2027/2028 Academic Cycle",
    applicationOpeningDate: null,
    applicationDeadline: null,
    intakeStartDate: null,
    officialLinks: [
      {
        label: "Universitaly — Official Italian Higher Education Portal",
        url: "https://www.universitaly.it/",
      },
    ],
    sourceUrl: "https://www.universitaly.it/",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "hungary",
    name: "Hungary",
    region: "Central Europe",
    imageSrc: "/assets/images/unique/extra-city-04.jpg",
    imageAlt:
      "Hungarian Parliament Building illuminated along the Danube River in Budapest, Hungary",
    summary:
      "Review higher education pathways and degree structures across Hungarian universities.",
    officialLanguages: ["Hungarian"],
    commonStudyCities: ["Budapest", "Szeged", "Debrecen", "Pécs"],
    educationSystemOverview:
      "Hungary participates in the European Higher Education Area with bachelor's, master's, undivided long-cycle programmes, and doctoral degrees.",
    availableDegreeLevels: ["Bachelor's", "Master's", "PhD / Doctoral"],
    tuitionOverview:
      "Programme fees and scholarship coverage depend on the specific university, faculty, and scholarship scheme; check official institution notices.",
    scholarshipOverview:
      "Check official government and institutional scholarship announcements directly for current cycle availability.",
    admissionOverview:
      "Applicants must verify institutional entrance criteria, documentation rules, and language requirements directly with each university.",
    applicationCycle: "2027/2028 Academic Cycle",
    applicationOpeningDate: null,
    applicationDeadline: null,
    intakeStartDate: null,
    officialLinks: [
      {
        label: "Study in Hungary — Official Education Portal",
        url: "https://studyinhungary.hu/",
      },
    ],
    sourceUrl: "https://studyinhungary.hu/",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "france",
    name: "France",
    region: "Western Europe",
    imageSrc: "/assets/images/unique/extra-river-01.jpg",
    imageAlt: "Historic stone abbey architecture at Mont Saint-Michel in Normandy, France",
    summary:
      "Explore French public universities, grandes écoles, and degree structures across France.",
    officialLanguages: ["French"],
    commonStudyCities: ["Paris", "Lyon", "Toulouse", "Grenoble"],
    educationSystemOverview:
      "Higher education in France includes public universities (Licence, Master, Doctorat) as well as specialised grandes écoles and engineering/business institutions.",
    availableDegreeLevels: ["Bachelor's", "Master's", "PhD / Doctoral"],
    tuitionOverview:
      "Registration and tuition rules vary by degree level, institution status, and applicant profile; consult official national portals.",
    scholarshipOverview:
      "Scholarship programmes and eligibility rules are published on official French higher-education and diplomatic channels.",
    admissionOverview:
      "Application platforms and deadlines depend on programme type, nationality, and whether the candidate resides in France or abroad.",
    applicationCycle: "2027/2028 Academic Cycle",
    applicationOpeningDate: null,
    applicationDeadline: null,
    intakeStartDate: null,
    officialLinks: [
      {
        label: "Campus France — Official Higher Education Agency",
        url: "https://www.campusfrance.org/en",
      },
    ],
    sourceUrl: "https://www.campusfrance.org/en",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    region: "Western Europe",
    imageSrc: "/assets/images/unique/extra-river-02.jpg",
    imageAlt: "Traditional Dutch windmills along waterways at Kinderdijk in the Netherlands",
    summary:
      "Learn about research universities and universities of applied sciences across the Netherlands.",
    officialLanguages: ["Dutch"],
    commonStudyCities: ["Amsterdam", "Leiden", "Delft", "Utrecht"],
    educationSystemOverview:
      "Dutch higher education distinguishes between research universities (universiteiten) and universities of applied sciences (hogescholen) under the bachelor-master structure.",
    availableDegreeLevels: ["Bachelor's", "Master's", "PhD / Doctoral"],
    tuitionOverview:
      "Statutory and institutional tuition fees vary by programme, degree level, and nationality status; confirm directly with the institution.",
    scholarshipOverview:
      "Verify scholarship availability, eligibility, and terms directly on official institutional and national portals.",
    admissionOverview:
      "Admission requirements and selection procedures (including numerus fixus programmes where applicable) are set by each institution.",
    applicationCycle: "2027/2028 Academic Cycle",
    applicationOpeningDate: null,
    applicationDeadline: null,
    intakeStartDate: null,
    officialLinks: [
      {
        label: "Nuffic — Study in NL Official Information",
        url: "https://www.studyinnl.org/",
      },
    ],
    sourceUrl: "https://www.studyinnl.org/",
    lastReviewed: REVIEW_DATE,
  },
  {
    slug: "austria",
    name: "Austria",
    region: "Central Europe",
    imageSrc: "/assets/images/unique/extra-river-03.jpg",
    imageAlt: "Lakeside Alpine village and mountain scenery in Hallstatt, Austria",
    summary:
      "Discover Austrian universities and higher-education pathways across major academic cities.",
    officialLanguages: ["German"],
    commonStudyCities: ["Vienna", "Graz", "Innsbruck", "Salzburg"],
    educationSystemOverview:
      "Austria's higher education system encompasses public universities, universities of applied sciences (Fachhochschulen), and private universities.",
    availableDegreeLevels: ["Bachelor's", "Master's", "PhD / Doctoral"],
    tuitionOverview:
      "Tuition fee obligations and exemptions depend on student status, citizenship, and study duration; verify with the university.",
    scholarshipOverview:
      "Consult official Austrian higher-education and grant agencies for verified funding information.",
    admissionOverview:
      "Admission rules, entrance examinations, and registration periods vary by programme and university.",
    applicationCycle: "2027/2028 Academic Cycle",
    applicationOpeningDate: null,
    applicationDeadline: null,
    intakeStartDate: null,
    officialLinks: [
      {
        label: "Study in Austria — Official Portal",
        url: "https://www.studyinaustria.at/en/",
      },
    ],
    sourceUrl: "https://www.studyinaustria.at/en/",
    lastReviewed: REVIEW_DATE,
  },
] as const;

export function getStudyCountryBySlug(slug: string): StudyCountryRecord | undefined {
  return STUDY_COUNTRIES.find((c) => c.slug === slug);
}
