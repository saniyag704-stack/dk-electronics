const http = require('http');

const routes = [
  '/',
  '/about',
  '/admin',
  '/brands',
  '/contact',
  '/products',
  '/services',
  '/robots.txt',
  '/sitemap.xml',
  '/products/samsung-galaxy-s24-ultra-5g',
  '/products/apple-iphone-15-pro-max-titanium',
  '/products/vivo-x100-pro-5g-zeiss',
  '/products/apple-macbook-pro-14-m3-pro',
  '/products/samsung-galaxy-book4-pro-360-touch',
  '/products/lg-oled-evo-c3-55-4k-smart-tv',
  '/products/samsung-neo-qled-65-qn90c-4k',
  '/products/hyundai-smart-led-tv-43-4k-webos',
  '/products/lg-dual-inverter-split-ac-1-5t-5star',
  '/products/hyundai-inverter-split-ac-1-5t-3star',
  '/products/samsung-653l-french-door-family-hub',
  '/products/whirlpool-intellifresh-265l-double-door',
  '/products/lg-9kg-ai-direct-drive-front-load',
  '/products/whirlpool-bloomwash-8kg-top-load',
  '/products/whirlpool-convection-microwave-30l',
  '/products/lg-neo-chef-28l-charcoal-microwave',
  '/products/canon-eos-r50-mirrorless-camera-18-45',
  '/products/canon-pixma-g3010-wireless-ink-tank-printer',
  '/products/apple-airpods-pro-2nd-gen-usb-c'
];

async function checkRoute(r) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + r, (res) => {
      resolve({ route: r, status: res.statusCode, ok: res.statusCode === 200 });
    }).on('error', (err) => {
      resolve({ route: r, status: 0, error: err.message, ok: false });
    });
  });
}

(async () => {
  console.log(`Starting automated audit of ${routes.length} routes...`);
  let passed = 0;
  let failed = 0;

  for (const r of routes) {
    const res = await checkRoute(r);
    if (res.ok) {
      passed++;
    } else {
      console.error(`FAIL: ${r} -> HTTP ${res.status}`);
      failed++;
    }
  }

  console.log(`\nAudit Results: ${passed}/${routes.length} routes passed (HTTP 200 OK).`);
  if (failed === 0) {
    console.log('SUCCESS: All public and admin routes respond cleanly with zero 404s or 500s!');
  } else {
    console.error(`WARNING: ${failed} route(s) failed!`);
    process.exit(1);
  }
})();
