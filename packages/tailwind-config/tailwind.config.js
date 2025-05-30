/** @type {import('tailwindcss').Config} */
const baseConfig = {
  theme: {
    extend: {
      colors: {
        brand: '#f00',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }], // font-size: 10px, line-height: 16px
        xs: ['0.75rem', { lineHeight: '1rem' }], // font-size: 12px, line-height: 16px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // font-size: 14px, line-height: 20px
        base: ['1rem', { lineHeight: '1.5rem' }], // font-size: 16px, line-height: 24px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // font-size: 18px, line-height: 28px
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // font-size: 20px, line-height: 28px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // font-size: 24px, line-height: 32px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // font-size: 30px, line-height: 36px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // font-size: 36px, line-height: 40px
      },
    },
  },
  plugins: [],
};

export default baseConfig;
