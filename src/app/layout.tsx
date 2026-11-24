import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { PageLayout } from "@/components/layout/page-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { BRAND_ASSETS } from "@/lib/constants";
import { buildRootMetadata } from "@/lib/seo/metadata";
import { buildOrganizationJsonLd, buildWebSiteJsonLd } from "@/lib/seo/structured-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildRootMetadata(),
  icons: {
    icon: BRAND_ASSETS.primaryLogo,
    apple: BRAND_ASSETS.primaryLogo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="bg-surface-page text-text-primary flex min-h-full flex-col">
        <JsonLd data={buildOrganizationJsonLd()} />
        <JsonLd data={buildWebSiteJsonLd()} />
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
