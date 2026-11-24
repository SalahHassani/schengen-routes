import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buildBusinessNotificationEmail,
  buildVisitorAcknowledgementEmail,
  dispatchEnquiryEmails,
  escapeHtml,
  type EmailProvider,
} from "../enquiries/email";
import {
  checkEnquiryRateLimit,
  extractClientIp,
  hashClientIdentifier,
} from "../enquiries/rate-limit";

describe("HTML escaping and email builders", () => {
  it("escapes HTML special characters in untrusted inputs", () => {
    const escaped = escapeHtml(`<script>alert("xss")</script> & 'test'`);
    assert.equal(
      escaped,
      "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt; &amp; &#39;test&#39;"
    );
  });

  it("formats business notification and visitor acknowledgement without unconfirmed promises", () => {
    const payload = {
      referenceNumber: "SNR-ABCDEF2345",
      fullName: "Liam O'Connor",
      email: "liam@example.com",
      service: "Visa Guide",
      subject: "Student visa overview",
      message: "General question about student visa steps.",
      preferredContact: "Email",
      createdAt: new Date("2026-11-24T12:00:00.000Z"),
    };

    const biz = buildBusinessNotificationEmail(
      payload,
      "schengenroutes@gmail.com",
      "noreply@example.org"
    );
    assert.equal(biz.to, "schengenroutes@gmail.com");
    assert.ok(biz.text.includes("SNR-ABCDEF2345"));
    assert.ok(biz.text.includes("Liam O'Connor"));

    const ack = buildVisitorAcknowledgementEmail(payload, "noreply@example.org");
    assert.equal(ack.to, "liam@example.com");
    assert.ok(ack.text.includes("SNR-ABCDEF2345"));
    assert.equal(ack.text.toLowerCase().includes("does not guarantee"), true);
    assert.equal(ack.text.toLowerCase().includes("will guarantee"), false);
  });

  it("handles provider errors gracefully without throwing", async () => {
    const failingProvider: EmailProvider = {
      async send() {
        throw new Error("Simulated SMTP/HTTP failure");
      },
    };

    const prevKey = process.env.EMAIL_PROVIDER_API_KEY;
    const prevFrom = process.env.ENQUIRY_FROM_EMAIL;
    process.env.EMAIL_PROVIDER_API_KEY = "test-key";
    process.env.ENQUIRY_FROM_EMAIL = "no-reply@example.org";

    try {
      const result = await dispatchEnquiryEmails(
        {
          referenceNumber: "SNR-FAILTEST99",
          fullName: "Test Visitor",
          email: "visitor@example.com",
          service: "Travel",
          subject: "Route overview",
          message: "Looking for general travel route information.",
          createdAt: new Date("2026-11-24T12:00:00.000Z"),
        },
        failingProvider
      );

      assert.equal(result.providerConfigured, true);
      assert.equal(result.businessNotified, false);
      assert.equal(result.acknowledgementSent, false);
    } finally {
      if (prevKey === undefined) delete process.env.EMAIL_PROVIDER_API_KEY;
      else process.env.EMAIL_PROVIDER_API_KEY = prevKey;
      if (prevFrom === undefined) delete process.env.ENQUIRY_FROM_EMAIL;
      else process.env.ENQUIRY_FROM_EMAIL = prevFrom;
    }
  });
});

describe("Rate limiting helpers", () => {
  it("extracts client IP safely and hashes identifiers deterministically", async () => {
    const headers = new Headers({ "x-forwarded-for": "203.0.113.42, 10.0.0.1" });
    const ip = extractClientIp(headers);
    assert.equal(ip, "203.0.113.42");

    const h1 = hashClientIdentifier(ip);
    const h2 = hashClientIdentifier(ip);
    assert.equal(h1, h2);
    assert.equal(h1.length, 24);

    const limitResult = await checkEnquiryRateLimit(`test-${h1}`);
    assert.equal(limitResult.allowed, true);
  });
});
