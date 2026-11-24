import type { Metadata } from "next";
import { ProgrammeDirectory } from "@/components/study/programme-directory";
import { StudyCta } from "@/components/study/study-cta";
import { StudySubnav } from "@/components/study/study-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { STUDY_COUNTRIES } from "@/data/study/countries";
import { STUDY_PROGRAMMES } from "@/data/study/programmes";
import { STUDY_UNIVERSITIES } from "@/data/study/universities";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Degree Programmes | ${BRAND.name}`,
  description:
    "Explore Bachelor's, Master's, Foundation, and PhD / Doctoral pathways across Europe by country, subject area, language, and university.",
};

export default function StudyProgrammesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Study</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Programme Discovery
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Degree Programmes in Europe
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-2xl text-slate-200">
            Filter degree opportunities across Bachelor&apos;s, Master&apos;s, Foundation, and
            Doctoral levels as verified university programme records are published.
          </Paragraph>
        </Container>
      </section>

      <StudySubnav activeHref="/study/programmes" />

      <ProgrammeDirectory
        programmes={STUDY_PROGRAMMES}
        countries={STUDY_COUNTRIES}
        universities={STUDY_UNIVERSITIES}
        background="white"
      />

      <StudyCta />
    </>
  );
}
