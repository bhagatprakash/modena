/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(./assect/Images/banner-baground-Image.jpg)",
        hight: "h-full",
      },
      boxShadow: {
        insetcustom: "inset 0 0 0 2000px rgba(0, 0,0, 0.56)",
      },
      screens: {
        "1025-1165": { min: "1025px", max: "1165px" },
      },
      colors: {
        primary: "#ee0181",
      },
    },
  },
  safelist: ["container"],
  plugins: [],
};
