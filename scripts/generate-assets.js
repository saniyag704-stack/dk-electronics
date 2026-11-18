const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Ensure directories exist
fs.mkdirSync('public/images/products', { recursive: true });

async function createOgBanner() {
  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <!-- Dark Showroom Facade Background -->
    <rect width="1200" height="630" fill="#111111" />
    <circle cx="1000" cy="150" r="300" fill="#D82935" opacity="0.12" />
    
    <!-- Outer Frame & Accent Line -->
    <rect x="40" y="40" width="1120" height="550" rx="24" fill="#18181B" stroke="#27272A" stroke-width="2" />
    <line x1="40" y1="588" x2="1160" y2="588" stroke="#D82935" stroke-width="4" />

    <!-- Eagle Wings Emblem -->
    <g transform="translate(600, 200) scale(1.6)">
      <!-- Left Wing -->
      <path d="M -10,32 C -20,30 -34,22 -62,14 C -52,22 -40,28 -26,34 C -38,32 -52,28 -66,24 C -56,32 -44,38 -28,42 C -42,40 -52,38 -62,36 C -50,44 -36,48 -14,48 Z" fill="#FFFFFF" />
      <path d="M -12,26 C -24,24 -40,16 -58,6 C -46,14 -32,20 -16,24 Z" fill="#FFFFFF" opacity="0.9" />
      <!-- Right Wing -->
      <path d="M 10,32 C 20,30 34,22 62,14 C 52,22 40,28 26,34 C 38,32 52,28 66,24 C 56,32 44,38 28,42 C 42,40 52,38 62,36 C 50,44 36,48 14,48 Z" fill="#FFFFFF" />
      <path d="M 12,26 C 24,24 40,16 58,6 C 46,14 32,20 16,24 Z" fill="#FFFFFF" opacity="0.9" />
      <!-- Central Diamond Crest -->
      <path d="M 0,16 L 8,36 L 0,56 L -8,36 Z" fill="#D82935" />
      <circle cx="0" cy="36" r="4" fill="#FFFFFF" />
    </g>

    <!-- Brand Typography -->
    <text x="600" y="360" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="64" fill="#FFFFFF" letter-spacing="-1">
      DK <tspan fill="#FFFFFF">ELECTRONICS</tspan>
    </text>

    <!-- Subtitle Pill -->
    <g transform="translate(600, 420)">
      <rect x="-260" y="-22" width="520" height="44" rx="22" fill="#27272A" stroke="#3F3F46" stroke-width="1.5" />
      <text x="0" y="7" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="18" fill="#F4F4F5" letter-spacing="2">
        MULTI-BRAND TECHNOLOGY SHOWROOM
      </text>
    </g>

    <!-- Location & Heritage Badges -->
    <text x="600" y="500" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="20" fill="#A1A1AA">
      Main Market, Anpara, Sonbhadra District, Uttar Pradesh 231225
    </text>
    <text x="600" y="535" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="16" fill="#D82935">
      ★ 28 Years of Trust &amp; Technology • Samsung | Apple | LG | vivo | Hyundai | Whirlpool | Canon ★
    </text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile('public/images/dk-store-reference.jpg');
  console.log('Generated public/images/dk-store-reference.jpg');
}

async function createProductCategoryImages() {
  const categories = [
    { id: 'smartphones', title: 'SMARTPHONES', subtitle: '5G Flagships &amp; Official Warranty' },
    { id: 'laptops', title: 'LAPTOPS &amp; COMPUTERS', subtitle: 'Apple MacBook, Intel &amp; Ryzen' },
    { id: 'tvs', title: '4K SMART TVs &amp; OLED', subtitle: 'Samsung Neo QLED &amp; LG OLED Evo' },
    { id: 'acs', title: 'INVERTER AIR CONDITIONERS', subtitle: '5-Star Energy Saver Dual Inverter' },
    { id: 'refrigerators', title: 'REFRIGERATORS', subtitle: 'Side-by-Side &amp; Inverter Double Door' },
    { id: 'washing', title: 'WASHING MACHINES', subtitle: 'Front Load AI Direct Drive &amp; Top Load' },
    { id: 'home-appliances', title: 'HOME APPLIANCES', subtitle: 'Convection Microwaves &amp; Kitchen Care' },
    { id: 'accessories', title: 'AUDIO &amp; ACCESSORIES', subtitle: 'Canon Cameras, Printers &amp; AirPods' },
  ];

  for (const c of categories) {
    const svg = `
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#18181B" />
      <circle cx="700" cy="100" r="200" fill="#D82935" opacity="0.1" />
      
      <!-- Inner Card -->
      <rect x="30" y="30" width="740" height="540" rx="20" fill="#27272A" stroke="#3F3F46" stroke-width="2" />
      
      <!-- Top Brand Tag -->
      <rect x="60" y="60" width="160" height="36" rx="8" fill="#111111" stroke="#3F3F46" />
      <text x="140" y="84" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="14" fill="#FFFFFF" letter-spacing="1.5">
        DK ELECTRONICS
      </text>

      <!-- Center Typography -->
      <text x="400" y="280" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="36" fill="#FFFFFF">
        ${c.title}
      </text>
      <text x="400" y="325" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="18" fill="#A1A1AA">
        ${c.subtitle}
      </text>

      <!-- Bottom Assurance Pill -->
      <rect x="250" y="440" width="300" height="44" rx="22" fill="#D82935" />
      <text x="400" y="468" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="15" fill="#FFFFFF">
        Genuine Showroom Stock • 0% EMI
      </text>
    </svg>`;

    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(`public/images/products/${c.id}.jpg`);
    console.log(`Generated public/images/products/${c.id}.jpg`);
  }
}

(async () => {
  await createOgBanner();
  await createProductCategoryImages();
  console.log('\nAll asset images generated successfully!');
})();
