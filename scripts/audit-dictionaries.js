const fs = require('fs');

// Simple key extraction from dictionaries file
const content = fs.readFileSync('src/dictionaries/index.ts', 'utf8');

// Find boundaries of enDictionary and hiDictionary
const enStart = content.indexOf('export const enDictionary');
const hiStart = content.indexOf('export const hiDictionary');

if (enStart === -1 || hiStart === -1) {
  console.error('Could not locate dictionary exports in src/dictionaries/index.ts');
  process.exit(1);
}

const enBlock = content.substring(enStart, hiStart);
const hiBlock = content.substring(hiStart);

// Extract keys and verify structure
function extractKeys(block) {
  const lines = block.split('\n');
  const keys = new Set();
  const emptyKeys = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    const match = trimmed.match(/^([a-zA-Z0-9_]+):\s*(.*),?$/);
    if (match) {
      const key = match[1];
      const val = match[2];
      keys.add(key);
      if (val === '""' || val === "''" || val === '"",') {
        emptyKeys.push(key);
      }
    }
  }
  return { keys: Array.from(keys), emptyKeys };
}

const en = extractKeys(enBlock);
const hi = extractKeys(hiBlock);

console.log(`enDictionary total keys extracted: ${en.keys.length}`);
console.log(`hiDictionary total keys extracted: ${hi.keys.length}`);

const missingInHi = en.keys.filter(k => !hi.keys.includes(k));
const missingInEn = hi.keys.filter(k => !en.keys.includes(k));

console.log(`\nKeys in EN but missing in HI: ${missingInHi.length}`);
if (missingInHi.length > 0) {
  console.log(missingInHi);
}

console.log(`Keys in HI but missing in EN: ${missingInEn.length}`);
if (missingInEn.length > 0) {
  console.log(missingInEn);
}

console.log(`\nEmpty values in EN: ${en.emptyKeys.length}`);
console.log(`Empty values in HI: ${hi.emptyKeys.length}`);

if (missingInHi.length === 0 && missingInEn.length === 0 && en.emptyKeys.length === 0 && hi.emptyKeys.length === 0) {
  console.log('\nSUCCESS: 100% dictionary key parity and zero empty values!');
} else {
  console.log('\nAudit identified potential discrepancies to verify.');
}
