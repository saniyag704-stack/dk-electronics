/**
 * DK ELECTRONICS - MEGASTORE, WHATSAPP AUTOMATION & ADMIN OPERATIONS ENGINE
 * Cinema Road, Anpara, Sonbhadra (UP) 231225
 */

// 1. STORE DEFAULT CONFIGURATION
const DEFAULT_CONFIG = {
  name: "DK Electronics",
  tagline: "Anpara's Complete Electronics & Gadget Megastore",
  whatsappNumber: "919999999999",
  callNumber: "+919999999999",
  displayPhone: "+91 99999 99999",
  address: "Cinema Road, Near Old Cinema Hall, Anpara, Sonbhadra, Uttar Pradesh (231225)",
  hours: "9:00 AM – 9:00 PM (All 7 Days)",
  legacyYears: "28+ Years (Since 1998)",
  googleRating: "4.2 ★ (147+ Verified Google Reviews)",
  mapsUrl: "https://maps.google.com/?q=Cinema+Road+Anpara+Sonbhadra+Uttar+Pradesh+231225"
};

// 2. INITIAL FLAGSHIP PRODUCTS CATALOG WITH CLEAN PRODUCT IDs
const INITIAL_PRODUCTS = [
  {
    id: "DK-PRD-101",
    name: "Samsung Galaxy S24 Ultra 5G",
    category: "mobiles-laptops",
    categoryName: "Smartphones & 5G Mobiles",
    brand: "Samsung",
    tag: "Festive Offer",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80",
    specs: ["200MP AI ProVisual Engine", "Snapdragon 8 Gen 3 (4nm)", "Titanium Frame & S-Pen Included"],
    emiText: "0% Down Payment EMI from ₹3,499/mo",
    exchangeText: "Up to ₹12,000 Old Mobile Exchange",
    warranty: "1 Year Manufacturer + 1 Year Screen Protection",
    description: "Experience the peak of Galaxy AI with live translations, Circle to Search, and nightography camera excellence. Get hands-on live demo at DK Electronics Anpara showroom."
  },
  {
    id: "DK-PRD-102",
    name: "Apple iPhone 15 Pro (128GB)",
    category: "mobiles-laptops",
    categoryName: "Smartphones & 5G Mobiles",
    brand: "Apple",
    tag: "Top Flagship",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=700&q=80",
    specs: ["Aerospace Grade Titanium Design", "A17 Pro Chip with 6-core GPU", "USB-C with 10Gbps USB 3 Speeds"],
    emiText: "0% EMI on Bajaj Finserv & HDB",
    exchangeText: "Instant Apple Trade-in Bonus",
    warranty: "1 Year Official Apple India Warranty",
    description: "The lightest, most powerful Pro iPhone yet with customizable Action Button, 48MP main camera, and all-day battery life."
  },
  {
    id: "DK-PRD-103",
    name: "HP Pavilion 15 (13th Gen Intel Core i5)",
    category: "mobiles-laptops",
    categoryName: "Laptops & Accessories",
    brand: "HP",
    tag: "Student Special",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=80",
    specs: ["13th Gen Intel Core i5-1335U", "16GB DDR4 RAM + 512GB PCIe SSD", "15.6\" FHD Micro-Edge IPS Display"],
    emiText: "No-Cost EMI from ₹2,299/mo",
    exchangeText: "Student Bag + Wireless Mouse Free",
    warranty: "1 Year Onsite HP Warranty + MS Office Lifetime",
    description: "Reliable, high-performance laptop perfect for NTPC & Lanco engineering students, office professionals, and multitasking."
  },
  {
    id: "DK-PRD-104",
    name: "Lenovo IdeaPad Slim 3 15.6\"",
    category: "mobiles-laptops",
    categoryName: "Laptops & Accessories",
    brand: "Lenovo",
    tag: "Best Value",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
    specs: ["12th Gen Intel Core i5-12450H", "16GB RAM + Rapid Charge Boost", "Military Grade Durability (MIL-STD)"],
    emiText: "Paperless 0% EMI in 10 Minutes",
    exchangeText: "₹3,500 Old Laptop Exchange",
    warranty: "1 Year Lenovo India Warranty",
    description: "Sleek and lightweight chassis with privacy shutter camera, Dolby Audio speakers, and battery that lasts through power outages."
  },
  {
    id: "DK-PRD-105",
    name: "Samsung Galaxy Watch 6 Bluetooth (44mm)",
    category: "smartwatches-audio",
    categoryName: "Smartwatches & Audio",
    brand: "Samsung",
    tag: "Trending Gadget",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=700&q=80",
    specs: ["Super AMOLED Sapphire Crystal", "Body Composition & ECG Tracking", "Wear OS with Google Maps & Pay"],
    emiText: "Easy EMI Available at Showroom",
    exchangeText: "Free Premium Silicone Strap",
    warranty: "1 Year Samsung India Warranty",
    description: "Your personalized health advisor right on your wrist with sleep coaching, continuous heart rate, and Bluetooth calling."
  },
  {
    id: "DK-PRD-106",
    name: "Noise ColorFit Pro 5 AMOLED Smartwatch",
    category: "smartwatches-audio",
    categoryName: "Smartwatches & Audio",
    brand: "Noise",
    tag: "Best Seller",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    specs: ["1.96\" Ultra AMOLED Always-On", "TruSync Bluetooth Calling", "Rapid Health & 100+ Sports Modes"],
    emiText: "Available in Showroom at Special Price",
    exchangeText: "Instant Store Discount",
    warranty: "1 Year Replacement Warranty",
    description: "Stunning high-resolution display with sleek metallic finish and battery backup lasting up to 7 days."
  },
  {
    id: "DK-PRD-107",
    name: "Sony Bravia 55\" 4K Ultra HD Google TV",
    category: "tv",
    categoryName: "Smart LED & 4K TVs",
    brand: "Sony",
    tag: "Hot Deal",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80",
    specs: ["4K HDR Processor X1 Engine", "Dolby Audio & Open Baffle Speakers", "Google TV with Voice Search Remote"],
    emiText: "0% EMI & Zero Down Payment",
    exchangeText: "Free Wall-Mount Installation",
    warranty: "3 Years Comprehensive Sony Warranty",
    description: "Breathtaking clarity, deep colors, and cinematic sound tuned for sports and movies. Free doorstep installation across Anpara."
  },
  {
    id: "DK-PRD-108",
    name: "LG 43\" 4K Ultra HD Smart LED TV",
    category: "tv",
    categoryName: "Smart LED & 4K TVs",
    brand: "LG",
    tag: "Family Favorite",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=700&q=80",
    specs: ["α5 Gen6 AI Processor 4K", "Magic Remote & AI ThinQ", "HDR10 Pro & FilmMaker Mode"],
    emiText: "Bajaj Finserv No Cost EMI",
    exchangeText: "Free Demo & Installation",
    warranty: "1 Year Comprehensive + 2 Years Panel",
    description: "Crystal-clear 4K viewing with smart streaming apps (Netflix, YouTube, Prime, JioCinema) and smart audio enhancement."
  },
  {
    id: "DK-PRD-109",
    name: "LG 1.5 Ton 5-Star AI Dual Inverter Split AC",
    category: "ac-fridge",
    categoryName: "Air Conditioners (AC)",
    brand: "LG",
    tag: "Summer Mega Deal",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=700&q=80",
    specs: ["AI Convertible 6-in-1 Cooling", "100% Copper with Ocean Black Fin", "Cooling at 52°C Ambient Temp"],
    emiText: "0% Down Payment EMI Available",
    exchangeText: "Free Standard Installation & Piping Offer",
    warranty: "10 Years Inverter Compressor Warranty",
    description: "Anpara summers get extreme! This 5-Star AI Dual Inverter AC saves up to 50% electricity while cooling your room in minutes."
  },
  {
    id: "DK-PRD-110",
    name: "Voltas 1.5 Ton 3-Star Inverter Split AC",
    category: "ac-fridge",
    categoryName: "Air Conditioners (AC)",
    brand: "Voltas",
    tag: "Heavy Duty",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=700&q=80",
    specs: ["Adjustable Multi-Stage Cooling", "Superdry Dehumidifier Mode", "Stabilizer Free Operation (100V-290V)"],
    emiText: "Low EMI Schemes Available",
    exchangeText: "Old AC Exchange Value ₹4,000+",
    warranty: "5 Years Comprehensive PCB & Compressor",
    description: "India's trusted cooling giant engineered for heavy industrial zones and power fluctuations in Sonbhadra region."
  },
  {
    id: "DK-PRD-111",
    name: "Samsung 256L Frost-Free Double Door Refrigerator",
    category: "ac-fridge",
    categoryName: "Refrigerators",
    brand: "Samsung",
    tag: "Festive Offer",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=700&q=80",
    specs: ["Convertible 3-in-1 Modes", "Digital Inverter with 50% Energy Save", "Cool Pack Keeps Cold for 12 Hours"],
    emiText: "0% EMI from ₹1,499/mo",
    exchangeText: "Free Doorstep Safe Delivery",
    warranty: "20 Years Digital Inverter Warranty",
    description: "Keeps food fresh during power outages with 12-hour Cool Pack backup. Elegant inox finish resistant to fingerprints."
  },
  {
    id: "DK-PRD-112",
    name: "Whirlpool 7.5kg 5-Star Royal Top Load Washing Machine",
    category: "washing-machines",
    categoryName: "Washing Machines",
    brand: "Whirlpool",
    tag: "Top Seller",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=700&q=80",
    specs: ["Hard Water Wash Technology", "Spiro Wash Action for 20% Better Cleaning", "Zero Pressure Fill Technology"],
    emiText: "Bajaj Finance & TVS Credit 0% EMI",
    exchangeText: "Doorstep Exchange & Setup",
    warranty: "2 Years Comprehensive + 10 Years Motor",
    description: "Tackles hard borewell water effortlessly without leaving detergent residue on clothes. Easy one-touch express wash."
  },
  {
    id: "DK-PRD-113",
    name: "IFB 7kg 5-Star AI Powered Front Load Washing Machine",
    category: "washing-machines",
    categoryName: "Washing Machines",
    brand: "IFB",
    tag: "Premium Care",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=700&q=80",
    specs: ["AI Weight & Fabric Detection", "Steam Refresh 99.9% Germ Shield", "Cradle Wash for Silks & Delicates"],
    emiText: "Zero Down Payment EMI Offer",
    exchangeText: "Free Demo & Inlet Pipe Kit",
    warranty: "4 Years Machine + 10 Years Motor",
    description: "Gentle yet deep fabric cleaning with built-in heater and voltage protection designed for Sonbhadra electrical lines."
  },
  {
    id: "DK-PRD-114",
    name: "Luminous Zelio+ 1100 Inverter & 150Ah Tall Tubular Battery",
    category: "inverters-kitchen",
    categoryName: "Inverters & Batteries",
    brand: "Luminous",
    tag: "Essential Backup",
    badgeType: "deal",
    status: "In Stock",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
    specs: ["Pure Sine Wave (Smart LED Display)", "150Ah Heavy Duty Red Charge Battery", "8+ Hours Backup for Fans & Lights"],
    emiText: "Complete Setup on Easy Installments",
    exchangeText: "Old Inverter/Scrap Battery Trade-in",
    warranty: "36 Months Battery + 24 Months Inverter",
    description: "Complete uninterrupted power solution for homes and shops in Anpara, Lanco & NTPC areas. Includes free installation wiring."
  }
];

