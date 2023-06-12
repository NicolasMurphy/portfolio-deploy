/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: [
      "corporate",
      "business",
    ],
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
