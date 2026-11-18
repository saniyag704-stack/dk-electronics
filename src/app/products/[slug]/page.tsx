"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PRODUCTS_DATA, getProductImage } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { buildProductWhatsAppUrl, SHOWROOM_CONFIG } from "@/config/showroom";
import {
  ShieldCheck,
  CreditCard,
  MessageCircle,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Share2,
  Store,
  Layers,
  ChevronRight,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const { dict, language } = useLanguage();

  const product = PRODUCTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const name = language === "hi" ? product.name_hi : product.name_en;
  const tagline = language === "hi" ? product.tagline_hi : product.tagline_en;
  const warranty = language === "hi" ? product.warranty_hi : product.warranty_en;
  const mainSpecs = language === "hi" ? product.mainSpecs_hi : product.mainSpecs_en;
  const detailedSpecs = language === "hi" ? product.detailedSpecs_hi : product.detailedSpecs_en;

  const whatsappUrl = buildProductWhatsAppUrl({
    productName: name,
    brand: product.brand,
    modelCode: product.modelCode,
    pageRefOrSlug: product.slug,
    language,
  });

  return (
    <MainLayout>
      {/* Breadcrumb Bar */}
      <section className="bg-white border-b border-zinc-200 py-3 text-xs text-zinc-500">
        <Container>
          <div className="flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-black">
              {dict.productDetail.breadcrumbHome}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <Link href="/products" className="hover:text-black">
              {dict.productDetail.breadcrumbProducts}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-zinc-800 font-semibold uppercase font-mono">
              {product.brand}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-zinc-900 font-bold truncate max-w-xs">{name}</span>
          </div>
        </Container>
      </section>

      {/* Main Product Showcase Section */}
      <section className="py-12 bg-[#F5F5F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Cols: Visual Simulation Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono uppercase font-black px-3 py-1 bg-zinc-900 text-white rounded-lg mb-4">
                  {product.brand}
                </span>

                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-zinc-200 bg-white relative shadow-sm my-4">
                  <img
                    src={getProductImage(product)}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-xs font-mono text-zinc-500 mt-2">
                  {dict.catalog.modelPrefix} <strong className="text-zinc-900">{product.modelCode}</strong>
                </div>

                <div className="mt-4 p-3 bg-zinc-50 rounded-xl border border-zinc-200/80 text-[11px] text-zinc-600 w-full text-center">
                  {dict.productDetail.liveDemoAvailable}
                </div>
              </div>

              {/* Showroom visit reminder */}
              <div className="p-4 rounded-2xl bg-[#111111] text-white border border-zinc-800 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#D82935]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {dict.productDetail.showroomAdvantageTitle}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-300 leading-relaxed">
                  {dict.productDetail.showroomAdvantageText}
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Details, Pricing, Specs Table & WhatsApp CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="red">
                      {product.category.toUpperCase()}
                    </Badge>
                    <span className="text-[10px] text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200 font-semibold">
                      {dict.productDetail.demoSpecificationNotice}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 font-display">
                    {name}
                  </h1>
                  <p className="text-xs text-zinc-600 mt-1">{tagline}</p>
                </div>

                {/* Pricing Box */}
                <div className="p-5 rounded-2xl bg-[#F5F5F5] border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-500 block">
                      {dict.productDetail.showroomOfferTitle}
                    </span>
                    {product.showPrice ? (
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl font-black text-zinc-900 font-display">
                          ₹{product.priceDemo.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-zinc-400 line-through">
                          MRP: ₹{product.mrpDemo.toLocaleString("en-IN")}
                        </span>
                      </div>
                    ) : (
                      <span className="text-base font-bold text-[#D82935] mt-0.5 block">
                        {dict.catalog.bestPriceOnEnquiry}
                      </span>
                    )}
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-zinc-200 text-right">
                    <span className="text-[10px] font-semibold text-zinc-500 block">
                      {dict.productDetail.easyEmiStartsTitle}
                    </span>
                    <span className="text-sm font-black text-zinc-900 font-mono">
                      ₹{product.emiMonthlyDemo.toLocaleString("en-IN")}{dict.productDetail.perMonthUnit}*
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      icon={<MessageCircle className="w-4 h-4 fill-white text-[#D82935]" />}
                    >
                      {dict.productDetail.getBestOfferBtn}
                    </Button>
                  </a>

                  <a href={SHOWROOM_CONFIG.phoneTel} className="block">
                    <Button
                      variant="secondary"
                      size="lg"
                      fullWidth
                      icon={<Phone className="w-4 h-4 text-[#D82935]" />}
                    >
                      {dict.productDetail.callShowroomBtn}
                    </Button>
                  </a>
                </div>

                {/* Main Specs Bullets */}
                <div className="pt-4 border-t border-zinc-100">
                  <h3 className="text-xs font-bold uppercase text-zinc-400 tracking-wider mb-3">
                    {dict.productDetail.keySpecsTitle}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-zinc-700">
                    {mainSpecs.map((s, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D82935] shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specs Table */}
                <div className="pt-4 border-t border-zinc-100 space-y-3">
                  <h3 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
                    {dict.productDetail.detailedSpecsTitle}
                  </h3>
                  <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-2xl overflow-hidden text-xs">
                    {Object.entries(detailedSpecs).map(([key, val], idx) => (
                      <div
                        key={key}
                        className={`grid grid-cols-12 p-3 ${
                          idx % 2 === 0 ? "bg-white" : "bg-zinc-50/70"
                        }`}
                      >
                        <span className="col-span-5 font-bold text-zinc-700">{key}</span>
                        <span className="col-span-7 text-zinc-900">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warranty terms */}
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs text-zinc-600 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
                  <ShieldCheck className="w-4 h-4 text-[#D82935] shrink-0" />
                  <span>{warranty}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
