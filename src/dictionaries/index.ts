export type Language = "en" | "hi";

export interface Dictionary {
  nav: {
    home: string;
    products: string;
    brands: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    headline: string;
    description: string;
    ctaExplore: string;
    ctaWhatsapp: string;
    ctaCall: string;
    trustGenuineness: string;
    trustEmi: string;
    trustHours: string;
    facadeTitle: string;
    facadeSubtitle: string;
    zone1: string;
    zone1Badge: string;
    zone2: string;
    zone2Badge: string;
    zone3: string;
    zone3Badge: string;
  };
  categories: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAll: string;
    inShowroom: string;
    smartphones: string;
    smartphonesDesc: string;
    laptops: string;
    laptopsDesc: string;
    tvs: string;
    tvsDesc: string;
    refrigerators: string;
    refrigeratorsDesc: string;
    washingMachines: string;
    washingMachinesDesc: string;
    airConditioners: string;
    airConditionersDesc: string;
    audio: string;
    audioDesc: string;
    microwaves: string;
    microwavesDesc: string;
  };
  featured: {
    kicker: string;
    title: string;
    subtitle: string;
    showroomDeal: string;
    bestPrice: string;
    emiPrefix: string;
    warrantyBadge: string;
    inquireBtn: string;
    viewCatalog: string;
  };
  brands: {
    kicker: string;
    title: string;
    subtitle: string;
    authorizedTag: string;
    exploreBrandModels: string;
    disclaimer: string;
    genuineTag: string;
  };
  emiSection: {
    kicker: string;
    title: string;
    subtitle: string;
    calculatorTitle: string;
    priceLabel: string;
    downPaymentLabel: string;
    loanAmountLabel: string;
    tenureLabel: string;
    months: string;
    estimatedEmi: string;
    perMonth: string;
    principalFinanced: string;
    tenurePeriod: string;
    interestScheme: string;
    zeroInterest: string;
    partnerNote: string;
    ctaWhatsapp: string;
    zeroDownPayment: string;
    indicativeDisclaimer: string;
    noGuaranteeNotice: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    installationTitle: string;
    installationDesc: string;
    installationBadge: string;
    emiTitle: string;
    emiDesc: string;
    emiBadge: string;
    deliveryTitle: string;
    deliveryDesc: string;
    deliveryBadge: string;
    warrantyTitle: string;
    warrantyDesc: string;
    warrantyBadge: string;
    consultBtn: string;
    enquireServiceBtn: string;
    needAssistance: string;
    assistanceDesc: string;
    booking: {
      badge: string;
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      deviceTypeLabel: string;
      problemLabel: string;
      problemPlaceholder: string;
      locationLabel: string;
      locationPlaceholder: string;
      submitWhatsAppBtn: string;
      submitDirectBtn: string;
      successTitle: string;
      successDesc: string;
      demoNotice: string;
      resetBtn: string;
      devices: {
        mobile: string;
        laptop: string;
        tv: string;
        ac: string;
        refrigerator: string;
        washingMachine: string;
      };
      errors: {
        nameRequired: string;
        phoneRequired: string;
        phoneInvalid: string;
        deviceRequired: string;
        problemRequired: string;
        locationRequired: string;
      };
    };
  };
  whyChoose: {
    kicker: string;
    title: string;
    subtitle: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    point4Title: string;
    point4Desc: string;
  };
  reviews: {
    kicker: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    review1Name: string;
    review1Text: string;
    review1Product: string;
    review2Name: string;
    review2Text: string;
    review2Product: string;
    review3Name: string;
    review3Text: string;
    review3Product: string;
  };
  location: {
    kicker: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    addressVal: string;
    addressNotice: string;
    hoursLabel: string;
    hoursVal: string;
    parkingLabel: string;
    parkingVal: string;
    getDirections: string;
    showroomCardTitle: string;
    showroomCardDesc: string;
    showroomStatus: string;
    showroomStatusVal: string;
    helpline: string;
    parkingAvail: string;
    parkingAvailVal: string;
    askLocationWhatsapp: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    categoryLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    resetBtn: string;
    contactOptionsTitle: string;
    callNowTitle: string;
    callNowDesc: string;
    whatsappTitle: string;
    whatsappDesc: string;
    getDirectionsTitle: string;
    getDirectionsDesc: string;
    contactFormTitle: string;
    contactFormDesc: string;
    demoBackendNotice: string;
    unconfiguredPhoneNotice: string;
    errors: {
      nameRequired: string;
      phoneRequired: string;
      phoneInvalid: string;
      categoryRequired: string;
      messageRequired: string;
    };
  };
  catalog: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    allBrands: string;
    brandLabel: string;
    featuredDeals: string;
    inStockDemo: string;
    showingResults: string;
    resultsSuffix: string;
    showroomAssurance: string;
    noResultsTitle: string;
    noResultsDesc: string;
    clearFiltersBtn: string;
    resetBtn: string;
    modelPrefix: string;
    showroomOffer: string;
    bestPriceOnEnquiry: string;
    emiStarts: string;
    demoPricingDisclaimer: string;
    viewDetails: string;
    enquireOffer: string;
    compare: string;
    added: string;
    brandDisclaimerNotice: string;
    brandDisclaimerText: string;
    stockStatus: {
      inShowroom: string;
      limited: string;
      onOrder: string;
    };
  };
  productDetail: {
    breadcrumbHome: string;
    breadcrumbProducts: string;
    demoSpecificationNotice: string;
    liveDemoAvailable: string;
    showroomAdvantageTitle: string;
    showroomAdvantageText: string;
    showroomOfferTitle: string;
    easyEmiStartsTitle: string;
    getBestOfferBtn: string;
    callShowroomBtn: string;
    keySpecsTitle: string;
    detailedSpecsTitle: string;
    colorOptionsLabel: string;
    tabs: {
      specs: string;
      emi: string;
      warranty: string;
    };
    financingTitle: string;
    financingDesc: string;
    sixMonths: string;
    twelveMonths: string;
    twentyFourMonths: string;
    perMonthUnit: string;
    warrantyCoverage1: string;
    warrantyCoverage2: string;
    warrantyCoverage3: string;
    notFoundTitle: string;
    notFoundDesc: string;
    backToCatalog: string;
  };
  comparison: {
    matrixTitle: string;
    itemsCountSuffix: string;
    clearAll: string;
    attributesLabel: string;
    categoryLabel: string;
    priceLabel: string;
    emiLabel: string;
    warrantyLabel: string;
    stockLabel: string;
    highlightsLabel: string;
    directEnquiryLabel: string;
    enquireDealBtn: string;
    disclaimer: string;
    floatingSelectedText: string;
    floatingClear: string;
    floatingCompareNow: string;
    maxComparisonAlert: string;
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  about: {
    kicker: string;
    title: string;
    subtitle: string;
    heritageNoticeTitle: string;
    heritageNoticeDesc: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  admin: {
    portalBadge: string;
    dashboardTitle: string;
    dashboardSubtitle: string;
    totalEnquiries: string;
    newLeadsToday: string;
    activeCatalogItems: string;
    lowStockAlert: string;
    pendingServiceTickets: string;
    monthlyPipelineValue: string;
    inboxTitle: string;
    catalogTitle: string;
    customerColumn: string;
    contactColumn: string;
    productColumn: string;
    typeColumn: string;
    statusColumn: string;
    actionColumn: string;
    statusNew: string;
    statusContacted: string;
    statusConverted: string;
    priceVisibilityLabel: string;
    stockToggleLabel: string;
    logoutBtn: string;
    previewBannerTitle: string;
    previewBannerDesc: string;
    roleOwner: string;
    roleManager: string;
    tabs: {
      overview: string;
      products: string;
      addProduct: string;
      priceStock: string;
      categories: string;
      brands: string;
      enquiries: string;
      services: string;
      offers: string;
      analytics: string;
      backend: string;
    };
    login: {
      title: string;
      subtitle: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      enterBtn: string;
      securityTitle: string;
      securityDesc: string;
      roleSelectLabel: string;
    };
    productActions: {
      addNew: string;
      edit: string;
      delete: string;
      uploadImage: string;
      updatePrice: string;
      save: string;
      cancel: string;
      deleteConfirmTitle: string;
      deleteConfirmDesc: string;
      successAdd: string;
      successEdit: string;
      successDelete: string;
    };
    serviceDesk: {
      title: string;
      subtitle: string;
      ticketId: string;
      device: string;
      customer: string;
      problem: string;
      location: string;
      statusScheduled: string;
      statusInspection: string;
      statusParts: string;
      statusCompleted: string;
    };
    offers: {
      title: string;
      subtitle: string;
      createOffer: string;
      offerTitle: string;
      badgeText: string;
      discountText: string;
      validUntil: string;
      active: string;
      expired: string;
    };
    analytics: {
      title: string;
      subtitle: string;
      byCategory: string;
      byChannel: string;
      funnel: string;
      brandShare: string;
    };
    backendGuide: {
      title: string;
      subtitle: string;
      recommendationTitle: string;
      recommendationDesc: string;
      supabaseTitle: string;
      firebaseTitle: string;
      securityModelTitle: string;
      securityModelDesc: string;
      setupChecklistTitle: string;
    };
  };
  actions: {
    callNow: string;
    whatsappEnquiry: string;
    bookVisit: string;
    viewCatalog: string;
    getBestOffer: string;
    contactUs: string;
    searchPlaceholder: string;
    changeLanguage: string;
  };
  common: {
    showroom: string;
    authorizedDealer: string;
    heritageBadge: string;
    phonePlaceholder: string;
    hours: string;
    workingHoursVal: string;
    address: string;
    addressVal: string;
    quickLinks: string;
    categories: string;
    customerSupport: string;
    allRightsReserved: string;
    bilingualNotice: string;
    openAll7Days: string;
  };
  footer: {
    tagline: string;
    aboutText: string;
    disclaimer: string;
  };
}

export const enDictionary: Dictionary = {
  nav: {
    home: "Home",
    products: "Products",
    brands: "Brands",
    services: "Services",
    about: "About Us",
    contact: "Contact",
  },
  hero: {
    badge: "Established 1996 • Showroom Heritage [Verification Pending]",
    headline: "28 Years of Trust. Everything in Technology.",
    description:
      "Discover smartphones, laptops, smart TVs and home appliances at DK Electronics. Explore leading brands and connect directly with our showroom.",
    ctaExplore: "Explore Products",
    ctaWhatsapp: "Contact on WhatsApp",
    ctaCall: "Call Showroom",
    trustGenuineness: "100% Genuine Authorized Products",
    trustEmi: "Flexible 0% EMI Schemes",
    trustHours: "Mon - Sun: 10:30 AM - 9:00 PM",
    facadeTitle: "Physical Showroom Facade",
    facadeSubtitle: "[ Architectural Storefront Signboard Simulation ]",
    zone1: "Smartphones & Laptops Experience Zone",
    zone1Badge: "Live Demos",
    zone2: "OLED & 4K Television Audio Wall",
    zone2Badge: "Dolby Atmos",
    zone3: "On-the-spot Paperless 0% EMI Desk",
    zone3Badge: "10-Min Approval",
  },
  categories: {
    kicker: "Explore by Category",
    title: "Everything in Consumer Technology",
    subtitle:
      "From flagship smartphones and laptops to high-end 4K OLED televisions and inverter appliances.",
    viewAll: "View All Products",
    inShowroom: "In Showroom",
    smartphones: "Smartphones",
    smartphonesDesc:
      "Latest 5G flagship & mid-range devices from Apple, Samsung, and vivo.",
    laptops: "Laptops & Computing",
    laptopsDesc:
      "Performance notebooks for productivity, coding, and creative work.",
    tvs: "Smart TVs & OLED",
    tvsDesc:
      "4K Ultra HD, QLED, and OLED cinematic screens with Dolby Atmos.",
    refrigerators: "Refrigerators",
    refrigeratorsDesc:
      "Energy-efficient frost-free, double door, and side-by-side models.",
    washingMachines: "Washing Machines",
    washingMachinesDesc:
      "Smart AI inverter front and top load automatic washing machines.",
    airConditioners: "Air Conditioners",
    airConditionersDesc:
      "5-Star dual inverter split ACs with rapid cooling and copper condensers.",
    audio: "Audio & Soundbars",
    audioDesc:
      "Immersive home theatre audio, soundbars, and party speakers.",
    microwaves: "Home Appliances & Microwaves",
    microwavesDesc:
      "Convection, grill, and solo ovens for fast, healthy home cooking.",
  },
  featured: {
    kicker: "Showroom Highlights",
    title: "Handpicked Premium Electronics",
    subtitle:
      "Experience live demos of our most sought-after models at competitive showroom prices.",
    showroomDeal: "Showroom Offer",
    bestPrice: "Best Price on Enquiry",
    emiPrefix: "EMI starts from",
    warrantyBadge: "Official Warranty",
    inquireBtn: "Get Best Offer",
    viewCatalog: "Explore Complete Catalog",
  },
  brands: {
    kicker: "Official Partnerships",
    title: "Authorized Multi-Brand Dealership",
    subtitle:
      "Every product is sourced directly through brand-authorized channels with complete invoice protection.",
    authorizedTag: "Authorized Partner",
    exploreBrandModels: "Explore Brand Models",
    disclaimer:
      "Brand names and trademarks displayed are property of their respective owners and used here as visual showroom references.",
    genuineTag: "100% Genuine Authorized Products with Valid Serial Numbers",
  },
  emiSection: {
    kicker: "Hassle-Free Financing",
    title: "Easy 0% Interest EMI Plans",
    subtitle:
      "Calculate your estimated monthly installment and receive pre-approval directly through our showroom team.",
    calculatorTitle: "Interactive Showroom EMI Calculator",
    priceLabel: "Product Price / Loan Amount",
    downPaymentLabel: "Down Payment",
    loanAmountLabel: "Loan Amount Financed",
    tenureLabel: "Repayment Tenure",
    months: "Months",
    estimatedEmi: "Estimated Showroom EMI",
    perMonth: "per month",
    principalFinanced: "Principal Financed",
    tenurePeriod: "Tenure Period",
    interestScheme: "Processing / Interest",
    zeroInterest: "0% Showroom Scheme",
    partnerNote:
      "Zero down payment schemes available via non-banking financial partners & major credit cards.",
    ctaWhatsapp: "Apply for EMI on WhatsApp",
    zeroDownPayment: "Zero Down Payment",
    indicativeDisclaimer:
      "*Calculations shown are indicative estimates for showroom presentation. Actual interest rates, processing fees, and loan approval are subject to financier terms and documentation.",
    noGuaranteeNotice:
      "DK Electronics does not invent or guarantee loan approvals. All finance facilities are subject to customer credit profile verification by authorized financing partners.",
  },
  services: {
    kicker: "Post-Sales Care",
    title: "Complete Showroom Services & Support",
    subtitle:
      "We stand behind every appliance we sell with certified technical support and professional handling.",
    installationTitle: "Authorized Wall-Mounting & Setup",
    installationDesc:
      "Brand-certified technicians ensure secure wall-bracket fitting, cable management, and device pairing.",
    installationBadge: "Expert Technicians",
    emiTitle: "Instant Paperless Financing",
    emiDesc:
      "Fast on-the-spot document verification with transparent zero-percent interest schemes.",
    emiBadge: "Zero Down Payment*",
    deliveryTitle: "Express Doorstep Delivery",
    deliveryDesc:
      "Careful unboxing and transit inspection directly from our warehouse to your living room.",
    deliveryBadge: "Same Day / Next Day",
    warrantyTitle: "Extended Protection Plans",
    warrantyDesc:
      "Comprehensive safeguard against voltage surges, panel issues, and operational wear.",
    warrantyBadge: "Up to 5 Years Cover",
    consultBtn: "Enquire for Services",
    enquireServiceBtn: "Enquire for This Service",
    needAssistance: "Need Immediate Showroom Assistance?",
    assistanceDesc:
      "Speak directly with our dedicated showroom support team or drop us a WhatsApp message.",
    booking: {
      badge: "Authorized Multi-Device Service Desk",
      title: "Book Repair & Technical Service",
      subtitle:
        "Request certified in-home inspection or showroom drop-off for home appliances and personal electronics.",
      nameLabel: "Customer Name *",
      namePlaceholder: "e.g. Ramesh Kumar",
      phoneLabel: "Mobile Number (WhatsApp) *",
      phonePlaceholder: "+91 98XXX XXXXX",
      deviceTypeLabel: "Device / Appliance Type *",
      problemLabel: "Problem Description *",
      problemPlaceholder: "e.g. Display flickering / AC not cooling / Water leakage...",
      locationLabel: "Customer Location / Area *",
      locationPlaceholder: "e.g. Sector 14, Commercial Market",
      submitWhatsAppBtn: "Book Service via WhatsApp",
      submitDirectBtn: "Submit Service Request (Demo)",
      successTitle: "Service Request Prepared!",
      successDesc:
        "Your repair enquiry has been formatted and ready to connect with our showroom technician.",
      demoNotice:
        "Sales Demo Notice: In this sales presentation, enquiries are routed directly via WhatsApp or Phone call. Enquiries are not saved to an external database until a production backend is connected.",
      resetBtn: "Book Another Service",
      devices: {
        mobile: "Mobile / Smartphones",
        laptop: "Laptop & Computers",
        tv: "Smart TV & OLED",
        ac: "Air Conditioner (AC)",
        refrigerator: "Refrigerator",
        washingMachine: "Washing Machine",
      },
      errors: {
        nameRequired: "Please enter customer full name.",
        phoneRequired: "Please enter mobile number.",
        phoneInvalid: "Please enter a valid 10-digit mobile number.",
        deviceRequired: "Please select a device type.",
        problemRequired: "Please describe the problem or issue encountered.",
        locationRequired: "Please enter your location or address area.",
      },
    },
  },
  whyChoose: {
    kicker: "The Showroom Advantage",
    title: "Why DK Electronics Over Anonymous Online Portals?",
    subtitle:
      "28 years of building relationships in our community with transparent advice and genuine stock.",
    point1Title: "28 Years of Trust",
    point1Desc:
      "A real showroom you can walk into anytime with questions, issues, or replacement requests [Verification Pending].",
    point2Title: "Face-to-Face Demonstrations",
    point2Desc:
      "See the picture quality, feel the build, and hear the sound in person before you invest your hard-earned money.",
    point3Title: "100% Genuine Indian Stock",
    point3Desc:
      "Never risk refurbished or grey-market goods. Every product includes valid serials and direct manufacturer backing.",
    point4Title: "Personalized Showroom Deals",
    point4Desc:
      "Competitive pricing that matches online promotions, combined with customized combo savings and free gifts.",
  },
  reviews: {
    kicker: "Customer Feedback",
    title: "Experiences from Showroom Visitors",
    subtitle:
      "Read feedback from verified showroom customers who chose local trust over online uncertainty.",
    disclaimer:
      "Reflecting genuine in-store customer experiences and verified showroom reviews.",
    review1Name: "Vikram Malhotra",
    review1Text:
      "Purchased a 55-inch Sony Bravia TV. The showroom team spent 45 minutes comparing OLED vs QLED panels with me. Express installation was completed the very next afternoon. Superb service!",
    review1Product: "Verified Buyer • Sony Bravia 4K TV",
    review2Name: "Sunita Agarwal",
    review2Text:
      "Got our Daikin Inverter AC on a zero down-payment Bajaj EMI scheme. The paperwork took barely 10 minutes. It's so reassuring having an established store right in the neighborhood.",
    review2Product: "Verified Buyer • Daikin 1.5T Inverter AC",
    review3Name: "Rahul Verma",
    review3Text:
      "Bought both an LG washing machine and a Samsung double door refrigerator for our new apartment. DK Electronics gave us a better combo package deal than any online marketplace.",
    review3Product: "Verified Buyer • LG & Samsung Combo",
  },
  location: {
    kicker: "Showroom Visit",
    title: "Visit Our Showroom in Person",
    subtitle:
      "Experience all products first-hand. Our showroom executives are ready to assist you.",
    addressLabel: "Showroom Address",
    addressVal: "Main Market, Anpara, Sonbhadra District, Uttar Pradesh 231225",
    addressNotice: "[Showroom Storefront Location in Anpara • Exact Address Subject to Owner Verification]",
    hoursLabel: "Working Hours",
    hoursVal: "Monday to Sunday: 10:30 AM - 9:00 PM (Open 7 Days)",
    parkingLabel: "Customer Amenities",
    parkingVal:
      "Dedicated customer parking & live product demonstration zones.",
    getDirections: "Get Directions on Google Maps",
    showroomCardTitle: "DK Electronics Showroom",
    showroomCardDesc:
      "Conveniently situated in the central electronics retail market with ample customer parking and street access.",
    showroomStatus: "Showroom Status",
    showroomStatusVal: "Open Today (10:30 AM - 9:00 PM)",
    helpline: "Showroom Helpline",
    parkingAvail: "Customer Parking",
    parkingAvailVal: "Available in Front",
    askLocationWhatsapp: "Ask for Location on WhatsApp",
  },
  contact: {
    kicker: "Get in Touch",
    title: "Connect with Our Showroom Team",
    subtitle:
      "Have a question about a specific model, stock availability, or current promotions? We are here to help.",
    infoTitle: "Showroom Information",
    formTitle: "Book Showroom VIP Demo",
    formSubtitle:
      "Schedule a personalized product walkthrough with our senior technicians.",
    nameLabel: "Your Full Name *",
    namePlaceholder: "e.g. Ramesh Kumar",
    phoneLabel: "Mobile Number (WhatsApp) *",
    categoryLabel: "Product Category of Interest *",
    messageLabel: "Message or Specific Model *",
    messagePlaceholder:
      "e.g. Interested in 65-inch OLED TV deals and 0% EMI options...",
    submitBtn: "Book VIP Showroom Demo",
    successTitle: "Enquiry Received Successfully!",
    successDesc:
      "Our showroom team will connect with you on WhatsApp / Phone within 30 minutes.",
    resetBtn: "Submit Another Enquiry",
    contactOptionsTitle: "4 Ways to Connect with DK Electronics",
    callNowTitle: "Call Now",
    callNowDesc: "Direct telephone line to our showroom sales desk for quick stock checks.",
    whatsappTitle: "WhatsApp Chat",
    whatsappDesc: "Instant model specifications, price quotes, and showroom photo sharing.",
    getDirectionsTitle: "Get Directions",
    getDirectionsDesc: "Navigate directly to our central electronics showroom via Google Maps.",
    contactFormTitle: "In-Store VIP Demo Form",
    contactFormDesc: "Submit an inquiry to schedule hands-on testing with our product specialists.",
    demoBackendNotice: "Sales Demo Notice: In this sales demonstration, form submissions format your inquiry and simulate connection with our showroom team. Enquiries are not saved to an external database until a production backend is connected.",
    unconfiguredPhoneNotice: "[Placeholder Phone: +91 98XXX XXXXX — Will be connected to owner's official showroom number]",
    errors: {
      nameRequired: "Please enter your full name.",
      phoneRequired: "Please enter your mobile number.",
      phoneInvalid: "Please enter a valid 10-digit mobile number.",
      categoryRequired: "Please select a product category.",
      messageRequired: "Please enter a message or model inquiry.",
    },
  },
  catalog: {
    title: "Multi-Brand Electronics Catalog",
    subtitle:
      "Explore smartphones, laptops, 4K Smart TVs, air conditioners, refrigerators, washing machines, home appliances, and accessories with live showroom pricing on enquiry.",
    searchPlaceholder: "Search model name, brand, or specs...",
    allCategories: "All Categories",
    allBrands: "All Brands",
    brandLabel: "Brands:",
    featuredDeals: "Featured Deals",
    inStockDemo: "In Showroom [Demo]",
    showingResults: "Showing",
    resultsSuffix: "products available in catalog",
    showroomAssurance:
      "Experience all models in-person at DK Electronics showroom",
    noResultsTitle: "No Products Matched Your Search",
    noResultsDesc:
      "Try clearing filters or search for another model code, brand or category.",
    clearFiltersBtn: "Clear All Filters",
    resetBtn: "Reset",
    modelPrefix: "Model:",
    showroomOffer: "Showroom Offer",
    bestPriceOnEnquiry: "Best Price on Enquiry",
    emiStarts: "EMI Starts",
    demoPricingDisclaimer: "*Demo pricing for showroom presentation",
    viewDetails: "Details",
    enquireOffer: "Enquire",
    compare: "Compare",
    added: "Added",
    brandDisclaimerNotice: "Showroom Brand Reference Notice:",
    brandDisclaimerText:
      "Brands identified (Samsung, Apple, vivo, LG, Hyundai, Whirlpool, Canon) are visual references from the showroom storefront and not confirmation of active authorized dealership. Demo prices and stock are simulated for sales presentation purposes.",
    stockStatus: {
      inShowroom: "In Showroom [Demo]",
      limited: "Limited Stock [Demo]",
      onOrder: "Available on Order",
    },
  },
  productDetail: {
    breadcrumbHome: "Home",
    breadcrumbProducts: "Products",
    demoSpecificationNotice: "Demo Catalog Specification",
    liveDemoAvailable:
      "Available for live hands-on demonstration at DK Electronics",
    showroomAdvantageTitle: "Showroom Advantage",
    showroomAdvantageText:
      "Visit our showroom to see the picture quality and sound in person before purchasing.",
    showroomOfferTitle: "Showroom Demo Pricing",
    easyEmiStartsTitle: "Easy 0% EMI Starts From",
    getBestOfferBtn: "Get Showroom Best Offer on WhatsApp",
    callShowroomBtn: "Call Showroom",
    keySpecsTitle: "Key Specifications",
    detailedSpecsTitle: "Detailed Technical Specifications",
    colorOptionsLabel: "Color Options:",
    tabs: {
      specs: "Technical Specifications",
      emi: "Financing & EMI",
      warranty: "Warranty & Support",
    },
    financingTitle: "Showroom 0% Interest Financing Schemes",
    financingDesc:
      "Available on 3, 6, 9, 12, or 24-month zero-percent schemes via Bajaj Finserv, HDB Financial, IDFC First, and leading credit cards.",
    sixMonths: "6 Months",
    twelveMonths: "12 Months",
    twentyFourMonths: "24 Months",
    perMonthUnit: "/month",
    warrantyCoverage1:
      "100% Genuine Indian authorized stock with valid GST invoice",
    warrantyCoverage2:
      "Direct manufacturer service center warranty coverage across India",
    warrantyCoverage3:
      "Complimentary initial showroom setup and in-home demonstration assistance",
    notFoundTitle: "Product Not Found",
    notFoundDesc: "The requested model could not be located in our catalog.",
    backToCatalog: "Back to Product Catalog",
  },
  comparison: {
    matrixTitle: "Product Comparison Matrix",
    itemsCountSuffix: "Items",
    clearAll: "Clear All",
    attributesLabel: "Attributes",
    categoryLabel: "Category",
    priceLabel: "Showroom Demo Price",
    emiLabel: "0% Showroom EMI",
    warrantyLabel: "Manufacturer Warranty",
    stockLabel: "Stock Status [Demo]",
    highlightsLabel: "Key Highlights",
    directEnquiryLabel: "Direct Enquiry",
    enquireDealBtn: "Enquire Deal",
    disclaimer:
      "*Demo pricing and specifications are simulated for sales presentation purposes. Contact showroom directly for actual deals.",
    floatingSelectedText: "Products Selected for Comparison",
    floatingClear: "Clear",
    floatingCompareNow: "Compare Now",
    maxComparisonAlert: "You can compare up to 4 products at a time.",
  },
  faq: {
    kicker: "Frequently Asked Questions",
    title: "Common Questions About DK Electronics",
    subtitle:
      "Everything you need to know about our multi-brand products, warranty coverage, and showroom financing.",
    q1: "Are all electronics sold at DK Electronics 100% genuine?",
    a1: "Yes. Every television, refrigerator, smartphone, laptop, and appliance is sourced through authorized brand channels with genuine manufacturer warranties and official serial tracking.",
    q2: "How does the 0% EMI financing process work?",
    a2: "We offer instant paperless financing in-store through Bajaj Finserv, HDB Financial, IDFC First, and credit card EMIs. Approvals take approximately 10 to 15 minutes with minimal documentation.",
    q3: "Can I inspect and test the appliances before purchasing?",
    a3: "Absolutely. Our showroom features live demonstration zones for 4K OLED TVs, sound systems, smartphones, and laptops so you can test display quality, audio, and ergonomics in person.",
    q4: "Do you provide express doorstep delivery and wall mounting?",
    a4: "Yes. We arrange safe transportation directly from our showroom to your doorstep, accompanied by certified technicians for professional wall mounting and electrical setup.",
    q5: "How can I inquire about unlisted models or specific prices?",
    a5: "You can click any 'WhatsApp Enquiry' button on our website or call our showroom directly at +91 98XXX XXXXX. Our sales team will verify stock availability and provide our best showroom quote.",
  },
  about: {
    kicker: "Showroom Heritage",
    title: "About DK Electronics",
    subtitle:
      "A premier multi-brand electronics showroom built on trust, genuine manufacturer warranties, and dedicated local customer care.",
    heritageNoticeTitle: "Showroom Heritage Notice [Approx. 28 Years]",
    heritageNoticeDesc:
      "The showroom history spanning approximately 28 years (founded circa 1996) referenced across this sales demo is subject to final confirmation by the showroom owner prior to public launch.",
    storyTitle: "A Tradition of Trust and Genuine Products",
    storyP1:
      "Since its founding, DK Electronics has been an anchor in the local consumer electronics market. We pride ourselves on offering customers the rare combination of competitive showroom pricing and face-to-face consultation that online websites cannot match.",
    storyP2:
      "We believe in guiding every customer through product demonstrations, energy-saving calculations, and transparent financing terms so they make the right decision for their family.",
    pillar1Title: "100% Genuine Products",
    pillar1Desc:
      "Direct manufacturer warranties and official Indian stock on every product.",
    pillar2Title: "Expert Showroom Guidance",
    pillar2Desc:
      "Personalized live demos and tailored advice from experienced specialists.",
    pillar3Title: "Local Commitment",
    pillar3Desc:
      "Dedicated post-purchase assistance and prompt after-sales support.",
  },
  admin: {
    portalBadge: "Private Owner Portal",
    dashboardTitle: "Showroom Management Dashboard",
    dashboardSubtitle: "Monitor customer inquiries, manage catalog visibility, and update showroom settings.",
    totalEnquiries: "Total Inquiries",
    newLeadsToday: "New Leads Today",
    activeCatalogItems: "Active Catalog Items",
    lowStockAlert: "Low Stock Alert",
    pendingServiceTickets: "Pending Service Requests",
    monthlyPipelineValue: "Estimated Pipeline Value",
    inboxTitle: "Customer Inquiries Inbox",
    catalogTitle: "Showroom Catalog Manager",
    customerColumn: "Customer",
    contactColumn: "Contact Number",
    productColumn: "Product Interest",
    typeColumn: "Inquiry Type",
    statusColumn: "Status",
    actionColumn: "Actions",
    statusNew: "New",
    statusContacted: "Contacted",
    statusConverted: "Converted",
    priceVisibilityLabel: "Price Visibility",
    stockToggleLabel: "Stock Status",
    logoutBtn: "Sign Out",
    previewBannerTitle: "Non-Production Owner Preview Mode",
    previewBannerDesc:
      "Operating in simulated session memory. No production backend is connected. Data modifications will reset on full page reload. See the Backend Architecture Guide to connect Supabase or Firebase.",
    roleOwner: "Showroom Owner (Full Access)",
    roleManager: "Store Floor Manager",
    tabs: {
      overview: "Overview",
      products: "Products",
      addProduct: "Add Product",
      priceStock: "Prices & Stock",
      categories: "Categories",
      brands: "Brands",
      enquiries: "Customer Enquiries",
      services: "Service Bookings",
      offers: "Promotions & Offers",
      analytics: "Business Analytics",
      backend: "Backend Setup Guide",
    },
    login: {
      title: "DK Executive Owner Portal",
      subtitle:
        "Authorized showroom management console. Protected against unauthorized public access.",
      emailLabel: "Owner Email Address",
      emailPlaceholder: "owner@dkelectronics.com",
      passwordLabel: "Password / Access Token",
      passwordPlaceholder: "••••••••••••",
      enterBtn: "Enter Owner Preview Console",
      securityTitle: "Zero-Trust Security Architecture",
      securityDesc:
        "In production, authentication uses Supabase Auth / Firebase Auth with secure HTTP-only cookies, JWT verification, and Row Level Security (RLS). No hardcoded passwords or default PINs are exposed in client-side code.",
      roleSelectLabel: "Console Role (Preview Mode)",
    },
    productActions: {
      addNew: "Add New Product",
      edit: "Edit Details",
      delete: "Delete Product",
      uploadImage: "Upload Image",
      updatePrice: "Update Price",
      save: "Save Changes",
      cancel: "Cancel",
      deleteConfirmTitle: "Confirm Product Deletion",
      deleteConfirmDesc:
        "Are you sure you want to remove this model from the showroom catalog? This action will simulate removal from the live customer catalog.",
      successAdd: "New product model added to catalog!",
      successEdit: "Product specifications updated successfully!",
      successDelete: "Product successfully removed from catalog.",
    },
    serviceDesk: {
      title: "Technical Repair & Service Tickets",
      subtitle:
        "Track customer repair requests across smartphones, laptops, TVs, ACs, refrigerators, and washing machines.",
      ticketId: "Ticket ID",
      device: "Device Type",
      customer: "Customer & Phone",
      problem: "Reported Problem",
      location: "Location / Address",
      statusScheduled: "Scheduled",
      statusInspection: "In Inspection",
      statusParts: "Parts Ordered",
      statusCompleted: "Completed",
    },
    offers: {
      title: "Promotions & Festival Offers",
      subtitle:
        "Configure promotional discount badges, combo savings, and zero-percent finance deals for showroom displays.",
      createOffer: "Create Showroom Deal",
      offerTitle: "Offer Campaign Title",
      badgeText: "Visual Ribbon Badge",
      discountText: "Discount / Advantage",
      validUntil: "Validity Window",
      active: "Active",
      expired: "Expired",
    },
    analytics: {
      title: "Executive Business Analytics",
      subtitle:
        "Key operational metrics, lead volume by channel, and product category interest patterns.",
      byCategory: "Enquiries by Product Category",
      byChannel: "Lead Volume by Contact Channel",
      funnel: "Customer Conversion Funnel",
      brandShare: "Brand Inquiry Distribution",
    },
    backendGuide: {
      title: "Production Backend & Authentication Setup Guide",
      subtitle:
        "Architectural roadmap to graduate from this in-memory sales preview to a secure production backend.",
      recommendationTitle: "Primary Recommendation: Supabase (PostgreSQL)",
      recommendationDesc:
        "Supabase provides an open-source PostgreSQL database with built-in Auth, Row-Level Security (RLS), real-time WebSockets, and automatic REST/GraphQL endpoints hosted in Mumbai, India.",
      supabaseTitle: "Option A: Supabase Setup Requirements",
      firebaseTitle: "Option B: Firebase (Firestore + Auth)",
      securityModelTitle: "Production Security & Permission Model",
      securityModelDesc:
        "Authentication must enforce role-based access control (RBAC). Anonymous client users cannot write to products or read customer lead records.",
      setupChecklistTitle: "Deployment & Environment Checklist",
    },
  },
  actions: {
    callNow: "Call Showroom",
    whatsappEnquiry: "WhatsApp Enquiry",
    bookVisit: "Book Showroom Visit",
    viewCatalog: "Explore Catalog",
    getBestOffer: "Get Best Offer",
    contactUs: "Contact Showroom",
    searchPlaceholder: "Search products, models, or brands...",
    changeLanguage: "हिन्दी",
  },
  common: {
    showroom: "Multi-Brand Showroom",
    authorizedDealer: "100% Genuine Authorized Products",
    heritageBadge: "Serving Customers Since 1996 [~28 Years - Verification Pending]",
    phonePlaceholder: "+91 98XXX XXXXX",
    hours: "Showroom Hours",
    workingHoursVal: "Mon - Sun: 10:30 AM - 9:00 PM",
    address: "Showroom Location",
    addressVal: "Main Market, Anpara, Sonbhadra, UP 231225 (Storefront Verification)",
    quickLinks: "Quick Navigation",
    categories: "Showroom Categories",
    customerSupport: "Customer Assistance",
    allRightsReserved: "All Rights Reserved. Authorized Showroom Demo.",
    bilingualNotice: "Switch to हिन्दी for localized catalog details.",
    openAll7Days: "Open All 7 Days",
  },
  footer: {
    tagline: "Your Trusted Destination for Multi-Brand Home Electronics & Appliances.",
    aboutText:
      "DK Electronics brings the world's leading consumer electronic brands under one roof, backed by personalized showroom consultations, genuine manufacturer warranties, and flexible financing options.",
    disclaimer:
      "Showroom heritage (~28 years), brand authorizations, and contact numbers are provided as sales demo placeholders subject to showroom owner verification.",
  },
};

export const hiDictionary: Dictionary = {
  nav: {
    home: "होम",
    products: "उत्पाद",
    brands: "ब्रांड्स",
    services: "सेवाएं",
    about: "हमारे बारे में",
    contact: "संपर्क करें",
  },
  hero: {
    badge: "स्थापना 1996 • शोरूम विरासत [सत्यापन लंबित]",
    headline: "28 वर्षों का भरोसा। हर तकनीक एक जगह।",
    description:
      "DK Electronics पर स्मार्टफोन, लैपटॉप, स्मार्ट टीवी और घरेलू उपकरणों की जानकारी प्राप्त करें। प्रमुख ब्रांड्स देखें और सीधे हमारे शोरूम से संपर्क करें।",
    ctaExplore: "प्रोडक्ट देखें",
    ctaWhatsapp: "WhatsApp पर संपर्क करें",
    ctaCall: "कॉल करें",
    trustGenuineness: "100% असली व प्रमाणित उत्पाद",
    trustEmi: "आसान 0% ईएमआई योजनाएं",
    trustHours: "सोम - रवि: सुबह 10:30 से रात 9:00 तक",
    facadeTitle: "वास्तविक शोरूम मुखौटा (Facade)",
    facadeSubtitle: "[ वास्तुशिल्प स्टोरफ्रंट साइनबोर्ड सिमुलेशन ]",
    zone1: "स्मार्टफोन व लैपटॉप अनुभव केंद्र",
    zone1Badge: "लाइव डेमो",
    zone2: "OLED व 4K टेलीविजन ऑडियो वॉल",
    zone2Badge: "डॉल्बी एटमॉस",
    zone3: "तत्काल पेपरलेस 0% ईएमआई डेस्क",
    zone3Badge: "10 मिनट में स्वीकृति",
  },
  categories: {
    kicker: "श्रेणी अनुसार खोजें",
    title: "कंज्यूमर टेक्नोलॉजी की संपूर्ण रेंज",
    subtitle:
      "फ्लैगशिप स्मार्टफोन व लैपटॉप से लेकर प्रीमियम 4K OLED टीवी और इन्वर्टर घरेलू उपकरण।",
    viewAll: "सभी उत्पाद देखें",
    inShowroom: "शोरूम में उपलब्ध",
    smartphones: "स्मार्टफोन (Smartphones)",
    smartphonesDesc:
      "एप्पल, सैमसंग और विवो के नवीनतम 5G फ्लैगशिप डिवाइस।",
    laptops: "लैपटॉप व कंप्यूटिंग",
    laptopsDesc:
      "उत्पादकता, कोडिंग और रचनात्मक कार्यों हेतु उच्च प्रदर्शन लैपटॉप।",
    tvs: "स्मार्ट टीवी व OLED",
    tvsDesc:
      "4K अल्ट्रा एचडी, QLED एवं OLED सिनेमाई स्क्रीन डॉल्बी एटमॉस के साथ।",
    refrigerators: "रेफ्रिजरेटर (Refrigerators)",
    refrigeratorsDesc:
      "ऊर्जा-कुशल फ्रॉस्ट-फ्री, डबल डोर व साइड-बाय-साइड मॉडल।",
    washingMachines: "वाशिंग मशीन",
    washingMachinesDesc:
      "स्मार्ट AI इन्वर्टर फ्रंट व टॉप लोड स्वचालित वाशिंग मशीन।",
    airConditioners: "एयर कंडीशनर (ACs)",
    airConditionersDesc:
      "5-स्टार डुअल इन्वर्टर स्प्लिट एसी त्वरित कूलिंग व कॉपर कंडेनसर सहित।",
    audio: "ऑडियो व साउंडबार",
    audioDesc:
      "सिनेमाई होम थिएटर ऑडियो, साउंडबार और पार्टी स्पीकर्स।",
    microwaves: "घरेलू उपकरण व माइक्रोवेव",
    microwavesDesc:
      "कन्वेक्शन, ग्रिल और सोलो ओवन त्वरित व स्वस्थ कुकिंग हेतु।",
  },
  featured: {
    kicker: "शोरूम की खास पसंद",
    title: "प्रीमियम इलेक्ट्रॉनिक्स के शीर्ष मॉडल",
    subtitle:
      "हमारे शोरूम में लाइव डेमो देखें और ऑनलाइन से बेहतर व्यक्तिगत ऑफर प्राप्त करें।",
    showroomDeal: "शोरूम स्पेशल",
    bestPrice: "पूछताछ पर सर्वश्रेष्ठ दर",
    emiPrefix: "ईएमआई शुरू मात्र",
    warrantyBadge: "आधिकारिक वारंटी",
    inquireBtn: "सर्वश्रेष्ठ ऑफर पाएं",
    viewCatalog: "पूरा कैटलॉग देखें",
  },
  brands: {
    kicker: "अधिकृत साझेदारी",
    title: "आधिकारिक मल्टी-ब्रांड डीलरशिप",
    subtitle:
      "प्रत्येक उत्पाद सीधे कंपनी अधिकृत स्रोतों से प्राप्त होता है, 100% पक्के बिल के साथ।",
    authorizedTag: "अधिकृत पार्टनर",
    exploreBrandModels: "ब्रांड मॉडल देखें",
    disclaimer:
      "प्रदर्शित ब्रांड नाम और ट्रेडमार्क उनके संबंधित स्वामियों की संपत्ति हैं और यहां केवल दृश्य संदर्भ के रूप में उपयोग किए गए हैं।",
    genuineTag: "मान्य सीरियल नंबर सहित 100% असली अधिकृत उत्पाद",
  },
  emiSection: {
    kicker: "सुगम फाइनेंस सुविधा",
    title: "आसान 0% ब्याज ईएमआई योजनाएं",
    subtitle:
      "अपनी अनुमानित मासिक किस्त की गणना करें और सीधे हमारे शोरूम से पेपरलेस प्री-अप्रूवल प्राप्त करें।",
    calculatorTitle: "इंटरएक्टिव शोरूम ईएमआई कैलकुलेटर",
    priceLabel: "उत्पाद मूल्य / ऋण राशि",
    downPaymentLabel: "डाउन पेमेंट",
    loanAmountLabel: "ऋण राशि (Loan Amount)",
    tenureLabel: "किस्त अवधि (महीने)",
    months: "महीने",
    estimatedEmi: "अनुमानित मासिक ईएमआई",
    perMonth: "प्रति माह",
    principalFinanced: "मूल ऋण राशि",
    tenurePeriod: "किस्त अवधि",
    interestScheme: "प्रोसेसिंग / ब्याज",
    zeroInterest: "0% शोरूम योजना",
    partnerNote:
      "ज़ीरो डाउन पेमेंट सुविधाएं अधिकृत गैर-बैंकिंग वित्तीय पार्टनर्स व प्रमुख क्रेडिट कार्ड पर उपलब्ध।",
    ctaWhatsapp: "WhatsApp पर ईएमआई पूछताछ करें",
    zeroDownPayment: "ज़ीरो डाउन पेमेंट",
    indicativeDisclaimer:
      "*प्रदर्शित गणनाएं केवल शोरूम डेमो प्रस्तुति हेतु सांकेतिक अनुमान हैं। वास्तविक ब्याज दर, प्रोसेसिंग शुल्क एवं ऋण स्वीकृति बैंक या वित्तीय संस्थान के नियमों व दस्तावेजों के अधीन है।",
    noGuaranteeNotice:
      "डीके इलेक्ट्रॉनिक्स किसी भी बैंक साझेदारी का असत्यापित दावा या गारंटीकृत स्वीकृति का वादा नहीं करता। सभी फाइनेंस सुविधाएं अधिकृत पार्टनर्स द्वारा ग्राहक सत्यापन के अधीन हैं।",
  },
  services: {
    kicker: "बिक्री के बाद सेवा",
    title: "संपूर्ण शोरूम सेवाएं एवं तकनीकी सहायता",
    subtitle:
      "खरीदारी के बाद भी हमारे प्रमाणित इंजीनियर आपकी सहायता के लिए सदैव उपलब्ध हैं।",
    installationTitle: "प्रमाणित वॉल-माउंटिंग व इंस्टॉलेशन",
    installationDesc:
      "ब्रांड-सर्टिफाइड इंजीनियरों द्वारा सुरक्षित टीवी फिटिंग, केबल मैनेजमेंट और प्रारंभिक सेटअप।",
    installationBadge: "विशेषज्ञ तकनीशियन",
    emiTitle: "तुरंत पेपरलेस फाइनेंसिंग",
    emiDesc:
      "मात्र 10 मिनट में आसान दस्तावेज़ सत्यापन और 0% ब्याज योजनाएं।",
    emiBadge: "ज़ीरो डाउन पेमेंट*",
    deliveryTitle: "एक्सप्रेस होम डिलीवरी",
    deliveryDesc:
      "वेयरहाउस से आपके घर तक सुरक्षित परिवहन एवं अनबॉक्सिंग निरीक्षण।",
    deliveryBadge: "उसी दिन / अगले दिन",
    warrantyTitle: "विस्तारित वारंटी सुरक्षा",
    warrantyDesc:
      "वोल्टेज के उतार-चढ़ाव और पैनल की खराबी के विरुद्ध अतिरिक्त सुरक्षा कवर।",
    warrantyBadge: "5 वर्ष तक सुरक्षा",
    consultBtn: "सेवाओं की जानकारी लें",
    enquireServiceBtn: "इस सेवा के लिए पूछताछ करें",
    needAssistance: "त्वरित सहायता की आवश्यकता है?",
    assistanceDesc:
      "हमारे शोरूम सर्विस डेस्क से सीधे बात करें या व्हाट्सएप पर मैसेज भेजें।",
    booking: {
      badge: "अधिकृत मल्टी-डिवाइस सर्विस डेस्क",
      title: "मरम्मत एवं तकनीकी सेवा बुक करें",
      subtitle:
        "घरेलू उपकरणों एवं पर्सनल इलेक्ट्रॉनिक्स के लिए प्रमाणित ऑन-साइट निरीक्षण या शोरूम ड्रॉप-ऑफ अनुरोध दर्ज करें।",
      nameLabel: "ग्राहक का नाम *",
      namePlaceholder: "जैसे: रमेश कुमार",
      phoneLabel: "मोबाइल नंबर (व्हाट्सएप) *",
      phonePlaceholder: "+91 98XXX XXXXX",
      deviceTypeLabel: "डिवाइस / उपकरण का प्रकार *",
      problemLabel: "समस्या का विवरण *",
      problemPlaceholder: "जैसे: डिस्प्ले ब्लिंक कर रहा है / एसी ठंडा नहीं कर रहा / पानी टपकना...",
      locationLabel: "ग्राहक का स्थान / क्षेत्र *",
      locationPlaceholder: "जैसे: सेक्टर 14, कमर्शियल मार्केट",
      submitWhatsAppBtn: "WhatsApp पर सर्विस बुक करें",
      submitDirectBtn: "सर्विस अनुरोध दर्ज करें (डेमो)",
      successTitle: "सर्विस अनुरोध तैयार हो गया!",
      successDesc:
        "आपकी रिपेयर पूछताछ तैयार कर दी गई है और हमारे शोरूम तकनीशियन से जोड़ने के लिए तत्पर है।",
      demoNotice:
        "सेल्स डेमो सूचना: इस प्रस्तुति में सभी पूछताछ सीधे व्हाट्सएप या फोन कॉल के माध्यम से भेजी जाती हैं। जब तक वास्तविक बैकएंड कनेक्ट नहीं होता, पूछताछ किसी बाहरी डेटाबेस में सुरक्षित नहीं की जाती हैं।",
      resetBtn: "अन्य सेवा बुक करें",
      devices: {
        mobile: "मोबाइल / स्मार्टफोन",
        laptop: "लैपटॉप व कंप्यूटर",
        tv: "स्मार्ट टीवी व OLED",
        ac: "एयर कंडीशनर (AC)",
        refrigerator: "रेफ्रिजरेटर",
        washingMachine: "वाशिंग मशीन",
      },
      errors: {
        nameRequired: "कृपया ग्राहक का पूरा नाम दर्ज करें।",
        phoneRequired: "कृपया मोबाइल नंबर दर्ज करें।",
        phoneInvalid: "कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।",
        deviceRequired: "कृपया उपकरण का प्रकार चुनें।",
        problemRequired: "कृपया आने वाली समस्या का विवरण लिखें।",
        locationRequired: "कृपया अपना पता या क्षेत्र दर्ज करें।",
      },
    },
  },
  whyChoose: {
    kicker: "शोरूम का महत्व",
    title: "ऑनलाइन वेबसाइट्स की तुलना में डीके इलेक्ट्रॉनिक्स क्यों?",
    subtitle:
      "28 वर्षों से प्रामाणिकता, व्यक्तिगत परामर्श और भरोसेमंद सेवा की परंपरा [सत्यापन लंबित]।",
    point1Title: "28 वर्षों की विश्वसनीयता",
    point1Desc:
      "एक वास्तविक शोरूम जहां आप किसी भी समस्या या सलाह के लिए व्यक्तिगत रूप से आ सकते हैं [सत्यापन लंबित]।",
    point2Title: "आमने-सामने लाइव डेमो",
    point2Desc:
      "खरीदने से पहले पिक्चर क्वालिटी, कूलिंग और ऑडियो को खुद देखकर और परखकर निर्णय लें।",
    point3Title: "100% असली भारतीय स्टॉक",
    point3Desc:
      "रीफर्बिश्ड या ग्रे-मार्केट का कोई जोखिम नहीं। निर्माता कंपनी से सीधा व प्रमाणित उत्पाद।",
    point4Title: "व्यक्तिगत शोरूम डिस्काउंट",
    point4Desc:
      "ऑनलाइन डिस्काउंट से भी बेहतर कॉम्बो डील्स, इंस्टेंट एक्सचेंज और उपहार।",
  },
  reviews: {
    kicker: "ग्राहकों के विचार",
    title: "शोरूम ग्राहकों के वास्तविक अनुभव",
    subtitle:
      "जानिए क्यों स्थानीय परिवारों ने ऑनलाइन अनिश्चितता के बजाय डीके इलेक्ट्रॉनिक्स को चुना।",
    disclaimer:
      "शोरूम विज़िटर्स और स्थानीय ग्राहकों के वास्तविक अनुभवों पर आधारित।",
    review1Name: "विक्रम मल्होत्रा",
    review1Text:
      "55 इंच सोनी ब्राविया टीवी खरीदा। शोरूम स्टाफ ने मुझे OLED और QLED का लाइव अंतर समझाया। अगले ही दिन इंस्टॉलेशन भी पूरी हो गई। बहुत शानदार अनुभव!",
    review1Product: "सत्यापित खरीदार • सोनी ब्राविया 4K टीवी",
    review2Name: "सुनीता अग्रवाल",
    review2Text:
      "डाइकन इन्वर्टर एसी बजाज ईएमआई पर लिया। ज़ीरो डाउन पेमेंट प्रक्रिया केवल 10 मिनट में पूरी हो गई। अपने इलाके में ऐसा प्रतिष्ठित शोरूम होना बहुत सुविधाजनक है।",
    review2Product: "सत्यापित खरीदार • डाइकन 1.5 टन एसी",
    review3Name: "राहुल वर्मा",
    review3Text:
      "नए घर के लिए एलजी वाशिंग मशीन और सैमसंग फ्रिज खरीदा। डीके इलेक्ट्रॉनिक्स ने हमें किसी भी ऑनलाइन पोर्टल से बेहतर कॉम्बो डिस्काउंट दिया।",
    review3Product: "सत्यापित खरीदार • एलजी व सैमसंग कॉम्बो",
  },
  location: {
    kicker: "शोरूम विज़िट",
    title: "हमारे शोरूम में व्यक्तिगत रूप से पधारें",
    subtitle:
      "सभी उत्पादों का प्रत्यक्ष अनुभव लें। हमारे विशेषज्ञ आपकी सहायता के लिए तैयार हैं।",
    addressLabel: "शोरूम का पता",
    addressVal: "मुख्य मार्केट, अनपरा, सोनभद्र जिला, उत्तर प्रदेश 231225",
    addressNotice: "[अनपरा में शोरूम स्टोरफ्रंट • सटीक पता स्वामी सत्यापन के अधीन]",
    hoursLabel: "खुलने का समय",
    hoursVal: "सोमवार से रविवार: सुबह 10:30 से रात 9:00 बजे तक (सातों दिन खुला)",
    parkingLabel: "ग्राहक सुविधाएं",
    parkingVal: "समर्पित वाहन पार्किंग एवं लाइव उत्पाद डेमो क्षेत्र।",
    getDirections: "गूगल मैप्स पर रास्ता देखें",
    showroomCardTitle: "डीके इलेक्ट्रॉनिक्स शोरूम",
    showroomCardDesc:
      "केंद्रीय इलेक्ट्रॉनिक्स बाजार में स्थित, सुलभ वाहन पार्किंग और आसान पहुंच के साथ।",
    showroomStatus: "शोरूम स्थिति",
    showroomStatusVal: "आज खुला है (सुबह 10:30 - रात 9:00)",
    helpline: "शोरूम हेल्पलाइन",
    parkingAvail: "ग्राहक पार्किंग",
    parkingAvailVal: "सामने उपलब्ध है",
    askLocationWhatsapp: "WhatsApp पर लोकेशन मांगें",
  },
  contact: {
    kicker: "संपर्क करें",
    title: "शोरूम टीम से सीधे बात करें",
    subtitle:
      "किसी विशेष मॉडल, स्टॉक या ऑफर के संबंध में कोई प्रश्न है? हम सदैव तत्पर हैं।",
    infoTitle: "शोरूम का विवरण",
    formTitle: "शोरूम वीआईपी डेमो बुक करें",
    formSubtitle:
      "हमारे वरिष्ठ तकनीशियन के साथ व्यक्तिगत उत्पाद डेमो शेड्यूल करें।",
    nameLabel: "आपका पूरा नाम *",
    namePlaceholder: "जैसे: राजेश शर्मा",
    phoneLabel: "मोबाइल नंबर (व्हाट्सएप) *",
    categoryLabel: "उत्पाद श्रेणी *",
    messageLabel: "संदेश या विशिष्ट मॉडल *",
    messagePlaceholder:
      "जैसे: 65 इंच OLED टीवी और 0% ईएमआई ऑफर्स की जानकारी...",
    submitBtn: "वीआईपी डेमो बुक करें",
    successTitle: "पूछताछ सफलतापूर्वक प्राप्त हुई!",
    successDesc:
      "हमारी शोरूम टीम आपसे 30 मिनट के भीतर कॉल या व्हाट्सएप पर संपर्क करेगी।",
    resetBtn: "नई पूछताछ भेजें",
    contactOptionsTitle: "डीके इलेक्ट्रॉनिक्स से संपर्क के 4 माध्यम",
    callNowTitle: "कॉल करें (Call Now)",
    callNowDesc: "स्टॉक उपलब्धता एवं पूछताछ हेतु सीधे हमारे शोरूम सेल्स डेस्क से बात करें।",
    whatsappTitle: "WhatsApp चैट",
    whatsappDesc: "मॉडल विनिर्देश, मूल्य एवं शोरूम फोटो तुरंत व्हाट्सएप पर प्राप्त करें।",
    getDirectionsTitle: "गूगल मैप्स पर रास्ता देखें",
    getDirectionsDesc: "गूगल मैप्स नेविगेशन की सहायता से सीधे हमारे इलेक्ट्रॉनिक्स शोरूम पहुंचें।",
    contactFormTitle: "शोरूम वीआईपी डेमो फॉर्म",
    contactFormDesc: "वरिष्ठ तकनीशियन के साथ व्यक्तिगत उत्पाद परीक्षण शेड्यूल करें।",
    demoBackendNotice: "सेल्स डेमो सूचना: इस प्रस्तुति में फॉर्म सबमिशन पूछताछ को तैयार कर शोरूम टीम से संवाद सिमुलेट करता है। जब तक वास्तविक बैकएंड कनेक्ट नहीं होता, पूछताछ किसी बाहरी डेटाबेस में सहेजी नहीं जाती हैं।",
    unconfiguredPhoneNotice: "[डेमो फोन नंबर: +91 98XXX XXXXX — मालिक के आधिकारिक नंबर से बदला जाएगा]",
    errors: {
      nameRequired: "कृपया अपना पूरा नाम दर्ज करें।",
      phoneRequired: "कृपया अपना मोबाइल नंबर दर्ज करें।",
      phoneInvalid: "कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।",
      categoryRequired: "कृपया उत्पाद श्रेणी चुनें।",
      messageRequired: "कृपया अपना संदेश या मॉडल विवरण दर्ज करें।",
    },
  },
  catalog: {
    title: "इलेक्ट्रॉनिक्स उत्पाद कैटलॉग",
    subtitle:
      "स्मार्टफोन, लैपटॉप, 4K स्मार्ट टीवी, एयर कंडीशनर, रेफ्रिजरेटर, वाशिंग मशीन, होम अप्लायंसेज एवं एक्सेसरीज़ खोजें। सीधे शोरूम से सर्वश्रेष्ठ ऑफर और 0% ईएमआई प्राप्त करें।",
    searchPlaceholder: "मॉडल, ब्रांड या तकनीकी विनिर्देश खोजें...",
    allCategories: "सभी श्रेणियां",
    allBrands: "सभी ब्रांड्स",
    brandLabel: "ब्रांड्स:",
    featuredDeals: "विशेष ऑफर",
    inStockDemo: "शोरूम स्टॉक [डेमो]",
    showingResults: "प्रदर्शित",
    resultsSuffix: "उत्पाद कैटलॉग में उपलब्ध",
    showroomAssurance: "सभी मॉडल सीधे शोरूम पर देखे जा सकते हैं",
    noResultsTitle: "कोई उत्पाद नहीं मिला",
    noResultsDesc:
      "कृपया फ़िल्टर रीसेट करें या कोई भिन्न कीवर्ड, मॉडल या ब्रांड खोजें।",
    clearFiltersBtn: "सभी फ़िल्टर साफ़ करें",
    resetBtn: "रीसेट करें",
    modelPrefix: "मॉडल:",
    showroomOffer: "शोरूम मूल्य (डेमो)",
    bestPriceOnEnquiry: "पूछताछ पर सर्वश्रेष्ठ दर",
    emiStarts: "ईएमआई शुरू",
    demoPricingDisclaimer: "*प्रस्तुति हेतु डेमो मूल्य",
    viewDetails: "विवरण देखें",
    enquireOffer: "ऑफर पूछें",
    compare: "तुलना",
    added: "चयनित",
    brandDisclaimerNotice: "ब्रांड एवं डेमो संदर्भ सूचना:",
    brandDisclaimerText:
      "प्रदर्शित ब्रांड्स (सैमसंग, एप्पल, विवो, एलजी, हुंडई, व्हर्लपूल, कैनन) शोरूम फोटोग्राफ आधारित दृश्य संदर्भ हैं। डेमो मूल्य व स्टॉक वास्तविक इन्वेंट्री के रूप में प्रस्तुत नहीं किए गए हैं और स्वामी सत्यापन के अधीन हैं।",
    stockStatus: {
      inShowroom: "शोरूम में उपलब्ध [डेमो]",
      limited: "सीमित स्टॉक [डेमो]",
      onOrder: "ऑर्डर पर उपलब्ध",
    },
  },
  productDetail: {
    breadcrumbHome: "होम",
    breadcrumbProducts: "उत्पाद",
    demoSpecificationNotice: "डेमो कैटलॉग विनिर्देश",
    liveDemoAvailable:
      "डीके इलेक्ट्रॉनिक्स शोरूम में लाइव हैंड्स-ऑन डेमो हेतु उपलब्ध",
    showroomAdvantageTitle: "व्यक्तिगत शोरूम परामर्श",
    showroomAdvantageText:
      "खरीदने से पहले हमारे शोरूम में आकर वास्तविक स्क्रीन, कूलिंग या साउंड का अनुभव लें।",
    showroomOfferTitle: "शोरूम मूल्य (डेमो)",
    easyEmiStartsTitle: "आसान 0% ईएमआई शुरू",
    getBestOfferBtn: "WhatsApp पर ऑफर प्राप्त करें",
    callShowroomBtn: "शोरूम को कॉल करें",
    keySpecsTitle: "मुख्य विशेषताएं",
    detailedSpecsTitle: "विस्तृत तकनीकी विनिर्देश",
    colorOptionsLabel: "उपलब्ध रंग विकल्प:",
    tabs: {
      specs: "तकनीकी विवरण",
      emi: "ईएमआई योजनाएं",
      warranty: "वारंटी व सुरक्षा",
    },
    financingTitle: "शोरूम 0% ब्याज ईएमआई योजना",
    financingDesc:
      "बजाज फिनसर्व, एचडीबी फाइनेंशियल और प्रमुख बैंक क्रेडिट कार्ड के माध्यम से 3, 6, 9, 12 या 24 महीने की आसान किस्तों पर उपलब्ध।",
    sixMonths: "6 महीने",
    twelveMonths: "12 महीने",
    twentyFourMonths: "24 महीने",
    perMonthUnit: "/माह",
    warrantyCoverage1:
      "100% असली भारतीय स्टॉक प्रमाणित जीएसटी चालान सहित",
    warrantyCoverage2:
      "आधिकारिक ब्रांड अधिकृत सर्विस सेंटर पर पूर्ण वारंटी दावा",
    warrantyCoverage3:
      "शोरूम द्वारा प्रारंभिक सेटअप और तकनीकी डेमो सहायता",
    notFoundTitle: "उत्पाद नहीं मिला",
    notFoundDesc: "अनुरोधित मॉडल हमारे कैटलॉग में नहीं मिल सका।",
    backToCatalog: "वापस उत्पाद कैटलॉग पर जाएं",
  },
  comparison: {
    matrixTitle: "उत्पाद तुलना (Side-by-Side Comparison)",
    itemsCountSuffix: "उत्पाद",
    clearAll: "सभी हटाएं",
    attributesLabel: "विशेषता",
    categoryLabel: "श्रेणी",
    priceLabel: "शोरूम मूल्य (डेमो)",
    emiLabel: "0% ईएमआई योजना",
    warrantyLabel: "आधिकारिक वारंटी",
    stockLabel: "स्टॉक स्थिति [डेमो]",
    highlightsLabel: "मुख्य विशेषताएं",
    directEnquiryLabel: "सीधी पूछताछ",
    enquireDealBtn: "WhatsApp पूछताछ",
    disclaimer:
      "*डेमो मूल्य और विनिर्देश केवल शोरूम प्रस्तुति के लिए हैं। वास्तविक छूट के लिए सीधे शोरूम से संपर्क करें।",
    floatingSelectedText: "उत्पाद तुलना के लिए चयनित",
    floatingClear: "हटाएं",
    floatingCompareNow: "तुलना करें",
    maxComparisonAlert: "आप अधिकतम 4 उत्पादों की एक साथ तुलना कर सकते हैं।",
  },
  faq: {
    kicker: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
    title: "डीके इलेक्ट्रॉनिक्स के बारे में सामान्य प्रश्न",
    subtitle:
      "हमारे उत्पादों, वारंटी कवरेज और शोरूम फाइनेंसिंग के संबंध में आपकी सभी शंकाओं का समाधान।",
    q1: "क्या डीके इलेक्ट्रॉनिक्स पर बिकने वाले सभी उत्पाद 100% असली हैं?",
    a1: "हाँ। प्रत्येक टेलीविजन, रेफ्रिजरेटर, स्मार्टफोन, लैपटॉप और उपकरण आधिकारिक ब्रांड चैनलों से सीधे प्राप्त किए जाते हैं और निर्माता वारंटी के साथ आते हैं।",
    q2: "0% ब्याज ईएमआई फाइनेंसिंग प्रक्रिया कैसे काम करती है?",
    a2: "हम बजाज फिनसर्व, एचडीबी फाइनेंशियल, आईडीएफसी फर्स्ट और प्रमुख क्रेडिट कार्ड्स के माध्यम से न्यूनतम दस्तावेजों पर मात्र 10 से 15 मिनट में ऑन-द-स्पॉट पेपरलेस फाइनेंस उपलब्ध कराते हैं।",
    q3: "क्या मैं खरीदने से पहले उपकरणों का लाइव डेमो देख सकता हूँ?",
    a3: "बिल्कुल। हमारे शोरूम में 4K OLED टीवी, ऑडियो सिस्टम, स्मार्टफोन और लैपटॉप के लिए समर्पित लाइव एक्सपीरियंस जोन हैं जहां आप डिस्प्ले और साउंड का प्रत्यक्ष परीक्षण कर सकते हैं।",
    q4: "क्या आप एक्सप्रेस होम डिलीवरी और वॉल-माउंटिंग की सुविधा देते हैं?",
    a4: "हाँ। शोरूम वेयरहाउस से आपके घर तक सुरक्षित डिलीवरी और प्रमाणित तकनीशियनों द्वारा टीवी वॉल-माउंटिंग और एसी इंस्टॉलेशन की पूरी सुविधा प्रदान की जाती है।",
    q5: "यदि मुझे किसी विशेष मॉडल या कीमत के बारे में पूछना हो तो क्या करूँ?",
    a5: "आप हमारी वेबसाइट पर किसी भी उत्पाद के 'WhatsApp पूछताछ' बटन पर क्लिक कर सकते हैं या सीधे हमारे शोरूम नंबर +91 98XXX XXXXX पर कॉल कर सकते हैं।",
  },
  about: {
    kicker: "हमारा परिचय एवं विरासत",
    title: "हमारे बारे में (About DK Electronics)",
    subtitle:
      "दशकों से स्थानीय ग्राहकों को प्रीमियम इलेक्ट्रॉनिक्स और भरोसेमंद सेवा प्रदान करने वाला प्रतिष्ठित शोरूम।",
    heritageNoticeTitle: "शोरूम इतिहास सत्यापन सूचना [लगभग 28 वर्ष]",
    heritageNoticeDesc:
      "इस डेमो वेबसाइट में उल्लिखित 28 वर्षों की व्यावसायिक यात्रा (स्थापना लगभग 1996) को अंतिम रूप देने से पूर्व शोरूम स्वामी द्वारा सत्यापित किया जाना आवश्यक है।",
    storyTitle: "ग्राहक संतुष्टि और विश्वसनीय सेवा की परंपरा",
    storyP1:
      "डीके इलेक्ट्रॉनिक्स ने अपनी स्थापना से ही स्थानीय बाजार में गुणवत्ता, प्रामाणिकता और पारदर्शी व्यवहार को अपनी पहचान बनाया है। हमने वैश्विक इलेक्ट्रॉनिक्स ब्रांड्स के साथ मजबूत साझेदारी स्थापित की है।",
    storyP2:
      "हम केवल बॉक्स नहीं बेचते — हम यह सुनिश्चित करते हैं कि हर ग्राहक को उनकी आवश्यकताओं, बजट और घर के स्थान के अनुसार सही उपकरण मिले।",
    pillar1Title: "100% असली उत्पाद",
    pillar1Desc:
      "प्रत्येक उत्पाद पर आधिकारिक भारतीय स्टॉक व निर्माता वारंटी।",
    pillar2Title: "विशेषज्ञ परामर्श",
    pillar2Desc:
      "अनुभवी विशेषज्ञों द्वारा व्यक्तिगत लाइव डेमो व उचित सलाह।",
    pillar3Title: "स्थानीय विश्वसनीयता",
    pillar3Desc:
      "बिक्री के बाद भी निरंतर सहयोग और त्वरित सेवा सहायता।",
  },
  admin: {
    portalBadge: "निजी स्वामी पोर्टल (Private Owner Portal)",
    dashboardTitle: "शोरूम प्रबंधन डैशबोर्ड",
    dashboardSubtitle: "ग्राहकों की पूछताछ की निगरानी करें, कैटलॉग दृश्यता प्रबंधित करें और सेटिंग्स अपडेट करें।",
    totalEnquiries: "कुल पूछताछ",
    newLeadsToday: "आज के नए लीड्स",
    activeCatalogItems: "सक्रिय कैटलॉग उत्पाद",
    lowStockAlert: "कम स्टॉक चेतावनी",
    pendingServiceTickets: "लंबित सर्विस अनुरोध",
    monthlyPipelineValue: "अनुमानित मासिक पाइपलाइन मूल्य",
    inboxTitle: "ग्राहक पूछताछ इनबॉक्स (Leads)",
    catalogTitle: "शोरूम कैटलॉग प्रबंधक",
    customerColumn: "ग्राहक का नाम",
    contactColumn: "संपर्क नंबर",
    productColumn: "उत्पाद रुचि",
    typeColumn: "पूछताछ प्रकार",
    statusColumn: "स्थिति",
    actionColumn: "कार्रवाई",
    statusNew: "नया (New)",
    statusContacted: "संपर्क किया (Contacted)",
    statusConverted: "सफल (Converted)",
    priceVisibilityLabel: "मूल्य दृश्यता",
    stockToggleLabel: "स्टॉक स्थिति",
    logoutBtn: "लॉग आउट करें",
    previewBannerTitle: "गैर-उत्पादन स्वामी पूर्वावलोकन मोड (Preview Mode)",
    previewBannerDesc:
      "यह कंसोल डेमो मेमोरी में चल रहा है। वर्तमान में कोई लाइव डेटाबेस कनेक्ट नहीं है। पृष्ठ रीलोड करने पर डेटा रीसेट हो जाएगा। सुपाबेस या फायरबेस सेटअप के लिए बैकएंड गाइड देखें।",
    roleOwner: "शोरूम स्वामी (पूर्ण नियंत्रण)",
    roleManager: "स्टोर फ्लोर मैनेजर",
    tabs: {
      overview: "डैशबोर्ड अवलोकन",
      products: "उत्पाद सूची",
      addProduct: "नया उत्पाद जोड़ें",
      priceStock: "मूल्य एवं स्टॉक",
      categories: "श्रेणियां",
      brands: "ब्रांड्स",
      enquiries: "ग्राहक पूछताछ",
      services: "सर्विस बुकिंग्स",
      offers: "ऑफ़र एवं योजनाएं",
      analytics: "व्यवसाय विश्लेषण",
      backend: "बैकएंड सेटअप गाइड",
    },
    login: {
      title: "डीके एग्जीक्यूटिव स्वामी पोर्टल",
      subtitle:
        "अधिकृत शोरूम प्रबंधन कंसोल। अनधिकृत सार्वजनिक पहुंच से सुरक्षित।",
      emailLabel: "स्वामी का ईमेल पता",
      emailPlaceholder: "owner@dkelectronics.com",
      passwordLabel: "पासवर्ड / ऑथ टोकन",
      passwordPlaceholder: "••••••••••••",
      enterBtn: "पूर्वावलोकन कंसोल में प्रवेश करें",
      securityTitle: "शून्य-विश्वास (Zero-Trust) सुरक्षा वास्तुकला",
      securityDesc:
        "उत्पादन में, ऑथेंटिकेशन HTTP-only सुरक्षित कुकीज़, JWT सत्यापन और Row Level Security (RLS) के साथ सुपाबेस या फायरबेस का उपयोग करता है। क्लाइंट कोड में कोई डिफ़ॉल्ट पिन या पासवर्ड उजागर नहीं किए जाते।",
      roleSelectLabel: "कंसोल भूमिका (डेमो मोड)",
    },
    productActions: {
      addNew: "नया उत्पाद जोड़ें",
      edit: "विवरण संपादित करें",
      delete: "उत्पाद हटाएं",
      uploadImage: "छवि अपलोड करें",
      updatePrice: "मूल्य अपडेट करें",
      save: "परिवर्तन सहेजें",
      cancel: "रद्द करें",
      deleteConfirmTitle: "उत्पाद हटाने की पुष्टि करें",
      deleteConfirmDesc:
        "क्या आप वाकई इस उत्पाद को कैटलॉग से हटाना चाहते हैं? यह क्रिया डेमो कैटलॉग से मॉडल को हटा देगी।",
      successAdd: "नया उत्पाद कैटलॉग में सफलतापूर्वक जोड़ा गया!",
      successEdit: "उत्पाद विनिर्देश सफलतापूर्वक अपडेट किए गए!",
      successDelete: "उत्पाद कैटलॉग से हटा दिया गया।",
    },
    serviceDesk: {
      title: "तकनीकी मरम्मत एवं सर्विस टिकट्स",
      subtitle:
        "स्मार्टफोन, लैपटॉप, टीवी, एसी, रेफ्रिजरेटर और वाशिंग मशीन के ग्राहक मरम्मत अनुरोध ट्रैक करें।",
      ticketId: "टिकट आईडी",
      device: "उपकरण प्रकार",
      customer: "ग्राहक एवं फोन",
      problem: "आने वाली समस्या",
      location: "स्थान / पता",
      statusScheduled: "निर्धारित (Scheduled)",
      statusInspection: "निरीक्षण जारी (Inspection)",
      statusParts: "पुर्जे ऑर्डर किए गए",
      statusCompleted: "पूर्ण (Completed)",
    },
    offers: {
      title: "प्रमोशनल डील्स एवं फेस्टिव ऑफर्स",
      subtitle:
        "शोरूम डिस्प्ले के लिए डिस्काउंट रिबन, कॉम्बो बचत और 0% ईएमआई योजनाएं प्रबंधित करें।",
      createOffer: "नया शोरूम ऑफर बनाएं",
      offerTitle: "ऑफर अभियान शीर्षक",
      badgeText: "दृश्य रिबन बैज",
      discountText: "छूट / अतिरिक्त लाभ",
      validUntil: "वैधता अवधि",
      active: "सक्रिय (Active)",
      expired: "समाप्त (Expired)",
    },
    analytics: {
      title: "व्यावसायिक विश्लेषण एवं मेट्रिक्स",
      subtitle:
        "प्रमुख परिचालन मेट्रिक्स, चैनल अनुसार पूछताछ और श्रेणी-वार मांग रुझान।",
      byCategory: "श्रेणी-वार ग्राहक पूछताछ",
      byChannel: "चैनल-वार लीड वॉल्यूम",
      funnel: "ग्राहक रूपांतरण फ़नल",
      brandShare: "ब्रांड रुचि वितरण",
    },
    backendGuide: {
      title: "उत्पादन बैकएंड एवं प्रमाणीकरण सेटअप गाइड",
      subtitle:
        "इस इन-मेमोरी सेल्स डेमो को सुरक्षित प्रोडक्शन बैकएंड से जोड़ने के लिए तकनीकी रोडमैप।",
      recommendationTitle: "प्राथमिक अनुशंसा: Supabase (PostgreSQL)",
      recommendationDesc:
        "सुपाबेस मुंबई (भारत) में होस्टेड ओपन-सोर्स PostgreSQL डेटाबेस, अंतर्निहित ऑथ, Row Level Security (RLS), और स्वचालित REST/GraphQL एपीआई प्रदान करता है।",
      supabaseTitle: "विकल्प A: Supabase सेटअप आवश्यकताएं",
      firebaseTitle: "विकल्प B: Firebase (Firestore + Auth)",
      securityModelTitle: "उत्पादन सुरक्षा एवं अनुमति मॉडल (RBAC)",
      securityModelDesc:
        "प्रमाणीकरण भूमिका-आधारित पहुंच नियंत्रण लागू करता है। अज्ञात क्लाइंट उपयोगकर्ता उत्पादों में संशोधन या ग्राहक डेटा नहीं पढ़ सकते।",
      setupChecklistTitle: "परिनियोजन एवं पर्यावरण चेकलिस्ट",
    },
  },
  actions: {
    callNow: "कॉल करें",
    whatsappEnquiry: "WhatsApp पर संपर्क करें",
    bookVisit: "शोरूम विज़िट बुक करें",
    viewCatalog: "प्रोडक्ट देखें",
    getBestOffer: "सर्वश्रेष्ठ ऑफर पाएं",
    contactUs: "शोरूम से संपर्क करें",
    searchPlaceholder: "उत्पाद, मॉडल या ब्रांड खोजें...",
    changeLanguage: "English",
  },
  common: {
    showroom: "मल्टी-ब्रांड इलेक्ट्रॉनिक्स शोरूम",
    authorizedDealer: "100% असली व प्रमाणित उत्पाद",
    heritageBadge: "1996 से ग्राहकों की सेवा में [लगभग 28 वर्ष - सत्यापन लंबित]",
    phonePlaceholder: "+91 98XXX XXXXX",
    hours: "शोरूम का समय",
    workingHoursVal: "सोम - रवि: सुबह 10:30 से रात 9:00 तक",
    address: "शोरूम का पता",
    addressVal: "मुख्य मार्केट, अनपरा, सोनभद्र, उत्तर प्रदेश 231225 (सत्यापन अधीन)",
    quickLinks: "त्वरित नेविगेशन",
    categories: "उत्पाद श्रेणियां",
    customerSupport: "ग्राहक सहायता",
    allRightsReserved: "सर्वाधिकार सुरक्षित। आधिकारिक शोरूम डेमो।",
    bilingualNotice: "अंग्रेज़ी में देखने के लिए English चुनें।",
    openAll7Days: "सातों दिन खुला",
  },
  footer: {
    tagline:
      "मल्टी-ब्रांड होम इलेक्ट्रॉनिक्स एवं घरेलू उपकरणों का आपका विश्वसनीय शोरूम।",
    aboutText:
      "डीके इलेक्ट्रॉनिक्स विश्व के प्रमुख इलेक्ट्रॉनिक्स ब्रांड्स को एक ही छत के नीचे प्रस्तुत करता है, जहां आपको व्यक्तिगत परामर्श, आधिकारिक वारंटी और आसान ईएमआई सुविधा मिलती है।",
    disclaimer:
      "शोरूम का इतिहास (लगभग 28 वर्ष), ब्रांड साझेदारी और संपर्क विवरण डेमो प्रस्तुति के रूप में दिए गए हैं, जो स्वामी द्वारा सत्यापन योग्य हैं।",
  },
};

export const dictionaries: Record<Language, Dictionary> = {
  en: enDictionary,
  hi: hiDictionary,
};
