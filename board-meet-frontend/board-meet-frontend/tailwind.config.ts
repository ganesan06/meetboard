import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        app: '#F5F8FE',
        ink: '#0E1A36',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 4px 16px rgba(37, 99, 235, 0.05)',
        note: '0 1px 2px rgba(16, 24, 40, 0.08), 0 6px 14px rgba(16, 24, 40, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