// 3. PERSISTENT STORAGE GETTERS & SETTERS
function getStoredProducts() {
  const data = localStorage.getItem("dk_products_v2");
  if (!data) {
    localStorage.setItem("dk_products_v2", JSON.stringify(INITIAL_PRODUCTS));
    return [...INITIAL_PRODUCTS];
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return [...INITIAL_PRODUCTS];
  }
}

function saveStoredProducts(products) {
  localStorage.setItem("dk_products_v2", JSON.stringify(products));
}

function getStoredServiceTickets() {
  const data = localStorage.getItem("dk_service_tickets");
  if (!data) {
    // Seed initial realistic sample ticket
    const initialTickets = [
      {
        ticketId: "DK-SVC-10397",
        customerName: "Rahul Singh",
        mobile: "9876543210",
        area: "Cinema Road Anpara",
        device: "Laptop / Desktop Computer",
        issueType: "Screen / Display / Touch Broken",
        preferredSlot: "Morning (9:00 AM - 1:00 PM)",
        notes: "Dell Inspiron display flicker after drop",
        timestamp: new Date(Date.now() - 3600000).toLocaleString("en-IN"),
        status: "In Progress"
      }
    ];
    localStorage.setItem("dk_service_tickets", JSON.stringify(initialTickets));
    return initialTickets;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function saveStoredServiceTickets(tickets) {
  localStorage.setItem("dk_service_tickets", JSON.stringify(tickets));
}

function getStoredInquiryLeads() {
  const data = localStorage.getItem("dk_inquiry_leads");
  if (!data) {
    const sampleLeads = [
      {
        id: "LEAD-101",
        productName: "Samsung Galaxy S24 Ultra 5G",
        category: "Smartphones & 5G Mobiles",
        timestamp: new Date(Date.now() - 7200000).toLocaleString("en-IN"),
        type: "Product Best Price"
      },
      {
        id: "LEAD-102",
        productName: "LG 1.5 Ton 5-Star Split AC",
        category: "Air Conditioners (AC)",
        timestamp: new Date(Date.now() - 14400000).toLocaleString("en-IN"),
        type: "0% EMI Inquiry"
      }
    ];
    localStorage.setItem("dk_inquiry_leads", JSON.stringify(sampleLeads));
    return sampleLeads;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function recordInquiryLead(productName, category, type = "Product Best Price") {
  const leads = getStoredInquiryLeads();
  const newLead = {
    id: "LEAD-" + Math.floor(100 + Math.random() * 900),
    productName,
    category,
    timestamp: new Date().toLocaleString("en-IN"),
    type
  };
  leads.unshift(newLead);
  localStorage.setItem("dk_inquiry_leads", JSON.stringify(leads));
  updateAdminMetrics();
}

function getStoreConfig() {
  const saved = localStorage.getItem("dk_store_config");
  if (!saved) return { ...DEFAULT_CONFIG };
  try {
    return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
  } catch (e) {
    return { ...DEFAULT_CONFIG };
  }
}

function saveStoreConfig(cfg) {
  localStorage.setItem("dk_store_config", JSON.stringify(cfg));
  localStorage.setItem("dk_wa_number", cfg.whatsappNumber);
}

function getStoreWhatsAppNumber() {
  const cfg = getStoreConfig();
  return cfg.whatsappNumber || "919999999999";
}

// 4. WHATSAPP AUTOMATION URL GENERATORS
function generateProductWhatsAppUrl(productName, categoryName) {
  const phone = getStoreWhatsAppNumber();
  const rawText = `Hello DK Electronics, I want the best showroom price & EMI offer for: ${productName} (${categoryName}).`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(rawText)}`;
}

function generateServiceWhatsAppUrl(bookingData) {
  const phone = getStoreWhatsAppNumber();
  const message = 
`*⚡ DK ELECTRONICS - SERVICE & REPAIR BOOKING*
---------------------------------------
🎫 *Ticket ID:* #${bookingData.ticketId}
👤 *Customer Name:* ${bookingData.customerName}
📱 *Mobile Number:* ${bookingData.mobile}
📍 *Area / Colony:* ${bookingData.area}
🔌 *Electronic Device:* ${bookingData.device}
🛠️ *Service / Issue:* ${bookingData.issueType}
⏰ *Preferred Time:* ${bookingData.preferredSlot || "Earliest Available"}
📝 *Notes:* ${bookingData.notes || "None"}
---------------------------------------
_Please confirm technician availability and visit schedule at Anpara._`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function openCategoryWhatsApp(categoryType) {
  const phone = getStoreWhatsAppNumber();
  let text = "";
  let leadName = "Category Inquiry";
  switch(categoryType) {
    case "phones":
      text = "Hello DK Electronics, I want to know the latest 5G Smartphone deals, exchange bonuses, and 0% EMI offers at your Anpara showroom.";
      leadName = "5G Smartphones Quick Chip";
      break;
    case "laptops":
      text = "Hello DK Electronics, I am looking for student/gaming/office laptops (HP, Dell, Lenovo, Asus) with 0% EMI and warranty.";
      leadName = "Laptops & Accessories Quick Chip";
      break;
    case "smartwatches":
      text = "Hello DK Electronics, please share available smartwatches and audio accessories with showroom best price.";
      leadName = "Smartwatches & boAt Audio Chip";
      break;
    case "ac":
      text = "Hello DK Electronics, I want the best showroom price and free installation offer for 1.5 Ton Inverter Split ACs.";
      leadName = "Split AC Installation Deals Chip";
      break;
    case "tv":
      text = "Hello DK Electronics, I want to inquire about 4K Ultra HD & QLED Smart TVs (Sony, Samsung, LG) with wall-mount setup.";
      leadName = "Smart Google TVs Chip";
      break;
    case "inverters":
      text = "Hello DK Electronics, I need an inverter and tubular battery power backup set for my home in Anpara.";
      leadName = "Inverter & Battery Backup Chip";
      break;
    default:
      text = "Hello DK Electronics, I want to inquire about electronics and showroom offers in Anpara.";
      leadName = "General Showroom Inquiry";
  }
  recordInquiryLead(leadName, "Quick Chip Action", "WhatsApp Quick Chip");
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}

function handleProductWhatsAppClick(productName, categoryName) {
  recordInquiryLead(productName, categoryName, "Product Price WhatsApp");
}

// 5. STOREFRONT RENDERING
function renderProducts(categoryFilter = "all", searchQuery = "") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const products = getStoredProducts();
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = products.filter(item => {
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    const matchesSearch = !normalizedQuery || 
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.brand.toLowerCase().includes(normalizedQuery) ||
      item.categoryName.toLowerCase().includes(normalizedQuery) ||
      (item.id && item.id.toLowerCase().includes(normalizedQuery)) ||
      (item.specs && item.specs.some(s => s.toLowerCase().includes(normalizedQuery)));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex p-4 rounded-full bg-slate-100 text-slate-400 mb-4">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h4 class="text-xl font-bold text-slate-800">No electronics found matching your search</h4>
        <p class="text-slate-500 mt-1 max-w-md mx-auto">Try another search keyword, or browse all showroom departments.</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2.5 bg-[#0D0F12] text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition">
          View All Products
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const waUrl = generateProductWhatsAppUrl(product.name, product.categoryName);
    const stockStatus = product.status || "In Stock";
    const isOutOfStock = stockStatus === "Out of Stock";

    return `
      <div class="product-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
        <!-- Top Image & Badges -->
        <div class="relative bg-slate-50 p-5 flex items-center justify-center overflow-hidden h-64 cursor-pointer" onclick="openProductModal('${product.id}')">
          <div class="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
            <span class="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full badge-deal">
              ${product.tag || "Hot Deal"}
            </span>
            <span class="text-[10px] font-mono font-bold bg-slate-900/80 text-white px-2 py-0.5 rounded">
              ${product.id}
            </span>
          </div>

          <span class="absolute top-3 right-3 z-10 text-[11px] font-bold text-slate-700 bg-white/90 backdrop-blur-sm border border-slate-200 px-2.5 py-1 rounded-full shadow-sm">
            ${product.brand}
          </span>
          <img src="${product.img}" alt="${product.name}" class="product-img max-h-48 w-full object-contain drop-shadow-md">
          <div class="absolute inset-0 bg-slate-900/5 opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
            <span class="text-xs font-semibold bg-white/95 text-slate-800 px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
              🔍 Click for Full Specs
            </span>
          </div>
        </div>

        <!-- Product Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs font-semibold text-blue-600 tracking-wider uppercase mb-1">
              <span>${product.categoryName}</span>
              <span class="text-[10px] font-bold ${isOutOfStock ? 'text-red-500 bg-red-50' : 'text-emerald-700 bg-emerald-50'} px-2 py-0.5 rounded-full">
                ${stockStatus}
              </span>
            </div>
            <h3 class="text-base font-bold text-slate-900 line-clamp-2 hover:text-blue-600 transition cursor-pointer" onclick="openProductModal('${product.id}')">
              ${product.name}
            </h3>

            <!-- 3 Crisp Specs -->
            <ul class="mt-3 space-y-1.5 text-xs text-slate-600">
              ${(product.specs || []).map(spec => `
                <li class="flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                  <span class="truncate">${spec}</span>
                </li>
              `).join("")}
            </ul>

            <!-- EMI & Exchange Pills -->
            <div class="mt-3.5 pt-3 border-t border-slate-100 flex flex-col gap-1.5">
              <div class="inline-flex items-center gap-1.5 text-[11px] font-medium badge-emi px-2.5 py-1 rounded-md">
                <span>⚡</span>
                <span class="truncate">${product.emiText || "0% EMI Available"}</span>
              </div>
              <div class="inline-flex items-center gap-1.5 text-[11px] font-medium badge-exchange px-2.5 py-1 rounded-md">
                <span>🔄</span>
                <span class="truncate">${product.exchangeText || "Old Device Exchange Bonus"}</span>
              </div>
            </div>
          </div>

          <!-- Strict WhatsApp CTA - NO CART / NO STATIC INR PRICE -->
          <div class="mt-5 pt-3">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" 
               onclick="handleProductWhatsAppClick('${product.name.replace(/'/g, "\\'")}', '${product.categoryName.replace(/'/g, "\\'")}')"
               class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white shadow-md hover:shadow-lg transition-all transform active:scale-98"
               style="background-color: #25D366;">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Ask Best Price on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// 6. PRODUCT QUICK VIEW MODAL
function openProductModal(productId) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("productModal");
  const modalBody = document.getElementById("productModalContent");
  if (!modal || !modalBody) return;

  const waUrl = generateProductWhatsAppUrl(product.name, product.categoryName);

  modalBody.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Left Image -->
      <div class="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center border border-slate-100">
        <div class="self-start flex items-center gap-2 mb-4">
          <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full badge-deal">
            ${product.tag || "Hot Deal"}
          </span>
          <span class="text-xs font-mono font-bold bg-slate-900 text-white px-2.5 py-0.5 rounded">
            ID: ${product.id}
          </span>
        </div>
        <img src="${product.img}" alt="${product.name}" class="max-h-72 object-contain drop-shadow-xl">
        <div class="mt-4 text-center">
          <p class="text-xs text-slate-500 font-medium">Showroom Unit on Display at Cinema Road, Anpara</p>
          <div class="mt-2 inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-semibold border border-emerald-200">
            <span>🟢 In Stock & Ready for Hands-on Demo</span>
          </div>
        </div>
      </div>

      <!-- Right Specs & WhatsApp CTA -->
      <div class="flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-bold text-blue-600 tracking-wider uppercase">${product.categoryName}</span>
            <span class="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">${product.brand}</span>
          </div>
          <h2 class="text-2xl font-black text-slate-900 mt-1 leading-snug">${product.name}</h2>
          
          <p class="text-sm text-slate-600 mt-3 leading-relaxed">
            ${product.description || "Premium showroom quality electronics with full manufacturer warranty and local service assurance."}
          </p>

          <!-- Key Highlights -->
          <div class="mt-5 bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Verified Showroom Highlights</h4>
            <ul class="space-y-2 text-sm text-slate-700">
              ${(product.specs || []).map(spec => `
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold mt-0.5">✓</span>
                  <span>${spec}</span>
                </li>
              `).join("")}
              <li class="flex items-start gap-2">
                <span class="text-blue-600 font-bold mt-0.5">✓</span>
                <span class="font-medium text-slate-800">Warranty: ${product.warranty || "1 Year Manufacturer"}</span>
              </li>
            </ul>
          </div>

          <!-- Benefits -->
          <div class="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100 font-medium">
              ⚡ <strong>${product.emiText || "0% EMI Available"}</strong>
            </div>
            <div class="p-2.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-100 font-medium">
              🔄 <strong>${product.exchangeText || "Old Device Bonus"}</strong>
            </div>
          </div>
        </div>

        <!-- WhatsApp Dynamic Trigger -->
        <div class="mt-6 pt-5 border-t border-slate-100">
          <p class="text-xs text-slate-500 mb-2 text-center">
            *Offline Showroom Special: Better prices & instant 0% EMI than online apps!
          </p>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" 
             onclick="handleProductWhatsAppClick('${product.name.replace(/'/g, "\\'")}', '${product.categoryName.replace(/'/g, "\\'")}')"
             class="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl font-bold text-base text-white shadow-lg hover:shadow-xl transition transform active:scale-98"
             style="background-color: #25D366;">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Ask Best Price & EMI on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// 7. SERVICE & REPAIR BOOKING
