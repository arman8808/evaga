/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainHeading: "#3D3D3D",
        subHeading: "#9253A6",
        textColor: "#5D5D5D",
        marqueColor: "#B0B0B0",
        white: "#fff",
      },
      fontSize: {
        Heading: "3rem",
        seconderyHeading: "2rem",
        normalHeading: "1.5rem",
        para: "1rem",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "800",
        extrabold: "900",
      },
      button: {
        normal: "bg-transparent outline-none border-[#888888] border-4",
      },
    },
  },
  plugins: [],
};
