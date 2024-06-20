/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
        '4xl': '2750px',
        '5xl': '3500px',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

