module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      minWidth: {
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      minHeight: {
        72: "18rem",
      },
      height: {
        supertall: "520px",
      },
      colors: {
        emailblue: "#0262A8",
        emailbg: "#C8DFF1",
      },
      fontSize: {
        sbxl: "5.5rem",
      },
    },
    fontFamily: {
      serif: ["Cormorant", "ui-serif", "Georgia"],
      sans: ["SF Pro Text", "ui-sans-serif", "system-ui"],
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
