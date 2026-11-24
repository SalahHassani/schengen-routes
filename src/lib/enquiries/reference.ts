import { randomBytes } from "node:crypto";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateEnquiryReference(): string {
  const bytes = randomBytes(10);
  let suffix = "";
  for (let i = 0; i < 10; i += 1) {
    suffix += ALPHABET[bytes[i] % ALPHABET.length];
  }
  return `SNR-${suffix}`;
}
