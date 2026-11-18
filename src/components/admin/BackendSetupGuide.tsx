"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Database,
  ShieldCheck,
  Server,
  Key,
  CheckCircle2,
  Copy,
  Check,
  Code2,
  Terminal,
  AlertTriangle,
  Layers,
  Lock,
} from "lucide-react";

export const BackendSetupGuide: React.FC = () => {
  const { dict, language } = useLanguage();
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const sqlSchema = `-- =========================================================
-- DK ELECTRONICS: PRODUCTION POSTGRESQL SCHEMA (SUPABASE)
-- =========================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Products Table
CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    brand TEXT NOT NULL,
    category TEXT NOT NULL,
    name_en TEXT NOT NULL,
    name_hi TEXT NOT NULL,
    model_code TEXT NOT NULL,
    tagline_en TEXT,
    tagline_hi TEXT,
    mrp NUMERIC(10, 2) NOT NULL,
    price_demo NUMERIC(10, 2) NOT NULL,
    show_price BOOLEAN DEFAULT TRUE,
    emi_monthly NUMERIC(10, 2) NOT NULL,
    stock_status TEXT CHECK (stock_status IN ('in_showroom', 'limited', 'order_basis')),
    warranty_en TEXT,
    warranty_hi TEXT,
    main_specs_en JSONB DEFAULT '[]',
    main_specs_hi JSONB DEFAULT '[]',
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Customer Enquiries (Leads Pipeline)
CREATE TABLE public.customer_enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    product_interest TEXT NOT NULL,
    channel TEXT CHECK (channel IN ('WhatsApp', 'VIP Demo Form', 'EMI Calculator', 'Phone Call')),
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted')),
    estimated_value NUMERIC(10, 2),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Service Booking Desk Tickets
CREATE TABLE public.service_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    device_type TEXT CHECK (device_type IN ('Mobile', 'Laptop', 'TV', 'AC', 'Refrigerator', 'Washing Machine')),
    problem_description TEXT NOT NULL,
    location TEXT NOT NULL,
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'inspection', 'parts_ordered', 'completed')),
    technician TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Row-Level Security (RLS) Policies
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customer_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_bookings ENABLE ROW LEVEL SECURITY;

-- Anonymous public read access for catalog
CREATE POLICY "Public products are readable by all"
ON public.products FOR SELECT USING (true);

-- Anonymous customer enquiry submissions
CREATE POLICY "Anonymous users can insert enquiries"
ON public.customer_enquiries FOR INSERT WITH CHECK (true);

-- Authenticated showroom owner permissions only
CREATE POLICY "Only authenticated showroom owner can update catalog"
ON public.products FOR ALL TO authenticated USING (auth.jwt() ->> 'role' = 'owner');

CREATE POLICY "Only authenticated showroom staff can view customer enquiries"
ON public.customer_enquiries FOR SELECT TO authenticated USING (auth.jwt() ->> 'role' IN ('owner', 'store_manager'));
`;

  const envTemplate = `# .env.local — DK Electronics Supabase Production Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJh... (Public anonymous key for client catalog queries)
SUPABASE_SERVICE_ROLE_KEY=eyJh... (Private secret key for administrative server tasks only)

# Owner Admin Whitelist
ADMIN_OWNER_EMAIL=owner@dkelectronics.com
NEXT_PUBLIC_SHOWROOM_WHATSAPP=919800000000
`;

  return (
    <div className="space-y-8">
      {/* Overview Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-zinc-800 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <Badge variant="red">Architecture Recommendation</Badge>
          <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Current Status: Non-Production Preview (In-Memory State)
          </span>
        </div>
        <h2 className="text-2xl font-black font-display text-white">
          {dict.admin.backendGuide.recommendationTitle}
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-3xl leading-relaxed">
          {dict.admin.backendGuide.recommendationDesc}
        </p>
      </div>

      {/* Supabase vs Firebase Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Option A: Supabase */}
        <Card variant="white" className="p-6 border-l-4 border-l-[#D82935] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Database className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-base font-black text-zinc-900">
                    Option A: Supabase (Recommended)
                  </h3>
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    PostgreSQL • Mumbai Region • Native Next.js SDK
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                #1 Choice
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-zinc-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Relational Integrity:</strong> Perfect for electronics catalog with rigid relations between brands, categories, specifications, and serial numbers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Row-Level Security (RLS):</strong> Granular SQL policies prevent anonymous access to customer phone numbers and enquiry leads.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Indian Server Location:</strong> AWS Mumbai (`ap-south-1`) data center ensures sub-30ms latency for showroom staff.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Built-in Auth:</strong> Email/Password, Magic Link, or Google OAuth with HTTP-only cookies and zero client-exposed secrets.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 mt-6 border-t border-zinc-100 text-xs font-mono text-zinc-500">
            Installation: <code className="bg-zinc-100 px-2 py-1 rounded text-zinc-800">npm install @supabase/supabase-js @supabase/ssr</code>
          </div>
        </Card>

        {/* Option B: Firebase */}
        <Card variant="white" className="p-6 border-l-4 border-l-amber-500 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Server className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-base font-black text-zinc-900">
                    Option B: Firebase (Alternative)
                  </h3>
                  <span className="text-[11px] text-amber-700 font-semibold">
                    Google Cloud Firestore • Firebase Authentication
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded-full">
                NoSQL Option
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-zinc-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Document Model:</strong> Products stored as JSON-like documents. Flexible for unstandardized tech specifications.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Realtime Sync:</strong> Instant updates when a showroom salesperson updates pricing or marks an item out of stock.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Firebase Rules:</strong> Security rules configured in JSON/CEL for document-level read/write permissions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Google Identity:</strong> Seamless integration with showroom Google Workspace accounts.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 mt-6 border-t border-zinc-100 text-xs font-mono text-zinc-500">
            Installation: <code className="bg-zinc-100 px-2 py-1 rounded text-zinc-800">npm install firebase firebase-admin</code>
          </div>
        </Card>
      </div>

      {/* Production SQL Migration Script */}
      <Card variant="white" className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#D82935]" />
            <h3 className="text-base font-black text-zinc-900">
              Production Database Schema & RLS Security Script
            </h3>
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(sqlSchema, "sql")}
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            {copiedSection === "sql" ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy SQL Schema</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-zinc-500 mb-4">
          Run this SQL script in the <strong>Supabase SQL Editor</strong> to create all tables, indexes, constraints, and Row Level Security policies.
        </p>

        <pre className="p-4 bg-zinc-950 text-zinc-200 rounded-xl overflow-x-auto text-[11px] font-mono leading-relaxed border border-zinc-800 max-h-80">
          {sqlSchema}
        </pre>
      </Card>

      {/* Environment Configuration (.env.local) */}
      <Card variant="white" className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Key className="w-5 h-5 text-[#D82935]" />
            <h3 className="text-base font-black text-zinc-900">
              Environment Variables Template (.env.local)
            </h3>
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(envTemplate, "env")}
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            {copiedSection === "env" ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Env Template</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-zinc-500 mb-4">
          Store these credentials in <code className="bg-zinc-100 px-1 py-0.5 rounded font-mono text-zinc-800">.env.local</code>. Never commit secrets to public repositories.
        </p>

        <pre className="p-4 bg-zinc-950 text-emerald-400 rounded-xl overflow-x-auto text-[11px] font-mono leading-relaxed border border-zinc-800">
          {envTemplate}
        </pre>
      </Card>

      {/* Deployment & Go-Live Checklist */}
      <Card variant="white" className="p-6 sm:p-8">
        <h3 className="text-base font-black text-zinc-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>Production Security & Deployment Checklist</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
            <strong className="text-zinc-900 block font-bold">1. Zero-Trust Access Control</strong>
            <p className="text-zinc-600 leading-relaxed">
              Ensure the public customer website has no route or link to the Admin portal. Enforce HTTP-only JWT cookies on all <code className="font-mono">/admin/*</code> routes.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
            <strong className="text-zinc-900 block font-bold">2. No Default PINs in Code</strong>
            <p className="text-zinc-600 leading-relaxed">
              Never use client-side PIN matching. Real accounts must be provisioned via Supabase Auth with bcrypt-hashed passwords or email magic links.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
            <strong className="text-zinc-900 block font-bold">3. Customer Privacy & Compliance</strong>
            <p className="text-zinc-600 leading-relaxed">
              Customer phone numbers and inquiry details must be locked down behind Row-Level Security so only verified showroom owner roles can read lead tables.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
            <strong className="text-zinc-900 block font-bold">4. Live WhatsApp Integration</strong>
            <p className="text-zinc-600 leading-relaxed">
              Replace the placeholder phone <code className="font-mono">+91 9800000000</code> with the showroom owner's official verified business WhatsApp number in production.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
