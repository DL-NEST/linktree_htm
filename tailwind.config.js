/** @type {import('tailwindcss').Config} */
/* eslint-disable */

module.exports = {
  // dark切换模式
  darkMode: "class",
  // 预览模式
  mode: "jit",
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      // dp: "1280px",
      // // => @media (min-width: 1280px) { ... }
    },
    extend: {
      // 添加自定义颜色
      colors: {
        bga: {
          light: "#014c72",
          dark: "#a5dffc",
        },
        fork: {
          light: "#5865F2",
          dark: "#5865F2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
