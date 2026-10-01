import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = [
  path.join(__dirname, 'images'),
  path.join(__dirname, 'imgs procesos'),
  path.join(__dirname, 'imgs productos')
];

async function processImages() {
  console.log('Starting image conversion...');
  
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        const inputPath = path.join(dir, file);
        const outputName = file.substring(0, file.lastIndexOf('.')) + '.webp';
        const outputPath = path.join(dir, outputName);
        
        console.log(`Converting ${file} -> ${outputName}`);
        
        try {
          await sharp(inputPath)
            .webp({ quality: 80, effort: 6 })
            .toFile(outputPath);
          
          fs.unlinkSync(inputPath);
        } catch (e) {
          console.error(`Error converting ${file}: `, e);
        }
      }
    }
  }
  console.log('Done!');
}

processImages();
