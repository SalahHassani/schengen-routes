import type { Metadata } from "next";
import { ApplicationSteps } from "@/components/visa-guide/application-steps";
import { DocumentChecklist } from "@/components/visa-guide/document-checklist";
import { ReviewStatusIndicator } from "@/components/visa-guide/review-status";
import { VisaCta } from "@/components/visa-guide/visa-cta";
import { VisaDisclaimer } from "@/components/visa-guide/visa-disclaimer";
import { VisaSubnav } from "@/components/visa-guide/visa-subnav";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { APPLICATION_PROCESS_STEPS } from "@/data/visa-guide/application-processes";
import { DOCUMENT_CHECKLIST_ITEMS } from "@/data/visa-guide/document-checklists";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Schengen Short-Stay Visa Guide | ${BRAND.name}`,
  description:
    "Understand Schengen short-stay visa rules (Category C) for tourism, business, family visits, short courses, and transit, with official European Commission references.",
};

const SCHENGEN_PURPOSES = [
  {
    title: "Tourism & Leisure",
    detail: "Short sightseeing trips and private holidays across participating Schengen countries.",
  },
  {
    title: "Business Visits",
    detail:
      "Attending meetings, trade fairs, negotiations, or professional conferences without taking up local employment.",
  },
  {
    title: "Family or Friends Visits",
    detail: "Visiting relatives or hosts residing legally in a Schengen Member State.",
  },
  {
    title: "Short Courses & Training",
    detail:
      "Participating in brief workshops, language courses, or summer programmes within short-stay duration rules.",
  },
  {
    title: "Airport Transit (Where Applicable)",
    detail:
      "Transiting through international transit areas of Schengen airports when required by nationality-specific transit rules.",
  },
] as const;

export default function SchengenVisaPage() {
  const shortStayDocs = DOCUMENT_CHECKLIST_ITEMS.filter(
    (d) => d.visaCategory === "schengen-short-stay"
  );

  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Visa Guide</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Short-Stay Framework (Category C)
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Schengen Short-Stay Visa
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Information on short stays in the Schengen Area—generally up to 90 days within any
            180-day period—subject to EU Visa Code rules, nationality exemptions, and border entry
            conditions.
          </Paragraph>
        </Container>
      </section>

      <VisaSubnav activeHref="/visa-guide/schengen-visa" />

      <Section background="white" spacing="lg" aria-labelledby="schengen-scope-heading">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Scope &amp; Legal Distinctions</Eyebrow>
            <Heading as="h2" id="schengen-scope-heading" className="mt-2">
              How Schengen Short-Stay Rules Work
            </Heading>
            <Paragraph className="mt-3">
              The Schengen Area removes internal border checks among participating European states
              and applies a common short-stay visa policy. However, EU membership and Schengen
              membership are not identical, and a Schengen short-stay visa does not authorise
              long-term study, employment, or residence.
            </Paragraph>
            <div className="mt-4">
              <ReviewStatusIndicator status="Verified" lastReviewed="2026-11-24" showDescription />
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SCHENGEN_PURPOSES.map((purpose) => (
              <Card key={purpose.title} variant="default" padding="md">
                <Heading as="h3" size="h4" className="text-base">
                  {purpose.title}
                </Heading>
                <Paragraph size="sm" className="mt-2">
                  {purpose.detail}
                </Paragraph>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <VisaDisclaimer compact />
          </div>
        </Container>
      </Section>

      <DocumentChecklist items={shortStayDocs} background="subtle" />
      <ApplicationSteps steps={APPLICATION_PROCESS_STEPS} background="white" />
      <VisaCta />
    </>
  );
}
