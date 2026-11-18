const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
console.log(`Auditing ${files.length} source files for security standards...`);

// 1. Check for exposed secrets or hardcoded passwords
const secretPatterns = [
  /api[_-]?key\s*[:=]\s*['"][^'"]{10,}['"]/i,
  /secret[_-]?key\s*[:=]\s*['"][^'"]{10,}['"]/i,
  /password\s*[:=]\s*['"][^'"]{6,}['"]/i,
  /private[_-]?key\s*[:=]\s*['"][^'"]{10,}['"]/i,
  /bearer\s+[a-zA-Z0-9_\-\.]{20,}/i,
];

let secretIssues = [];
files.forEach((f) => {
  const content = fs.readFileSync(f, 'utf8');
  secretPatterns.forEach((p) => {
    if (p.test(content)) {
      secretIssues.push({ file: f, pattern: p.toString() });
    }
  });
});

console.log(`Exposed secrets / hardcoded tokens detected: ${secretIssues.length}`);
if (secretIssues.length > 0) {
  console.log(secretIssues);
}

// 2. Check for public navigation exposure of /admin
let adminLinkIssues = [];
const publicNavFiles = [
  'src/components/layout/Header.tsx',
  'src/components/layout/Footer.tsx',
  'src/app/page.tsx',
  'src/app/products/page.tsx',
  'src/app/brands/page.tsx',
  'src/app/services/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
];

publicNavFiles.forEach((f) => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    // Look for href="/admin" or Link href="/admin"
    const match = content.match(/href\s*=\s*['"]\/admin['"]/i);
    if (match) {
      adminLinkIssues.push(f);
    }
  }
});

console.log(`Public navigation files with link to /admin: ${adminLinkIssues.length}`);
if (adminLinkIssues.length > 0) {
  console.error('FAILED: Public navigation exposes /admin in: ' + adminLinkIssues.join(', '));
} else {
  console.log('PASS: Zero public navigation links expose /admin!');
}

// 3. Check robots.txt disallow for admin
const robotsContent = fs.readFileSync('src/app/robots.ts', 'utf8');
const disallowsAdmin = robotsContent.includes('/admin') && robotsContent.includes('/admin/*');
console.log(`robots.ts disallows /admin and /admin/*: ${disallowsAdmin ? 'YES (PASS)' : 'NO (FAIL)'}`);

console.log('\nSecurity audit summary complete.');
