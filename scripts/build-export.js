// scripts/build-export.js
process.env.STATIC_EXPORT = 'true';
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building DK Electronics for static export (GitHub Pages / Static CDN)...');
try {
  execSync('npx next build', { stdio: 'inherit', env: { ...process.env, STATIC_EXPORT: 'true' } });
  
  // Ensure .nojekyll exists in out/ directory so GitHub Pages serves _next assets
  const outDir = path.join(__dirname, '..', 'out');
  if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
  }
  
  console.log('\nSUCCESS: Static export generated in out/ directory (with .nojekyll)!');
} catch (err) {
  console.error('\nStatic export failed:', err.message);
  process.exit(1);
}
