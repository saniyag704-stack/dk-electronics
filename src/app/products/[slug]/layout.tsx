import { Metadata } from "next";
import { PRODUCTS_DATA } from "@/data/products";
import { SHOWROOM_CONFIG } from "@/config/showroom";
import { ProductJsonLd } from "@/components/seo/ProductJsonLd";

interface ProductLayoutProps {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found | DK Electronics",
    };
  }

  const pageUrl = `${SHOWROOM_CONFIG.siteUrl}/products/${product.slug}`;
  const title = `${product.name_en} (${product.modelCode})`;
  const description = `${product.brand} ${product.modelCode} at DK Electronics showroom in Anpara: ${product.tagline_en}. Price: ₹${product.priceDemo.toLocaleString("en-IN")}, 0% EMI: ₹${product.emiMonthlyDemo.toLocaleString("en-IN")}/mo. Sourced with official manufacturer warranty.`;

  return {
    title,
    description,
    keywords: [
      product.name_en,
      product.modelCode,
      `${product.brand} Anpara`,
      `${product.category} showroom Anpara`,
      `buy ${product.modelCode} Anpara Sonbhadra`,
      `0% EMI ${product.brand} DK Electronics`,
    ],
    alternates: {
      canonical: pageUrl,
      languages: {
        "en-IN": pageUrl,
        "hi-IN": `${pageUrl}?lang=hi`,
        "x-default": pageUrl,
      },
    },
    openGraph: {
      title: `${title} | DK Electronics Anpara`,
      description,
      url: pageUrl,
      siteName: "DK Electronics Anpara",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`,
          width: 1200,
          height: 630,
          alt: `${product.brand} ${product.name_en} at DK Electronics Showroom Anpara`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | DK Electronics Anpara`,
      description,
      images: [`${SHOWROOM_CONFIG.siteUrl}/images/dk-store-reference.jpg`],
    },
  };
}

export default async function ProductLayout({ params, children }: ProductLayoutProps) {
  const resolvedParams = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === resolvedParams.slug);

  return (
    <>
      {product && <ProductJsonLd product={product} />}
      {children}
    </>
  );
}
