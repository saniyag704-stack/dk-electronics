import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { SHOWROOM_CONFIG } from "@/config/showroom";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111111",
};

export const metadata: Metadata = {
  metadataBase: new URL(SHOWROOM_CONFIG.siteUrl),
  title: {
    default: "DK Electronics — Multi-Brand Electronics Showroom in Anpara",
    template: "%s | DK Electronics Anpara",
  },
  description:
    "Leading multi-brand electronics showroom in Anpara, Sonbhadra (Est. 1996). Discover 4K OLED Smart TVs, Inverter ACs, Refrigerators, Washing Machines, Smartphones & Laptops with 0% EMI and official manufacturer warranties.",
  keywords: [
    "DK Electronics",
    "DK Electronics Anpara",
    "electronics shop in Anpara",
    "electronics showroom Anpara",
    "electronics store Sonbhadra",
    "Smart TV shop Anpara",
    "AC showroom Anpara",
    "refrigerator dealer Sonbhadra",
    "washing machine Anpara",
    "0% EMI electronics showroom",
    "Samsung showroom Anpara",
    "LG electronics Anpara",
    "multi-brand electronics Sonbhadra UP",
  ],
  authors: [{ name: "DK Electronics Showroom" }],
  creator: "DK Electronics",
  publisher: "DK Electronics",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/images/dk-logo.svg",
    apple: "/images/dk-logo.svg",
  },
  alternates: {
    canonical: SHOWROOM_CONFIG.siteUrl,
    languages: {
      "en-IN": SHOWROOM_CONFIG.siteUrl,
      "hi-IN": `${SHOWROOM_CONFIG.siteUrl}?lang=hi`,
      "x-default": SHOWROOM_CONFIG.siteUrl,
    },
  },
  openGraph: {
    title: "DK Electronics — Multi-Brand Electronics Showroom in Anpara",
    description:
      "28 Years of Trust. Everything in Technology. Explore leading brands: Samsung, Apple, LG, vivo, Hyundai, Whirlpool with instant WhatsApp enquiry and 0% EMI.",
    url: SHOWROOM_CONFIG.siteUrl,
    siteName: "DK Electronics Anpara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/dk-store-reference.jpg",
        width: 1200,
        height: 630,
        alt: "DK Electronics Multi-Brand Showroom Storefront in Anpara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DK Electronics — Multi-Brand Electronics Showroom in Anpara",
    description:
      "Trusted consumer electronics showroom in Anpara, Sonbhadra. Multi-brand Smart TVs, Inverter ACs, Home Appliances, and Smartphones with 0% Showroom EMI.",
    images: ["/images/dk-store-reference.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen bg-[#F5F5F5] text-zinc-900 font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
