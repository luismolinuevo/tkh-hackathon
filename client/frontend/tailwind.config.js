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
      },
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
}

