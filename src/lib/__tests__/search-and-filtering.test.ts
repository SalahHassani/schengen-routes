import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { EXPLORE_EVENTS } from "@/data/explore/events";
import { EXPLORE_EXPERIENCES } from "@/data/explore/experiences";
import { EXPLORE_PLACES } from "@/data/explore/places";
import { EXPLORE_STORIES } from "@/data/explore/stories";
import { STUDY_PROGRAMMES } from "@/data/study/programmes";
import { STUDY_UNIVERSITIES } from "@/data/study/universities";
import { TRAVEL_CITY_GUIDES } from "@/data/travel/cities";
import { TRAVEL_DESTINATIONS } from "@/data/travel/destinations";
import { TRAVEL_GUIDE_ARTICLES } from "@/data/travel/guides";
import { TRAVEL_ITINERARIES } from "@/data/travel/itineraries";
import { COUNTRY_VISA_GUIDES } from "@/data/visa-guide/countries";
import { DOCUMENT_CHECKLIST_ITEMS } from "@/data/visa-guide/document-checklists";
import { VISA_FAQS } from "@/data/visa-guide/faqs";
import { VISA_CATEGORIES } from "@/data/visa-guide/visa-categories";
import { filterExploreItems } from "@/lib/explore/filters";
import { getSearchIndex, groupSearchResultsByServiceArea, searchAllContent } from "@/lib/search";
import {
  buildSearchQueryString,
  sanitizeEnumParam,
  sanitizeParam,
} from "@/lib/search/query-params";
import { filterProgrammes, filterUniversities } from "@/lib/study/filters";
import {
  filterCities,
  filterDestinations,
  filterItineraries,
  filterTravelGuides,
} from "@/lib/travel/filters";
import {
  filterCountryVisaGuides,
  filterDocumentChecklist,
  filterVisaCategories,
  filterVisaFaqs,
} from "@/lib/visa-guide/filters";

describe("Global search index and query helpers", () => {
  it("builds a non-empty index across Study, Visa Guide, Travel, and Explore with valid hrefs", () => {
    const index = getSearchIndex();
    assert.ok(index.length > 0);

    const areas = new Set(index.map((item) => item.serviceArea));
    assert.ok(areas.has("Study"));
    assert.ok(areas.has("Visa Guide"));
    assert.ok(areas.has("Travel"));
    assert.ok(areas.has("Explore"));

    for (const item of index) {
      assert.ok(item.title.trim().length > 0);
      assert.ok(item.href.startsWith("/"));
    }
  });

  it("supports case-insensitive matching, whitespace trimming, service filters, and no-results", () => {
    const trimmed = searchAllContent({
      query: "   schengen   ",
      serviceArea: "all",
      contentType: "all",
      country: "all",
    });
    const plain = searchAllContent({
      query: "SCHENGEN",
      serviceArea: "all",
      contentType: "all",
      country: "all",
    });
    assert.equal(trimmed.length, plain.length);
    assert.ok(trimmed.length > 0);

    const grouped = groupSearchResultsByServiceArea(trimmed);
    assert.ok(grouped.length > 0);

    const empty = searchAllContent({
      query: "zzznonexistenttoken98765",
      serviceArea: "all",
      contentType: "all",
      country: "all",
    });
    assert.equal(empty.length, 0);
  });

  it("sanitizes query parameters and omits default/empty values", () => {
    assert.equal(sanitizeParam(null, "all"), "all");
    assert.equal(sanitizeParam("  Germany  ", "all"), "Germany");
    assert.equal(sanitizeEnumParam("INVALID", ["Study", "Travel"] as const, "Study"), "Study");
    assert.equal(
      buildSearchQueryString({ q: "  rail ", service: "all", country: "Germany" }),
      "?q=rail&country=Germany"
    );
    assert.equal(buildSearchQueryString({ q: "  ", service: "all" }), "");
  });
});

describe("Section filter functions", () => {
  it("filters Study universities and programmes reliably", () => {
    const unis = filterUniversities(STUDY_UNIVERSITIES, {
      searchQuery: "",
      country: "all",
      institutionType: "all",
    });
    assert.equal(unis.length, STUDY_UNIVERSITIES.length);

    const progs = filterProgrammes(STUDY_PROGRAMMES, {
      searchQuery: "",
      country: "all",
      degreeLevel: "all",
      subject: "",
      language: "all",
      university: "all",
    });
    assert.equal(progs.length, STUDY_PROGRAMMES.length);
  });

  it("filters Visa Guide categories, countries, checklists, and FAQs", () => {
    assert.ok(
      filterVisaCategories(VISA_CATEGORIES, {
        searchQuery: "",
        country: "all",
        visaCategory: "all",
        purpose: "all",
        context: "all",
      }).length > 0
    );
    assert.ok(
      filterCountryVisaGuides(COUNTRY_VISA_GUIDES, {
        searchQuery: "",
        country: "all",
      }).length > 0
    );
    assert.ok(
      filterDocumentChecklist(DOCUMENT_CHECKLIST_ITEMS, {
        searchQuery: "",
        country: "all",
        visaCategory: "all",
        purpose: "all",
        context: "all",
      }).length > 0
    );
    assert.ok(
      filterVisaFaqs(VISA_FAQS, {
        searchQuery: "",
        visaCategory: "all",
        context: "all",
      }).length > 0
    );
  });

  it("filters Travel destinations, cities, guides, and itineraries", () => {
    assert.ok(
      filterDestinations(TRAVEL_DESTINATIONS, {
        searchQuery: "",
        country: "all",
        city: "all",
        destinationCategory: "all",
      }).length > 0
    );
    assert.ok(
      filterCities(TRAVEL_CITY_GUIDES, {
        searchQuery: "",
        country: "all",
        city: "all",
      }).length > 0
    );
    assert.ok(
      filterTravelGuides(TRAVEL_GUIDE_ARTICLES, {
        searchQuery: "",
        guideCategory: "all",
        country: "all",
      }).length > 0
    );
    assert.ok(
      filterItineraries(TRAVEL_ITINERARIES, {
        searchQuery: "",
        country: "all",
        city: "all",
        itineraryCategory: "all",
        durationBucket: "all",
      }).length > 0
    );
  });

  it("filters Explore items across places, stories, experiences, and events", () => {
    const items = filterExploreItems(
      {
        places: EXPLORE_PLACES,
        stories: EXPLORE_STORIES,
        experiences: EXPLORE_EXPERIENCES,
        events: EXPLORE_EVENTS,
      },
      {
        searchQuery: "",
        category: "all",
        country: "all",
        contentType: "all",
      }
    );
    assert.ok(items.length > 0);
  });
});
