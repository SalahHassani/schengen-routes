import type { Metadata } from "next";
import { Suspense } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { GlobalSearchClient } from "@/components/search/global-search-client";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Search | SchengeN Routes",
  description: "Search across Study, Visa Guide, Travel, and Explore resources on SchengeN Routes.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/search",
  },
};

export default function SearchPage() {
  return (
    <PageLayout>
      <Suspense
        fallback={
          <Section background="subtle" spacing="lg">
            <Container>
              <p className="text-text-secondary text-sm">Loading search...</p>
            </Container>
          </Section>
        }
      >
        <GlobalSearchClient />
      </Suspense>
    </PageLayout>
  );
}
