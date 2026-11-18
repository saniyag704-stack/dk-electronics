/**
 * DK Electronics - Centralized Showroom Configuration
 * All contact endpoints, showroom identifiers, and integration flags are managed here.
 * Notice: This is a sales presentation demo. Integrations and phone numbers are marked as demo placeholders
 * until confirmed by the showroom owner.
 */

export interface ShowroomConfig {
  name: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  isConfigured: boolean;
  demoNotice_en: string;
  demoNotice_hi: string;
  addressDisplay: string;
  addressDisplay_hi: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
  googleMapsUrl: string;
  workingHours: string;
  heritageYears: number;
  siteUrl: string;
}

export const SHOWROOM_CONFIG: ShowroomConfig = {
  name: "DK Electronics",
  phoneDisplay: "+91 98XXX XXXXX",
  phoneTel: "+919800000000",
  // Showroom WhatsApp Number (configurable via NEXT_PUBLIC_SHOWROOM_WHATSAPP or default placeholder)
  whatsappNumber: process.env.NEXT_PUBLIC_SHOWROOM_WHATSAPP || "919800000000",
  isConfigured: false,
  demoNotice_en: "[DK Electronics • Anpara, Sonbhadra, UP]",
  demoNotice_hi: "[डीके इलेक्ट्रॉनिक्स • अनपरा, सोनभद्र, उत्तर प्रदेश]",
  addressDisplay: "Main Market, Anpara, Sonbhadra District, Uttar Pradesh 231225",
  addressDisplay_hi: "मुख्य मार्केट, अनपरा, सोनभद्र जिला, उत्तर प्रदेश 231225",
  locality: "Anpara",
  region: "Uttar Pradesh",
  postalCode: "231225",
  country: "IN",
  googleMapsUrl: "https://maps.google.com/?q=DK+Electronics+Anpara",
  workingHours: "Monday - Sunday: 10:30 AM - 9:00 PM (Open 7 Days)",
  heritageYears: 28,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://dkelectronics.in",
};

/**
 * 1. WHATSAPP PRODUCT ENQUIRY
 * Must contain: Product name, Brand, Model, and Product page reference.
 */
