module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        sushi: "#76FADD",
        darkSushi: "#52BBA4",
        dark: "#202020",
        semiDark: "#2A2A2A",
        fontDark: "#BBBBBB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
