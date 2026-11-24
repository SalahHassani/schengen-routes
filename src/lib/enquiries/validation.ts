import { z } from "zod";

export const ENQUIRY_SERVICES = [
  "Study",
  "Visa Guide",
  "Travel",
  "Explore",
  "General Enquiry",
  "Consultation Request",
] as const;

export type EnquiryService = (typeof ENQUIRY_SERVICES)[number];

export const PREFERRED_CONTACT_METHODS = ["Email", "WhatsApp"] as const;

export type PreferredContactMethod = (typeof PREFERRED_CONTACT_METHODS)[number];

const optionalTrimmedString = (maxLength: number) =>
  z.preprocess((val) => {
    if (typeof val !== "string") return val;
    const trimmed = val.trim();
    return trimmed.length === 0 ? undefined : trimmed;
  }, z.string().max(maxLength).optional());

export const enquirySubmissionSchema = z
  .object({
    fullName: z
      .string({ message: "Full name is required." })
      .trim()
      .min(2, "Please enter your full name (at least 2 characters).")
      .max(120, "Full name must be 120 characters or fewer."),
    email: z
      .string({ message: "Email address is required." })
      .trim()
      .toLowerCase()
      .min(5, "Please enter a valid email address.")
      .max(180, "Email address must be 180 characters or fewer.")
      .email("Please enter a valid email address."),
    service: z.enum(ENQUIRY_SERVICES, {
      message: "Please select a valid service option.",
    }),
    subject: z
      .string({ message: "Subject is required." })
      .trim()
      .min(3, "Please enter a subject (at least 3 characters).")
      .max(160, "Subject must be 160 characters or fewer."),
    message: z
      .string({ message: "Message is required." })
      .trim()
      .min(15, "Please enter a message of at least 15 characters.")
      .max(4000, "Message must be 4,000 characters or fewer."),
    countryOfResidence: optionalTrimmedString(100),
    destinationCountry: optionalTrimmedString(100),
    preferredContact: z.preprocess(
      (val) => (val === "" || val === null ? undefined : val),
      z
        .enum(PREFERRED_CONTACT_METHODS, {
          message: "Preferred contact method must be Email or WhatsApp.",
        })
        .optional()
    ),
    privacyAcknowledged: z.literal(true, {
      message:
        "Please confirm that you understand this general form does not process sensitive documents.",
    }),
    // Honeypot field: real users leave this empty; bots often populate it.
    website: z.string().max(200).optional(),
  })
  .strict();

export type EnquirySubmissionInput = z.infer<typeof enquirySubmissionSchema>;

export function mapZodErrors(error: z.ZodError): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0] ? String(issue.path[0]) : "form";
    if (!fieldErrors[key]) {
      fieldErrors[key] = issue.message;
    }
  }
  return fieldErrors;
}
