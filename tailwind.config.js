/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'hero': ['Nanum Gothic'],
      'puradak': ['Puradak'],
      'dodum': ['Gowun Dodum'],
      'crimson': ['Crimson Pro']
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
