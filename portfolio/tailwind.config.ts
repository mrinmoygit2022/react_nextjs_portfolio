import { transform } from "next/dist/build/swc";
import { Oswald } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        oswald: ["var(--font-oswald)"],
        pixel: ["var(--font-pixel)"],
      },
      backgroundImage: {
        "grain": "url(/assets/images/background/noisy-background-5.png)",
      },
      animation:{
        "noisy-bg":"noise 36s steps(2) infinite",
      },
      keyframes: {
        noise: {
          "0%": {
            transform: "translate3d(0, 8rem, 0)",
          },
          "10%": {
            transform: "translate3d(-2rem, -3rem, 0)",
          },
          "20%": {
            transform: "translate3d(-7rem, 3rem, 0)",
          },
          "30%": {
            transform: "translate3d(0, -8rem, 0)",
          },
          "40%": {
            transform: "translate3d(-3rem, 6rem, 0)",
          },
          "50%": {
            transform: "translate3d(-8rem, -3rem, 0)",
          },
          "60%": {
            transform: "translate3d(-3rem, 5rem, 0)",
          },
          "70%": {
            transform: "translate3d(-6rem, -7rem, 0)",
          },
          "80%": {
            transform: "translate3d(-8rem, 2rem, 0)",
          },
          "90%": {
            transform: "translate3d(-5rem, -4rem, 0)",
          },
          to: {
            transform: "translate3d(-6rem, 0, 0)",
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
