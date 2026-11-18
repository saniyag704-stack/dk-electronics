"use client";

import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/context/LanguageContext";
import { GoogleMapEmbed } from "@/components/common/GoogleMapEmbed";
import {
  SHOWROOM_CONFIG,
  buildGeneralWhatsAppUrl,
} from "@/config/showroom";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  Info,
} from "lucide-react";

export default function ContactPage() {
  const { dict, language } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "Smart TV",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = dict.contact.errors.nameRequired;
    }
    if (!formData.phone.trim()) {
      errs.phone = dict.contact.errors.phoneRequired;
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-\+]/g, "");
      if (cleanPhone.length < 10) {
        errs.phone = dict.contact.errors.phoneInvalid;
      }
    }
    if (!formData.category) {
      errs.category = dict.contact.errors.categoryRequired;
    }
    if (!formData.message.trim()) {
      errs.message = dict.contact.errors.messageRequired;
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setFormSubmitted(true);
  };

  const generalWhatsappUrl = buildGeneralWhatsAppUrl(language);

  const formWhatsappUrl = `https://wa.me/${SHOWROOM_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    language === "hi"
      ? `नमस्ते डीके इलेक्ट्रॉनिक्स,\n\nमैं वीआईपी शोरूम विज़िट डेमो बुक करना चाहता हूँ:\n• नाम: ${formData.name}\n• फोन: ${formData.phone}\n• श्रेणी: ${formData.category}\n• विवरण: ${formData.message}`
      : `Hello DK Electronics,\n\nI would like to book a VIP showroom demo:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Category: ${formData.category}\n• Details: ${formData.message}`
  )}`;

  return (
    <MainLayout>
      {/* Hero Header */}
      <section className="bg-[#111111] text-white py-14 border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D82935]/10 rounded-full blur-[90px] pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-[#D82935] font-bold">
              {dict.contact.kicker}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-2 mb-3">
              {dict.contact.title}
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {dict.contact.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* 4 Core Contact Options Grid */}
      <section className="py-12 bg-white border-b border-zinc-200">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
              DK Direct Channels
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-900 mt-1">
              {dict.contact.contactOptionsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Option 1: Call Now */}
            <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-zinc-200/90 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white text-[#D82935] flex items-center justify-center border border-zinc-200 mb-4 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-black text-zinc-900">
                    {dict.contact.callNowTitle}
                  </h3>
                  <span className="text-[10px] font-mono bg-zinc-200 text-zinc-700 px-2 py-0.5 rounded font-bold">
                    1. Voice
                  </span>
                </div>
                <p className="text-xs text-zinc-600 mb-3">
                  {dict.contact.callNowDesc}
                </p>
                <div className="text-sm font-mono font-bold text-zinc-900 mb-2">
                  {SHOWROOM_CONFIG.phoneDisplay}
                </div>
                <div className="text-[10px] text-amber-700 font-mono bg-amber-50 p-2 rounded-lg border border-amber-200/80 mb-4">
                  {dict.contact.unconfiguredPhoneNotice}
                </div>
              </div>
              <a href={SHOWROOM_CONFIG.phoneTel} className="block w-full">
                <Button variant="secondary" size="sm" fullWidth icon={<Phone className="w-3.5 h-3.5 text-[#D82935]" />}>
                  {dict.actions.callNow}
                </Button>
              </a>
            </div>

            {/* Option 2: WhatsApp */}
            <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-zinc-200/90 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center border border-[#25D366]/20 mb-4 shadow-sm">
                  <MessageCircle className="w-6 h-6 fill-[#25D366]" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-black text-zinc-900">
                    {dict.contact.whatsappTitle}
                  </h3>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                    2. Instant
                  </span>
                </div>
                <p className="text-xs text-zinc-600 mb-3">
                  {dict.contact.whatsappDesc}
                </p>
                <div className="text-sm font-mono font-bold text-zinc-900 mb-2">
                  +91 {SHOWROOM_CONFIG.whatsappNumber.slice(2)}
                </div>
                <div className="text-[10px] text-zinc-500 font-mono bg-zinc-200/60 p-2 rounded-lg mb-4">
                  [Demo Configured: Pre-formatted enquiry payloads]
                </div>
              </div>
              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="primary" size="sm" fullWidth icon={<MessageCircle className="w-3.5 h-3.5 fill-white text-[#D82935]" />}>
                  {dict.actions.whatsappEnquiry}
                </Button>
              </a>
            </div>

            {/* Option 3: Get Directions */}
            <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-zinc-200/90 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white text-[#D82935] flex items-center justify-center border border-zinc-200 mb-4 shadow-sm">
                  <Navigation className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-black text-zinc-900">
                    {dict.contact.getDirectionsTitle}
                  </h3>
                  <span className="text-[10px] font-mono bg-zinc-200 text-zinc-700 px-2 py-0.5 rounded font-bold">
                    3. Map
                  </span>
                </div>
                <p className="text-xs text-zinc-600 mb-3">
                  {dict.contact.getDirectionsDesc}
                </p>
                <div className="text-xs font-semibold text-zinc-800 mb-2">
                  {SHOWROOM_CONFIG.addressDisplay}
                </div>
                <div className="text-[10px] text-amber-700 font-mono bg-amber-50 p-2 rounded-lg border border-amber-200/80 mb-4">
                  {dict.location.addressNotice}
                </div>
              </div>
              <a
                href={SHOWROOM_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="outline" size="sm" fullWidth icon={<MapPin className="w-3.5 h-3.5 text-[#D82935]" />}>
                  {dict.location.getDirections}
                </Button>
              </a>
            </div>

            {/* Option 4: Contact Form */}
            <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-zinc-200/90 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white text-[#D82935] flex items-center justify-center border border-zinc-200 mb-4 shadow-sm">
                  <Send className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-black text-zinc-900">
                    {dict.contact.contactFormTitle}
                  </h3>
                  <span className="text-[10px] font-mono bg-zinc-200 text-zinc-700 px-2 py-0.5 rounded font-bold">
                    4. In-Store
                  </span>
                </div>
                <p className="text-xs text-zinc-600 mb-3">
                  {dict.contact.contactFormDesc}
                </p>
                <div className="text-xs font-semibold text-zinc-800 mb-2">
                  VIP Demonstration Booking Desk
                </div>
                <div className="text-[10px] text-zinc-500 font-mono bg-zinc-200/60 p-2 rounded-lg mb-4">
                  Schedule personal walkthrough with product experts
                </div>
              </div>
              <a href="#inquiry-form" className="block w-full">
                <Button variant="primary" size="sm" fullWidth icon={<Send className="w-3.5 h-3.5" />}>
                  {dict.contact.submitBtn}
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Google Map Showroom Section */}
      <section className="py-12 bg-white border-b border-zinc-200">
        <Container>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-[#D82935] font-bold">
              {language === "hi" ? "शोरूम लोकेशन मैप" : "Showroom Location Map"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-900 mt-1">
              {language === "hi" ? "अनपरा में डीके इलेक्ट्रॉनिक्स का लाइव गूगल मैप" : "Live Google Map of DK Electronics in Anpara"}
            </h2>
            <p className="text-xs text-zinc-600 mt-1 max-w-2xl">
              {language === "hi" 
                ? "अनपरा (सोनभद्र) मुख्य मार्केट में स्थित हमारे शोरूम पर पधारें या नीचे दिए गए गूगल मैप से सीधे दिशा-निर्देश प्राप्त करें।"
                : "Visit our multi-brand showroom in Anpara Main Market or navigate directly using the live Google Map below."}
            </p>
          </div>
          <GoogleMapEmbed height="h-96 sm:h-[420px]" />
        </Container>
      </section>

      {/* Main Form & Showroom Hours Section */}
      <section id="inquiry-form" className="py-16 bg-[#F5F5F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Cols: Showroom Info Card */}
            <div className="lg:col-span-5 space-y-6">
              <Card variant="white" className="p-6 sm:p-8 space-y-6">
                <h2 className="text-xl font-black text-zinc-900 font-display">
                  {dict.contact.infoTitle}
                </h2>

                <div className="space-y-5 text-xs text-zinc-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#D82935]" />
                    </div>
                    <div>
                      <strong className="block text-zinc-900 text-sm font-bold mb-0.5">
                        {dict.common.address}
                      </strong>
                      <span className="text-zinc-600 block">
                        {dict.common.addressVal}
                      </span>
                      <span className="text-[10px] text-amber-700 font-mono mt-1 block">
                        {dict.location.addressNotice}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#D82935]" />
                    </div>
                    <div>
                      <strong className="block text-zinc-900 text-sm font-bold mb-0.5">
                        {dict.common.hours}
                      </strong>
                      <span className="text-zinc-600 block">
                        {dict.common.workingHoursVal}
                      </span>
                      <span className="text-[11px] text-zinc-500 block">
                        {dict.common.openAll7Days}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#D82935]" />
                    </div>
                    <div>
                      <strong className="block text-zinc-900 text-sm font-bold mb-0.5">
                        {dict.actions.callNow}
                      </strong>
                      <a href={SHOWROOM_CONFIG.phoneTel} className="text-zinc-900 font-bold hover:text-[#D82935]">
                        {SHOWROOM_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-zinc-100 space-y-2.5">
                  <a
                    href={generalWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      icon={<MessageCircle className="w-4 h-4 fill-white text-[#D82935]" />}
                    >
                      {dict.actions.whatsappEnquiry}
                    </Button>
                  </a>

                  <a href={SHOWROOM_CONFIG.phoneTel} className="block w-full">
                    <Button
                      variant="secondary"
                      size="md"
                      fullWidth
                      icon={<Phone className="w-4 h-4 text-[#D82935]" />}
                    >
                      {dict.actions.callNow}
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Heritage Card */}
              <div className="p-4 rounded-xl bg-zinc-900 text-white border border-zinc-800 text-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D82935] shrink-0" />
                <span>{dict.common.heritageBadge}</span>
              </div>
            </div>

            {/* Right 7 Cols: Book Showroom Visit / Product Demo Form */}
            <div className="lg:col-span-7">
              <Card variant="white" className="p-6 sm:p-8">
                <div className="mb-6">
                  <Badge variant="red" className="mb-2">
                    {dict.contact.formTitle}
                  </Badge>
                  <h2 className="text-xl sm:text-2xl font-black text-zinc-900 font-display">
                    {dict.contact.formTitle}
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1">
                    {dict.contact.formSubtitle}
                  </p>
                </div>

                {formSubmitted ? (
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

                    <div className="my-4 max-w-md mx-auto p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-left text-[11px] text-amber-900 space-y-1">
                      <div className="flex items-center gap-2 font-bold text-amber-800">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        <span>Sales Demo Notice</span>
                      </div>
                      <p className="text-zinc-600 leading-relaxed">
                        {dict.contact.demoBackendNotice}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={formWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button
                          variant="primary"
                          size="sm"
                          icon={<MessageCircle className="w-4 h-4 fill-white text-[#D82935]" />}
                        >
                          Send via WhatsApp
                        </Button>
                      </a>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ name: "", phone: "", category: "Smart TV", message: "" });
                        }}
                        className="text-xs text-[#D82935] font-bold hover:underline py-2 px-3"
                      >
                        {dict.contact.resetBtn}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="contact-page-name" className="block text-xs font-bold text-zinc-700 mb-1">
                        {dict.contact.nameLabel}
                      </label>
                      <input
                        id="contact-page-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder={dict.contact.namePlaceholder}
                        className={`w-full text-xs px-3.5 py-2.5 rounded-lg border focus:outline-none transition ${
                          errors.name ? "border-[#D82935] bg-red-50/20" : "border-zinc-300 focus:border-[#D82935]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-[#D82935] mt-1 font-semibold">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-page-phone" className="block text-xs font-bold text-zinc-700 mb-1">
                        {dict.contact.phoneLabel}
                      </label>
                      <input
                        id="contact-page-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        placeholder="+91 98XXX XXXXX"
                        className={`w-full text-xs px-3.5 py-2.5 rounded-lg border focus:outline-none font-mono transition ${
                          errors.phone ? "border-[#D82935] bg-red-50/20" : "border-zinc-300 focus:border-[#D82935]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-[#D82935] mt-1 font-semibold">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-page-category" className="block text-xs font-bold text-zinc-700 mb-1">
                        {dict.contact.categoryLabel}
                      </label>
                      <select
                        id="contact-page-category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-[#D82935] transition bg-white"
                      >
                        <option value="Smart TV">{dict.categories.tvs}</option>
                        <option value="Refrigerator">{dict.categories.refrigerators}</option>
                        <option value="Washing Machine">{dict.categories.washingMachines}</option>
                        <option value="Air Conditioner">{dict.categories.airConditioners}</option>
                        <option value="Smartphones">{dict.categories.smartphones}</option>
                        <option value="Laptops">{dict.categories.laptops}</option>
                        <option value="Audio">{dict.categories.audio}</option>
                        <option value="Microwave">{dict.categories.microwaves}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-page-message" className="block text-xs font-bold text-zinc-700 mb-1">
                        {dict.contact.messageLabel}
                      </label>
                      <textarea
                        id="contact-page-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        placeholder={dict.contact.messagePlaceholder}
                        className={`w-full text-xs px-3.5 py-2.5 rounded-lg border focus:outline-none transition ${
                          errors.message ? "border-[#D82935] bg-red-50/20" : "border-zinc-300 focus:border-[#D82935]"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-[#D82935] mt-1 font-semibold">{errors.message}</p>
                      )}
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

                    {/* Transparent Demo Notice */}
                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-[11px] text-zinc-500 leading-relaxed text-center">
                      {dict.contact.demoBackendNotice}
                    </div>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
