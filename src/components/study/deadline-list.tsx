"use client";

import { useSyncExternalStore } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { deriveScheduleStatus, formatIsoDateForDisplay } from "@/lib/study/deadline-status";
import type { ApplicationSchedule, DeadlineStatus } from "@/types/study";

export interface DeadlineListProps {
  schedules: readonly ApplicationSchedule[];
  background?: "white" | "subtle";
}

const emptySubscribe = () => () => {};

function getClientUtcDayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function getServerUtcDayIso(): string {
  return "";
}

function parseIsoDayUtc(isoDate: string): Date | undefined {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return undefined;
  return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
}

function getStatusBadgeVariant(status: DeadlineStatus): "default" | "accent" | "neutral" {
  if (status === "Open" || status === "Closing soon") return "accent";
  if (status === "Upcoming") return "default";
  return "neutral";
}

export function DeadlineList({ schedules, background = "white" }: DeadlineListProps) {
  const clientDayIso = useSyncExternalStore(emptySubscribe, getClientUtcDayIso, getServerUtcDayIso);
  const referenceDate = clientDayIso ? parseIsoDayUtc(clientDayIso) : undefined;

  return (
    <Section
      id="deadlines"
      background={background}
      spacing="lg"
      aria-labelledby="deadlines-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Application Calendar</Eyebrow>
          <Heading as="h2" id="deadlines-heading" className="mt-2">
            Application Opening Dates, Deadlines &amp; Intakes
          </Heading>
          <Paragraph className="mt-3">
            European admissions separate three distinct milestones: when an application portal
            opens, the final submission deadline, and when the academic semester or intake begins.
          </Paragraph>
        </div>

        {/* Three-Milestone Explanation Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card variant="default" padding="md">
            <Badge variant="default">01 · Opening Date</Badge>
            <Heading as="h3" size="h4" className="mt-3 text-base">
              Application Opening Date
            </Heading>
            <Paragraph size="sm" className="mt-2">
              The first date an institution or portal accepts applications for a specific academic
              intake.
            </Paragraph>
          </Card>

          <Card variant="default" padding="md">
            <Badge variant="accent">02 · Submission Deadline</Badge>
            <Heading as="h3" size="h4" className="mt-3 text-base">
              Application Deadline
            </Heading>
            <Paragraph size="sm" className="mt-2">
              The final date by which required documents and applications must be submitted.
              Deadlines often differ by applicant nationality or degree level.
            </Paragraph>
          </Card>

          <Card variant="default" padding="md">
            <Badge variant="neutral">03 · Semester Start</Badge>
            <Heading as="h3" size="h4" className="mt-3 text-base">
              Intake or Semester Start Date
            </Heading>
            <Paragraph size="sm" className="mt-2">
              The date teaching or orientation begins (such as Autumn/Winter or Spring/Summer
              semesters).
            </Paragraph>
          </Card>
        </div>

        {/* Dynamic Status Schedule List */}
        <div className="mt-10 space-y-4">
          {schedules.map((schedule) => {
            const status: DeadlineStatus = referenceDate
              ? deriveScheduleStatus(schedule, referenceDate)
              : schedule.awaitingOfficialConfirmation
                ? "Awaiting official confirmation"
                : "Not announced";

            return (
              <Card key={schedule.id} variant="default" padding="md">
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={getStatusBadgeVariant(status)}>{status}</Badge>
                      <span className="text-text-muted text-xs font-semibold">
                        {schedule.country} · {schedule.applicationCycle}
                      </span>
                    </div>
                    <Heading as="h3" size="h4" className="text-base">
                      {schedule.label}
                    </Heading>
                    <p className="text-text-secondary text-xs">{schedule.programmeOrScope}</p>
                  </div>

                  <dl className="grid gap-3 text-xs sm:grid-cols-3 lg:min-w-[440px]">
                    <div className="bg-surface-subtle rounded-md p-2.5">
                      <dt className="font-heading text-text-muted font-semibold">Opens</dt>
                      <dd className="text-text-primary mt-0.5 font-medium">
                        {formatIsoDateForDisplay(schedule.applicationOpeningDate)}
                      </dd>
                    </div>

                    <div className="bg-surface-subtle rounded-md p-2.5">
                      <dt className="font-heading text-text-muted font-semibold">Deadline</dt>
                      <dd className="text-text-primary mt-0.5 font-medium">
                        {formatIsoDateForDisplay(schedule.applicationDeadline)}
                      </dd>
                    </div>

                    <div className="bg-surface-subtle rounded-md p-2.5">
                      <dt className="font-heading text-text-muted font-semibold">Intake Start</dt>
                      <dd className="text-text-primary mt-0.5 font-medium">
                        {schedule.intakeStartDate
                          ? formatIsoDateForDisplay(schedule.intakeStartDate)
                          : "Confirm with institution"}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="border-border-subtle mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3 text-xs">
                  <a
                    href={schedule.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-brand-blue hover:text-brand-navy font-semibold underline underline-offset-4"
                  >
                    Official Admissions Source ↗
                  </a>
                  <span className="text-text-muted text-[11px]">
                    Last reviewed: {schedule.lastReviewed}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
