import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          dark: "#121212",
          surface: "#171717",
          card: "#151515",
          border: "#242424",
          "border-subtle": "#1E1E1E",
          yellow: "#F5C400",
          "yellow-hover": "#FFD633",
          "yellow-muted": "#3D3405",
          "yellow-glow": "rgba(245, 196, 0, 0.15)",
          gray: {
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#E5E5E5",
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
            950: "#0D0D0D",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, #1F1F1F 1px, transparent 1px), linear-gradient(to bottom, #1F1F1F 1px, transparent 1px)",
      },
      boxShadow: {
        "yellow-sm": "0 0 15px -3px rgba(245, 196, 0, 0.15)",
        "yellow-md": "0 0 25px -5px rgba(245, 196, 0, 0.25)",
        "yellow-lg": "0 0 35px -5px rgba(245, 196, 0, 0.35)",
        "card": "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
