/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d72128",
      },
      screens: {
        phone: { max: "900px", min: "640px" }, //this also triggers on an iPad held with home button facing down
        tablet: "901px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
