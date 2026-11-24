import type { Metadata } from "next";
import { VisaCta } from "@/components/visa-guide/visa-cta";
import { VisaDisclaimer } from "@/components/visa-guide/visa-disclaimer";
import { VisaFaq } from "@/components/visa-guide/visa-faq";
import { VisaSubnav } from "@/components/visa-guide/visa-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { VISA_FAQS } from "@/data/visa-guide/faqs";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Visa FAQs | ${BRAND.name}`,
  description:
    "Answers to common questions about Schengen visas, national long-stay visas, student residence permits, consular jurisdiction, and official verification portals.",
};

export default function VisaFaqsPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Visa Guide</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Questions &amp; Answers
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            European Visa Frequently Asked Questions
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Search and filter qualified, source-backed answers to common European visa questions.
          </Paragraph>
        </Container>
      </section>

      <VisaSubnav activeHref="/visa-guide/faqs" />

      <VisaFaq faqs={VISA_FAQS} background="white" showFilters />
      <VisaDisclaimer background="subtle" />
      <VisaCta />
    </>
  );
}
