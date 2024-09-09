/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      hero: ['var(--font-nanum-gothic)'],
      puradak: ['var(--font-puradak)'],
      dodum: ['var(--font-gowun-dodum)'],
      crimson: ['var(--font-crimson-pro)'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
