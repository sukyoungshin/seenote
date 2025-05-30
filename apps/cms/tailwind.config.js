import baseConfig from '@repo/tailwind-config';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [baseConfig],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
};
