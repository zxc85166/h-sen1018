const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "about-img":
          "url('https://images.pexels.com/photos/1001676/pexels-photo-1001676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1920')",
        "footer-img":
          "url('https://images.pexels.com/photos/5865/healthy-spring-young-green-5865.jpg?auto=compress&cs=tinysrgb&dpr=2&w=1920')",
        "contact-img":
          "url('https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1920')",
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
  plugins: [require("daisyui")],
};
