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
      'myeongjo': ['NanumMyeongjo'],
      'main': ['SOYOMapleBoldTTF']
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
