const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, 'logos');
const OUTPUT_DIR = path.join(__dirname, 'deploy', 'assets', 'img', 'logos-clientes');

// Target height for all logos (uniform size)
const TARGET_HEIGHT = 120;

// Clean filename: lowercase, replace spaces with hyphens, remove special chars
function cleanFilename(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .replace(/\.(png|jpe?g|webp|svg)$/i, '');
}

async function processLogos() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(INPUT_DIR).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.webp'].includes(ext);
  });

  console.log(`Found ${files.length} logo files to process.\n`);

  const results = [];

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const cleanName = cleanFilename(file);
    const outputName = `${cleanName}.webp`;
    const outputPath = path.join(OUTPUT_DIR, outputName);

    try {
      // Get original image metadata
      const metadata = await sharp(inputPath).metadata();
      
      // Calculate proportional width based on target height
      const scale = TARGET_HEIGHT / metadata.height;
      const targetWidth = Math.round(metadata.width * scale);

      // Process: resize to uniform height, ensure alpha channel (transparency), convert to webp
      await sharp(inputPath)
        .resize(targetWidth, TARGET_HEIGHT, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .ensureAlpha() // Force alpha channel for transparency
        .webp({ 
          quality: 85,
          alphaQuality: 100, // Preserve transparency quality
          lossless: false
        })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const inputStats = fs.statSync(inputPath);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      results.push({
        original: file,
        output: outputName,
        originalSize: (inputStats.size / 1024).toFixed(1) + ' KB',
        newSize: (outputStats.size / 1024).toFixed(1) + ' KB',
        savings: savings + '%'
      });

      console.log(`✅ ${file}`);
      console.log(`   → ${outputName} (${(outputStats.size / 1024).toFixed(1)} KB, saved ${savings}%)`);
    } catch (err) {
      console.log(`❌ ${file}: ${err.message}`);
    }
  }

  console.log(`\n========================================`);
  console.log(`Processed: ${results.length}/${files.length} logos`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`All logos: ${TARGET_HEIGHT}px height, WebP, transparent background`);
  console.log(`========================================`);
}

processLogos().catch(console.error);
