import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070707",
          900: "#111111",
          800: "#1c1c1c",
          700: "#2b2b2b",
        },
        gold: {
          300: "#f0d98a",
          400: "#d9b95f",
          500: "#b89235",
          600: "#8d6e22",
        },
        smoke: {
          50: "#f8f7f4",
          100: "#ece9e1",
          300: "#c9c4b6",
          500: "#777064",
        },
      },
      boxShadow: {
        soft: "0 18px 70px rgba(0, 0, 0, 0.14)",
        glow: "0 16px 48px rgba(217, 185, 95, 0.22)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
