module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sushi: "#76FADD",
        darkSushi: "#52BBA4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
