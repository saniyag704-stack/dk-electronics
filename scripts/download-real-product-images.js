const fs = require('fs');
const path = require('path');
const https = require('https');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'products');
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Curated high-resolution, royalty-free electronics product photography from Unsplash
const PRODUCT_IMAGES = [
  {
    filename: 'samsung-galaxy-s24-ultra.jpg',
    url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    desc: 'Samsung Galaxy Titanium Smartphone'
  },
  {
    filename: 'apple-iphone-15-pro-max.jpg',
    url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    desc: 'Apple iPhone 15 Pro Max Titanium'
  },
  {
    filename: 'vivo-x100-pro.jpg',
    url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    desc: 'vivo X100 Pro Smartphone'
  },
  {
    filename: 'apple-macbook-air-m3.jpg',
    url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    desc: 'Apple MacBook Air Space Gray'
  },
  {
    filename: 'dell-xps-15-oled.jpg',
    url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    desc: 'Dell XPS 15 InfinityEdge Laptop'
  },
  {
    filename: 'hp-spectre-x360.jpg',
    url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    desc: 'HP Spectre x360 Laptop'
  },
  {
    filename: 'sony-bravia-xr-55.jpg',
    url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    desc: 'Sony Bravia XR 55 4K Smart TV'
  },
  {
    filename: 'lg-oled-evo-c3.jpg',
    url: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80',
    desc: 'LG OLED evo C3 65 Smart TV'
  },
  {
    filename: 'samsung-neo-qled-4k.jpg',
    url: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    desc: 'Samsung Neo QLED 4K Smart TV'
  },
  {
    filename: 'daikin-1-5t-inverter-ac.jpg',
    url: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?auto=format&fit=crop&w=800&q=80',
    desc: 'Daikin 1.5 Ton Split Inverter AC'
  },
  {
    filename: 'voltas-1-5t-adjustable-ac.jpg',
    url: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    desc: 'Voltas 1.5 Ton Inverter AC'
  },
  {
    filename: 'lg-dual-inverter-ac.jpg',
    url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    desc: 'LG Dual Inverter Split AC'
  },
  {
    filename: 'whirlpool-265l-fridge.jpg',
    url: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    desc: 'Whirlpool Double Door Refrigerator'
  },
  {
    filename: 'samsung-324l-fridge.jpg',
    url: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    desc: 'Samsung Convertible Refrigerator'
  },
  {
    filename: 'lg-380l-fridge.jpg',
    url: 'https://images.unsplash.com/photo-1536353284924-9240ccfc426e?auto=format&fit=crop&w=800&q=80',
    desc: 'LG Smart Inverter Stainless Refrigerator'
  },
  {
    filename: 'lg-8kg-washer.jpg',
    url: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    desc: 'LG 8kg Front Load Washing Machine'
  },
  {
    filename: 'samsung-7kg-washer.jpg',
    url: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80',
    desc: 'Samsung EcoBubble Front Load Washer'
  },
  {
    filename: 'canon-eos-r50-camera.jpg',
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    desc: 'Canon EOS Mirrorless Camera'
  },
  {
    filename: 'hyundai-microwave.jpg',
    url: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=800&q=80',
    desc: 'Hyundai Digital Convection Microwave'
  },
  {
    filename: 'smartwatch-ultra.jpg',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    desc: 'Smartwatch Ultra Accessory'
  },
  // Also update category header visuals with real photos
  {
    filename: 'smartphones.jpg',
    url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    desc: 'Smartphones Category'
  },
  {
    filename: 'laptops.jpg',
    url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    desc: 'Laptops Category'
  },
  {
    filename: 'tvs.jpg',
    url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    desc: 'Smart TVs Category'
  },
  {
    filename: 'acs.jpg',
    url: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?auto=format&fit=crop&w=800&q=80',
    desc: 'Air Conditioners Category'
  },
  {
    filename: 'refrigerators.jpg',
    url: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    desc: 'Refrigerators Category'
  },
  {
    filename: 'washing.jpg',
    url: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    desc: 'Washing Machines Category'
  },
  {
    filename: 'home-appliances.jpg',
    url: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=800&q=80',
    desc: 'Home Appliances Category'
  },
  {
    filename: 'accessories.jpg',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    desc: 'Accessories Category'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Follow redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log(`Starting download of ${PRODUCT_IMAGES.length} real product photos...`);
  let successCount = 0;
  for (const item of PRODUCT_IMAGES) {
    const targetPath = path.join(IMAGES_DIR, item.filename);
    try {
      await downloadFile(item.url, targetPath);
      const stat = fs.statSync(targetPath);
      console.log(`[OK] ${item.filename} (${(stat.size / 1024).toFixed(1)} KB) - ${item.desc}`);
      successCount++;
    } catch (err) {
      console.error(`[ERR] Failed downloading ${item.filename}:`, err.message);
    }
  }
  console.log(`\nCompleted! Successfully downloaded ${successCount}/${PRODUCT_IMAGES.length} real photos.`);
}

main();
