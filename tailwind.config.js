/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav_background: "#000000",
        btn_background: "rgb(59 130 246)"
      }
    },
  },
  plugins: [],
}
