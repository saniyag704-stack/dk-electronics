# DK Electronics — Digital Megastore & WhatsApp Lead-Generation Website

**DK Electronics** is Anpara’s iconic 3-story electronics megastore located at **Cinema Road, Near Old Cinema Hall, Anpara, Sonbhadra, Uttar Pradesh (231225)**.

This platform faithfully mirrors the physical showroom’s modern black-and-red facade with a high-converting digital storefront and automated WhatsApp lead-generation pipeline.

---

## 🎨 Exact Showroom Brand Identity & Hybrid Color Palette

1. **Signature Brand Logo:**
   * **White Winged Emblem Icon:** Clean aerodynamic upward-sweeping wings emblem in a black badge with subtle crimson center accent.
   * **Bold White "DK" Typography:** High-contrast, bold tech letterforms.
   * **Showroom Crimson Red Pill Badge:** Vibrant rounded pill (`#DC2626`) containing white **"Electronics"** text, directly matching the physical store signboard.
   * **Heritage Subtext:** *"Trusted Since 1998 • Cinema Road, Anpara"*.

2. **Hybrid UI Architecture (High Conversion + Physical Facade Match):**
   * **Header, Hero Section & Footer Background:** Sleek Matte Charcoal Black (`#121212` / `#18181B`) matching the 3-story physical showroom exterior.
   * **Primary Brand Accent:** Showroom Crimson Red (`#DC2626`) for the logo pill, active filter tabs, deal badges, and key headline highlights.
   * **Product & Service Canvas (Middle Sections):** Crisp Pure White (`#FFFFFF`) and Soft Cool Gray (`#F4F4F5`) so product photography (Smartphones, Laptops, TVs, ACs, Refrigerators) pops with maximum clarity like Reliance Digital.
   * **Primary Action CTA:** WhatsApp Emerald Green (`#25D366`) for all dynamic price inquiry and repair booking buttons, providing maximum visual contrast against both black and white backgrounds.

---

## 🔐 Store Admin & Operations Dashboard

- **Access Point:** Click **"🔐 Admin Portal"** in the top bar or header.
- **Security PIN:** `1998` (or click **"Quick Fill 1998"**).
- **Features:**
  - 📊 **Overview & Metrics:** Active Products, In-Stock Units, WhatsApp Price Leads, and Service Booking Tickets.
  - 📦 **Product Catalog CRUD:** Add, edit, or delete items with automatic clean Product IDs (`DK-PRD-101`, `DK-PRD-115`, etc.), stock status (`In Stock`, `Limited Stock`, `Out of Stock`), and custom specs.
  - 🛠️ **Service Tickets Desk:** View repair bookings from Anpara, NTPC, and Lanco, with 1-click customer Call/WhatsApp actions and status toggle.
  - 💬 **WhatsApp Inquiry Log:** Real-time log of customer price requests.
  - ⚙️ **Showroom Configuration:** Manage phone numbers, store timings, and address.

---

## 🚀 WhatsApp Automation Core Rules

1. **No Cart / No Fixed Prices (Strictly Enforced):**
   Every product card features a dynamic **"💬 Ask Best Price on WhatsApp"** button opening:
   ```
   https://wa.me/919999999999?text=Hello%20DK%20Electronics%2C%20I%20want%20the%20best%20showroom%20price%20%26%20EMI%20offer%20for%3A%20[Product%20Name]%20([Category]).
   ```

2. **All-Electronics Service & Repair Booking:**
   Customers can book doorstep repair for any electronic device (Mobiles, Laptops, Smartwatches, ACs, LED TVs, Fridges, Washing Machines, Inverters):
   - Generates a unique Ticket Reference (e.g. `#DK-SVC-10397`).
   - Automatically launches WhatsApp with a formatted service dispatch ticket.
   - Displays an on-screen ticket confirmation modal and saves to the Admin Dashboard.

3. **Interactive 0% Down-Payment EMI Calculator:**
   - Real-time slider from ₹8,000 to ₹1,50,000 with tenure selector (3 to 24 months).
   - Instant monthly installment calculation with a direct **"Check Eligibility on WhatsApp"** button.

---

## 🌐 Running Locally

```bash
# Using Python
python -m http.server 8080

# Or using Node
npx serve .
```
Visit `http://localhost:8080` in your web browser.
