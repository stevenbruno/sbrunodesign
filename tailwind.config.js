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
        hero: "580px",
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
      animation: {
        blob: "blob 6s linear infinite",
      },
      // animation: {
      //   gradient: "gradient 4s linear infinite",
      // },
      keyframes: {
        // blob: {
        //   // "0%": { transform: "translate(0px, 0px) scale(1)" },
        //   // "20%": {
        //   //   transform: "translate(-240px, 24px) scale(1)",
        //   // },
        //   // "40%": { transform: "translate(-120px, 48px) scale(1)" },
        //   // "60%": { transform: "translate(-0px, 24px) scale(1)" },
        //   // "80%": { transform: "translate(0px, 0px) scale(1)" },
        //   from: { transform: "rotate(0deg) translateX(60px) rotate(0deg)" },
        //   to: { transform: "rotate(360deg) translateX(60px) rotate(-360deg)" },
        // },
        // gradient: {
        //   "50%": {
        //     color: "#2563EB",
        //   },
        // },
      },
      fontFamily: {
        serif: ["Cormorant", "ui-serif", "Georgia"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        cursive: ["Allura", "ui-cursive"],
        title: ["Unna", "ui-cursive"],
      },
      width: {
        fourhundo: "400%",
        blaze: "420px",
        project: "625px",
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024",
      xl: "1280px",
      xxl: "1440px",
    },
    variants: {
      extend: { backgroundColor: ["active"] },
    },
    plugins: [],
  },
};
