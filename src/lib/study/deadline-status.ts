import type { ApplicationSchedule, DeadlineStatus } from "@/types/study";

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const CLOSING_SOON_WINDOW_DAYS = 21;

export interface DeriveDeadlineStatusInput {
  applicationOpeningDate: string | null;
  applicationDeadline: string | null;
  awaitingOfficialConfirmation?: boolean;
  referenceDate?: Date;
}

function parseIsoDayUtc(isoDate: string): number | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim());
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const utcTime = Date.UTC(year, month - 1, day);
  const check = new Date(utcTime);

  if (
    check.getUTCFullYear() !== year ||
    check.getUTCMonth() !== month - 1 ||
    check.getUTCDate() !== day
  ) {
    return null;
  }

  return utcTime;
}

function toUtcDayStart(date: Date): number {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

/**
 * Computes deadline status dynamically from verified opening/closing dates and current date.
 */
export function deriveDeadlineStatus({
  applicationOpeningDate,
  applicationDeadline,
  awaitingOfficialConfirmation = false,
  referenceDate = new Date(),
}: DeriveDeadlineStatusInput): DeadlineStatus {
  const todayUtc = toUtcDayStart(referenceDate);
  const openUtc = applicationOpeningDate ? parseIsoDayUtc(applicationOpeningDate) : null;
  const closeUtc = applicationDeadline ? parseIsoDayUtc(applicationDeadline) : null;

  if (awaitingOfficialConfirmation) {
    return "Awaiting official confirmation";
  }

  if (closeUtc !== null && todayUtc > closeUtc) {
    return "Closed";
  }

  if (openUtc !== null && todayUtc < openUtc) {
    return closeUtc === null && !applicationOpeningDate ? "Not announced" : "Upcoming";
  }

  if (closeUtc !== null) {
    const daysRemaining = Math.floor((closeUtc - todayUtc) / MS_PER_DAY);
    if (daysRemaining >= 0 && daysRemaining <= CLOSING_SOON_WINDOW_DAYS) {
      return "Closing soon";
    }
    return "Open";
  }

  if (openUtc !== null && todayUtc >= openUtc) {
    return "Open";
  }

  return "Not announced";
}

export function deriveScheduleStatus(
  schedule: Pick<
    ApplicationSchedule,
    "applicationOpeningDate" | "applicationDeadline" | "awaitingOfficialConfirmation"
  >,
  referenceDate: Date = new Date()
): DeadlineStatus {
  return deriveDeadlineStatus({
    applicationOpeningDate: schedule.applicationOpeningDate,
    applicationDeadline: schedule.applicationDeadline,
    awaitingOfficialConfirmation: schedule.awaitingOfficialConfirmation,
    referenceDate,
  });
}

export function formatIsoDateForDisplay(isoDate: string | null): string {
  if (!isoDate) return "Not yet published";
  const parsed = parseIsoDayUtc(isoDate);
  if (parsed === null) return isoDate;

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(parsed));
}
