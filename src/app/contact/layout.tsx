import { Metadata } from "next";
import { SHOWROOM_CONFIG } from "@/config/showroom";

export const metadata: Metadata = {
  title: "Contact Showroom & Location | DK Electronics Anpara",
  description:
    "Get in touch with DK Electronics showroom in Anpara, Sonbhadra. Phone inquiries, direct WhatsApp assistance, Google Maps showroom directions, working hours, and service queries.",
  keywords: [
    "contact DK Electronics Anpara",
    "DK Electronics phone number",
    "electronics shop directions Anpara",
    "DK Electronics showroom location Sonbhadra",
    "WhatsApp electronics enquiry Anpara",
    "electronics showroom open 7 days Anpara",
  ],
  alternates: {
    canonical: `${SHOWROOM_CONFIG.siteUrl}/contact`,
    languages: {
      "en-IN": `${SHOWROOM_CONFIG.siteUrl}/contact`,
      "hi-IN": `${SHOWROOM_CONFIG.siteUrl}/contact?lang=hi`,
      "x-default": `${SHOWROOM_CONFIG.siteUrl}/contact`,
    },
  },
  openGraph: {
    title: "Contact Showroom & Location | DK Electronics Anpara",
    description:
      "Get in touch with DK Electronics in Anpara, Sonbhadra. Phone, WhatsApp, and showroom visit directions.",
    url: `${SHOWROOM_CONFIG.siteUrl}/contact`,
    siteName: "DK Electronics Anpara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact DK Electronics Showroom in Anpara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Showroom & Location | DK Electronics Anpara",
    description:
      "Contact details, showroom hours, and directions for DK Electronics Anpara.",
    images: [`${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
