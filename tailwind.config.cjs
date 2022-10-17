/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.ts",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: 10,
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
    },
    colors: {
      white: "#FFFFFF",
      "yellow-400": "#FACC15",
      "gray-300": "#D3D3D3",
      "gray-400": "#CBCBCB",
      "gray-800": "#52525B",
      "violet-800": "#662977",
      "violet-600": "#66297780",
      "red-400": "#f87171",
      black: "#000000",
      to: "#ef6c00",
      psico: "#8e24aa",
      fono: "#f6bf26",
      psicopedag: "#000000",
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
