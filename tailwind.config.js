const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        spin: "spin 6s linear infinite",
      },
      colors: {
        //主色綠色兩版本
        green: colors.trueGreen,
        green: {
          200: "#5a8349",
          100: "#7d9d6d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
