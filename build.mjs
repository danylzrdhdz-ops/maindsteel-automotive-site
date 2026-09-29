import { execSync } from 'child_process';
import fs from 'fs';

console.log('[BUILD] Iniciando compilación de sitio web principal...');
execSync('npm run build:vite -- --base=/maindsteel-automotive-site/', { stdio: 'inherit' });

console.log('[BUILD] Iniciando compilación de B2B Chat & RFQ...');
// Install sub-project deps first as Vercel only installs root ones automatically
execSync('npm install --legacy-peer-deps', { cwd: './b2b-chat-rfq', stdio: 'inherit' });
execSync('npm run build', { cwd: './b2b-chat-rfq', stdio: 'inherit' });

console.log('[BUILD] Consolidando directorios...');
// Ensure destination exists
fs.mkdirSync('./dist/cotizador', { recursive: true });

// Copy sub-project dist into root dist
fs.cpSync('./b2b-chat-rfq/dist', './dist/cotizador', { recursive: true });

console.log('[BUILD] Construcción unificada exitosa. Proyecto listo para Vercel.');
