/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "media",
  theme: {
    fontFamily: {
      display: ["Titillium Web", "sans-serif"],
      body: ["Titillium Web", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-color": "#209CF5",
      },
      backgroundColor: {},    },
  },

  plugins: [],
};
