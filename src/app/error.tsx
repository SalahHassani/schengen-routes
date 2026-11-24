"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("[route-error]", error);
    }
  }, [error]);

  return (
    <Section background="subtle" spacing="lg">
      <Container>
        <div role="alert" aria-live="assertive" className="max-w-xl">
          <Eyebrow>Something Went Wrong</Eyebrow>
          <Heading as="h1" size="h2" className="mt-2">
            We couldn&apos;t display this page
          </Heading>
          <Paragraph className="mt-3">
            An unexpected error occurred while loading this view. You can try again or return to the
            homepage.
          </Paragraph>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button type="button" variant="primary" size="md" onClick={() => reset()}>
              Try Again
            </Button>
            <Link
              href="/"
              className="border-border-default text-text-primary hover:bg-surface-muted inline-flex h-11 items-center justify-center rounded-lg border px-5 text-sm font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
