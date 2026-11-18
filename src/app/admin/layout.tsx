import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Owner Management Portal | DK Electronics Console",
  description: "Private showroom administration dashboard for DK Electronics. Catalog management, customer leads pipeline, service tickets, and business analytics.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
