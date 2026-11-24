import type { Metadata } from "next";
import { ApplicationSteps } from "@/components/visa-guide/application-steps";
import { VisaCta } from "@/components/visa-guide/visa-cta";
import { VisaDisclaimer } from "@/components/visa-guide/visa-disclaimer";
import { VisaSubnav } from "@/components/visa-guide/visa-subnav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { APPLICATION_PROCESS_STEPS } from "@/data/visa-guide/application-processes";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `European Visa Application Process | ${BRAND.name}`,
  description:
    "Follow the nine structured stages of a European visa application—from category identification and official checklists to biometrics, decision, and post-arrival registration.",
};

export default function VisaApplicationProcessPage() {
  return (
    <>
      <section className="bg-brand-navy py-12 text-white sm:py-16">
        <Container>
          <Badge variant="accent">{BRAND.name} · Visa Guide</Badge>
          <Eyebrow tone="inverse" className="mt-4">
            Application Workflow
          </Eyebrow>
          <Heading as="h1" size="h1" inverse className="mt-2">
            Visa Application Process
          </Heading>
          <Divider variant="gold" className="mt-4" />
          <Paragraph size="lg" tone="inverse" className="mt-5 max-w-3xl text-slate-200">
            Review the core stages involved in preparing, submitting, and completing post-arrival
            formalities for European visas.
          </Paragraph>
        </Container>
      </section>

      <VisaSubnav activeHref="/visa-guide/application-process" />

      <ApplicationSteps steps={APPLICATION_PROCESS_STEPS} background="white" />
      <VisaDisclaimer background="subtle" />
      <VisaCta />
    </>
  );
}
