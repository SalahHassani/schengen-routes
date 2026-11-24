import type { Metadata } from "next";
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
import { DOCUMENT_CHECKLIST_ITEMS } from "@/data/visa-guide/document-checklists";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Student Visa & Study Residence Guide | ${BRAND.name}`,
  description:
    "Learn how European student visas and study residence permits work across countries, including admission proof, financial requirements, health insurance, and post-arrival registration.",
};

const STUDENT_PILLARS = [
  {
    title: "Admission & Enrolment Context",
    detail:
      "Higher-education study pathways require an official admission or acceptance confirmation from a recognised institution (and pre-enrolment validation in countries such as France or Italy).",
  },
  {
    title: "National Visa vs. Study Residence Permit",
    detail:
      "Countries use distinct procedures: some issue a national long-stay entry visa (Type D) converted into a residence permit after arrival, while others (such as the Netherlands) use sponsor-led residence applications.",
  },
  {
    title: "Financial Proof",
    detail:
      "Applicants must demonstrate sufficient funds to cover living costs and tuition obligations through accepted national mechanisms (such as bank statements, scholarships, or blocked accounts where applicable).",
  },
  {
    title: "Health Insurance Coverage",
    detail:
      "Valid health insurance meeting national statutory or consular criteria is required both for visa issuance and subsequent university enrolment / residence registration.",
  },
  {
    title: "Accommodation Evidence",
    detail:
      "Some diplomatic missions or residence authorities require initial housing confirmation, dormitory allocation, or rental contracts.",
  },
  {
    title: "Arrival & Post-Arrival Formalities",
    detail:
      "After arriving in the destination country, students typically complete municipal address registration, biometric residence card collection, and university matriculation within strict deadlines.",
  },
] as const;

export default function StudentVisaPage() {
  const studentDocs = DOCUMENT_CHECKLIST_ITEMS.filter((d) => d.isStudentContext);

  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Visa Guide</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Higher Education Mobility
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Student Visa &amp; Study Residence Procedures
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Student immigration procedures are governed by national laws in each destination
            country—not uniform Schengen short-stay tourist rules.
          </Paragraph>
        </Container>
      </section>

      <VisaSubnav activeHref="/visa-guide/student-visa" />

      <Section background="white" spacing="lg" aria-labelledby="student-visa-pillars-heading">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Core Student Residence Elements</Eyebrow>
            <Heading as="h2" id="student-visa-pillars-heading" className="mt-2">
              What Student Visa &amp; Residence Applications Involve
            </Heading>
            <Paragraph className="mt-3">
              Not every European country uses the same student visa workflow, and a study residence
              permit is distinct from a Schengen short-stay visa. Review each component against your
              destination country&apos;s official immigration and foreign ministry portals.
            </Paragraph>
            <div className="mt-4">
              <ReviewStatusIndicator status="Verified" lastReviewed="2026-11-24" showDescription />
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STUDENT_PILLARS.map((item) => (
              <Card key={item.title} variant="default" padding="md">
                <Heading as="h3" size="h4" className="text-base">
                  {item.title}
                </Heading>
                <Paragraph size="sm" className="mt-2">
                  {item.detail}
                </Paragraph>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <VisaDisclaimer compact />
          </div>
        </Container>
      </Section>

      <DocumentChecklist items={studentDocs} background="subtle" />
      <VisaCta />
    </>
  );
}
