import type { CountryVisaGuideRecord } from "@/types/visa-guide";

const PUBLISHED_DATE = "2026-11-24";
const REVIEW_DATE = "2026-11-24";

export const COUNTRY_VISA_GUIDES: readonly CountryVisaGuideRecord[] = [
  {
    slug: "germany",
    name: "Germany",
    region: "Western & Central Europe",
    imageSrc: "/assets/images/unique/rotterdam-01.jpg",
    imageAlt: "Historic Alpine castle and forested landscape in Bavaria, Germany",
    summary:
      "Overview of official German Federal Foreign Office visa portals, Schengen short-stay rules, and national student/long-stay residence frameworks.",
    isSchengenMember: true,
    isEuMember: true,
    membershipNote: "Member State of the European Union and the Schengen Area.",
    officialForeignMinistry: {
      authority: "Federal Foreign Office (Auswärtiges Amt)",
      label: "Germany Visa Navigator & Mission Directory",
      url: "https://www.auswaertiges-amt.de/en/visa-service",
    },
    officialImmigrationAuthority: {
      authority: "Federal Office for Migration and Refugees (BAMF)",
      label: "BAMF Migration & Residence Information",
      url: "https://www.bamf.de/EN/Startseite/startseite_node.html",
    },
    officialVisaPortal: {
      authority: "German Consular Services Portal",
      label: "Consular Services Portal (Digital Visa Applications)",
      url: "https://digital.diplo.de/",
    },
    embassyGuidanceNote:
      "Competent German embassies, consulates, or authorised external service providers depend on your country of legal residence.",
    shortStayOverview:
      "Short stays are governed by Schengen Visa Code rules; check nationality-based visa exemptions and mission-specific instructions.",
    nationalLongStayOverview:
      "Long-term stays require a national visa (Category D) prior to entry where applicable, followed by residence permit registration at the local Ausländerbehörde.",
    studentVisaOverview:
      "International students generally require a national student visa (or applicant visa where eligible) supported by university admission, proof of financial resources, and health insurance.",
    residencePermitOverview:
      "After arrival in Germany, long-stay visa holders register their address (Anmeldung) and apply for the electronic residence title (eAT) within the visa validity period.",
    applicationProcedureSummary:
      "Determine visa type via the Auswärtiges Amt Visa Navigator, identify the responsible German mission, prepare supporting documentation, book an appointment, and submit biometrics.",
    documentRequirementsSummary:
      "Exact checklists vary by mission and applicant nationality; always download the checklist published by the specific German embassy or consulate handling your application.",
    appointmentInfo:
      "Appointments must be booked directly through the responsible German mission or its officially authorised external partner; availability varies by location.",
    verifiedFeesNote: null,
    verifiedProcessingTimeNote: null,
    editorialNotes:
      "Country-specific fee schedules and mission processing times are omitted because they vary by visa category, exemption rules, and diplomatic mission.",
    sources: [
      {
        authority: "Federal Foreign Office (Auswärtiges Amt)",
        label: "Visa Service — Federal Foreign Office",
        url: "https://www.auswaertiges-amt.de/en/visa-service",
      },
      {
        authority: "Make it in Germany (Federal Government Portal)",
        label: "Visa & Residence Information",
        url: "https://www.make-it-in-germany.com/en/visa-residence",
      },
    ],
    publishedDate: PUBLISHED_DATE,
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    slug: "italy",
    name: "Italy",
    region: "Southern Europe",
    imageSrc: "/assets/images/unique/rotterdam-02.jpg",
    imageAlt: "Panoramic view of the historic cathedral dome and skyline of Florence, Italy",
    summary:
      "Official Italian Ministry of Foreign Affairs visa portal references for Schengen short stays, study visas, and post-arrival residence permits.",
    isSchengenMember: true,
    isEuMember: true,
    membershipNote: "Member State of the European Union and the Schengen Area.",
    officialForeignMinistry: {
      authority: "Ministry of Foreign Affairs and International Cooperation (MAECI)",
      label: "Il Visto per l'Italia — Official Visa Portal",
      url: "https://vistoperitalia.esteri.it/home/en",
    },
    officialImmigrationAuthority: {
      authority: "Ministero dell'Interno / Polizia di Stato",
      label: "Polizia di Stato — Residence Permit (Permesso di Soggiorno)",
      url: "https://www.poliziadistato.it/articolo/10716",
    },
    officialVisaPortal: {
      authority: "MAECI & Universitaly",
      label: "Universitaly International Student Pre-Enrolment",
      url: "https://www.universitaly.it/",
    },
    embassyGuidanceNote:
      "Applications are lodged at the competent Italian embassy, consulate, or authorised visa centre serving your place of residence.",
    shortStayOverview:
      "Short stays follow Schengen rules; the official 'Il Visto per l'Italia' questionnaire outlines whether a visa is required based on nationality, residence, duration, and purpose.",
    nationalLongStayOverview:
      "Long-stay visas (Type D) cover study, work, and family reunification under Italian national immigration law.",
    studentVisaOverview:
      "Degree-seeking non-EU students typically complete pre-enrolment procedures via Universitaly alongside their national study visa application at the competent Italian diplomatic mission.",
    residencePermitOverview:
      "Within 8 working days of entering Italy on a long-stay visa, non-EU nationals apply for a Permesso di Soggiorno.",
    applicationProcedureSummary:
      "Verify eligibility on Il Visto per l'Italia, complete any required university pre-enrolment, gather mission-specific documents, and attend your consular appointment.",
    documentRequirementsSummary:
      "Document checklists depend on the specific consular post and visa category; verify directly on your local Italian embassy or consulate website.",
    appointmentInfo:
      "Consular and visa-centre appointment booking systems are managed per diplomatic mission.",
    verifiedFeesNote: null,
    verifiedProcessingTimeNote: null,
    editorialNotes:
      "Consular jurisdiction and pre-enrolment timelines vary by academic cycle and mission; confirm directly with official Italian authorities.",
    sources: [
      {
        authority: "Italian Ministry of Foreign Affairs (MAECI)",
        label: "Il Visto per l'Italia",
        url: "https://vistoperitalia.esteri.it/home/en",
      },
      {
        authority: "Universitaly",
        label: "Official Italian Higher Education Portal",
        url: "https://www.universitaly.it/",
      },
    ],
    publishedDate: PUBLISHED_DATE,
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    slug: "france",
    name: "France",
    region: "Western Europe",
    imageSrc: "/assets/images/unique/rotterdam-03.jpg",
    imageAlt: "Historic stone abbey architecture at Mont Saint-Michel in Normandy, France",
    summary:
      "Official France-Visas and Campus France references for Schengen short stays, student visas, and long-stay validation procedures.",
    isSchengenMember: true,
    isEuMember: true,
    membershipNote: "Member State of the European Union and the Schengen Area.",
    officialForeignMinistry: {
      authority: "French Government — France-Visas",
      label: "France-Visas — Official Visa Portal for France",
      url: "https://france-visas.gouv.fr/en/",
    },
    officialImmigrationAuthority: {
      authority: "Ministry of the Interior / OFII",
      label: "Service-Public.fr — Foreigners in France",
      url: "https://www.service-public.fr/particuliers/vosdroits/N19804?lang=en",
    },
    officialVisaPortal: {
      authority: "France-Visas & Campus France",
      label: "France-Visas Visa Wizard",
      url: "https://france-visas.gouv.fr/en/web/france-visas/visa-wizard",
    },
    embassyGuidanceNote:
      "In countries participating in the 'Études en France' procedure, prospective students complete Campus France steps before submitting their visa file.",
    shortStayOverview:
      "Short stays in European France are governed by Schengen rules; France-Visas provides an official Visa Wizard tailored to nationality and purpose.",
    nationalLongStayOverview:
      "Long-stay visas (VLS-TS or long-stay visas requiring a residence permit application) are managed through France-Visas.",
    studentVisaOverview:
      "Students admitted to French higher-education institutions generally apply for a long-stay student visa (such as VLS-TS étudiant) via France-Visas, following Études en France rules where applicable.",
    residencePermitOverview:
      "Holders of a VLS-TS validate their visa online after arrival in France through the official ANEF portal within the prescribed timeframe.",
    applicationProcedureSummary:
      "Check requirements using the France-Visas Visa Wizard, complete Campus France pre-consular steps if applicable, submit the online form, and book a biometric appointment.",
    documentRequirementsSummary:
      "France-Visas generates a personalised list of supporting documents based on your profile, nationality, and visa type.",
    appointmentInfo:
      "Biometric and document submission appointments are booked through the authorised visa centre or consulate indicated by France-Visas.",
    verifiedFeesNote: null,
    verifiedProcessingTimeNote: null,
    editorialNotes:
      "Overseas French territories (DROM-CTOM) have distinct visa rules separate from the European Schengen territory.",
    sources: [
      {
        authority: "French Government — France-Visas",
        label: "Official Visa Portal for France",
        url: "https://france-visas.gouv.fr/en/",
      },
      {
        authority: "Campus France",
        label: "Student Visa Information",
        url: "https://www.campusfrance.org/en/visa-procedure",
      },
    ],
    publishedDate: PUBLISHED_DATE,
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    slug: "hungary",
    name: "Hungary",
    region: "Central Europe",
    imageSrc: "/assets/images/unique/rotterdam-04.jpg",
    imageAlt:
      "Hungarian Parliament Building illuminated along the Danube River in Budapest, Hungary",
    summary:
      "Official Hungarian Consular Services and National Directorate-General for Aliens Policing references for short stays and study/national residence.",
    isSchengenMember: true,
    isEuMember: true,
    membershipNote: "Member State of the European Union and the Schengen Area.",
    officialForeignMinistry: {
      authority: "Ministry of Foreign Affairs and Trade — Consular Services",
      label: "Hungarian Consular Services — Visa Information",
      url: "https://konzinfo.mfa.gov.hu/en",
    },
    officialImmigrationAuthority: {
      authority: "National Directorate-General for Aliens Policing (OIF)",
      label: "Enter Hungary — Official Residence Permit Portal",
      url: "https://enterhungary.gov.hu/",
    },
    officialVisaPortal: {
      authority: "National Directorate-General for Aliens Policing (OIF)",
      label: "OIF Residence Procedures",
      url: "http://www.bmbah.hu/index.php?lang=en",
    },
    embassyGuidanceNote:
      "Verify whether your application is lodged at a Hungarian diplomatic mission, external service provider, or initiated via Enter Hungary according to current rules.",
    shortStayOverview:
      "Short stays up to 90 days in any 180-day period are governed by Schengen Visa Code rules.",
    nationalLongStayOverview:
      "Stays exceeding 90 days fall under Hungarian national immigration legislation governing residence permits for study, employment, or family reunification.",
    studentVisaOverview:
      "Third-country students admitted to a Hungarian higher-education institution apply for a residence permit for the purpose of studies (and an entry visa for receiving the residence permit where required).",
    residencePermitOverview:
      "Approved applicants collect or complete biometric residence permit formalities with the regional directorate of the National Directorate-General for Aliens Policing.",
    applicationProcedureSummary:
      "Confirm the applicable procedure with Hungarian Consular Services and the National Directorate-General for Aliens Policing before booking an appointment.",
    documentRequirementsSummary:
      "Supporting documents depend on the specific residence purpose and current statutory provisions; verify directly on official Hungarian portals.",
    appointmentInfo:
      "Appointment scheduling depends on the responsible Hungarian embassy/consulate or regional immigration office.",
    verifiedFeesNote: null,
    verifiedProcessingTimeNote: null,
    editorialNotes:
      "Hungarian immigration legislation is updated periodically; always verify current statutory requirements on Konzinfo and OIF/Enter Hungary.",
    sources: [
      {
        authority: "Hungarian Ministry of Foreign Affairs and Trade",
        label: "Consular Services (Konzinfo)",
        url: "https://konzinfo.mfa.gov.hu/en",
      },
      {
        authority: "National Directorate-General for Aliens Policing (OIF)",
        label: "Enter Hungary Portal",
        url: "https://enterhungary.gov.hu/",
      },
    ],
    publishedDate: PUBLISHED_DATE,
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Under review",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    region: "Western Europe",
    imageSrc: "/assets/images/unique/salzburg-01.jpg",
    imageAlt: "Traditional Dutch windmills along waterways at Kinderdijk in the Netherlands",
    summary:
      "Official NetherlandsWorldwide and IND (Immigration and Naturalisation Service) references for Schengen short stays and MVV/study residence procedures.",
    isSchengenMember: true,
    isEuMember: true,
    membershipNote: "Member State of the European Union and the Schengen Area.",
    officialForeignMinistry: {
      authority: "Ministry of Foreign Affairs — NetherlandsWorldwide",
      label: "NetherlandsWorldwide — Visas for the Netherlands",
      url: "https://www.netherlandsworldwide.nl/visa-the-netherlands",
    },
    officialImmigrationAuthority: {
      authority: "Immigration and Naturalisation Service (IND)",
      label: "IND — Studying & Residence in the Netherlands",
      url: "https://ind.nl/en/residence-permits/study",
    },
    officialVisaPortal: {
      authority: "IND & NetherlandsWorldwide",
      label: "IND Residence Permits Overview",
      url: "https://ind.nl/en",
    },
    embassyGuidanceNote:
      "For Dutch study residence permits, recognised educational institutions act as sponsor and submit the TEV (Entry and Residence) application to the IND on the student's behalf.",
    shortStayOverview:
      "Short stays are governed by Schengen rules; NetherlandsWorldwide provides country-of-residence-specific application guidance.",
    nationalLongStayOverview:
      "Long stays typically involve a provisional residence permit (MVV) and residence permit (VVR) procedure assessed by the IND.",
    studentVisaOverview:
      "In the Netherlands, recognised universities apply to the IND for the student's residence permit (and MVV entry visa if required based on nationality) rather than the student applying independently first.",
    residencePermitOverview:
      "After IND approval and MVV collection (where required), students collect their residence document in the Netherlands and register in the Municipal Personal Records Database (BRP).",
    applicationProcedureSummary:
      "For short stays, apply via NetherlandsWorldwide; for degree study, follow your Dutch university's IND sponsor instructions.",
    documentRequirementsSummary:
      "Checklists differ substantially between short-stay Schengen applications and sponsor-led IND study applications.",
    appointmentInfo:
      "Short-stay and MVV biometric appointments are arranged through Dutch missions or authorised visa centres listed on NetherlandsWorldwide.",
    verifiedFeesNote: null,
    verifiedProcessingTimeNote: null,
    editorialNotes:
      "Caribbean parts of the Kingdom of the Netherlands are outside the Schengen Area and follow separate Caribbean visa rules.",
    sources: [
      {
        authority: "NetherlandsWorldwide",
        label: "Visas for the Netherlands",
        url: "https://www.netherlandsworldwide.nl/visa-the-netherlands",
      },
      {
        authority: "Immigration and Naturalisation Service (IND)",
        label: "IND — Study Residence Permit",
        url: "https://ind.nl/en/residence-permits/study",
      },
    ],
    publishedDate: PUBLISHED_DATE,
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
  {
    slug: "austria",
    name: "Austria",
    region: "Central Europe",
    imageSrc: "/assets/images/unique/salzburg-02.jpg",
    imageAlt: "Lakeside Alpine village and mountain scenery in Hallstatt, Austria",
    summary:
      "Official Austrian Federal Ministry (BMEIA) and OeAD references for Schengen short stays, Visa D, and Student Residence Permits.",
    isSchengenMember: true,
    isEuMember: true,
    membershipNote: "Member State of the European Union and the Schengen Area.",
    officialForeignMinistry: {
      authority: "Federal Ministry for European and International Affairs (BMEIA)",
      label: "BMEIA — Entry & Residence Information",
      url: "https://www.bmeia.gv.at/en/travel-stay/entrance-and-residence-in-austria",
    },
    officialImmigrationAuthority: {
      authority: "OeAD — Austria's Agency for Education and Internationalisation",
      label: "OeAD — Entry & Residence Guide for Students",
      url: "https://oead.at/en/to-austria/entry-and-residence",
    },
    officialVisaPortal: {
      authority: "Austrian Migration Portal (migration.gv.at)",
      label: "Official Austrian Government Migration Portal",
      url: "https://www.migration.gv.at/en/",
    },
    embassyGuidanceNote:
      "Check whether your nationality allows visa-free entry to submit a residence permit application in Austria or requires applying at the competent Austrian embassy/consulate abroad.",
    shortStayOverview: "Short stays up to 90 days within 180 days follow Schengen Visa Code rules.",
    nationalLongStayOverview:
      "National Visa D (for stays between 91 days and 6 months) and Residence Permits (for stays exceeding 6 months) are governed by Austrian settlement and residence law.",
    studentVisaOverview:
      "Degree students planning to stay longer than 6 months generally apply for a Student Residence Permit (Aufenthaltsbewilligung – Student), followed by a Visa D to enter Austria if required.",
    residencePermitOverview:
      "Upon arrival in Austria, students complete residence registration (Meldezettel) within 3 working days and collect their residence permit card from the competent Austrian authority.",
    applicationProcedureSummary:
      "Verify whether you apply abroad at an Austrian diplomatic mission or in Austria, prepare legalised/translated documents where required, and follow BMEIA/OeAD guidance.",
    documentRequirementsSummary:
      "Document legalisation (apostille or diplomatic authentication) rules depend on the country issuing your civil and academic records.",
    appointmentInfo:
      "Appointments at Austrian representative authorities abroad must be scheduled in advance through the competent mission.",
    verifiedFeesNote: null,
    verifiedProcessingTimeNote: null,
    editorialNotes:
      "Document authentication requirements vary significantly by issuing country; verify directly on BMEIA and OeAD.",
    sources: [
      {
        authority: "Austrian Federal Ministry (BMEIA)",
        label: "Entrance and Residence in Austria",
        url: "https://www.bmeia.gv.at/en/travel-stay/entrance-and-residence-in-austria",
      },
      {
        authority: "OeAD",
        label: "Entry and Residence in Austria",
        url: "https://oead.at/en/to-austria/entry-and-residence",
      },
    ],
    publishedDate: PUBLISHED_DATE,
    lastReviewed: REVIEW_DATE,
    reviewStatus: "Verified",
  },
] as const;
