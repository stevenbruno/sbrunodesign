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
        blaze: "420px",
      },
      colors: {
        emailblue: "#0262A8",
        emailbg: "#C8DFF1",
        babyblue: "#EEF2F8",
        toast: "#ff4c00",
      },
      fontSize: {
        fourrem: "4rem",
        sbxl: "5rem",
      },
      screens: {
        projwrap: "1168px",
      },
      animation: {
        blob: "blob 9s linear infinite",
      },
      animation: {
        gradient: "gradient 4s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": {
            transform: "translate(300px, -500px) scale(1.3) skewY(15deg)",
          },
          "50%": { transform: "translate(760px, 0px) scale(1.6)" },
          "75%": {
            transform: "translate(400px, 240px) scale(1.3) skewY(-15deg)",
          },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        gradient: {
          "50%": {
            color: "#2563EB",
          },
        },
      },
      fontFamily: {
        serif: ["Cormorant", "ui-serif", "Georgia"],
        sans: ["SF Pro Text", "ui-sans-serif", "system-ui"],
        cursive: ["Allura", "ui-cursive"],
      },
      width: {
        fourhundo: "400%",
        blaze: "420",
      },
    },
    variants: {
      extend: { backgroundColor: ["active"] },
    },
    plugins: [],
  },
};