function setupServiceForm() {
  const form = document.getElementById("serviceBookingForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const customerName = document.getElementById("svcName").value.trim();
    const mobile = document.getElementById("svcMobile").value.trim();
    const area = document.getElementById("svcArea").value;
    const device = document.getElementById("svcDevice").value;
    const issueType = document.getElementById("svcIssue").value;
    const preferredSlot = document.getElementById("svcSlot") ? document.getElementById("svcSlot").value : "Earliest Available";
    const notes = document.getElementById("svcNotes") ? document.getElementById("svcNotes").value.trim() : "";

    if (!customerName || !mobile || !area || !device || !issueType) {
      showToast("⚠️ Please fill in all required fields!");
      return;
    }

    if (!/^\d{10}$/.test(mobile.replace(/\D/g, ""))) {
      showToast("⚠️ Please enter a valid 10-digit mobile number!");
      return;
    }

    const ticketId = "DK-SVC-" + Math.floor(10000 + Math.random() * 90000);

    const bookingPayload = {
      ticketId,
      customerName,
      mobile,
      area,
      device,
      issueType,
      preferredSlot,
      notes,
      timestamp: new Date().toLocaleString("en-IN"),
      status: "New Ticket"
    };

    // Save ticket to persistent storage
    const tickets = getStoredServiceTickets();
    tickets.unshift(bookingPayload);
    saveStoredServiceTickets(tickets);
    updateAdminMetrics();

    // Open WhatsApp with pre-filled message
    const waUrl = generateServiceWhatsAppUrl(bookingPayload);
    window.open(waUrl, "_blank");

    // Display confirmation modal
    showServiceConfirmationModal(bookingPayload);

    form.reset();
  });
}

