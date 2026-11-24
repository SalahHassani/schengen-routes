import { Suspense } from "react";
import { GlobalSearchClient } from "@/components/search/global-search-client";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Search",
  description: "Search across Study, Visa Guide, Travel, and Explore resources on SchengeN Routes.",
  pathname: "/search",
  noIndex: true,
});

export default function SearchPage() {
  return (
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
  );
}
