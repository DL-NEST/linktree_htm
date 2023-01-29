/** @type {import('tailwindcss').Config} */
/* eslint-disable */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/views/**/*.{vue,jsx,tsx}",
    "./src/components/**/*.{vue,jsx,tsx}",
    "./src/layouts/**/*.{vue,jsx,tsx}",
  ],
  theme: {
    screens: {
      dp: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        bga:{
          light: '#014c72',
          dark: '#a5dffc',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