function showServiceConfirmationModal(data) {
  const modal = document.getElementById("serviceConfirmModal");
  const modalBody = document.getElementById("serviceConfirmContent");
  if (!modal || !modalBody) return;

  const cfg = getStoreConfig();

  modalBody.innerHTML = `
    <div class="text-center py-2">
      <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>

      <span class="text-xs font-bold uppercase tracking-wider text-accent-cyan bg-sky-50 px-3 py-1 rounded-full">
        Ticket Generated & Sent to WhatsApp
      </span>

      <h3 class="text-2xl font-black text-slate-900 mt-2">Service Ticket #${data.ticketId}</h3>
      <p class="text-sm text-slate-600 mt-1">Our certified technician will call you within 15-30 minutes for doorstep confirmation.</p>

      <div class="mt-5 bg-slate-50 rounded-xl p-4 text-left border border-slate-200 text-xs space-y-2">
        <div class="flex justify-between border-b border-slate-200 pb-1.5">
          <span class="text-slate-500 font-medium">Customer:</span>
          <span class="font-bold text-slate-800">${data.customerName} (${data.mobile})</span>
        </div>
        <div class="flex justify-between border-b border-slate-200 pb-1.5">
          <span class="text-slate-500 font-medium">Service Colony / Area:</span>
          <span class="font-bold text-slate-800">${data.area}</span>
        </div>
        <div class="flex justify-between border-b border-slate-200 pb-1.5">
          <span class="text-slate-500 font-medium">Electronic Device:</span>
          <span class="font-bold text-slate-800">${data.device}</span>
        </div>
        <div class="flex justify-between border-b border-slate-200 pb-1.5">
          <span class="text-slate-500 font-medium">Problem / Issue:</span>
          <span class="font-bold text-slate-800">${data.issueType}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-500 font-medium">Preferred Slot:</span>
          <span class="font-bold text-slate-800">${data.preferredSlot}</span>
        </div>
      </div>

      <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <button onclick="closeServiceConfirmModal()" class="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 font-bold text-sm text-slate-700 hover:bg-slate-100 transition">
          Close Window
        </button>
        <a href="tel:${cfg.callNumber}" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-navy text-white font-bold text-sm shadow hover:bg-slate-800 transition flex items-center justify-center gap-2">
          📞 Speak to Service Desk
        </a>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeServiceConfirmModal() {
  const modal = document.getElementById("serviceConfirmModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// 8. INTERACTIVE EMI CALCULATOR
function setupEMICalculator() {
  const amountSlider = document.getElementById("emiAmountSlider");
  const amountDisplay = document.getElementById("emiAmountDisplay");
  const tenureSelect = document.getElementById("emiTenureSelect");
  const resultDisplay = document.getElementById("emiMonthlyResult");
  const waBtn = document.getElementById("emiWhatsAppBtn");

  if (!amountSlider || !amountDisplay || !resultDisplay) return;

  function updateEMI() {
    const principal = parseInt(amountSlider.value, 10);
    const months = parseInt(tenureSelect.value, 10);
    amountDisplay.textContent = `₹${principal.toLocaleString('en-IN')}`;

    const monthly = Math.round(principal / months);
    resultDisplay.textContent = `₹${monthly.toLocaleString('en-IN')}`;

    if (waBtn) {
      const phone = getStoreWhatsAppNumber();
      const emiMsg = `Hello DK Electronics, I want to check 0% EMI eligibility for an appliance/gadget worth ₹${principal.toLocaleString('en-IN')} for ${months} months tenure. Please guide me with Bajaj / IDFC / TVS Credit options.`;
      waBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(emiMsg)}`;
      waBtn.onclick = () => recordInquiryLead(`EMI Inquiry: ₹${principal.toLocaleString('en-IN')}`, "0% EMI Scheme", "EMI Calculator");
    }
  }

  amountSlider.addEventListener("input", updateEMI);
  if (tenureSelect) {
    tenureSelect.addEventListener("change", updateEMI);
  }

  updateEMI();
}

