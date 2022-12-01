/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color_bg_variant: "#000",
        color_primary: "#ffb768",
        color_primary_variant: "#ffebcd",
        color_bg: "#2a2a2e",
        color_white: "#ffffff",
        color_light: "#dddfdc",


      },
      fontFamily: {
        sans: ["Helvetica", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
