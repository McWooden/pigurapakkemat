/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#091f48',
        secondary: '#a65c37',
        base: '#e9e4de',
      }
    },
  },
  plugins: [],
}