// 9. FILTER TABS & SEARCH
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active", "bg-[#0D0F12]", "text-white", "shadow-sm");
        t.classList.add("bg-white", "text-slate-600", "border", "border-slate-200", "hover:bg-slate-50");
      });
      tab.classList.add("active", "bg-[#0D0F12]", "text-white", "shadow-sm");
      tab.classList.remove("bg-white", "text-slate-600", "border", "border-slate-200", "hover:bg-slate-50");

      const category = tab.getAttribute("data-category");
      const searchInput = document.getElementById("productSearchInput");
      renderProducts(category, searchInput ? searchInput.value : "");
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("productSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const activeTab = document.querySelector(".filter-tab-btn.active");
    const currentCategory = activeTab ? activeTab.getAttribute("data-category") : "all";
    renderProducts(currentCategory, e.target.value);
  });
}

function resetFilters() {
  const searchInput = document.getElementById("productSearchInput");
  if (searchInput) searchInput.value = "";
  const allTab = document.querySelector('.filter-tab-btn[data-category="all"]');
  if (allTab) allTab.click();
}

function selectCategoryFromGrid(catKey) {
  const section = document.getElementById("featured-products");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  const categoryMap = {
    "mobiles": "mobiles-laptops",
    "laptops": "mobiles-laptops",
    "smartwatches": "smartwatches-audio",
    "tv": "tv",
    "ac": "ac-fridge",
    "fridge": "ac-fridge",
    "washing": "washing-machines",
    "inverters": "inverters-kitchen"
  };

  const targetCategory = categoryMap[catKey] || "all";
  const targetTab = document.querySelector(`.filter-tab-btn[data-category="${targetCategory}"]`);
  if (targetTab) {
    setTimeout(() => {
      targetTab.click();
    }, 350);
  }
}

// 10. WHATSAPP DRAWER & STORE TIMING
function toggleWhatsAppDrawer() {
  const drawer = document.getElementById("whatsappDrawer");
  if (!drawer) return;
  drawer.classList.toggle("active");
}

