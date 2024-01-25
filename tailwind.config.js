/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      'semi-white': '#caf0f8',
      'semiblue': '#00b4d8',
      'lightblue': '#0077b6',
      'lightblue2': '#0077b6',
      'cyan': '#00b4d8',
      'bluewish': '#023e8a',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [],
}
}