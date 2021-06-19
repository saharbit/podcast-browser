const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      beige: "#f5eddd",
      "beige-dark": "#ccc5b8",
      "beige-darker": "#8c877e",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
