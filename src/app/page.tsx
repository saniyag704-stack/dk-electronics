"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EMICalculatorSection } from "@/components/home/EMICalculatorSection";
import { DKLogo } from "@/components/brand/DKLogo";
import { GoogleMapEmbed } from "@/components/common/GoogleMapEmbed";
import { assetUrl } from "@/lib/basePath";
import { useLanguage } from "@/context/LanguageContext";
import {
  buildGeneralWhatsAppUrl,
  buildProductWhatsAppUrl,
  SHOWROOM_CONFIG,
} from "@/config/showroom";
import {
  Smartphone,
  Laptop,
  Tv,
  Refrigerator,
  Sparkles,
  Wind,
  Volume2,
  Microwave,
  ShieldCheck,
  CreditCard,
  Wrench,
  Clock,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Star,
  MapPin,
  Send,
  Truck,
  Layers,
  Store,
} from "lucide-react";

export default function HomePage() {
  const { dict, language } = useLanguage();

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    category: "Smartphones",
    message: "",
  });

  // 1. Shop by Categories Data
  const categoriesList = [
    {
      id: "smartphones",
      name: dict.categories.smartphones,
      desc: dict.categories.smartphonesDesc,
      icon: <Smartphone className="w-6 h-6 text-[#D82935]" />,
      badge: "5G Flagships",
      image: "/images/products/smartphones.jpg",
    },
    {
      id: "laptops",
      name: dict.categories.laptops,
      desc: dict.categories.laptopsDesc,
      icon: <Laptop className="w-6 h-6 text-[#D82935]" />,
      badge: "Apple & Windows",
      image: "/images/products/laptops.jpg",
    },
    {
      id: "tvs",
      name: dict.categories.tvs,
      desc: dict.categories.tvsDesc,
      icon: <Tv className="w-6 h-6 text-[#D82935]" />,
      badge: "4K OLED & QLED",
      image: "/images/products/tvs.jpg",
    },
    {
      id: "refrigerators",
      name: dict.categories.refrigerators,
      desc: dict.categories.refrigeratorsDesc,
      icon: <Refrigerator className="w-6 h-6 text-[#D82935]" />,
      badge: "Inverter Tech",
      image: "/images/products/refrigerators.jpg",
    },
    {
      id: "washing",
      name: dict.categories.washingMachines,
      desc: dict.categories.washingMachinesDesc,
      icon: <Sparkles className="w-6 h-6 text-[#D82935]" />,
      badge: "Front & Top Load",
      image: "/images/products/washing.jpg",
    },
    {
      id: "acs",
      name: dict.categories.airConditioners,
      desc: dict.categories.airConditionersDesc,
      icon: <Wind className="w-6 h-6 text-[#D82935]" />,
      badge: "5-Star Inverter",
      image: "/images/products/acs.jpg",
    },
    {
      id: "audio",
      name: dict.categories.audio,
      desc: dict.categories.audioDesc,
      icon: <Volume2 className="w-6 h-6 text-[#D82935]" />,
      badge: "Dolby Atmos",
      image: "/images/products/accessories.jpg",
    },
    {
      id: "microwaves",
      name: dict.categories.microwaves,
      desc: dict.categories.microwavesDesc,
      icon: <Wrench className="w-6 h-6 text-[#D82935]" />,
      badge: "Convection & Grill",
      image: "/images/products/home-appliances.jpg",
    },
  ];

  // 2. Featured Multi-Brand Flagship Products
  const featuredProducts = [
    {
      id: "feat-1",
      brand: "APPLE",
      name_en: "iPhone 15 Pro Max (256GB - Titanium)",
      name_hi: "आईफोन 15 प्रो मैक्स (256GB - टाइटेनियम)",
      category: "smartphones",
      image: "/images/products/apple-iphone-15-pro-max.jpg",
      specs_en: ["A17 Pro 3nm Chip", "48MP Pro Camera System", "Action Button", "USB-C with USB 3 Speeds"],
      specs_hi: ["A17 प्रो 3nm चिप", "48MP प्रो कैमरा सिस्टम", "एक्शन बटन", "USB-C हाई-स्पीड ट्रांसफर"],
      warranty: "1 Year Apple India Warranty",
      emiStarts: "₹4,999/mo*",
      badge: "Bestseller",
    },
    {
      id: "feat-2",
      brand: "SONY",
      name_en: "Bravia XR 55\" 4K OLED Google TV",
      name_hi: "सोनी ब्राविया XR 55 इंच 4K OLED गूगल टीवी",
      category: "tvs",
      image: "/images/products/sony-bravia-xr-55.jpg",
      specs_en: ["Cognitive Processor XR", "Acoustic Surface Audio+", "XR Triluminos Pro", "120Hz HDMI 2.1"],
      specs_hi: ["कॉग्निटिव प्रोसेसर XR", "अकॉस्टिक सरफेस ऑडियो+", "XR ट्रिल्यूमिनोस प्रो", "120Hz HDMI 2.1"],
      warranty: "3 Years Panel Warranty",
      emiStarts: "₹3,299/mo*",
      badge: "Showroom Deal",
    },
    {
      id: "feat-3",
      brand: "DAIKIN",
      name_en: "1.5 Ton 5-Star Dual Inverter Split AC",
      name_hi: "डाइकन 1.5 टन 5-स्टार डुअल इन्वर्टर स्प्लिट एसी",
      category: "acs",
      image: "/images/products/daikin-1-5t-inverter-ac.jpg",
      specs_en: ["PM 2.5 Air Purifier", "100% Copper Condenser", "Triple Display", "Dew Clean Auto Wash"],
      specs_hi: ["PM 2.5 एयर प्यूरीफायर", "100% कॉपर कंडेनसर", "ट्रिपल डिस्प्ले", "ड्यू क्लीन ऑटो वाश"],
      warranty: "10 Years Compressor Warranty",
      emiStarts: "₹1,850/mo*",
      badge: "Hot Summer Deal",
    },
    {
      id: "feat-4",
      brand: "SAMSUNG",
      name_en: "653L Side-by-Side Inverter Refrigerator",
      name_hi: "सैमसंग 653 लीटर साइड-बाय-साइड इन्वर्टर रेफ्रिजरेटर",
      category: "refrigerators",
      image: "/images/products/samsung-324l-fridge.jpg",
      specs_en: ["SpaceMax™ Architecture", "Twin Cooling Plus™", "Digital Inverter Wi-Fi", "Convertible 5-in-1"],
      specs_hi: ["स्पेसमेक्स आर्किटेक्चर", "ट्विन कूलिंग प्लस", "डिजिटल इन्वर्टर वाई-फाई", "कन्वर्टिबल 5-इन-1"],
      warranty: "20 Years Compressor Warranty",
      emiStarts: "₹3,450/mo*",
      badge: "Showroom Special",
    },
    {
      id: "feat-5",
      brand: "APPLE",
      name_en: "MacBook Air 15\" (M3 Chip - 16GB / 512GB)",
      name_hi: "मैकबुक एयर 15 इंच (M3 चिप - 16GB / 512GB)",
      category: "laptops",
      image: "/images/products/apple-macbook-air-m3.jpg",
      specs_en: ["Apple M3 8-Core CPU", "18-Hour Battery Life", "Liquid Retina Display", "MagSafe 3 Charging"],
      specs_hi: ["एप्पल M3 8-कोर सीपीयू", "18 घंटे बैटरी बैकअप", "लिक्विड रेटिना डिस्प्ले", "मैगसेफ 3 चार्जिंग"],
      warranty: "1 Year Apple Care Support",
      emiStarts: "₹3,999/mo*",
      badge: "Popular Workstation",
    },
    {
      id: "feat-6",
      brand: "LG",
      name_en: "9 Kg AI Direct Drive Front Load Washing Machine",
      name_hi: "एलजी 9 किग्रा AI डायरेक्ट ड्राइव फ्रंट लोड वाशिंग मशीन",
      category: "washing",
      image: "/images/products/lg-8kg-washer.jpg",
      specs_en: ["AI DD™ Intelligent Fabric Care", "TurboWash™ 360", "Steam+ Allergy Care", "Smart ThinQ Wi-Fi"],
      specs_hi: ["AI डायरेक्ट ड्राइव फैब्रिक केयर", "टर्बोवॉश 360", "स्टीम प्लस एलर्जी केयर", "स्मार्ट थिनक्यू वाई-फाई"],
      warranty: "10 Years Motor Warranty",
      emiStarts: "₹1,699/mo*",
      badge: "Top Rated",
    },
  ];

  // 3. Authorized Brands
  const popularBrands = [
    { name: "APPLE", category: "iPhones & MacBooks" },
    { name: "SAMSUNG", category: "QLED TVs & Appliances" },
    { name: "SONY", category: "OLED TVs & Audio" },
    { name: "LG", category: "OLED TVs & Refrigerators" },
    { name: "DAIKIN", category: "5-Star Inverter ACs" },
    { name: "HP", category: "Laptops & Desktops" },
    { name: "DELL", category: "XPS & Inspiron Laptops" },
    { name: "WHIRLPOOL", category: "Refrigerators & Washers" },
    { name: "HAIER", category: "Deep Freezers & Smart TVs" },
    { name: "PANASONIC", category: "Smart Home Electronics" },
    { name: "PHILIPS", category: "Personal & Audio Care" },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const getProductWhatsappUrl = (productName: string, brand: string) => {
    return buildProductWhatsAppUrl({
      productName,
      brand,
      modelCode: `${brand.toUpperCase()}-DEMO`,
      pageRefOrSlug: "products",
      language,
    });
  };

  const generalWhatsappUrl = buildGeneralWhatsAppUrl(language);

  return (
    <MainLayout>
      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: HERO SECTION (Exact user headlines, descriptions & CTAs)
      ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#111111] text-white pt-12 pb-20 relative overflow-hidden border-b border-zinc-800">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D82935]/12 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines, Copy, CTAs (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Heritage Disclaimer Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] sm:text-xs text-zinc-300 max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#D82935] animate-pulse shrink-0" />
                <span className="font-semibold truncate sm:whitespace-normal">{dict.hero.badge}</span>
              </div>

              {/* Exact Hero Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white leading-[1.1]">
                {dict.hero.headline}
              </h1>

              {/* Exact Description */}
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                {dict.hero.description}
              </p>

              {/* Exact CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/products">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    {dict.hero.ctaExplore}
                  </Button>
                </Link>

                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    icon={<MessageCircle className="w-4 h-4 text-[#D82935]" />}
                  >
                    {dict.hero.ctaWhatsapp}
                  </Button>
                </a>

                <a href={SHOWROOM_CONFIG.phoneTel}>
                  <Button
                    variant="secondary"
                    size="lg"
                    icon={<Phone className="w-4 h-4 text-[#D82935]" />}
                  >
                    {dict.hero.ctaCall}
                  </Button>
                </a>
              </div>

              {/* Trust Indicators Bar */}
              <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D82935] shrink-0" />
                  <span>{dict.hero.trustGenuineness}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#D82935] shrink-0" />
                  <span>{dict.hero.trustEmi}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D82935] shrink-0" />
                  <span>{dict.hero.trustHours}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Showroom Visual & Facade Recreation (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-black border border-zinc-800 shadow-2xl p-6 sm:p-8 overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D82935]/20 rounded-full blur-2xl pointer-events-none" />

                {/* Showroom Visual Top Badge */}
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pb-4 border-b border-zinc-800">
                  <span className="flex items-center gap-1.5 text-zinc-200">
                    <Store className="w-3.5 h-3.5 text-[#D82935]" />
                    <span>{dict.hero.facadeTitle}</span>
                  </span>
                  <span className="text-[10px] bg-zinc-900 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">
                    Est. 1996
                  </span>
                </div>

                {/* Showroom Signboard Recreation Mockup */}
                <div className="py-8 my-4 bg-zinc-950/80 rounded-2xl border border-zinc-800/80 flex flex-col items-center justify-center text-center">
                  <div className="scale-105 sm:scale-115 transform py-2">
                    <DKLogo variant="on-dark" size="md" />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-4">
                    {dict.hero.facadeSubtitle}
                  </span>
                </div>

                {/* Showroom Features List */}
                <div className="space-y-2 pt-2 text-xs text-zinc-300">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
                    <span>{dict.hero.zone1}</span>
                    <Badge variant="red">{dict.hero.zone1Badge}</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
                    <span>{dict.hero.zone2}</span>
                    <Badge variant="red">{dict.hero.zone2Badge}</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
                    <span>{dict.hero.zone3}</span>
                    <Badge variant="red">{dict.hero.zone3Badge}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: SHOP BY CATEGORIES
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F5F5]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
                {dict.categories.kicker}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-1 font-display">
                {dict.categories.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-xl">
                {dict.categories.subtitle}
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-[#D82935] hover:text-[#BA1C27] flex items-center gap-1 group shrink-0"
            >
              <span>{dict.categories.viewAll}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesList.map((cat) => (
              <Card
                key={cat.id}
                variant="white"
                hoverEffect
                className="flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-600">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 mb-1.5 group-hover:text-[#D82935] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-semibold">
                    {dict.categories.inShowroom}
                  </span>
                  <Link
                    href="/products"
                    className="text-[#D82935] font-bold flex items-center gap-1 group-hover:underline"
                  >
                    <span>{dict.actions.viewCatalog}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: FEATURED PRODUCTS
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-b border-zinc-200">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
                {dict.featured.kicker}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-1 font-display">
                {dict.featured.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-xl">
                {dict.featured.subtitle}
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-[#D82935] hover:text-[#BA1C27] flex items-center gap-1 group shrink-0"
            >
              <span>{dict.featured.viewCatalog}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => {
              const name = language === "hi" ? p.name_hi : p.name_en;
              const specs = language === "hi" ? p.specs_hi : p.specs_en;

              return (
                <Card
                  key={p.id}
                  variant="white"
                  hoverEffect
                  className="flex flex-col justify-between border-zinc-200"
                >
                  <div>
                    {/* Brand & Badge Top Bar */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-black tracking-wider text-zinc-900 font-mono bg-zinc-100 px-2.5 py-0.5 rounded">
                        {p.brand}
                      </span>
                      <Badge variant="red">{p.badge}</Badge>
                    </div>

                    {/* Real Product Image Showcase */}
                    <div className="w-full h-44 rounded-xl overflow-hidden bg-white border border-zinc-100 mb-3 shadow-inner">
                      <img
                        src={assetUrl(p.image)}
                        alt={name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Product Name */}
                    <h3 className="text-base font-bold text-zinc-900 mb-3 leading-snug line-clamp-2">
                      {name}
                    </h3>

                    {/* Bullet Specs */}
                    <ul className="space-y-1.5 mb-5 text-xs text-zinc-600">
                      {specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D82935] shrink-0" />
                          <span className="truncate">{spec}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Verified Manufacturer Warranty */}
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 bg-zinc-50 p-2 rounded-lg mb-5 border border-zinc-100">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D82935]" />
                      <span>{p.warranty}</span>
                    </div>
                  </div>

                  {/* Pricing Strategy & WhatsApp CTA */}
                  <div className="pt-4 border-t border-zinc-100">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[10px] uppercase text-zinc-400 font-semibold block">
                          {dict.featured.showroomDeal}
                        </span>
                        <span className="text-xs font-bold text-zinc-900">
                          {dict.featured.bestPrice}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-zinc-800 bg-zinc-100 px-2.5 py-1 rounded-md font-mono">
                        {p.emiStarts}
                      </span>
                    </div>

                    <a
                      href={getProductWhatsappUrl(name, p.brand)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        icon={<MessageCircle className="w-3.5 h-3.5 fill-white text-[#D82935]" />}
                      >
                        {dict.featured.inquireBtn}
                      </Button>
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: POPULAR BRANDS
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#111111] text-white border-b border-zinc-800">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
              {dict.brands.kicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
              {dict.brands.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              {dict.brands.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularBrands.map((b) => (
              <div
                key={b.name}
                className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-center hover:border-zinc-600 transition group cursor-pointer"
              >
                <div className="text-lg font-black tracking-wider text-white font-mono group-hover:text-[#D82935] transition-colors">
                  {b.name}
                </div>
                <div className="text-[10px] text-zinc-400 mt-1 truncate">
                  {b.category}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900 px-4 py-1.5 rounded-full border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-[#D82935]" />
              <span>{dict.common.authorizedDealer}</span>
            </span>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: OFFERS AND EMI ENQUIRY (Interactive Calculator)
      ────────────────────────────────────────────────────────────── */}
      <EMICalculatorSection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: REPAIR AND SERVICES
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-b border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
              {dict.services.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-1 font-display">
              {dict.services.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              {dict.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-zinc-200/80">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4">
                <Wrench className="w-6 h-6 text-[#D82935]" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {dict.services.installationTitle}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {dict.services.installationDesc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-zinc-200/80">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4">
                <CreditCard className="w-6 h-6 text-[#D82935]" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {dict.services.emiTitle}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {dict.services.emiDesc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-zinc-200/80">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4">
                <Truck className="w-6 h-6 text-[#D82935]" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {dict.services.deliveryTitle}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {dict.services.deliveryDesc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-zinc-200/80">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4">
                <ShieldCheck className="w-6 h-6 text-[#D82935]" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {dict.services.warrantyTitle}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {dict.services.warrantyDesc}
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/services">
              <Button variant="secondary" size="md">
                {dict.services.consultBtn}
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: WHY CHOOSE DK ELECTRONICS
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F5F5]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
              {dict.whyChoose.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-1 font-display">
              {dict.whyChoose.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              {dict.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D82935] flex items-center justify-center font-black text-sm mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {dict.whyChoose.point1Title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {dict.whyChoose.point1Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D82935] flex items-center justify-center font-black text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {dict.whyChoose.point2Title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {dict.whyChoose.point2Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D82935] flex items-center justify-center font-black text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {dict.whyChoose.point3Title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {dict.whyChoose.point3Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#D82935] flex items-center justify-center font-black text-sm mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {dict.whyChoose.point4Title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {dict.whyChoose.point4Desc}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: GENUINE CUSTOMER REVIEWS (No fake statistics)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-b border-zinc-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
              {dict.reviews.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-1 font-display">
              {dict.reviews.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              {dict.reviews.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#D82935] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D82935]" />
                  ))}
                </div>
                <p className="text-xs text-zinc-700 italic leading-relaxed mb-6">
                  &quot;{dict.reviews.review1Text}&quot;
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-200/80">
                <strong className="text-xs text-zinc-900 block font-bold">
                  {dict.reviews.review1Name}
                </strong>
                <span className="text-[10px] text-zinc-500 font-medium">
                  {dict.reviews.review1Product}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#D82935] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D82935]" />
                  ))}
                </div>
                <p className="text-xs text-zinc-700 italic leading-relaxed mb-6">
                  &quot;{dict.reviews.review2Text}&quot;
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-200/80">
                <strong className="text-xs text-zinc-900 block font-bold">
                  {dict.reviews.review2Name}
                </strong>
                <span className="text-[10px] text-zinc-500 font-medium">
                  {dict.reviews.review2Product}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#D82935] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D82935]" />
                  ))}
                </div>
                <p className="text-xs text-zinc-700 italic leading-relaxed mb-6">
                  &quot;{dict.reviews.review3Text}&quot;
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-200/80">
                <strong className="text-xs text-zinc-900 block font-bold">
                  {dict.reviews.review3Name}
                </strong>
                <span className="text-[10px] text-zinc-500 font-medium">
                  {dict.reviews.review3Product}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-[11px] text-zinc-400">
            {dict.reviews.disclaimer}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: STORE LOCATION (Map Visual & Details)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#111111] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6 Cols: Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
                  {dict.location.kicker}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-display text-white mt-1">
                  {dict.location.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  {dict.location.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D82935] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm font-bold mb-1">
                      {dict.location.addressLabel}
                    </strong>
                    <span className="text-zinc-300 block">{dict.location.addressVal}</span>
                    <span className="text-[10px] text-amber-500 font-mono mt-1 block">
                      {dict.location.addressNotice}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D82935] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm font-bold mb-1">
                      {dict.location.hoursLabel}
                    </strong>
                    <span className="text-zinc-300 block">{dict.location.hoursVal}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-3">
                  <Store className="w-5 h-5 text-[#D82935] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm font-bold mb-1">
                      {dict.location.parkingLabel}
                    </strong>
                    <span className="text-zinc-300 block">{dict.location.parkingVal}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={SHOWROOM_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="primary"
                    size="md"
                    icon={<MapPin className="w-4 h-4" />}
                  >
                    {dict.location.getDirections}
                  </Button>
                </a>

                <a href={SHOWROOM_CONFIG.phoneTel}>
                  <Button variant="secondary" size="md" icon={<Phone className="w-4 h-4 text-[#D82935]" />}>
                    {dict.actions.callNow}
                  </Button>
                </a>
              </div>
            </div>

            {/* Right 6 Cols: Exact Live Google Map Embed */}
            <div className="lg:col-span-6">
              <GoogleMapEmbed height="h-96" />
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: CONTACT SECTION (VIP In-Store Demo Form)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F5F5]">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
                {dict.contact.kicker}
              </span>
              <h2 className="text-3xl font-black text-zinc-900 mt-1 font-display">
                {dict.contact.formTitle}
              </h2>
              <p className="text-xs text-zinc-500 mt-1">
                {dict.contact.formSubtitle}
              </p>
            </div>

            {contactSubmitted ? (
              <div className="py-12 text-center space-y-3 bg-zinc-50 rounded-2xl border border-zinc-200">
                <div className="w-12 h-12 bg-red-50 text-[#D82935] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">
                  {dict.contact.successTitle}
                </h3>
                <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                  {dict.contact.successDesc}
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="text-xs text-[#D82935] font-bold hover:underline pt-2 block mx-auto"
                >
                  {dict.contact.resetBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="home-contact-name" className="block text-xs font-bold text-zinc-700 mb-1">
                      {dict.contact.nameLabel}
                    </label>
                    <input
                      id="home-contact-name"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      placeholder={dict.contact.namePlaceholder}
                      className="w-full text-xs px-4 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935] transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="home-contact-phone" className="block text-xs font-bold text-zinc-700 mb-1">
                      {dict.contact.phoneLabel}
                    </label>
                    <input
                      id="home-contact-phone"
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, phone: e.target.value })
                      }
                      placeholder="+91 98XXX XXXXX"
                      className="w-full text-xs px-4 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935] transition font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="home-contact-category" className="block text-xs font-bold text-zinc-700 mb-1">
                    {dict.contact.categoryLabel}
                  </label>
                  <select
                    id="home-contact-category"
                    value={contactForm.category}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, category: e.target.value })
                    }
                    className="w-full text-xs px-4 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935] transition bg-white"
                  >
                    <option value="Smartphones">{dict.categories.smartphones}</option>
                    <option value="Laptops">{dict.categories.laptops}</option>
                    <option value="Smart TV">{dict.categories.tvs}</option>
                    <option value="Refrigerator">{dict.categories.refrigerators}</option>
                    <option value="Washing Machine">{dict.categories.washingMachines}</option>
                    <option value="Air Conditioner">{dict.categories.airConditioners}</option>
                    <option value="Audio">{dict.categories.audio}</option>
                    <option value="Microwave">{dict.categories.microwaves}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="home-contact-message" className="block text-xs font-bold text-zinc-700 mb-1">
                    {dict.contact.messageLabel}
                  </label>
                  <textarea
                    id="home-contact-message"
                    rows={3}
                    required
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, message: e.target.value })
                    }
                    placeholder={dict.contact.messagePlaceholder}
                    className="w-full text-xs px-4 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#D82935] transition"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    icon={<Send className="w-3.5 h-3.5" />}
                  >
                    {dict.contact.submitBtn}
                  </Button>
                </div>

                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-[11px] text-zinc-500 leading-relaxed text-center">
                  {dict.contact.demoBackendNotice}
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
