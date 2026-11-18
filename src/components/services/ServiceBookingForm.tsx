"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  SHOWROOM_CONFIG,
  buildServiceWhatsAppUrl,
  ServiceDeviceType,
} from "@/config/showroom";
import {
  Smartphone,
  Laptop,
  Tv,
  Wind,
  Refrigerator,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Send,
  Wrench,
  MapPin,
  Phone,
  User,
  FileText,
} from "lucide-react";

export const ServiceBookingForm: React.FC = () => {
  const { dict, language } = useLanguage();

  const [selectedDevice, setSelectedDevice] =
    useState<ServiceDeviceType>("tv");
  const [brandModel, setBrandModel] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [location, setLocation] = useState("");
  const [serviceMode, setServiceMode] = useState<"home" | "showroom">("home");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const deviceOptions: {
    type: ServiceDeviceType;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      type: "mobile",
      label: dict.services.booking.devices.mobile,
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      type: "laptop",
      label: dict.services.booking.devices.laptop,
      icon: <Laptop className="w-5 h-5" />,
    },
    {
      type: "tv",
      label: dict.services.booking.devices.tv,
      icon: <Tv className="w-5 h-5" />,
    },
    {
      type: "ac",
      label: dict.services.booking.devices.ac,
      icon: <Wind className="w-5 h-5" />,
    },
    {
      type: "refrigerator",
      label: dict.services.booking.devices.refrigerator,
      icon: <Refrigerator className="w-5 h-5" />,
    },
    {
      type: "washing_machine",
      label: dict.services.booking.devices.washingMachine,
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!customerName.trim()) {
      errs.name = dict.services.booking.errors.nameRequired;
    }

    if (!phoneNumber.trim()) {
      errs.phone = dict.services.booking.errors.phoneRequired;
    } else {
      const clean = phoneNumber.replace(/[\s\-\+]/g, "");
      if (clean.length < 10) {
        errs.phone = dict.services.booking.errors.phoneInvalid;
      }
    }

    if (!selectedDevice) {
      errs.device = dict.services.booking.errors.deviceRequired;
    }

    if (!problemDescription.trim()) {
      errs.problem = dict.services.booking.errors.problemRequired;
    }

    if (!location.trim()) {
      errs.location = dict.services.booking.errors.locationRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getDeviceLabel = (type: ServiceDeviceType): string => {
    switch (type) {
      case "mobile":
        return dict.services.booking.devices.mobile;
      case "laptop":
        return dict.services.booking.devices.laptop;
      case "tv":
        return dict.services.booking.devices.tv;
      case "ac":
        return dict.services.booking.devices.ac;
      case "refrigerator":
        return dict.services.booking.devices.refrigerator;
      case "washing_machine":
        return dict.services.booking.devices.washingMachine;
      default:
        return type;
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const deviceName = getDeviceLabel(selectedDevice);
    const serviceModeLabel = serviceMode === "home" 
      ? (language === "hi" ? "घर पर टेक्नीशियन विज़िट (Home Inspection)" : "Home Inspection Visit")
      : (language === "hi" ? "शोरूम पर उपकरण लेकर आना (Carry-in to Showroom)" : "Carry-in to Showroom");

    let message = "";
    if (language === "hi") {
      message = [
        `नमस्ते DK Electronics (अनपरा),`,
        `मुझे रिपेयर व सर्विस के लिए रिक्वेस्ट भेजनी है:`,
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        `🔧 उपकरण प्रकार: ${deviceName}`,
        brandModel.trim() ? `🏷️ ब्रांड व मॉडल: ${brandModel.trim()}` : null,
        `👤 ग्राहक का नाम: ${customerName}`,
        `📞 संपर्क नंबर: ${phoneNumber}`,
        `📍 पूरा पता / इलाका: ${location}`,
        `📝 समस्या का विवरण: ${problemDescription}`,
        `🏠 सर्विस मोड: ${serviceModeLabel}`,
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        `कृपया जल्द से जल्द कन्फर्मेशन और विज़िट समय बताएं। धन्यवाद!`
      ].filter(Boolean).join("\n");
    } else {
      message = [
        `Hello DK Electronics (Anpara),`,
        `I would like to book a service & repair request:`,
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        `🔧 Appliance: ${deviceName}`,
        brandModel.trim() ? `🏷️ Brand & Model: ${brandModel.trim()}` : null,
        `👤 Customer Name: ${customerName}`,
        `📞 Phone Number: ${phoneNumber}`,
        `📍 Full Address / Locality: ${location}`,
        `📝 Fault Description: ${problemDescription}`,
        `🏠 Service Mode: ${serviceModeLabel}`,
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        `Please confirm technician availability and visit time. Thank you!`
      ].filter(Boolean).join("\n");
    }

    const whatsappUrl = `https://wa.me/${SHOWROOM_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setCustomerName("");
    setPhoneNumber("");
    setProblemDescription("");
    setLocation("");
    setBrandModel("");
    setServiceMode("home");
    setSelectedDevice("tv");
    setErrors({});
    setIsSubmitted(false);
  };

  const activeWhatsAppUrl = buildServiceWhatsAppUrl({
    customerName: customerName || "Customer",
    phone: phoneNumber || "+91 98XXX XXXXX",
    deviceType: getDeviceLabel(selectedDevice),
    problem: problemDescription || "Service inspection request",
    location: location || "Central City",
    language,
  });

  return (
    <div id="service-booking-form" className="bg-white rounded-3xl border border-zinc-200/90 shadow-xl overflow-hidden scroll-mt-24">
      {/* Form Header */}
      <div className="p-6 sm:p-8 bg-[#111111] text-white border-b border-zinc-800">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <Badge variant="red">{dict.services.booking.badge}</Badge>
          <span className="text-xs text-zinc-400 font-mono">
            {SHOWROOM_CONFIG.phoneDisplay}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
          {dict.services.booking.title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
          {dict.services.booking.subtitle}
        </p>
      </div>

      <div className="p-6 sm:p-10">
        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-14 h-14 bg-red-50 text-[#D82935] rounded-full flex items-center justify-center mx-auto border border-red-100 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-black text-zinc-900 font-display">
              {dict.services.booking.successTitle}
            </h4>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {dict.services.booking.successDesc}
            </p>

            {/* Summary Box */}
            <div className="p-4 bg-[#F5F5F5] rounded-2xl border border-zinc-200 text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between border-b border-zinc-200 pb-1.5">
                <span className="text-zinc-500 font-sans">Customer:</span>
                <strong className="text-zinc-900">{customerName}</strong>
              </div>
              <div className="flex justify-between border-b border-zinc-200 pb-1.5">
                <span className="text-zinc-500 font-sans">Phone:</span>
                <strong className="text-zinc-900">{phoneNumber}</strong>
              </div>
              <div className="flex justify-between border-b border-zinc-200 pb-1.5">
                <span className="text-zinc-500 font-sans">Device:</span>
                <strong className="text-[#D82935]">
                  {getDeviceLabel(selectedDevice)}
                </strong>
              </div>
              <div className="flex justify-between border-b border-zinc-200 pb-1.5">
                <span className="text-zinc-500 font-sans">Location:</span>
                <strong className="text-zinc-900">{location}</strong>
              </div>
              <div className="pt-1 text-[11px] text-zinc-700">
                <span className="text-zinc-500 font-sans block mb-0.5">Problem:</span>
                <p className="font-sans italic text-zinc-800">{problemDescription}</p>
              </div>
            </div>

            {/* Explicit Demo Notice */}
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-left text-[11px] text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
              <p className="leading-relaxed">
                {dict.services.booking.demoNotice}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={activeWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={<MessageCircle className="w-4 h-4 fill-white text-[#D82935]" />}
                >
                  {dict.services.booking.submitWhatsAppBtn}
                </Button>
              </a>

              <button
                type="button"
                onClick={resetForm}
                className="text-xs text-[#D82935] font-bold hover:underline py-2 px-4"
              >
                {dict.services.booking.resetBtn}
              </button>
            </div>
          </div>
        ) : (
          <form className="space-y-6">
            {/* 1. Device Type Selector */}
            <div>
              <label className="block text-xs font-bold text-zinc-800 mb-2.5">
                {dict.services.booking.deviceTypeLabel}
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {deviceOptions.map((d) => {
                  const isSelected = selectedDevice === d.type;
                  return (
                    <button
                      key={d.type}
                      type="button"
                      onClick={() => {
                        setSelectedDevice(d.type);
                        if (errors.device) setErrors({ ...errors, device: "" });
                      }}
                      className={`p-3 rounded-2xl border text-center flex flex-col items-center justify-center gap-2 transition-all ${
                        isSelected
                          ? "bg-[#111111] text-white border-[#111111] shadow-md ring-2 ring-[#D82935]/40"
                          : "bg-[#F5F5F5] text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100"
                      }`}
                    >
                      <div
                        className={`${
                          isSelected ? "text-[#D82935]" : "text-zinc-600"
                        }`}
                      >
                        {d.icon}
                      </div>
                      <span className="text-[11px] font-bold leading-tight">
                        {d.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.device && (
                <p className="text-[11px] text-[#D82935] mt-1 font-semibold">
                  {errors.device}
                </p>
              )}
            </div>

            {/* 1.1 Brand & Model Input */}
            <div>
              <label htmlFor="service-brand-model" className="block text-xs font-bold text-zinc-700 mb-1 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-zinc-400" />
                <span>{language === "hi" ? "उपकरण का ब्रांड व मॉडल (वैकल्पिक)" : "Brand & Model (Optional)"}</span>
              </label>
              <input
                id="service-brand-model"
                type="text"
                value={brandModel}
                onChange={(e) => setBrandModel(e.target.value)}
                placeholder={language === "hi" ? "उदा. Sony Bravia 55 इंच, Daikin 1.5 टन एसी, iPhone 14, आदि" : "e.g. Sony Bravia 55\", Daikin 1.5 Ton AC, iPhone 14, etc."}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 focus:border-[#D82935] focus:outline-none transition"
              />
            </div>

            {/* 2. Customer Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="service-customer-name" className="block text-xs font-bold text-zinc-700 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{dict.services.booking.nameLabel}</span>
                </label>
                <input
                  id="service-customer-name"
                  type="text"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder={dict.services.booking.namePlaceholder}
                  className={`w-full text-xs px-3.5 py-2.5 rounded-xl border focus:outline-none transition ${
                    errors.name
                      ? "border-[#D82935] bg-red-50/20"
                      : "border-zinc-300 focus:border-[#D82935]"
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-[#D82935] mt-1 font-semibold">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="service-phone-number" className="block text-xs font-bold text-zinc-700 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{dict.services.booking.phoneLabel}</span>
                </label>
                <input
                  id="service-phone-number"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  placeholder={dict.services.booking.phonePlaceholder}
                  className={`w-full text-xs px-3.5 py-2.5 rounded-xl border focus:outline-none font-mono transition ${
                    errors.phone
                      ? "border-[#D82935] bg-red-50/20"
                      : "border-zinc-300 focus:border-[#D82935]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-[#D82935] mt-1 font-semibold">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* 3. Problem Description */}
            <div>
              <label htmlFor="service-problem-desc" className="block text-xs font-bold text-zinc-700 mb-1 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-zinc-400" />
                <span>{dict.services.booking.problemLabel}</span>
              </label>
              <textarea
                id="service-problem-desc"
                rows={3}
                value={problemDescription}
                onChange={(e) => {
                  setProblemDescription(e.target.value);
                  if (errors.problem) setErrors({ ...errors, problem: "" });
                }}
                placeholder={dict.services.booking.problemPlaceholder}
                className={`w-full text-xs px-3.5 py-2.5 rounded-xl border focus:outline-none transition ${
                  errors.problem
                    ? "border-[#D82935] bg-red-50/20"
                    : "border-zinc-300 focus:border-[#D82935]"
                }`}
              />
              {errors.problem && (
                <p className="text-[11px] text-[#D82935] mt-1 font-semibold">
                  {errors.problem}
                </p>
              )}
            </div>

            {/* 4. Customer Location */}
            <div>
              <label htmlFor="service-location" className="block text-xs font-bold text-zinc-700 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{dict.services.booking.locationLabel}</span>
              </label>
              <input
                id="service-location"
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  if (errors.location) setErrors({ ...errors, location: "" });
                }}
                placeholder={dict.services.booking.locationPlaceholder}
                className={`w-full text-xs px-3.5 py-2.5 rounded-xl border focus:outline-none transition ${
                  errors.location
                    ? "border-[#D82935] bg-red-50/20"
                    : "border-zinc-300 focus:border-[#D82935]"
                }`}
              />
              {errors.location && (
                <p className="text-[11px] text-[#D82935] mt-1 font-semibold">
                  {errors.location}
                </p>
              )}
            </div>

            {/* 4.1 Service Preference Mode */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                {language === "hi" ? "सर्विस का प्रकार (Service Mode)" : "Service Mode Preference"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition ${
                  serviceMode === "home" ? "bg-red-50/50 border-[#D82935] text-zinc-900 shadow-sm" : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100"
                }`}>
                  <input
                    type="radio"
                    name="serviceMode"
                    value="home"
                    checked={serviceMode === "home"}
                    onChange={() => setServiceMode("home")}
                    className="accent-[#D82935] w-4 h-4"
                  />
                  <div>
                    <strong className="block text-xs font-bold">{language === "hi" ? "घर पर टेक्नीशियन विज़िट" : "In-Home Technician Visit"}</strong>
                    <span className="text-[10px] text-zinc-500">{language === "hi" ? "अनपरा व नजदीकी इलाकों में ऑन-साइट रिपेयर" : "On-site inspection across Anpara & nearby"}</span>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition ${
                  serviceMode === "showroom" ? "bg-red-50/50 border-[#D82935] text-zinc-900 shadow-sm" : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100"
                }`}>
                  <input
                    type="radio"
                    name="serviceMode"
                    value="showroom"
                    checked={serviceMode === "showroom"}
                    onChange={() => setServiceMode("showroom")}
                    className="accent-[#D82935] w-4 h-4"
                  />
                  <div>
                    <strong className="block text-xs font-bold">{language === "hi" ? "शोरूम पर लाना (Carry-in)" : "Carry-in to Showroom"}</strong>
                    <span className="text-[10px] text-zinc-500">{language === "hi" ? "सीधे अनपरा शोरूम सर्विस डेस्क पर दिखाएं" : "Direct drop-off at Anpara showroom service desk"}</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                type="button"
                onClick={handleWhatsAppSubmit}
                variant="primary"
                size="md"
                fullWidth
                icon={<MessageCircle className="w-4 h-4 fill-white text-white" />}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white border-0 shadow-md font-bold"
              >
                {language === "hi" ? "व्हाट्सएप पर सर्विस बुक करें" : "Book Service via WhatsApp"}
              </Button>

              <Button
                type="button"
                onClick={handleDemoSubmit}
                variant="secondary"
                size="md"
                fullWidth
                icon={<Send className="w-3.5 h-3.5 text-[#D82935]" />}
              >
                {dict.services.booking.submitDirectBtn}
              </Button>
            </div>

            {/* Transparent Demo Notice */}
            <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-[11px] text-zinc-500 leading-relaxed text-center">
              {dict.services.booking.demoNotice}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
