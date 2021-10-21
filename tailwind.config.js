const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "about-img":
          "url('https://images.pexels.com/photos/1001676/pexels-photo-1001676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        "footer-img":
          "url('https://images.pexels.com/photos/5865/healthy-spring-young-green-5865.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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
