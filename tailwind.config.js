/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js, jsx}",
    "./components/**/*.{js, jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["LexendGiga", "sans-serif"],
        mona: ["MonaSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};