import type { Metadata } from "next";
import { ApplicationSteps } from "@/components/visa-guide/application-steps";
import { CountryGuideGrid } from "@/components/visa-guide/country-guide-grid";
import { DocumentChecklist } from "@/components/visa-guide/document-checklist";
import { VisaCategoryGrid } from "@/components/visa-guide/visa-category-grid";
import { VisaCta } from "@/components/visa-guide/visa-cta";
import { VisaDisclaimer } from "@/components/visa-guide/visa-disclaimer";
import { VisaFaq } from "@/components/visa-guide/visa-faq";
import { VisaHero } from "@/components/visa-guide/visa-hero";
import { VisaSubnav } from "@/components/visa-guide/visa-subnav";
import { APPLICATION_PROCESS_STEPS } from "@/data/visa-guide/application-processes";
import { COUNTRY_VISA_GUIDES } from "@/data/visa-guide/countries";
import { DOCUMENT_CHECKLIST_ITEMS } from "@/data/visa-guide/document-checklists";
import { VISA_FAQS } from "@/data/visa-guide/faqs";
import { VISA_CATEGORIES } from "@/data/visa-guide/visa-categories";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Visa Guide | ${BRAND.name}`,
  description:
    "Explore structured European visa information covering Schengen short-stay visas, student visas, national long-stay pathways, country portals, document categories, and application procedures.",
  openGraph: {
    title: `European Visa Guide | ${BRAND.name}`,
    description:
      "Source-backed European visa information distinguishing Schengen short-stay rules, student residence procedures, and national long-stay categories.",
    type: "website",
  },
};

export default function VisaGuidePage() {
  return (
    <>
      <VisaHero />
      <VisaSubnav activeHref="/visa-guide" />
      <VisaCategoryGrid categories={VISA_CATEGORIES} background="white" />
      <CountryGuideGrid countries={COUNTRY_VISA_GUIDES} background="subtle" />
      <DocumentChecklist items={DOCUMENT_CHECKLIST_ITEMS} background="white" />
      <ApplicationSteps steps={APPLICATION_PROCESS_STEPS} background="subtle" />
      <VisaDisclaimer background="white" />
      <VisaFaq faqs={VISA_FAQS} background="subtle" />
      <VisaCta />
    </>
  );
}
