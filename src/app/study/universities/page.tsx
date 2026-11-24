import type { Metadata } from "next";
import { StudyCta } from "@/components/study/study-cta";
import { StudySubnav } from "@/components/study/study-subnav";
import { UniversityDirectory } from "@/components/study/university-directory";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { STUDY_UNIVERSITIES } from "@/data/study/universities";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European University Directory | ${BRAND.name}`,
  description:
    "Search and filter verified European universities by country and institution type, with direct links to official university admissions pages.",
};

export default function StudyUniversitiesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Study</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Institutional Directory
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Universities
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-2xl text-slate-200">
            Search verified European universities and access direct links to official institutional
            websites and admissions portals.
          </Paragraph>
        </Container>
      </section>

      <StudySubnav activeHref="/study/universities" />

      <UniversityDirectory universities={STUDY_UNIVERSITIES} background="white" />

      <StudyCta />
    </>
  );
}
