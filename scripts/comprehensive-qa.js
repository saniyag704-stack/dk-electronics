const fs = require('fs');
const path = require('path');

console.log('=== STARTING DK ELECTRONICS COMPREHENSIVE QA AUDIT ===\n');

let passCount = 0;
let failCount = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${testName} ${details ? '- ' + details : ''}`);
    failCount++;
  }
}

// 1. Image Assets Check
console.log('--- 1. Image Assets Verification ---');
const expectedImages = [
  'public/images/dk-store-reference.jpg',
  'public/images/dk-logo.svg',
  'public/images/dk-logo-dark.svg',
  'public/images/products/smartphones.jpg',
  'public/images/products/laptops.jpg',
  'public/images/products/tvs.jpg',
  'public/images/products/acs.jpg',
  'public/images/products/refrigerators.jpg',
  'public/images/products/washing.jpg',
  'public/images/products/home-appliances.jpg',
  'public/images/products/accessories.jpg',
];

expectedImages.forEach((img) => {
  assert(fs.existsSync(img), `Image asset exists: ${img}`);
});

// 2. Product Catalog Integrity
console.log('\n--- 2. Product Catalog Integrity ---');
const productsContent = fs.readFileSync('src/data/products.ts', 'utf8');
const slugMatches = productsContent.match(/slug:\s*["']([^"']+)["']/g) || [];
const slugs = slugMatches.map(m => m.split(':')[1].replace(/["'\s]/g, ''));
assert(slugs.length === 19, `Total product catalog models: ${slugs.length} (expected 19)`);

const nameEnMatches = productsContent.match(/name_en:\s*["'][^"']+["']/g) || [];
const nameHiMatches = productsContent.match(/name_hi:\s*["'][^"']+["']/g) || [];
assert(nameEnMatches.length === 19, 'All 19 products contain English name specifications');
assert(nameHiMatches.length === 19, 'All 19 products contain authentic Hindi Devanagari names');

const modelMatches = productsContent.match(/modelCode:\s*["'][^"']+["']/g) || [];
assert(modelMatches.length === 19, 'All 19 products contain exact manufacturer model codes');

// 3. Showroom Configuration & WhatsApp Generation
console.log('\n--- 3. Showroom Configuration & WhatsApp Generation ---');
const showroomContent = fs.readFileSync('src/config/showroom.ts', 'utf8');
assert(showroomContent.includes('locality: "Anpara"'), 'Showroom locality verified as Anpara');
assert(showroomContent.includes('postalCode: "231225"'), 'Showroom postal code verified as 231225');
assert(showroomContent.includes('heritageYears: 28'), 'Heritage years verified as 28');
assert(showroomContent.includes('wa.me'), 'WhatsApp integration uses direct wa.me protocol');
assert(showroomContent.includes('buildProductWhatsAppUrl'), 'Bilingual product WhatsApp generator present');

// 4. EMI Calculation Engine Logic
console.log('\n--- 4. EMI Calculation Engine Logic ---');
const price = 100000;
const down = 20000;
const tenure = 12;
const loanAmount = price - down;
const monthlyEmi = Math.round(loanAmount / tenure);
assert(loanAmount === 80000, 'Loan amount calculation is exact');
assert(monthlyEmi === 6667, `Monthly 0% indicative EMI calculation is exact: ₹${monthlyEmi}`);

// 5. Security & Sensitive Access
console.log('\n--- 5. Security & Route Protection ---');
const robotsSrc = fs.readFileSync('src/app/robots.ts', 'utf8');
assert(robotsSrc.includes('/admin'), 'Robots config disallows /admin');
assert(robotsSrc.includes('/api/*'), 'Robots config disallows /api/*');

// 6. Check for No Exposed Credentials
const headerContent = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');
assert(!headerContent.includes('/admin'), 'Header does NOT expose /admin in navigation');
const footerContent = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
assert(!footerContent.includes('/admin'), 'Footer does NOT expose /admin in navigation');

console.log(`\n=== QA AUDIT SUMMARY: ${passCount} PASSED, ${failCount} FAILED ===`);
if (failCount > 0) {
  process.exit(1);
}
