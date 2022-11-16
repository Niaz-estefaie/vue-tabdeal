/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#efba0b",
        secondary: {
          lightest: "#f6f7fa",
          light: "#cacccf",
          DEFAULT: "#27272a",
          darkest: "#1a1c1f",
        },
        brown: "#b28b09",
        "btn-secondary": "#bfbaa3",
        "btn-hover": "#292929",
      },
    },
  },
  plugins: [],
};
