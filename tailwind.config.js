import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0071e3",
          50: "#f5f9ff",
          100: "#e6f3ff",
          200: "#bfdeff",
          300: "#99c9ff",
          400: "#66adff",
          500: "#3392ff",
          600: "#0071e3",
          700: "#005abc",
          800: "#004494",
          900: "#002d6d",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        gray: {
          50: "#f5f5f7",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#86868b",
          500: "#6e6e73",
          600: "#1d1d1f",
          700: "#000000",
        },
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      fontSize: {
        display: [
          "56px",
          {
            lineHeight: "1.07143",
            letterSpacing: "-0.005em",
            fontWeight: "600",
          },
        ],
        headline: [
          "48px",
          {
            lineHeight: "1.08349",
            letterSpacing: "-0.003em",
            fontWeight: "600",
          },
        ],
        title: [
          "40px",
          {
            lineHeight: "1.1",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
        subtitle: [
          "28px",
          {
            lineHeight: "1.14286",
            letterSpacing: ".007em",
            fontWeight: "400",
          },
        ],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        apple: "14px",
      },
      boxShadow: {
        apple:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "apple-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "apple-xl":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      maxWidth: {
        "apple-container": "980px",
      },
    },
  },
  plugins: [forms, aspectRatio],
};
