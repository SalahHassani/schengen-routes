import { EXPLORE_CATEGORIES } from "@/data/explore/categories";
import { EXPLORE_EVENTS } from "@/data/explore/events";
import { EXPLORE_EXPERIENCES } from "@/data/explore/experiences";
import { EXPLORE_PLACES } from "@/data/explore/places";
import { EXPLORE_STORIES } from "@/data/explore/stories";
import { STUDY_COUNTRIES } from "@/data/study/countries";
import { STUDY_APPLICATION_SCHEDULES } from "@/data/study/deadlines";
import { STUDY_PROGRAMMES } from "@/data/study/programmes";
import { STUDY_SCHOLARSHIPS } from "@/data/study/scholarships";
import { STUDY_UNIVERSITIES } from "@/data/study/universities";
import { TRAVEL_CITY_GUIDES } from "@/data/travel/cities";
import { TRAVEL_COUNTRY_GUIDES } from "@/data/travel/countries";
import { TRAVEL_DESTINATIONS } from "@/data/travel/destinations";
import { TRAVEL_GUIDE_ARTICLES } from "@/data/travel/guides";
import { TRAVEL_ITINERARIES } from "@/data/travel/itineraries";
import {
  ACCOMMODATION_CATEGORY_GUIDES,
  PRACTICAL_TRAVEL_TIPS,
  TRANSPORT_MODE_GUIDES,
} from "@/data/travel/practical";
import { APPLICATION_PROCESS_STEPS } from "@/data/visa-guide/application-processes";
import { COUNTRY_VISA_GUIDES } from "@/data/visa-guide/countries";
import { DOCUMENT_CHECKLIST_ITEMS } from "@/data/visa-guide/document-checklists";
import { VISA_FAQS } from "@/data/visa-guide/faqs";
import { VISA_CATEGORIES } from "@/data/visa-guide/visa-categories";
import type {
  GlobalSearchFilters,
  GroupedSearchResults,
  SearchIndexItem,
  ServiceArea,
} from "@/types/search";

let cachedSearchIndex: SearchIndexItem[] | null = null;

