/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2A2D31'
        },
        secondary: {
          500: '#FFFDF9'
        }
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'konstant': ['Kontsant Grotesk'],
      },
      screens: {
        '3xl': "1800px"
      }
    },
  },
  plugins: [],
}
