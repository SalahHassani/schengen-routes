import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { BRAND, BRAND_ASSETS } from "@/lib/constants";
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
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: `${BRAND.name} — European education discovery, visa information, travel planning, and cultural exploration. ${BRAND.serviceLine}.`,
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
      <body className="bg-surface-page text-text-primary flex min-h-full flex-col">{children}</body>
    </html>
  );
}
