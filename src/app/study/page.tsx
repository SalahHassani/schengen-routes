import type { Metadata } from "next";
import { CountryGrid } from "@/components/study/country-grid";
import { DeadlineList } from "@/components/study/deadline-list";
import { ProgrammeDirectory } from "@/components/study/programme-directory";
import { ScholarshipDirectory } from "@/components/study/scholarship-directory";
import { StudyCta } from "@/components/study/study-cta";
import { StudyHero } from "@/components/study/study-hero";
import { StudySubnav } from "@/components/study/study-subnav";
import { UniversityDirectory } from "@/components/study/university-directory";
import { STUDY_COUNTRIES } from "@/data/study/countries";
import { STUDY_APPLICATION_SCHEDULES } from "@/data/study/deadlines";
import { STUDY_PROGRAMMES } from "@/data/study/programmes";
import { STUDY_SCHOLARSHIPS } from "@/data/study/scholarships";
import { STUDY_UNIVERSITIES } from "@/data/study/universities";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Study in Europe | ${BRAND.name}`,
  description:
    "Discover European universities, academic programmes, scholarships, and structured application timelines across Germany, Italy, Hungary, France, Netherlands, and Austria.",
};

export default function StudyPage() {
  return (
    <>
      <StudyHero />
      <StudySubnav activeHref="/study" />
      <CountryGrid countries={STUDY_COUNTRIES} background="white" />
      <ProgrammeDirectory
        programmes={STUDY_PROGRAMMES}
        countries={STUDY_COUNTRIES}
        universities={STUDY_UNIVERSITIES}
        background="subtle"
      />
      <UniversityDirectory universities={STUDY_UNIVERSITIES} background="white" />
      <ScholarshipDirectory scholarships={STUDY_SCHOLARSHIPS} background="subtle" />
      <DeadlineList schedules={STUDY_APPLICATION_SCHEDULES} background="white" />
      <StudyCta />
    </>
  );
}
