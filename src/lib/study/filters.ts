import type {
  ProgrammeFilterState,
  StudyProgrammeRecord,
  StudyUniversityRecord,
  UniversityFilterState,
} from "@/types/study";

export function filterUniversities(
  universities: readonly StudyUniversityRecord[],
  filters: UniversityFilterState
): StudyUniversityRecord[] {
  const normalizedQuery = filters.searchQuery.trim().toLowerCase();
  const normalizedCountry = filters.country.trim().toLowerCase();
  const normalizedType = filters.institutionType.trim().toLowerCase();

  return universities.filter((uni) => {
    if (normalizedCountry && normalizedCountry !== "all") {
      if (uni.country.toLowerCase() !== normalizedCountry) return false;
    }

    if (normalizedType && normalizedType !== "all") {
      if (uni.institutionType.toLowerCase() !== normalizedType) return false;
    }

    if (normalizedQuery) {
      const searchable = [
        uni.name,
        uni.city,
        uni.country,
        uni.institutionType,
        uni.summary,
        ...uni.programmeCategories,
      ]
        .join(" ")
        .toLowerCase();

      if (!searchable.includes(normalizedQuery)) return false;
    }

    return true;
  });
}

export function filterProgrammes(
  programmes: readonly StudyProgrammeRecord[],
  filters: ProgrammeFilterState
): StudyProgrammeRecord[] {
  const normalizedQuery = filters.searchQuery.trim().toLowerCase();
  const normalizedCountry = filters.country.trim().toLowerCase();
  const normalizedLevel = filters.degreeLevel.trim().toLowerCase();
  const normalizedSubject = filters.subject.trim().toLowerCase();
  const normalizedLanguage = filters.language.trim().toLowerCase();
  const normalizedUniversity = filters.university.trim().toLowerCase();

  return programmes.filter((prog) => {
    if (normalizedCountry && normalizedCountry !== "all") {
      if (prog.country.toLowerCase() !== normalizedCountry) return false;
    }

    if (normalizedLevel && normalizedLevel !== "all") {
      if (prog.degreeLevel.toLowerCase() !== normalizedLevel) return false;
    }

    if (normalizedSubject && normalizedSubject !== "all") {
      if (!prog.fieldOfStudy.toLowerCase().includes(normalizedSubject)) return false;
    }

    if (normalizedLanguage && normalizedLanguage !== "all") {
      if (prog.languageOfInstruction.toLowerCase() !== normalizedLanguage) return false;
    }

    if (normalizedUniversity && normalizedUniversity !== "all") {
      if (prog.universitySlug.toLowerCase() !== normalizedUniversity) return false;
    }

    if (normalizedQuery) {
      const searchable = [
        prog.name,
        prog.universityName,
        prog.city,
        prog.country,
        prog.fieldOfStudy,
        prog.degreeLevel,
      ]
        .join(" ")
        .toLowerCase();

      if (!searchable.includes(normalizedQuery)) return false;
    }

    return true;
  });
}

export function getUniqueUniversityCountries(
  universities: readonly StudyUniversityRecord[]
): string[] {
  return Array.from(new Set(universities.map((u) => u.country))).sort();
}

export function getUniqueInstitutionTypes(
  universities: readonly StudyUniversityRecord[]
): string[] {
  return Array.from(new Set(universities.map((u) => u.institutionType))).sort();
}
