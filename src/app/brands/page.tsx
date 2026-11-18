"use client";

import React from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function BrandsPage() {
  const { dict, language } = useLanguage();

  const brands = [
    {
      name: "SONY",
      tagline_en: "Bravia XR Cognitive Intelligence 4K & OLED Series",
      tagline_hi: "ब्राविया XR कॉग्निटिव इंटेलिजेंस 4K और OLED टीवी",
      categories: ["Smart TVs", "Soundbars", "Headphones"],
      warranty_en: "Official Sony India 3-Year Comprehensive Protection",
      warranty_hi: "सोनी इंडिया की आधिकारिक 3 वर्ष की पूर्ण सुरक्षा",
    },
    {
      name: "SAMSUNG",
      tagline_en: "Neo QLED, Crystal 4K, SpaceMax Refrigerators & Washers",
      tagline_hi: "नियो QLED टीवी, क्रिस्टल 4K, स्पेसमेक्स रेफ्रिजरेटर व वाशर",
      categories: ["Televisions", "Refrigerators", "Washing Machines", "Microwaves"],
      warranty_en: "Authorized Samsung Showroom Partner",
      warranty_hi: "सैमसंग आधिकारिक शोरूम पार्टनर",
    },
    {
      name: "LG",
      tagline_en: "World's #1 OLED Display & Inverter AI Appliances",
      tagline_hi: "विश्व का #1 OLED डिस्प्ले और इन्वर्टर AI उपकरण",
      categories: ["OLED TVs", "Side-by-Side Fridges", "AI DD Washers"],
      warranty_en: "Direct LG India Warranty and Installation Support",
      warranty_hi: "एलजी इंडिया प्रत्यक्ष वारंटी और इंस्टॉलेशन सपोर्ट",
    },
    {
      name: "DAIKIN",
      tagline_en: "Japan's Leading Air Conditioning & Climate Technology",
      tagline_hi: "जापान की अग्रणी एयर कंडीशनिंग और जलवायु तकनीक",
      categories: ["Split ACs", "Inverter ACs", "Air Purifiers"],
      warranty_en: "10-Year Compressor Warranty with Certified Fitting",
      warranty_hi: "10 वर्ष कंप्रेसर वारंटी एवं प्रमाणित इंस्टॉलेशन",
    },
    {
      name: "WHIRLPOOL",
      tagline_en: "Sixth Sense Intelligent Refrigeration & Care Appliances",
      tagline_hi: "सिक्स्थ सेंस इंटेलिजेंट रेफ्रिजरेशन और होम अप्लायंसेज",
      categories: ["Double Door Fridges", "Top Load Washers"],
      warranty_en: "Authorized Dealer with Extended Service Assurance",
      warranty_hi: "अधिकृत डीलर एवं त्वरित सर्विस सुविधा",
    },
    {
      name: "HAIER",
      tagline_en: "Smart Connected Appliances & Triple Inverter Solutions",
      tagline_hi: "स्मार्ट कनेक्टेड उपकरण एवं ट्रिपल इन्वर्टर समाधान",
      categories: ["French Door Fridges", "Deep Freezers", "Smart TVs"],
      warranty_en: "Genuine Manufacturer Spares & In-Home Demo",
      warranty_hi: "असली स्पेयर पार्ट्स और होम डेमो सुविधा",
    },
  ];

  return (
    <MainLayout>
      <section className="bg-[#111111] text-white py-12 border-b border-zinc-800">
        <Container>
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#D82935] font-bold">
              {dict.brands.kicker}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
              {dict.brands.title}
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
              {dict.brands.subtitle}
            </p>

            <div className="pt-2 inline-flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900/60 px-3.5 py-2 rounded-xl border border-zinc-800">
              <ShieldCheck className="w-4 h-4 text-[#D82935] shrink-0" />
              <span className="font-medium">{dict.brands.genuineTag}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((b) => (
              <Card key={b.name} variant="white" hoverEffect className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-display tracking-tight text-zinc-900">
                      {b.name}
                    </span>
                    <Badge variant="red">
                      {dict.brands.authorizedTag}
                    </Badge>
                  </div>

                  <p className="text-xs text-zinc-600 mb-4 font-medium">
                    {language === "hi" ? b.tagline_hi : b.tagline_en}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {b.categories.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] bg-zinc-100 text-zinc-700 font-semibold px-2 py-0.5 rounded"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-start gap-1.5 text-[11px] text-zinc-500 bg-zinc-50 p-2 rounded mb-4">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D82935] shrink-0 mt-0.5" />
                    <span>{language === "hi" ? b.warranty_hi : b.warranty_en}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100">
                  <Link href="/products">
                    <Button variant="outline" size="sm" fullWidth className="text-zinc-800 border-zinc-300 hover:bg-zinc-100">
                      <span>{dict.brands.exploreBrandModels}: {b.name}</span>
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
