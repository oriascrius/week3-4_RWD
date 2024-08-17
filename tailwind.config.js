/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
    "./**/*.jsx",
    "./**/*.ts",
    "./**/*.tsx",
    "./**/*.ejs",
    "./index.html",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Noto Sans TC", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#AA0601",
        "primary-Dark": "#650300",
        secondary: "#FBF2F2",
        "custom-gray": "#DEE2E6",
        brown: "#B75929",
        "brown-dark": "#5F3E2D",
        "custom-black": "#212529",
      },
      backgroundImage: {
        banner: "url('/assets/images/home-header.png')",
        "sm-banner": "url('/assets/images/home-header-sm.png')",
        "sm-index": "url('/assets/images/index-bg-sm.png')",
        "lg-index": "url('/assets/images/index-bg.png')",
      },
      boxShadow: {
        "custom-shadow": "0px 2px 6px rgba(0, 0, 0, 0.16)",
      },
      borderRadius: {
        "custom-top": "4px 4px 0 0",
        "custom-bootom": "0 0 4px 4px",
      },
    },
  },
};
