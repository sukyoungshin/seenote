import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');

const from = path.join(root, 'packages/assets/fonts/pretendard');
const toFrontend = path.join(root, 'apps/frontend/public/fonts/pretendard');
const toCMS = path.join(root, 'apps/cms/public/fonts/pretendard');

fs.copySync(from, toFrontend);
fs.copySync(from, toCMS);
console.log('✅ Copied Pretendard font files to frontend & CMS');

const cssFile = path.join(root, 'packages/assets/fonts/pretendard.css');
fs.copySync(cssFile, path.join(toFrontend, '../pretendard.css'));
fs.copySync(cssFile, path.join(toCMS, '../pretendard.css'));
console.log('✅ Copied Pretendard CSS file to frontend & CMS');
