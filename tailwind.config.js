/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'thrones-silver': '#4f5152',
        'sterling': '#e2e5e6'
      },
      backgroundColor: {
        'redbull': '#00192d',
      }
    },
  },
  darkMode: "class",
  plugins: [],
}

