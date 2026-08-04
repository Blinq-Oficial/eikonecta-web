const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'deploy/assets/img/portfolio');
const heroFile = path.join(__dirname, 'deploy/assets/img/hero.jpg');

async function convertDir(directory) {
  if (!fs.existsSync(directory)) return;
  const files = fs.readdirSync(directory);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const input = path.join(directory, file);
      const output = path.join(directory, file.replace(/\.(png|jpe?g)$/i, '.webp'));
      await sharp(input).webp({ quality: 80 }).toFile(output);
      console.log(`Converted ${file} to ${path.basename(output)}`);
    }
  }
}

async function convertFile(file) {
  if (fs.existsSync(file)) {
    const output = file.replace(/\.(png|jpe?g)$/i, '.webp');
    await sharp(file).webp({ quality: 80 }).toFile(output);
    console.log(`Converted ${path.basename(file)} to ${path.basename(output)}`);
  }
}

(async () => {
  await convertDir(dir);
  await convertFile(heroFile);
  console.log('Conversion complete.');
})();