export function buildProductWhatsAppUrl(params: {
  productName: string;
  brand: string;
  modelCode: string;
  pageRefOrSlug: string;
  language: "en" | "hi";
}): string {
  const { productName, brand, modelCode, pageRefOrSlug, language } = params;
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://dkelectronics.demo";
  const fullRef = pageRefOrSlug.startsWith("http")
    ? pageRefOrSlug
    : `${baseUrl}/products/${pageRefOrSlug.replace(/^\//, "")}`;

  let message = "";
  if (language === "hi") {
    message = [
      `नमस्ते ${SHOWROOM_CONFIG.name},`,
      `मैं निम्नलिखित उत्पाद के शोरूम ऑफर और उपलब्धता के बारे में पूछताछ करना चाहता हूँ:`,
      `• उत्पाद का नाम: ${productName}`,
      `• ब्रांड: ${brand}`,
      `• मॉडल: ${modelCode}`,
      `• उत्पाद पेज लिंक: ${fullRef}`,
      ``,
      `कृपया वर्तमान शोरूम ऑफर और 0% ईएमआई विवरण साझा करें।`,
    ].join("\n");
  } else {
    message = [
      `Hello ${SHOWROOM_CONFIG.name},`,
      `I would like to enquire about the showroom pricing and availability for:`,
      `• Product: ${productName}`,
      `• Brand: ${brand}`,
      `• Model: ${modelCode}`,
      `• Product Reference: ${fullRef}`,
      ``,
      `Please share the best showroom price and available 0% EMI schemes.`,
    ].join("\n");
  }

  return `https://wa.me/${SHOWROOM_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * 2. EMI ENQUIRY
 * Must contain: Product price, Down payment, Loan amount, Tenure, Estimated monthly EMI.
 * Clearly notes that calculations are indicative and actual terms may differ.
 */
export function buildEmiWhatsAppUrl(params: {
  productPrice: number;
  downPayment: number;
  loanAmount: number;
  tenureMonths: number;
  estimatedEmi: number;
  language: "en" | "hi";
  productName?: string;
}): string {
  const { productPrice, downPayment, loanAmount, tenureMonths, estimatedEmi, language, productName } = params;

  let message = "";
  if (language === "hi") {
    message = [
      `नमस्ते ${SHOWROOM_CONFIG.name},`,
      `मैं शोरूम 0% ईएमआई योजना के लिए विवरण भेजना चाहता हूँ:`,
      productName ? `• उत्पाद: ${productName}` : null,
      `• उत्पाद मूल्य: ₹${productPrice.toLocaleString("en-IN")}`,
      `• डाउन पेमेंट: ₹${downPayment.toLocaleString("en-IN")}`,
      `• ऋण राशि (Loan Amount): ₹${loanAmount.toLocaleString("en-IN")}`,
      `• किस्त अवधि (Tenure): ${tenureMonths} महीने`,
      `• अनुमानित मासिक ईएमआई: ₹${estimatedEmi.toLocaleString("en-IN")}/माह`,
      ``,
      `*नोट: यह गणना सांकेतिक है। वास्तविक बैंक/फाइनेंसर नियम व अप्रूवल शर्तों के अधीन हैं।`,
      `कृपया मुझे आवश्यक दस्तावेजों और प्री-अप्रूवल प्रक्रिया के बारे में मार्गदर्शन करें।`,
    ]
      .filter(Boolean)
      .join("\n");
  } else {
    message = [
      `Hello ${SHOWROOM_CONFIG.name},`,
      `I am interested in exploring an EMI scheme with the following breakdown:`,
      productName ? `• Product: ${productName}` : null,
      `• Product Price: ₹${productPrice.toLocaleString("en-IN")}`,
      `• Down Payment: ₹${downPayment.toLocaleString("en-IN")}`,
      `• Loan Amount: ₹${loanAmount.toLocaleString("en-IN")}`,
      `• Tenure: ${tenureMonths} Months`,
      `• Estimated Monthly EMI: ₹${estimatedEmi.toLocaleString("en-IN")}/month`,
      ``,
      `*Note: Calculations are indicative estimates. Actual terms depend on financier approval and terms.`,
      `Please guide me with the document requirements and pre-approval process.`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  return `https://wa.me/${SHOWROOM_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type ServiceDeviceType =
  | "mobile"
  | "laptop"
  | "tv"
  | "ac"
  | "refrigerator"
  | "washing_machine";

/**
 * 3. REPAIR & SERVICE BOOKING ENQUIRY
 * Collects: Customer name, Phone number, Device type, Problem description, Location.
 */
export function buildServiceWhatsAppUrl(params: {
  customerName: string;
  phone: string;
  deviceType: string;
  problem: string;
  location: string;
  language: "en" | "hi";
}): string {
  const { customerName, phone, deviceType, problem, location, language } = params;

  let message = "";
  if (language === "hi") {
    message = [
      `नमस्ते ${SHOWROOM_CONFIG.name} सर्विस टीम,`,
      `मुझे रिपेयर / सर्विस सहायता बुक करनी है:`,
      `• ग्राहक का नाम: ${customerName}`,
      `• फोन नंबर: ${phone}`,
      `• उपकरण प्रकार: ${deviceType}`,
      `• समस्या का विवरण: ${problem}`,
      `• ग्राहक का क्षेत्र / पता: ${location}`,
      ``,
      `कृपया तकनीशियन विज़िट या सर्विस का समय निर्धारित करें।`,
    ].join("\n");
  } else {
    message = [
      `Hello ${SHOWROOM_CONFIG.name} Service Desk,`,
      `I would like to request repair/service assistance:`,
      `• Customer Name: ${customerName}`,
      `• Phone: ${phone}`,
      `• Device Type: ${deviceType}`,
      `• Problem Description: ${problem}`,
      `• Service Location: ${location}`,
      ``,
      `Please advise on technician schedule or in-showroom inspection.`,
    ].join("\n");
  }

  return `https://wa.me/${SHOWROOM_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * General Showroom WhatsApp Link
 */
export function buildGeneralWhatsAppUrl(language: "en" | "hi"): string {
  const text =
    language === "hi"
      ? `नमस्ते ${SHOWROOM_CONFIG.name}, मुझे शोरूम के उत्पादों, चालू ऑफर्स और सेवाओं के बारे में पूछताछ करनी है।`
      : `Hello ${SHOWROOM_CONFIG.name}, I would like to enquire about your showroom products, offers and services.`;
  return `https://wa.me/${SHOWROOM_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
