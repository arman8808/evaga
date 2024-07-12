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
    keyframes: {
      bounceIn: {
        "0%, 100%": { transform: "scale(0.95)" },
        "50%": { transform: "scale(1.05)" },
      },
    },
    animation: {
      bounceIn: "bounceIn 0.5s ease-in-out",
    },
    screens: {
      mobile: { min: "320px", max: "639px" },
      tablet: { min: "640px", max: "767px" },
      // => @media (min-width: 640px) { ... }
      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
    },
  },
  plugins: [],
};
