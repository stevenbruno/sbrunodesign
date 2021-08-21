module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
        "-9": "-9",
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
        babyblue: "#EEF2F8",
      },
      fontSize: {
        sbxl: "5.5rem",
      },
      screens: {
        projwrap: "1168px",
      },
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(240px, -80px) scale(1.2)" },
          "66%": { transform: "translate(160px, -160px) scale(.8)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      fontFamily: {
        serif: ["Cormorant", "ui-serif", "Georgia"],
        sans: ["SF Pro Text", "ui-sans-serif", "system-ui"],
      },
      width: {
        fourhundo: "400%",
      },
    },
    variants: {
      extend: { backgroundColor: ["active"] },
    },
    plugins: [],
  },
};
