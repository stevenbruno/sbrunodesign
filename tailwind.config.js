module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
    },
    fontFamily: {
      serif: ["Cormorant", "ui-serif", "Georgia"],
      sans: ["SF Pro Text", "ui-sans-serif", "system-ui"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
