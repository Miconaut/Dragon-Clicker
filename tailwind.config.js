/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'h-min': { 'raw': '(max-height: 1000px)'},
        'w-br': '1400px',
        'xs': { 'raw': '(max-width: 425px)'}
      },

      fontFamily: {
        'grobold': ['Grobold', 'sans-serif']
      },

      colors: {
        'darkRed': '#4e0000',
        'lightRed': '#e5dbdb',

        'lightBg': '#ac9292',
        'darkBg': '#836f6f',
        'darkBgHover': '#746363',

        'darkBorder': '#635454',

        'gray': '#c5c5c5',
        'green': '#00cf00'
      },
    },
  }
}
