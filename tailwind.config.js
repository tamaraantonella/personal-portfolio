/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color_bg_variant: "#2c326c",
        color_primary: "#7961ff",
        color_primary_variant: "#4d7cff66",
        color_bg: "#2a2a2e",
        color_white: "#ffffff",
        color_light: "#949693",
      },
      fontFamily: {
        sans: ["Helvetica", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
