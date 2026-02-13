import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FCFCEA",
        paperAlt: "#F8F9FA",
        midnight: "#102A43",
        burgundy: "#A11111",
        gold: "#D4AF37",
      },
      fontFamily: {
        serif: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
