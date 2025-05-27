import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');

const fromTailwind = path.join(root, 'packages/styles/tailwind.config.js');
const fromPostCSS = path.join(root, 'packages/styles/postcss.config.js');

const toFrontend = path.join(root, 'apps/frontend');
const toCMS = path.join(root, 'apps/cms');

fs.copySync(fromTailwind, path.join(toFrontend, 'tailwind.config.js'));
fs.copySync(fromPostCSS, path.join(toFrontend, 'postcss.config.js'));
fs.copySync(fromTailwind, path.join(toCMS, 'tailwind.config.js'));
fs.copySync(fromPostCSS, path.join(toCMS, 'postcss.config.js'));

console.log('✅ Tailwind config & PostCSS copied to frontend & cms');
