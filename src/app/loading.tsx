import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function Loading() {
  return (
    <Section background="subtle" spacing="lg" aria-busy="true" aria-label="Loading page content">
      <Container>
        <div className="space-y-3" role="status" aria-live="polite">
          <div className="bg-surface-muted h-4 w-32 animate-pulse rounded" />
          <div className="bg-surface-muted h-8 w-64 max-w-full animate-pulse rounded" />
          <div className="bg-surface-muted h-4 w-96 max-w-full animate-pulse rounded" />
        </div>
      </Container>
    </Section>
  );
}