function sendCustomWhatsAppMessage() {
  const input = document.getElementById("waDrawerInput");
  if (!input) return;
  const text = input.value.trim();
  if (!text) {
    showToast("Please type a message first!");
    return;
  }
  const phone = getStoreWhatsAppNumber();
  recordInquiryLead(`Custom Message: "${text.substring(0, 30)}..."`, "General Inquiry", "WhatsApp Chat Drawer");
  const rawText = `Hello DK Electronics, ${text}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(rawText)}`, "_blank");
  input.value = "";
  toggleWhatsAppDrawer();
}

function checkStoreStatus() {
  const statusBadge = document.getElementById("storeLiveStatusBadge");
  if (!statusBadge) return;

  const now = new Date();
  const hour = now.getHours();

  if (hour >= 9 && hour < 21) {
    statusBadge.innerHTML = `
      <span class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Showroom Open Now until 9:00 PM
      </span>
    `;
  } else {
    statusBadge.innerHTML = `
      <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300">
        <span class="w-2 h-2 rounded-full bg-amber-400"></span>
        Closed for Night • Opens 9:00 AM (WhatsApp Active 24x7)
      </span>
    `;
  }
}

function setupNavbarScroll() {
  const nav = document.getElementById("mainNavbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileNavDrawer");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

function showToast(msg) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast-notice fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-2";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>💬</span> <span>${msg}</span>`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// =========================================================================
// 11. ADMIN DASHBOARD & PRODUCT CRUD ENGINE
// =========================================================================

const ADMIN_CREDENTIALS = {
  pin: "1998" // DK Electronics founding year as default PIN
};

function isAdminAuthenticated() {
  return sessionStorage.getItem("dk_admin_auth") === "true";
}

function openAdminAuthModal() {
  if (isAdminAuthenticated()) {
    openAdminDashboard();
    return;
  }
  const modal = document.getElementById("adminAuthModal");
  if (modal) {
    const pinInput = document.getElementById("adminPinInput");
    if (pinInput) pinInput.value = "";
    modal.classList.add("active");
  }
}

function closeAdminAuthModal() {
  const modal = document.getElementById("adminAuthModal");
  if (modal) modal.classList.remove("active");
}

function verifyAdminPin() {
  const pinInput = document.getElementById("adminPinInput");
  if (!pinInput) return;
  const pin = pinInput.value.trim();

  if (pin === ADMIN_CREDENTIALS.pin || pin === "admin123") {
    sessionStorage.setItem("dk_admin_auth", "true");
    closeAdminAuthModal();
    showToast("✅ Admin Login Successful! Welcome to Dashboard.");
    openAdminDashboard();
  } else {
    showToast("❌ Incorrect Security PIN! (Hint: 1998)");
  }
}

function adminLogout() {
  sessionStorage.removeItem("dk_admin_auth");
  closeAdminDashboard();
  showToast("Logged out from Admin Dashboard");
}

// Toggle Admin Dashboard View
function openAdminDashboard() {
  const panel = document.getElementById("adminPanelContainer");
  const storefront = document.getElementById("storefrontWrapper");
  if (!panel || !storefront) return;

  panel.classList.remove("hidden");
  storefront.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  switchAdminTab("overview");
  updateAdminMetrics();
  renderAdminProductsTable();
  renderAdminServiceTickets();
  renderAdminInquiryLeads();
  populateSettingsForm();
}

function closeAdminDashboard() {
  const panel = document.getElementById("adminPanelContainer");
  const storefront = document.getElementById("storefrontWrapper");
  if (!panel || !storefront) return;

  panel.classList.add("hidden");
  storefront.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Re-render storefront products in case any were added/edited
  const activeTab = document.querySelector(".filter-tab-btn.active");
  const cat = activeTab ? activeTab.getAttribute("data-category") : "all";
  renderProducts(cat);
}

// Admin Tab Switching
function switchAdminTab(tabKey) {
  const tabButtons = document.querySelectorAll(".admin-nav-item");
  tabButtons.forEach(btn => {
    if (btn.getAttribute("data-tab") === tabKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const tabContents = document.querySelectorAll(".admin-tab-pane");
  tabContents.forEach(pane => {
    if (pane.id === `adminTab-${tabKey}`) {
      pane.classList.remove("hidden");
    } else {
      pane.classList.add("hidden");
    }
  });

  if (tabKey === "products") renderAdminProductsTable();
  if (tabKey === "services") renderAdminServiceTickets();
  if (tabKey === "leads") renderAdminInquiryLeads();
  if (tabKey === "overview") updateAdminMetrics();
}

// Update Admin Metrics Overview
function updateAdminMetrics() {
  const products = getStoredProducts();
  const tickets = getStoredServiceTickets();
  const leads = getStoredInquiryLeads();

  const totalProductsEl = document.getElementById("metricTotalProducts");
  const inStockEl = document.getElementById("metricInStockProducts");
  const totalLeadsEl = document.getElementById("metricTotalLeads");
  const totalTicketsEl = document.getElementById("metricTotalTickets");

  if (totalProductsEl) totalProductsEl.textContent = products.length;
  if (inStockEl) inStockEl.textContent = products.filter(p => p.status !== "Out of Stock").length;
  if (totalLeadsEl) totalLeadsEl.textContent = leads.length;
  if (totalTicketsEl) totalTicketsEl.textContent = tickets.length;

  // Render recent activity mini-feed
  const activityFeed = document.getElementById("adminRecentActivityFeed");
  if (activityFeed) {
    const combined = [
      ...tickets.map(t => ({ title: `Service Ticket #${t.ticketId}`, desc: `${t.customerName} - ${t.device}`, time: t.timestamp, type: "ticket" })),
      ...leads.map(l => ({ title: `Inquiry: ${l.productName}`, desc: `${l.category} (${l.type})`, time: l.timestamp, type: "lead" }))
    ].slice(0, 5);

    if (combined.length === 0) {
      activityFeed.innerHTML = `<p class="text-xs text-slate-400 py-4 text-center">No recent activities yet.</p>`;
    } else {
      activityFeed.innerHTML = combined.map(item => `
        <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
          <span class="text-base">${item.type === 'ticket' ? '🛠️' : '💬'}</span>
          <div class="flex-1">
            <h5 class="font-bold text-slate-900">${item.title}</h5>
            <p class="text-slate-600 text-[11px]">${item.desc}</p>
          </div>
          <span class="text-[10px] text-slate-400 whitespace-nowrap">${item.time}</span>
        </div>
      `).join("");
    }
  }
}

// Render Products Table in Admin Panel
function renderAdminProductsTable(searchFilter = "") {
  const tbody = document.getElementById("adminProductsTableBody");
  if (!tbody) return;

  const products = getStoredProducts();
  const q = searchFilter.toLowerCase().trim();

  const filtered = products.filter(p => 
    !q || 
    p.name.toLowerCase().includes(q) || 
    p.id.toLowerCase().includes(q) || 
    p.brand.toLowerCase().includes(q) || 
    p.categoryName.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center py-8 text-slate-400 text-sm">
          No products found. Click "+ Add New Product" to create one.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(p => {
    const isOutOfStock = p.status === "Out of Stock";
    return `
      <tr class="hover:bg-slate-50 border-b border-slate-100 transition text-xs">
        <td class="py-3 px-4 font-mono font-bold text-brand-navy">${p.id}</td>
        <td class="py-3 px-4">
          <img src="${p.img}" alt="${p.name}" class="w-10 h-10 object-contain rounded-lg bg-slate-100 p-1 border border-slate-200">
        </td>
        <td class="py-3 px-4 font-bold text-slate-900 max-w-xs">
          <div>${p.name}</div>
          <div class="text-[10px] text-slate-400 font-normal">${p.categoryName}</div>
        </td>
        <td class="py-3 px-4 font-semibold text-slate-700">${p.brand}</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${p.badgeType === 'deal' ? 'bg-rose-50 text-deal-crimson' : 'bg-blue-50 text-sky-700'}">
            ${p.tag || "Offer"}
          </span>
        </td>
        <td class="py-3 px-4">
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${isOutOfStock ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}">
            <span class="w-1.5 h-1.5 rounded-full ${isOutOfStock ? 'bg-red-500' : 'bg-emerald-500'}"></span>
            ${p.status || "In Stock"}
          </span>
        </td>
        <td class="py-3 px-4 text-right space-x-1">
          <button onclick="editProductModal('${p.id}')" class="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 font-bold transition" title="Edit Product">
            ✏️ Edit
          </button>
          <button onclick="confirmDeleteProduct('${p.id}')" class="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold transition" title="Delete Product">
            🗑️ Delete
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function setupAdminProductSearch() {
  const input = document.getElementById("adminProductSearchInput");
  if (!input) return;
  input.addEventListener("input", (e) => {
    renderAdminProductsTable(e.target.value);
  });
}

// 12. ADD / EDIT PRODUCT MODAL
function openNewProductModal() {
  const modal = document.getElementById("adminEditProductModal");
  const form = document.getElementById("adminProductForm");
  const title = document.getElementById("adminProductModalTitle");
  if (!modal || !form) return;

  form.reset();
  document.getElementById("prodFormMode").value = "add";
  title.textContent = "Add New Electronics Product";

  // Auto-generate clean Product ID (e.g. DK-PRD-115)
  const products = getStoredProducts();
  const nextNum = 101 + products.length;
  document.getElementById("prodFormId").value = "DK-PRD-" + nextNum;

  modal.classList.add("active");
}

function editProductModal(productId) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("adminEditProductModal");
  const title = document.getElementById("adminProductModalTitle");
  if (!modal) return;

  title.textContent = `Edit Product: ${product.name}`;
  document.getElementById("prodFormMode").value = "edit";
  document.getElementById("prodFormId").value = product.id;
  document.getElementById("prodFormName").value = product.name;
  document.getElementById("prodFormCategory").value = product.category;
  document.getElementById("prodFormBrand").value = product.brand;
  document.getElementById("prodFormTag").value = product.tag || "Hot Deal";
  document.getElementById("prodFormStatus").value = product.status || "In Stock";
  document.getElementById("prodFormImg").value = product.img;
  document.getElementById("prodFormSpecs").value = (product.specs || []).join(", ");
  document.getElementById("prodFormEmi").value = product.emiText || "";
  document.getElementById("prodFormExchange").value = product.exchangeText || "";
  document.getElementById("prodFormWarranty").value = product.warranty || "";
  document.getElementById("prodFormDesc").value = product.description || "";

  modal.classList.add("active");
}

function closeAdminProductModal() {
  const modal = document.getElementById("adminEditProductModal");
  if (modal) modal.classList.remove("active");
}

function handleSaveProduct(e) {
  e.preventDefault();

  const mode = document.getElementById("prodFormMode").value;
  const id = document.getElementById("prodFormId").value.trim();
  const name = document.getElementById("prodFormName").value.trim();
  const category = document.getElementById("prodFormCategory").value;
  const brand = document.getElementById("prodFormBrand").value.trim();
  const tag = document.getElementById("prodFormTag").value.trim();
  const status = document.getElementById("prodFormStatus").value;
  let img = document.getElementById("prodFormImg").value.trim();
  const rawSpecs = document.getElementById("prodFormSpecs").value.trim();
  const emiText = document.getElementById("prodFormEmi").value.trim() || "0% EMI Available";
  const exchangeText = document.getElementById("prodFormExchange").value.trim() || "Old Device Trade-In Available";
  const warranty = document.getElementById("prodFormWarranty").value.trim() || "1 Year Manufacturer";
  const description = document.getElementById("prodFormDesc").value.trim();

  if (!img) {
    img = "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=700&q=80";
  }

  // Category name mapping
  const categoryNames = {
    "mobiles-laptops": "Smartphones & Laptops",
    "smartwatches-audio": "Smartwatches & Audio",
    "tv": "Smart LED & 4K TVs",
    "ac-fridge": "AC & Refrigerators",
    "washing-machines": "Washing Machines",
    "inverters-kitchen": "Inverters & Kitchen"
  };

  const specsArray = rawSpecs.split(",").map(s => s.trim()).filter(Boolean);

  const productObj = {
    id,
    name,
    category,
    categoryName: categoryNames[category] || "Electronics",
    brand,
    tag: tag || "Hot Deal",
    badgeType: "deal",
    status,
    img,
    specs: specsArray.length ? specsArray : ["Official Manufacturer Warranty", "Live Hands-On Demo", "Instant EMI Available"],
    emiText,
    exchangeText,
    warranty,
    description: description || `Original ${brand} ${name} available at DK Electronics Anpara showroom with full warranty and live hands-on demo.`
  };

  let products = getStoredProducts();

  if (mode === "add") {
    // Check if ID already exists
    if (products.some(p => p.id === id)) {
      showToast("⚠️ Product ID already exists! Please use a unique ID.");
      return;
    }
    products.unshift(productObj);
    showToast(`✅ Product "${name}" added to Megastore!`);
  } else {
    // Edit existing
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = productObj;
      showToast(`✅ Product "${id}" updated successfully!`);
    }
  }

  saveStoredProducts(products);
  closeAdminProductModal();
  renderAdminProductsTable();
  updateAdminMetrics();
}

function confirmDeleteProduct(productId) {
  if (confirm(`Are you sure you want to delete product "${productId}" from DK Electronics?`)) {
    let products = getStoredProducts();
    products = products.filter(p => p.id !== productId);
    saveStoredProducts(products);
    showToast(`🗑️ Product ${productId} deleted.`);
    renderAdminProductsTable();
    updateAdminMetrics();
  }
}

// 13. ADMIN SERVICE TICKETS VIEW
function renderAdminServiceTickets() {
  const container = document.getElementById("adminServiceTicketsList");
  if (!container) return;

  const tickets = getStoredServiceTickets();

  if (tickets.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 py-8 text-center">No service booking tickets received yet.</p>`;
    return;
  }

  container.innerHTML = tickets.map(t => `
    <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div class="flex items-center gap-2">
          <span class="font-mono font-bold text-sm text-brand-navy bg-slate-100 px-2.5 py-1 rounded">#${t.ticketId}</span>
          <span class="text-xs font-bold text-slate-800">${t.device}</span>
        </div>
        <div class="flex items-center gap-2 text-xs">
          <span class="text-slate-400">${t.timestamp}</span>
          <span class="px-2.5 py-0.5 rounded-full font-bold text-[11px] ${t.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}">
            ${t.status || 'New'}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div>
          <span class="text-slate-400 block text-[10px] uppercase font-bold">Customer</span>
          <strong class="text-slate-800">${t.customerName}</strong>
        </div>
        <div>
          <span class="text-slate-400 block text-[10px] uppercase font-bold">Mobile</span>
          <strong class="text-slate-800">${t.mobile}</strong>
        </div>
        <div>
          <span class="text-slate-400 block text-[10px] uppercase font-bold">Colony / Area</span>
          <span class="text-slate-700">${t.area}</span>
        </div>
        <div>
          <span class="text-slate-400 block text-[10px] uppercase font-bold">Service Required</span>
          <span class="text-slate-700 font-medium">${t.issueType}</span>
        </div>
      </div>

      ${t.notes ? `<p class="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 italic">Notes: "${t.notes}"</p>` : ''}

      <div class="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100">
        <div class="flex items-center gap-2">
          <a href="tel:${t.mobile}" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1">
            📞 Call Customer
          </a>
          <a href="https://wa.me/91${t.mobile.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${t.customerName}, regarding your DK Electronics service ticket #${t.ticketId} for ${t.device}: our technician is on the way.`)}" target="_blank" class="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center gap-1">
            💬 WhatsApp
          </a>
        </div>
        <div>
          <button onclick="toggleTicketStatus('${t.ticketId}')" class="px-3 py-1.5 rounded-lg text-xs font-bold ${t.status === 'Completed' ? 'bg-slate-100 text-slate-600' : 'bg-emerald-600 text-white hover:bg-emerald-700'} transition">
            ${t.status === 'Completed' ? '✓ Completed' : 'Mark as Completed'}
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function toggleTicketStatus(ticketId) {
  let tickets = getStoredServiceTickets();
  const ticket = tickets.find(t => t.ticketId === ticketId);
  if (ticket) {
    ticket.status = ticket.status === "Completed" ? "In Progress" : "Completed";
    saveStoredServiceTickets(tickets);
    renderAdminServiceTickets();
    updateAdminMetrics();
    showToast(`Updated Ticket #${ticketId} status to "${ticket.status}"`);
  }
}

// 14. ADMIN WHATSAPP INQUIRY LEADS
function renderAdminInquiryLeads() {
  const container = document.getElementById("adminInquiryLeadsList");
  if (!container) return;

  const leads = getStoredInquiryLeads();

  if (leads.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 py-8 text-center">No customer inquiry leads logged yet.</p>`;
    return;
  }

  container.innerHTML = leads.map(l => `
    <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-3 text-xs">
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
          💬
        </span>
        <div>
          <h5 class="font-bold text-slate-900">${l.productName}</h5>
          <span class="text-[11px] text-slate-500">${l.category} • ${l.type}</span>
        </div>
      </div>
      <div class="text-right">
        <span class="text-[10px] text-slate-400 block">${l.timestamp}</span>
        <span class="inline-block mt-0.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">WhatsApp Dispatched</span>
      </div>
    </div>
  `).join("");
}

// 15. SHOWROOM SETTINGS & RESET CATALOG
function populateSettingsForm() {
  const cfg = getStoreConfig();
  const waInput = document.getElementById("settingsWaNumber");
  const phoneInput = document.getElementById("settingsPhone");
  const hoursInput = document.getElementById("settingsHours");
  const addrInput = document.getElementById("settingsAddress");

  if (waInput) waInput.value = cfg.whatsappNumber;
  if (phoneInput) phoneInput.value = cfg.displayPhone;
  if (hoursInput) hoursInput.value = cfg.hours;
  if (addrInput) addrInput.value = cfg.address;
}

function handleSaveSettings(e) {
  e.preventDefault();
  let wa = document.getElementById("settingsWaNumber").value.replace(/\D/g, "");
  if (wa.length === 10) wa = "91" + wa;
  const phone = document.getElementById("settingsPhone").value.trim();
  const hours = document.getElementById("settingsHours").value.trim();
  const addr = document.getElementById("settingsAddress").value.trim();

  const cfg = {
    ...getStoreConfig(),
    whatsappNumber: wa || "919999999999",
    displayPhone: phone || "+91 99999 99999",
    hours: hours || "9:00 AM – 9:00 PM (All 7 Days)",
    address: addr
  };

  saveStoreConfig(cfg);
  showToast("✅ Store configuration saved successfully!");
  checkStoreStatus();
}

function resetShowroomCatalog() {
  if (confirm("Are you sure you want to reset all products back to the original 14 flagship showroom items? Any custom products will be overwritten.")) {
    localStorage.removeItem("dk_products_v2");
    getStoredProducts();
    renderAdminProductsTable();
    updateAdminMetrics();
    showToast("✅ Catalog restored to default 14 flagship showroom items!");
  }
}

// 16. INIT ON DOM LOAD
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  setupFilterTabs();
  setupSearch();
  setupServiceForm();
  setupNavbarScroll();
  setupEMICalculator();
  checkStoreStatus();
  setupAdminProductSearch();

  const productForm = document.getElementById("adminProductForm");
  if (productForm) {
    productForm.addEventListener("submit", handleSaveProduct);
  }

  const settingsForm = document.getElementById("adminSettingsForm");
  if (settingsForm) {
    settingsForm.addEventListener("submit", handleSaveSettings);
  }
});