function buildSearchIndex(): SearchIndexItem[] {
  const items: SearchIndexItem[] = [];

  for (const c of STUDY_COUNTRIES) {
    items.push({
      id: `study-country-${c.slug}`,
      title: c.name,
      summary: c.summary,
      serviceArea: "Study",
      contentType: "Study Country",
      href: "/study/countries",
      country: c.name,
      category: c.region,
      searchText: [
        c.name,
        c.region,
        c.summary,
        c.educationSystemOverview,
        ...c.officialLanguages,
        ...c.commonStudyCities,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const u of STUDY_UNIVERSITIES) {
    items.push({
      id: `study-uni-${u.slug}`,
      title: u.name,
      summary: u.summary,
      serviceArea: "Study",
      contentType: "University",
      href: "/study/universities",
      country: u.country,
      category: u.institutionType,
      searchText: [
        u.name,
        u.city,
        u.country,
        u.institutionType,
        u.summary,
        ...u.programmeCategories,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const p of STUDY_PROGRAMMES) {
    items.push({
      id: `study-prog-${p.slug}`,
      title: p.name,
      summary: `${p.degreeLevel} at ${p.universityName} (${p.city}, ${p.country}) — ${p.languageOfInstruction}`,
      serviceArea: "Study",
      contentType: "Programme",
      href: "/study/programmes",
      country: p.country,
      category: p.fieldOfStudy,
      searchText: [
        p.name,
        p.universityName,
        p.city,
        p.country,
        p.degreeLevel,
        p.fieldOfStudy,
        p.languageOfInstruction,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const s of STUDY_SCHOLARSHIPS) {
    items.push({
      id: `study-sch-${s.slug}`,
      title: s.name,
      summary: `${s.provider} · ${s.country} · ${s.fundingType}`,
      serviceArea: "Study",
      contentType: "Scholarship",
      href: "/study/scholarships",
      country: s.country,
      category: s.fundingType,
      searchText: [s.name, s.provider, s.country, s.fundingType, s.eligibilitySummary ?? ""]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const d of STUDY_APPLICATION_SCHEDULES) {
    items.push({
      id: `study-deadline-${d.id}`,
      title: d.label,
      summary: `${d.programmeOrScope} (${d.country} · ${d.applicationCycle})`,
      serviceArea: "Study",
      contentType: "Application Deadline",
      href: "/study/application-deadlines",
      country: d.country,
      category: d.applicationCycle,
      searchText: [
        d.label,
        d.country,
        d.institutionName ?? "",
        d.programmeOrScope,
        d.applicationCycle,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const vc of VISA_CATEGORIES) {
    items.push({
      id: `visa-cat-${vc.id}`,
      title: vc.title,
      summary: vc.summary,
      serviceArea: "Visa Guide",
      contentType: "Visa Category",
      href: vc.guideHref || "/visa-guide",
      category: vc.shortLabel,
      searchText: [vc.title, vc.shortLabel, vc.summary, vc.distinctionNote, ...vc.typicalPurposes]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const cg of COUNTRY_VISA_GUIDES) {
    items.push({
      id: `visa-country-${cg.slug}`,
      title: `${cg.name} Visa & Entry Guide`,
      summary: cg.summary,
      serviceArea: "Visa Guide",
      contentType: "Visa Country Guide",
      href: "/visa-guide/countries",
      country: cg.name,
      category: cg.region,
      searchText: [
        cg.name,
        cg.region,
        cg.summary,
        cg.membershipNote,
        cg.shortStayOverview,
        cg.studentVisaOverview,
        cg.nationalLongStayOverview,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const doc of DOCUMENT_CHECKLIST_ITEMS) {
    items.push({
      id: `visa-doc-${doc.id}`,
      title: doc.documentName,
      summary: doc.explanation,
      serviceArea: "Visa Guide",
      contentType: "Document Checklist",
      href: "/visa-guide/document-checklists",
      country: doc.country,
      category: doc.visaCategoryLabel,
      searchText: [
        doc.documentName,
        doc.checklistCategory,
        doc.explanation,
        doc.applicantCategory,
        doc.visaCategoryLabel,
        doc.country,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const step of APPLICATION_PROCESS_STEPS) {
    items.push({
      id: `visa-step-${step.id}`,
      title: `Step ${step.stepNumber}: ${step.stepTitle}`,
      summary: step.explanation,
      serviceArea: "Visa Guide",
      contentType: "Application Procedure",
      href: "/visa-guide/application-process",
      country: step.country,
      category: step.visaCategoryLabel,
      searchText: [
        step.stepTitle,
        step.explanation,
        step.requiredAction,
        step.visaCategoryLabel,
        step.country,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const faq of VISA_FAQS) {
    items.push({
      id: `visa-faq-${faq.id}`,
      title: faq.question,
      summary: faq.answer,
      serviceArea: "Visa Guide",
      contentType: "Visa FAQ",
      href: "/visa-guide/faqs",
      country: faq.country,
      category: faq.visaCategory,
      searchText: [faq.question, faq.answer, faq.country, faq.sourceAuthority]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const tc of TRAVEL_COUNTRY_GUIDES) {
    items.push({
      id: `travel-country-${tc.slug}`,
      title: tc.name,
      summary: tc.introduction,
      serviceArea: "Travel",
      contentType: "Travel Country",
      href: "/travel/countries",
      country: tc.name,
      category: tc.region,
      searchText: [
        tc.name,
        tc.region,
        tc.introduction,
        tc.transportationOverview,
        tc.currencyInfo,
        tc.languageInfo,
        ...tc.mainDestinations,
        ...tc.importantCities,
        ...tc.practicalTravelInfo,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const city of TRAVEL_CITY_GUIDES) {
    items.push({
      id: `travel-city-${city.slug}`,
      title: city.name,
      summary: city.introduction,
      serviceArea: "Travel",
      contentType: "City Guide",
      href: "/travel/cities",
      country: city.country,
      searchText: [
        city.name,
        city.country,
        city.introduction,
        ...city.neighbourhoods,
        ...city.mainAttractions,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const dest of TRAVEL_DESTINATIONS) {
    items.push({
      id: `travel-dest-${dest.slug}`,
      title: dest.name,
      summary: dest.shortDescription,
      serviceArea: "Travel",
      contentType: "Destination",
      href: "/travel/destinations",
      country: dest.country,
      category: dest.category,
      searchText: [
        dest.name,
        dest.country,
        dest.city ?? "",
        dest.region,
        dest.category,
        dest.shortDescription,
        ...dest.mainAttractions,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const guide of TRAVEL_GUIDE_ARTICLES) {
    items.push({
      id: `travel-guide-${guide.slug}`,
      title: guide.title,
      summary: guide.summary,
      serviceArea: "Travel",
      contentType: "Travel Guide",
      href: "/travel/guides",
      category: guide.category,
      searchText: [
        guide.title,
        guide.category,
        guide.summary,
        ...guide.relatedDestinations,
        ...guide.contentSections.map((s) => `${s.heading} ${s.body}`),
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const itin of TRAVEL_ITINERARIES) {
    items.push({
      id: `travel-itin-${itin.slug}`,
      title: itin.title,
      summary: `${itin.durationLabel} · ${itin.description}`,
      serviceArea: "Travel",
      contentType: "Itinerary",
      href: "/travel/itineraries",
      country: itin.countries[0],
      category: itin.category,
      searchText: [
        itin.title,
        itin.description,
        itin.category,
        itin.durationLabel,
        ...itin.countries,
        ...itin.cities,
        ...itin.suggestedActivities,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const tr of TRANSPORT_MODE_GUIDES) {
    items.push({
      id: `travel-transport-${tr.id}`,
      title: tr.name,
      summary: tr.summary,
      serviceArea: "Travel",
      contentType: "Transportation",
      href: "/travel/transportation",
      category: "Transportation",
      searchText: [tr.name, tr.summary, ...tr.advantages, ...tr.considerations]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const acc of ACCOMMODATION_CATEGORY_GUIDES) {
    items.push({
      id: `travel-acc-${acc.id}`,
      title: acc.name,
      summary: acc.summary,
      serviceArea: "Travel",
      contentType: "Accommodation",
      href: "/travel/accommodation",
      category: "Accommodation",
      searchText: [acc.name, acc.summary, acc.practicalNotes, ...acc.evaluationCriteria]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const tip of PRACTICAL_TRAVEL_TIPS) {
    items.push({
      id: `travel-tip-${tip.id}`,
      title: tip.topic,
      summary: tip.summary,
      serviceArea: "Travel",
      contentType: "Practical Travel Tip",
      href: "/travel",
      category: "Practical Guidance",
      searchText: [tip.topic, tip.summary, tip.guidance].join(" ").toLowerCase(),
    });
  }

  for (const cat of EXPLORE_CATEGORIES) {
    items.push({
      id: `explore-cat-${cat.id}`,
      title: cat.title,
      summary: cat.description,
      serviceArea: "Explore",
      contentType: "Explore Category",
      href: cat.href,
      category: cat.slug,
      searchText: [cat.title, cat.slug, cat.description].join(" ").toLowerCase(),
    });
  }

  for (const place of EXPLORE_PLACES) {
    const detailHref =
      place.category === "landmarks"
        ? `/explore/landmarks/${place.slug}`
        : `/explore/${place.category}`;
    items.push({
      id: `explore-place-${place.id}`,
      title: place.name,
      summary: place.description,
      serviceArea: "Explore",
      contentType: "Place & Landmark",
      href: detailHref,
      country: place.country,
      category: place.category,
      searchText: [
        place.name,
        place.country,
        place.city ?? "",
        place.category,
        place.description,
        place.significance,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const story of EXPLORE_STORIES) {
    items.push({
      id: `explore-story-${story.id}`,
      title: story.title,
      summary: story.excerpt,
      serviceArea: "Explore",
      contentType: "Story",
      href: `/explore/stories/${story.slug}`,
      country: story.country,
      category: story.category,
      searchText: [
        story.title,
        story.country ?? "",
        story.city ?? "",
        story.category,
        story.excerpt,
        ...story.content,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const exp of EXPLORE_EXPERIENCES) {
    items.push({
      id: `explore-exp-${exp.id}`,
      title: exp.title,
      summary: exp.description,
      serviceArea: "Explore",
      contentType: "Experience",
      href: `/explore/experiences/${exp.slug}`,
      country: exp.country,
      category: exp.category,
      searchText: [
        exp.title,
        exp.location,
        exp.country,
        exp.city ?? "",
        exp.category,
        exp.description,
      ]
        .join(" ")
        .toLowerCase(),
    });
  }

  for (const ev of EXPLORE_EVENTS) {
    items.push({
      id: `explore-event-${ev.id}`,
      title: ev.title,
      summary: ev.description,
      serviceArea: "Explore",
      contentType: "Cultural Event",
      href: "/explore/festivals",
      country: ev.country,
      category: "festivals",
      searchText: [ev.title, ev.location, ev.country, ev.description].join(" ").toLowerCase(),
    });
  }

  return items;
}

export function getSearchIndex(): readonly SearchIndexItem[] {
  if (!cachedSearchIndex) {
    cachedSearchIndex = buildSearchIndex();
  }
  return cachedSearchIndex;
}

export function searchAllContent(
  filters: GlobalSearchFilters,
  index: readonly SearchIndexItem[] = getSearchIndex()
): SearchIndexItem[] {
  const normalizedQuery = filters.query.trim().toLowerCase();
  const normalizedCountry = filters.country.trim().toLowerCase();
  const normalizedType = filters.contentType.trim();

  return index.filter((item) => {
    if (filters.serviceArea !== "all" && item.serviceArea !== filters.serviceArea) {
      return false;
    }

    if (normalizedType && normalizedType !== "all" && item.contentType !== normalizedType) {
      return false;
    }

    if (normalizedCountry && normalizedCountry !== "all") {
      if (!item.country || item.country.toLowerCase() !== normalizedCountry) {
        return false;
      }
    }

    if (normalizedQuery && !item.searchText.includes(normalizedQuery)) {
      return false;
    }

    return true;
  });
}

const SERVICE_AREA_ORDER: readonly { area: ServiceArea; href: string }[] = [
  { area: "Study", href: "/study" },
  { area: "Visa Guide", href: "/visa-guide" },
  { area: "Travel", href: "/travel" },
  { area: "Explore", href: "/explore" },
];

export function groupSearchResultsByServiceArea(
  results: readonly SearchIndexItem[]
): GroupedSearchResults[] {
  return SERVICE_AREA_ORDER.map(({ area, href }) => ({
    serviceArea: area,
    href,
    items: results.filter((item) => item.serviceArea === area),
  })).filter((group) => group.items.length > 0);
}
