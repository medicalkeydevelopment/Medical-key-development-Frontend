import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1240px",
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2E3192",
          50: "#F5F8FF",
          100: "#EAF0FF",
          200: "#CBD8F7",
          300: "#A9BBEE",
          400: "#7A8FDD",
          500: "#4E5DC0",
          600: "#2E3192",
          700: "#242670",
          800: "#1E2059",
          900: "#181A4D",
        },
        medred: {
          DEFAULT: "#ED1B24",
          50: "#FDECEC",
          100: "#FBD5D6",
          200: "#F5A9AB",
          300: "#EE7A7D",
          400: "#F14A4F",
          500: "#ED1B24",
          600: "#ED1B24",
          700: "#C71219",
          800: "#9C0E14",
        },
        surface: {
          light: "#F5F8FF",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#333333",
          muted: "#666666",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        panel: "24px",
        btn: "8px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(46, 49, 146, 0.08)",
        panel: "0 20px 60px rgba(46, 49, 146, 0.12)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
