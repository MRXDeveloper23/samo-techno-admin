/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#325ECD",
      },
      fontFamily: {
        nunito: ["Nunito", "Sans-serif"],
        ptsans: ["PT Sans", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
