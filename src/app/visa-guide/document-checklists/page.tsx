import type { Metadata } from "next";
import { DocumentChecklist } from "@/components/visa-guide/document-checklist";
import { VisaCta } from "@/components/visa-guide/visa-cta";
import { VisaDisclaimer } from "@/components/visa-guide/visa-disclaimer";
import { VisaSubnav } from "@/components/visa-guide/visa-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { DOCUMENT_CHECKLIST_ITEMS } from "@/data/visa-guide/document-checklists";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Visa Document Checklists | ${BRAND.name}`,
  description:
    "Filter European visa document categories across generally required, conditional, and country-specific classifications with official source references.",
};

export default function VisaDocumentChecklistsPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Visa Guide</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Documentation Reference
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Visa Document Checklists
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Understand broad supporting document categories and how requirements vary by visa type,
            applicant circumstances, and consular authority.
          </Paragraph>
        </Container>
      </section>

      <VisaSubnav activeHref="/visa-guide/document-checklists" />

      <DocumentChecklist items={DOCUMENT_CHECKLIST_ITEMS} background="white" />
      <VisaDisclaimer background="subtle" />
      <VisaCta />
    </>
  );
}
