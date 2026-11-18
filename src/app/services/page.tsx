"use client";

import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ServiceBookingForm } from "@/components/services/ServiceBookingForm";
import { useLanguage } from "@/context/LanguageContext";
import {
  SHOWROOM_CONFIG,
  buildGeneralWhatsAppUrl,
} from "@/config/showroom";
import {
  Wrench,
  CreditCard,
  ShieldCheck,
  Truck,
  PhoneCall,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export default function ServicesPage() {
  const { dict, language } = useLanguage();

  const services = [
    {
      icon: <Wrench className="w-6 h-6 text-[#D82935]" />,
      title: dict.services.installationTitle,
      desc: dict.services.installationDesc,
      badge: dict.services.installationBadge,
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#D82935]" />,
      title: dict.services.emiTitle,
      desc: dict.services.emiDesc,
      badge: dict.services.emiBadge,
    },
    {
      icon: <Truck className="w-6 h-6 text-[#D82935]" />,
      title: dict.services.deliveryTitle,
      desc: dict.services.deliveryDesc,
      badge: dict.services.deliveryBadge,
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D82935]" />,
      title: dict.services.warrantyTitle,
      desc: dict.services.warrantyDesc,
      badge: dict.services.warrantyBadge,
    },
  ];

  const faqs = [
    { q: dict.faq.q1, a: dict.faq.a1 },
    { q: dict.faq.q2, a: dict.faq.a2 },
    { q: dict.faq.q3, a: dict.faq.a3 },
    { q: dict.faq.q4, a: dict.faq.a4 },
    { q: dict.faq.q5, a: dict.faq.a5 },
  ];

  const whatsappUrl = buildGeneralWhatsAppUrl(language);

  return (
    <MainLayout>
      <section className="bg-[#111111] text-white py-12 border-b border-zinc-800">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-[#D82935] font-bold">
              {dict.services.kicker}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-2 mb-3">
              {dict.services.title}
            </h1>
            <p className="text-sm text-zinc-400">
              {dict.services.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((s, idx) => (
              <Card key={idx} variant="white" hoverEffect className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <Badge variant="red">
                      {s.badge}
                    </Badge>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-2 font-display">
                    {s.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100">
                  <a href="#service-booking-form" className="block w-full">
                    <Button variant="outline" size="sm" fullWidth className="text-zinc-800 border-zinc-300 hover:bg-zinc-100">
                      <span>{language === "hi" ? "सर्विस बुक करें (फॉर्म भरें)" : "Book Service (Fill Form)"}</span>
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Support Banner */}
          <div className="bg-[#111111] text-white p-8 rounded-2xl border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div>
              <h3 className="text-lg font-bold mb-1">
                {dict.services.needAssistance}
              </h3>
              <p className="text-xs text-zinc-400">
                {dict.services.assistanceDesc}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a href={SHOWROOM_CONFIG.phoneTel}>
                <Button variant="secondary" size="md" icon={<PhoneCall className="w-3.5 h-3.5 text-[#D82935]" />}>
                  {dict.actions.callNow}
                </Button>
              </a>
              <a href="#service-booking-form">
                <Button variant="primary" size="md" icon={<MessageCircle className="w-3.5 h-3.5 fill-white text-white" />} className="bg-[#25D366] hover:bg-[#20ba5a] text-white border-0">
                  {language === "hi" ? "सर्विस फॉर्म भरें (WhatsApp)" : "Book Service (WhatsApp)"}
                </Button>
              </a>
            </div>
          </div>

          {/* 3-Step Service Process Visual Banner */}
          <div className="mb-8 p-6 bg-white rounded-3xl border border-zinc-200/90 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs uppercase tracking-wider text-[#D82935] font-bold">
                {language === "hi" ? "सरल 3-चरणीय सर्विस प्रक्रिया" : "Simple 3-Step Service Process"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-display text-zinc-900 mt-1">
                {language === "hi" ? "उपकरण चुनें, विवरण भरें और सीधे WhatsApp पर भेजें" : "Select Device, Fill Details & Send to WhatsApp"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#F5F5F5] border border-zinc-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-zinc-900 text-white font-mono font-bold flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <strong className="block text-zinc-900 text-sm font-bold mb-0.5">
                    {language === "hi" ? "उपकरण व समस्या चुनें" : "Select Appliance & Fault"}
                  </strong>
                  <span className="text-zinc-600">
                    {language === "hi" ? "टीवी, एसी, फ्रिज, वाशिंग मशीन, मोबाइल या लैपटॉप चुनें।" : "Choose TV, AC, Fridge, Washing Machine, Phone or Laptop."}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F5F5] border border-zinc-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-zinc-900 text-white font-mono font-bold flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <strong className="block text-zinc-900 text-sm font-bold mb-0.5">
                    {language === "hi" ? "संपर्क नंबर व अनपरा का पता" : "Contact & Local Address"}
                  </strong>
                  <span className="text-zinc-600">
                    {language === "hi" ? "अपना नाम, मोबाइल नंबर और पूरा पता दर्ज करें।" : "Enter your name, 10-digit mobile number, and address."}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-50/50 border border-red-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#D82935] text-white font-mono font-bold flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <strong className="block text-zinc-900 text-sm font-bold mb-0.5">
                    {language === "hi" ? "WhatsApp पर सीधे भेजें" : "Send Directly to WhatsApp"}
                  </strong>
                  <span className="text-zinc-600">
                    {language === "hi" ? "फॉर्म सबमिट करते ही आपका पूरा विवरण WhatsApp पर शोरूम को पहुंचेगा।" : "Details automatically format and send to showroom WhatsApp."}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Multi-Device Repair & Service Booking Form */}
          <div className="mb-16">
            <ServiceBookingForm />
          </div>

          {/* Frequently Asked Questions */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-wider text-[#D82935] font-bold">
                {dict.faq.kicker}
              </span>
              <h2 className="text-2xl font-black font-display text-zinc-900 mt-1">
                {dict.faq.title}
              </h2>
              <p className="text-xs text-zinc-500 mt-1">
                {dict.faq.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm">
                  <h4 className="text-xs font-bold text-zinc-900 mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-[#D82935] flex items-center justify-center text-[10px] font-black shrink-0">
                      Q
                    </span>
                    <span>{f.q}</span>
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed pl-7">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
