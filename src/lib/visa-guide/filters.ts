import type {
  CountryVisaGuideRecord,
  DocumentChecklistItem,
  VisaCategoryRecord,
  VisaFaqItem,
  VisaGuideFilterState,
} from "@/types/visa-guide";

export function filterVisaCategories(
  categories: readonly VisaCategoryRecord[],
  filters: VisaGuideFilterState
): VisaCategoryRecord[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return categories.filter((cat) => {
    if (filters.visaCategory !== "all" && cat.id !== filters.visaCategory) {
      return false;
    }

    if (filters.context === "student" && !cat.isStudentContext) {
      return false;
    }

    if (filters.context === "non-student" && cat.isStudentContext) {
      return false;
    }

    if (
      filters.purpose !== "all" &&
      !cat.typicalPurposes.some((p) => p.toLowerCase() === filters.purpose.toLowerCase())
    ) {
      return false;
    }

    if (query) {
      const searchable = [cat.title, cat.summary, cat.distinctionNote, ...cat.typicalPurposes]
        .join(" ")
        .toLowerCase();
      if (!searchable.includes(query)) return false;
    }

    return true;
  });
}

export function filterCountryVisaGuides(
  countries: readonly CountryVisaGuideRecord[],
  filters: Pick<VisaGuideFilterState, "searchQuery" | "country">
): CountryVisaGuideRecord[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return countries.filter((country) => {
    if (filters.country !== "all" && country.name.toLowerCase() !== filters.country.toLowerCase()) {
      return false;
    }

    if (query) {
      const searchable = [
        country.name,
        country.region,
        country.summary,
        country.membershipNote,
        country.shortStayOverview,
        country.studentVisaOverview,
        country.nationalLongStayOverview,
      ]
        .join(" ")
        .toLowerCase();
      if (!searchable.includes(query)) return false;
    }

    return true;
  });
}

export function filterDocumentChecklist(
  items: readonly DocumentChecklistItem[],
  filters: VisaGuideFilterState
): DocumentChecklistItem[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    if (
      filters.country !== "all" &&
      item.country !== "All Applicable Countries" &&
      item.country.toLowerCase() !== filters.country.toLowerCase()
    ) {
      return false;
    }

    if (filters.visaCategory !== "all" && item.visaCategory !== filters.visaCategory) {
      return false;
    }

    if (filters.purpose !== "all" && item.purpose.toLowerCase() !== filters.purpose.toLowerCase()) {
      return false;
    }

    if (filters.context === "student" && !item.isStudentContext) {
      return false;
    }

    if (filters.context === "non-student" && item.isStudentContext) {
      return false;
    }

    if (query) {
      const searchable = [
        item.documentName,
        item.checklistCategory,
        item.explanation,
        item.applicantCategory,
        item.visaCategoryLabel,
      ]
        .join(" ")
        .toLowerCase();
      if (!searchable.includes(query)) return false;
    }

    return true;
  });
}

export function filterVisaFaqs(
  faqs: readonly VisaFaqItem[],
  filters: Pick<VisaGuideFilterState, "searchQuery" | "visaCategory" | "context">
): VisaFaqItem[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return faqs.filter((faq) => {
    if (
      filters.visaCategory !== "all" &&
      faq.visaCategory !== "general" &&
      faq.visaCategory !== filters.visaCategory
    ) {
      return false;
    }

    if (filters.context === "student" && !faq.isStudentContext) {
      return false;
    }

    if (filters.context === "non-student" && faq.isStudentContext) {
      return false;
    }

    if (query) {
      const searchable = [faq.question, faq.answer, faq.sourceAuthority].join(" ").toLowerCase();
      if (!searchable.includes(query)) return false;
    }

    return true;
  });
}
