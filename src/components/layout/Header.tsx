"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DKLogo } from "@/components/brand/DKLogo";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import {
  SHOWROOM_CONFIG,
  buildGeneralWhatsAppUrl,
} from "@/config/showroom";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const { dict, language } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for subtle elevation enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: dict.nav.home },
    { href: "/products", label: dict.nav.products },
    { href: "/brands", label: dict.nav.brands },
    { href: "/services", label: dict.nav.services },
    { href: "/about", label: dict.nav.about },
    { href: "/contact", label: dict.nav.contact },
  ];

  const whatsappUrl = buildGeneralWhatsAppUrl(language);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 select-none ${
          isScrolled
            ? "bg-[#111111]/95 backdrop-blur-md border-b border-zinc-800 shadow-xl"
            : "bg-[#111111] border-b border-zinc-800/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* 1. Official DK Logo (Wings + Crest + Wordmark + Red Pill) */}
          <Link
            href="/"
            className="shrink-0 flex items-center group transition-transform focus:outline-none"
            aria-label="DK Electronics Home"
          >
            <DKLogo variant="on-dark" size="sm" />
          </Link>

          {/* 2. Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 shrink-0">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors duration-150 relative py-1.5 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D82935] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right Action Group (Language + Call Now + WhatsApp + Mobile Toggle) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Visible Language Switcher in Header */}
            <div className="hidden sm:block">
              <LanguageToggle variant="header" />
            </div>

            {/* Call Now Action */}
            <a
              href={SHOWROOM_CONFIG.phoneTel}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              title={dict.actions.callNow}
            >
              <Phone className="w-3.5 h-3.5 text-[#D82935]" />
              <span className="hidden xl:inline">{dict.actions.callNow}</span>
            </a>

            {/* WhatsApp Enquiry Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full text-white bg-[#D82935] hover:bg-[#BA1C27] shadow-sm hover:shadow transition-all active:scale-[0.98]"
              title={dict.actions.whatsappEnquiry}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-[#D82935]" />
              <span className="hidden md:inline">{dict.actions.whatsappEnquiry}</span>
              <span className="md:hidden">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 4. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 bg-[#111111]/98 backdrop-blur-xl z-40 border-b border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-6">
            {/* Mobile Language Switcher */}
            <LanguageToggle variant="mobile" />

            {/* Navigation Links */}
            <div className="space-y-1 divide-y divide-zinc-800/60 pt-2">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive ? "text-[#D82935] font-bold" : "text-zinc-200 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D82935]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Bottom Quick Actions */}
          <div className="pt-6 border-t border-zinc-800 space-y-3">
            <a
              href={SHOWROOM_CONFIG.phoneTel}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-semibold text-sm hover:bg-zinc-800 transition"
            >
              <Phone className="w-4 h-4 text-[#D82935]" />
              <span>{dict.actions.callNow}: {SHOWROOM_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D82935] text-white font-bold text-sm shadow hover:bg-[#BA1C27] transition"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#D82935]" />
              <span>{dict.actions.whatsappEnquiry}</span>
            </a>

            <div className="text-center pt-2 text-[11px] text-zinc-500">
              {dict.common.heritageBadge}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
