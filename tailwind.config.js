/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'blue1': '#90e0ef'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

