import type { Metadata } from "next";
import { ScholarshipDirectory } from "@/components/study/scholarship-directory";
import { StudyCta } from "@/components/study/study-cta";
import { StudySubnav } from "@/components/study/study-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { STUDY_SCHOLARSHIPS } from "@/data/study/scholarships";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Scholarships & Funding | ${BRAND.name}`,
  description:
    "Discover verified European scholarship opportunities, eligibility requirements, funding coverage, and official provider links.",
};

export default function StudyScholarshipsPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Study</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Funding &amp; Grants
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Scholarships in Europe
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-2xl text-slate-200">
            Review verified scholarship schemes, eligibility criteria, and official provider portals
            without unverified funding claims.
          </Paragraph>
        </Container>
      </section>

      <StudySubnav activeHref="/study/scholarships" />

      <ScholarshipDirectory scholarships={STUDY_SCHOLARSHIPS} background="white" />

      <StudyCta />
    </>
  );
}
