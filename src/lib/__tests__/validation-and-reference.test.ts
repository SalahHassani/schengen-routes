import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { generateEnquiryReference } from "../reference";
import { enquirySubmissionSchema, mapZodErrors } from "../validation";

describe("Enquiry validation schema", () => {
  it("accepts a valid enquiry with required and optional fields", () => {
    const result = enquirySubmissionSchema.safeParse({
      fullName: "  Elena Novak  ",
      email: "ELENA@EXAMPLE.COM ",
      service: "Consultation Request",
      subject: "Master's admission timelines",
      message: "Looking for general guidance on English-taught engineering programmes in Europe.",
      countryOfResidence: "  Czech Republic ",
      destinationCountry: " Germany ",
      preferredContact: "WhatsApp",
      privacyAcknowledged: true,
      website: "",
    });

    assert.equal(result.success, true);
    if (result.success) {
      assert.equal(result.data.fullName, "Elena Novak");
      assert.equal(result.data.email, "elena@example.com");
      assert.equal(result.data.countryOfResidence, "Czech Republic");
      assert.equal(result.data.destinationCountry, "Germany");
      assert.equal(result.data.preferredContact, "WhatsApp");
    }
  });

  it("rejects missing required fields, invalid emails, and unknown services", () => {
    const invalidResult = enquirySubmissionSchema.safeParse({
      fullName: "",
      email: "not-an-email",
      service: "Unknown Service",
      subject: "",
      message: "Too short",
      preferredContact: "Phone",
      privacyAcknowledged: false,
    });

    assert.equal(invalidResult.success, false);
    if (!invalidResult.success) {
      const mapped = mapZodErrors(invalidResult.error);
      assert.ok(mapped.fullName);
      assert.ok(mapped.email);
      assert.ok(mapped.service);
      assert.ok(mapped.subject);
      assert.ok(mapped.message);
      assert.ok(mapped.preferredContact);
      assert.ok(mapped.privacyAcknowledged);
    }
  });

  it("rejects oversized messages and unexpected extra properties", () => {
    const oversized = enquirySubmissionSchema.safeParse({
      fullName: "Test User",
      email: "user@example.com",
      service: "Study",
      subject: "Question",
      message: "x".repeat(4001),
      privacyAcknowledged: true,
      unexpectedField: "should-fail",
    });

    assert.equal(oversized.success, false);
  });
});

describe("Enquiry reference generator", () => {
  it("produces non-empty non-sequential SNR- prefixed reference numbers", () => {
    const refA = generateEnquiryReference();
    const refB = generateEnquiryReference();

    assert.match(refA, /^SNR-[A-Z2-9]{10}$/);
    assert.match(refB, /^SNR-[A-Z2-9]{10}$/);
    assert.notEqual(refA, refB);
  });
});
