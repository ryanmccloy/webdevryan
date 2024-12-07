export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#2A292E",
        secondary: "#E5E5E5",
        background: "#F9F9F9",
        accent: "#73BFFC",
      },
      borderRadius: {
        custom: "20px",
      },
      spacing: {
        10: "10px",
        15: "15px",
        30: "30px",
        60: "60px",
        90: "90px",
        150: "150px",
      },
    },
  },
  plugins: [],
};
