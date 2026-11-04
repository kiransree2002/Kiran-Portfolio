/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3F6FA",
        ink: { DEFAULT: "#0E1B2E", soft: "#52627A" },
        night: { DEFAULT: "#0A1424", raised: "#111F36", line: "#22324D" },
        cobalt: { DEFAULT: "#2F54EB", light: "#8FB0FF" },
      },
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
