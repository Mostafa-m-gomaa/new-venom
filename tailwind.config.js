/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "dark",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      gold: "var(--gold)",
      dark: "var(--dark)",
      gray: "var(--gray)",
      lightGray: "var(--lightGray)",
      lightGold: "var(--lightGold)",
      blackGold: "var(--blackGold)",
      goldenGray: "var(--goldenGray)",
      red: "var(--red)",
      blue: "var(--blue)",
    },
  },
  plugins: [],
};
