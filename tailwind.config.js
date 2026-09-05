/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F6F2EA",
          dim: "#EFE9DD",
        },
        stone: {
          DEFAULT: "#E4DBC9",
          dark: "#C9BB9E",
        },
        charcoal: {
          DEFAULT: "#211D18",
          soft: "#332C24",
        },
        brass: {
          DEFAULT: "#A8823D",
          light: "#CBA55F",
          deep: "#7C5E2A",
        },
        wine: {
          DEFAULT: "#5B1F27",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
}
