import type { ReviewStatus } from "@/types/visa-guide";

export function getReviewStatusBadgeVariant(
  status: ReviewStatus
): "default" | "accent" | "neutral" {
  switch (status) {
    case "Verified":
      return "default";
    case "Review due":
    case "Under review":
      return "accent";
    case "Archived":
    default:
      return "neutral";
  }
}

export function getReviewStatusDescription(status: ReviewStatus): string {
  switch (status) {
    case "Verified":
      return "Checked against cited official government or EU portals as of the review date.";
    case "Review due":
      return "Scheduled for periodic verification against official government updates.";
    case "Under review":
      return "Country-specific details are being verified against official national portals.";
    case "Archived":
      return "Historical reference only; verify current rules with official authorities.";
  }
}
