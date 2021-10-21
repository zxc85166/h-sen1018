const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "about-img":
          "url('https://images.unsplash.com/photo-1634758696052-ed89125c792c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80')",
        "footer-img": "url('/img/footer-texture.png')",
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
