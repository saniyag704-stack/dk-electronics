"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SHOWROOM_CONFIG } from "@/config/showroom";
import { MapPin, Navigation, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface GoogleMapEmbedProps {
  className?: string;
  height?: string;
  showDetails?: boolean;
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  className = "",
  height = "h-80 sm:h-96",
  showDetails = true,
}) => {
  const { language } = useLanguage();

  // Exact Google Map Query for DK Electronics in Anpara, Sonbhadra, UP
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=DK+Electronics,+Anpara,+Sonbhadra,+Uttar+Pradesh+231225&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <div
      className={`rounded-3xl overflow-hidden border border-zinc-200/90 shadow-xl bg-white flex flex-col ${className}`}
    >
      {/* Top Map Header */}
      {showDetails && (
        <div className="p-4 sm:p-5 bg-[#111111] text-white flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D82935] text-white flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold font-display text-white leading-tight">
                {language === "hi"
                  ? "डीके इलेक्ट्रॉनिक्स — अनपरा शोरूम लोकेशन"
                  : "DK Electronics — Anpara Showroom Location"}
              </h4>
              <p className="text-[11px] text-zinc-400 font-sans">
                {SHOWROOM_CONFIG.addressDisplay}
              </p>
            </div>
          </div>

          <a
            href={SHOWROOM_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button
              variant="outline"
              size="sm"
              icon={<ExternalLink className="w-3.5 h-3.5 text-[#D82935]" />}
              className="text-white border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-xs py-1.5 px-3"
            >
              {language === "hi"
                ? "Google Maps पर खोलें"
                : "Open in Google Maps"}
            </Button>
          </a>
        </div>
      )}

      {/* Interactive Google Map Iframe */}
      <div className={`relative w-full ${height} bg-zinc-100`}>
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DK Electronics Anpara Showroom Google Map"
          className="w-full h-full"
        />
      </div>

      {/* Bottom Action / Info Bar */}
      {showDetails && (
        <div className="p-3.5 sm:p-4 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-zinc-600 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-[#D82935] shrink-0" />
            <span>
              {language === "hi"
                ? "सोनभद्र मुख्य NH-39 मार्केट, अनपरा (UP 231225)"
                : "Sonbhadra Main NH-39 Market, Anpara (UP 231225)"}
            </span>
          </div>

          <a
            href={SHOWROOM_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-[#D82935] hover:underline text-xs"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>
              {language === "hi" ? "दिशा-निर्देश (Directions)" : "Get Driving Directions"}
            </span>
          </a>
        </div>
      )}
    </div>
  );
};
