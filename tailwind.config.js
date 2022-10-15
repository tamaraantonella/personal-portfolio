/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color_bg_variant: "#feeed9",
        color_primary: "#db9b07",
        color_primary_variant: "#f8b823",
        color_bg: "#2a2a2e",
        color_white: "#ffffff",
        color_light: "#dddfdc",
        color_bg_variant2: "#de791e",
        color_primary2: "#00a0e2",
        color_primary_variant2: "#f8b823",
      },
      fontFamily: {
        sans: ["Helvetica", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
