/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'phone': {'max': "450px"},
        'sm': {'max': '1280px' }
      }
    },
  },
  plugins: [],
}