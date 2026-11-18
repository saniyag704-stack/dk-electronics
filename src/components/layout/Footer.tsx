"use client";

import React from "react";
import Link from "next/link";
import { DKLogo } from "@/components/brand/DKLogo";
import { useLanguage } from "@/context/LanguageContext";
import {
  SHOWROOM_CONFIG,
  buildGeneralWhatsAppUrl,
} from "@/config/showroom";
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const { dict, language } = useLanguage();

  const quickLinks = [
    { href: "/", label: dict.nav.home },
    { href: "/products", label: dict.nav.products },
    { href: "/brands", label: dict.nav.brands },
    { href: "/services", label: dict.nav.services },
    { href: "/about", label: dict.nav.about },
    { href: "/contact", label: dict.nav.contact },
  ];

  const categoryLinks = [
    dict.categories.tvs,
    dict.categories.refrigerators,
    dict.categories.washingMachines,
    dict.categories.airConditioners,
    dict.categories.audio,
    dict.categories.microwaves,
  ];

  const whatsappUrl = buildGeneralWhatsAppUrl(language);

  return (
    <footer className="bg-[#111111] text-zinc-400 border-t border-zinc-800/80 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          {/* Column 1: Brand & Heritage */}
          <div className="space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <DKLogo variant="on-dark" size="md" />
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {dict.footer.aboutText}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-[#D82935] shrink-0" />
              <span className="font-semibold">{dict.common.authorizedDealer}</span>
            </div>
            <div className="text-[11px] text-zinc-500 bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800">
              {dict.common.heritageBadge}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-[#D82935] pl-2.5">
              {dict.common.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-150 flex items-center gap-1 group"
                  >
                    <span className="text-zinc-600 group-hover:text-[#D82935] transition">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-zinc-800/80">
                <Link
                  href="/admin"
                  className="text-zinc-300 hover:text-[#D82935] font-semibold transition-colors duration-150 flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D82935]" />
                  <span>{language === "hi" ? "🔐 ओनर एडमिन पोर्टल" : "🔐 Owner Admin Portal"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Electronics Categories */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-[#D82935] pl-2.5">
              {dict.common.categories}
            </h3>
            <ul className="space-y-2.5 text-xs">
              {categoryLinks.map((cat, idx) => (
                <li key={idx}>
                  <Link
                    href="/products"
                    className="hover:text-white transition-colors duration-150 flex items-center justify-between group"
                  >
                    <span>{cat}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Showroom Hours & Actions */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-[#D82935] pl-2.5">
              {dict.common.customerSupport}
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D82935] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-300 block">{dict.common.address}</span>
                  <span className="text-zinc-500 text-[11px]">{dict.common.addressVal}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D82935] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-300 block">{dict.common.hours}</span>
                  <span className="text-zinc-500 text-[11px]">{dict.common.workingHoursVal}</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-2 space-y-2">
              <a
                href={SHOWROOM_CONFIG.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold border border-zinc-800 transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#D82935]" />
                <span>{dict.actions.callNow}: {SHOWROOM_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#D82935] hover:bg-[#BA1C27] text-white text-xs font-bold transition shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-[#D82935]" />
                <span>{dict.actions.whatsappEnquiry}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} DK Electronics. {dict.common.allRightsReserved}
          </div>

          <div className="text-[11px] text-zinc-600 text-center sm:text-right max-w-md">
            {dict.footer.disclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
};
