/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-pink': '#fdf1f5',
        'pink': '#E35183',
        'pink-dark': '#943455',
        'black': '#1E152A',
      },
      boxShadow: {
        'sh-pink': '0 0 30px rgba(148, 52, 85, 0.2)',
      }
    },
  },
  plugins: [],
}
