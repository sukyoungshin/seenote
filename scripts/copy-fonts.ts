import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

// 공통 원본 경로
const FONT_NAME = 'pretendard';
const fromFontDir = path.join(root, `packages/assets/fonts/${FONT_NAME}`);
const fromCssFile = path.join(root, `packages/assets/fonts/${FONT_NAME}.css`);

// 앱별 경로설정
const appsConfig = ['frontend', 'cms'].map((app) => ({
  fontWoffOutputDir: path.join(root, `apps/${app}/public/fonts/${FONT_NAME}`),
  styleOutputDir: path.join(root, `apps/${app}/src/styles`),
  fontCssOutputPath: path.join(root, `apps/${app}/src/styles/${FONT_NAME}.css`),
}));

// woff 파일 복사
appsConfig.forEach(({ fontWoffOutputDir }) => {
  fs.copySync(fromFontDir, fontWoffOutputDir);
});
console.log('✅ Copied Pretendard .woff2 files to public directories');

// styles 디렉토리 생성 및 css 복사
appsConfig.forEach(({ styleOutputDir, fontCssOutputPath }) => {
  fs.ensureDirSync(styleOutputDir);
  fs.copyFileSync(fromCssFile, fontCssOutputPath);
});
console.log('✅ Copied Pretendard CSS file to src/styles directories');
