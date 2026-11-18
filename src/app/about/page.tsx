"use client";

import React from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Clock, Users, Award, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const { dict, language } = useLanguage();

  return (
    <MainLayout>
      <section className="bg-[#111111] text-white py-12 border-b border-zinc-800">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-[#D82935] font-bold">
              {dict.about.kicker}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display text-white mt-2 mb-3">
              {dict.about.title}
            </h1>
            <p className="text-sm text-zinc-400">
              {dict.about.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Owner Verification Notice Card */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-amber-900 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold mb-1 text-amber-950">
                <Clock className="w-4 h-4 text-[#D82935]" />
                <span>
                  {dict.about.heritageNoticeTitle}
                </span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                {dict.about.heritageNoticeDesc}
              </p>
            </div>

            {/* Core Story Card */}
            <Card variant="white" className="p-8 sm:p-10 space-y-6">
              <h2 className="text-2xl font-black text-zinc-900 font-display">
                {dict.about.storyTitle}
              </h2>

              <p className="text-sm text-zinc-700 leading-relaxed">
                {dict.about.storyP1}
              </p>

              <p className="text-sm text-zinc-700 leading-relaxed">
                {dict.about.storyP2}
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-100">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <ShieldCheck className="w-5 h-5 text-[#D82935] mb-2" />
                  <h3 className="text-xs font-bold text-zinc-900">
                    {dict.about.pillar1Title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    {dict.about.pillar1Desc}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <Users className="w-5 h-5 text-[#D82935] mb-2" />
                  <h3 className="text-xs font-bold text-zinc-900">
                    {dict.about.pillar2Title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    {dict.about.pillar2Desc}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <Award className="w-5 h-5 text-[#D82935] mb-2" />
                  <h3 className="text-xs font-bold text-zinc-900">
                    {dict.about.pillar3Title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    {dict.about.pillar3Desc}
                  </p>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="flex justify-center pt-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  {dict.actions.contactUs}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
