/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        "green-background": "#459858",
        "green-highlight": "#AEDA38",
        "white-highlight": "#FFFFFF",
        "bright-green-highlight": "#41D261",
        "dull-green-background": "rgba(204, 219, 207, 0.40)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      screens: {
        smmd: "704px",
        mdlg: "896px",
      },
      keyframes: {
        slide: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        wiggle: "slide 1s ease-in-out",
      },
      boxShadow: {
        "3xl": "0 10px 10px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
        // green:
        //   "8px 8px 15px -5px #AEDA38 ",
        green:
        "3px 5px 10px -3px #AEDA38"
      },
    },
  },
  plugins: [],
};
