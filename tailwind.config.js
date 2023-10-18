/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'thrones-silver': '#4f5152',
        'sterling': '#e2e5e6'
      },
    },
  },
  darkMode: "class",
  plugins: [require("./node_modules/tw-elements/dist/plugin.cjs")]
}

