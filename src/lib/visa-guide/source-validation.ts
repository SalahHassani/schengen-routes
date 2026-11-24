import type { VisaSourceReference } from "@/types/visa-guide";

export function isOfficialHttpsUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && parsed.hostname.length > 0;
  } catch {
    return false;
  }
}

export function validateSourceReferences(sources: readonly VisaSourceReference[]): boolean {
  return (
    sources.length > 0 &&
    sources.every(
      (s) => s.authority.trim().length > 0 && s.label.trim().length > 0 && isOfficialHttpsUrl(s.url)
    )
  );
}
