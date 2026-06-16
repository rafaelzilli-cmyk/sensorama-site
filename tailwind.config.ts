import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2F5BFF',
          green: '#43E58E',
          black: '#000000',
          'near-black': '#000000',
          'dark-gray': '#2A2A2A',
          'med-gray': '#6B6B6B',
          'light-gray': '#F5F5F5',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Unbounded', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'marquee-left': 'marquee-left 38s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
