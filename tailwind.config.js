/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    extend: {
      colors: {
        dark: "#22272e",
        "bg-dark": "#4c535b",
        lightText: "white",
        primary: "#5d75df",
        "primary-dark": "#a5b0bb"
      }
    }
  },
  plugins: []
};
