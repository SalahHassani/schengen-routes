import type { Metadata } from "next";
import { DeadlineList } from "@/components/study/deadline-list";
import { StudyCta } from "@/components/study/study-cta";
import { StudySubnav } from "@/components/study/study-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { STUDY_APPLICATION_SCHEDULES } from "@/data/study/deadlines";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European University Application Deadlines | ${BRAND.name}`,
  description:
    "Track European university application opening dates, submission deadlines, and intake start dates with dynamically derived application statuses.",
};

export default function StudyApplicationDeadlinesPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Study</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Admissions Timeline
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Application Deadlines &amp; Intakes
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-2xl text-slate-200">
            Track separate application opening dates, submission deadlines, and semester start dates
            across European institutions.
          </Paragraph>
        </Container>
      </section>

      <StudySubnav activeHref="/study/application-deadlines" />

      <DeadlineList schedules={STUDY_APPLICATION_SCHEDULES} background="white" />

      <StudyCta />
    </>
  );
}
