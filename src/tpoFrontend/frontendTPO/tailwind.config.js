/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#F1F7EE",
          100: "#E6F0E0",
          200: "#CBE0BD",
          300: "#B3D19E",
          400: "#9AC27F",
          500: "#80B25E",
          600: "#669447",
          700: "#4C6E35",
          800: "#324823",
          900: "#1A2612",
          950: "#0C1108",
        },
        brown: {
          50: "#F2F1E3",
          100: "#E5E2C7",
          200: "#CCC68F",
          300: "#B2A957",
          400: "#7E773A",
          500: "#484421",
          600: "#38351A",
          700: "#2A2813",
          800: "#1C1A0D",
          900: "#0E0D06",
          950: "#070703",
        },
      },
       keyframes: {
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }
          }
        },
        animation: {
          typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
        }
      },
    },
  plugins: [],
};
