"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { buildEmiWhatsAppUrl, SHOWROOM_CONFIG } from "@/config/showroom";
import {
  MessageCircle,
  AlertCircle,
  HelpCircle,
  Calculator,
} from "lucide-react";

export const EMICalculatorSection: React.FC = () => {
  const { dict, language } = useLanguage();

  const [productPrice, setProductPrice] = useState<number>(65000);
  const [downPayment, setDownPayment] = useState<number>(10000);
  const [tenure, setTenure] = useState<number>(12);

  // 0% Interest Showroom Scheme calculation
  const loanAmount = Math.max(0, productPrice - downPayment);
  const monthlyEmi = Math.round(loanAmount / tenure);

  const tenures = [3, 6, 9, 12, 18, 24];

  const whatsappUrl = buildEmiWhatsAppUrl({
    productPrice,
    downPayment,
    loanAmount,
    tenureMonths: tenure,
    estimatedEmi: monthlyEmi,
    language,
  });

  return (
    <section id="emi-section" className="py-20 bg-[#111111] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D82935]/10 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#D82935] font-bold">
            {dict.emiSection.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white mt-1.5 mb-3">
            {dict.emiSection.title}
          </h2>
          <p className="text-sm text-zinc-400">
            {dict.emiSection.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Area (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Product Price */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-zinc-300">
                    {dict.emiSection.priceLabel}
                  </span>
                  <span className="font-mono text-base font-black text-white bg-black px-3 py-1 rounded-lg border border-zinc-800">
                    ₹{productPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={250000}
                  step={5000}
                  value={productPrice}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setProductPrice(val);
                    if (downPayment > val * 0.5) setDownPayment(Math.round(val * 0.2));
                  }}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#D82935]"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                  <span>₹10,000</span>
                  <span>₹1,25,000</span>
                  <span>₹2,50,000</span>
                </div>
              </div>

              {/* Slider 2: Down Payment */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-zinc-300">
                    {dict.emiSection.downPaymentLabel}
                  </span>
                  <span className="font-mono text-base font-black text-white bg-black px-3 py-1 rounded-lg border border-zinc-800">
                    ₹{downPayment.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={Math.round(productPrice * 0.5)}
                  step={2000}
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#D82935]"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                  <span>₹0 ({dict.emiSection.zeroDownPayment})</span>
                  <span>Max: ₹{Math.round(productPrice * 0.5).toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Loan Amount Displayed explicitly */}
              <div className="p-3 bg-black/60 rounded-xl border border-zinc-800 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-medium">
                  {dict.emiSection.loanAmountLabel}:
                </span>
                <span className="font-mono font-bold text-white text-sm">
                  ₹{loanAmount.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Tenure Selector */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2">
                  {dict.emiSection.tenureLabel} ({dict.emiSection.months}):
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {tenures.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTenure(m)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        tenure === m
                          ? "bg-[#D82935] text-white shadow-md ring-2 ring-[#D82935]/40"
                          : "bg-black text-zinc-400 hover:text-white border border-zinc-800"
                      }`}
                    >
                      {m}M
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live EMI Result Card (5 Cols) */}
            <div className="lg:col-span-5 bg-black/80 rounded-2xl p-6 sm:p-8 border border-zinc-800 text-center flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  {dict.emiSection.estimatedEmi}
                </span>

                <div className="text-3xl sm:text-4xl font-black font-display text-white my-1">
                  ₹{monthlyEmi.toLocaleString("en-IN")}
                  <span className="text-xs font-normal text-zinc-400 block mt-0.5">
                    {dict.emiSection.perMonth}
                  </span>
                </div>

                <div className="my-4 py-3 border-y border-zinc-800/80 text-[11px] text-zinc-400 space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span>{dict.emiSection.priceLabel}:</span>
                    <strong className="text-white">₹{productPrice.toLocaleString("en-IN")}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>{dict.emiSection.downPaymentLabel}:</span>
                    <strong className="text-white">₹{downPayment.toLocaleString("en-IN")}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>{dict.emiSection.principalFinanced}:</span>
                    <strong className="text-white">₹{loanAmount.toLocaleString("en-IN")}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>{dict.emiSection.tenurePeriod}:</span>
                    <strong className="text-white">{tenure} {dict.emiSection.months}</strong>
                  </div>
                  <div className="flex justify-between text-zinc-200">
                    <span>{dict.emiSection.interestScheme}:</span>
                    <strong className="text-[#D82935]">{dict.emiSection.zeroInterest}</strong>
                  </div>
                </div>
              </div>

              {/* Apply / Pre-approval CTA */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
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
                    {dict.emiSection.ctaWhatsapp}
                  </Button>
                </a>
                <span className="text-[10px] text-zinc-500 block mt-2 leading-relaxed">
                  {dict.emiSection.partnerNote}
                </span>
              </div>
            </div>
          </div>

          {/* Transparent Indicative Disclaimer */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 space-y-2">
            <div className="flex items-start gap-2.5 text-xs text-amber-400/90 bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-xl">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
              <div className="space-y-1 text-[11px] leading-relaxed">
                <p className="font-semibold text-amber-300">
                  {dict.emiSection.indicativeDisclaimer}
                </p>
                <p className="text-zinc-400">
                  {dict.emiSection.noGuaranteeNotice}
                </p>
              </div>
            </div>
            <div className="text-center text-[10px] text-zinc-500 font-mono">
              {SHOWROOM_CONFIG.demoNotice_en}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
