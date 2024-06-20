/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

