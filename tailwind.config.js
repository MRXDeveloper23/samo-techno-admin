/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#325ECD",
        "row-odd": "rgba(50, 94, 205, 0.1)",
        "row-even": "rgba(210, 223, 255, 0.1)",
        "search-background": "rgba(32, 67, 90, 0.1)",
      },
      fontFamily: {
        nunito: ["Nunito", "Sans-serif"],
        ptsans: ["PT Sans", "Sans-serif"],
        montserrat: ["Montserrat", "Sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    function ({ addComponents }) {
      addComponents({
        ".tableHeader": {
          "& thead > tr > th": {
            backgroundColor: "rgba(95, 106, 144, 0.3) !important",
            textAlign: "center !important",
            fontSize: "16px",
            fontFamily: "Montserrat",
            fontWeight: 600,
          },
          "& thead > tr": {
            border: "none !important",
            borderRadius: "20px 20px 0 0 !important",
          },
          "& tbody > tr:last-child": {
            borderRadius: "0 0 20px 20px !important",
          },
        },
        ".checkoutTableHeader": {
          "& thead > tr > th": {
            backgroundColor: "rgba(95, 106, 144, 0.3) !important",
            textAlign: "center !important",
            fontSize: "20px",
            fontFamily: "Montserrat",
            fontWeight: 600,
          },
          "& thead > tr": {
            border: "none !important",
            borderRadius: "0 !important",
          },
          "& tbody > tr:last-child": {
            borderRadius: "0 0 30px 30px !important",
          },
        },
      });
    },
  ],
};
