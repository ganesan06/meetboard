import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0D1117",
        surface: "#161B22",
        "surface-raised": "#1C2229",
        border: {
          DEFAULT: "#30363D",
          subtle: "#21262D",
        },
        ink: {
          DEFAULT: "#E6EDF3",
          muted: "#8B949E",
          faint: "#6E7681",
        },
        accent: {
          DEFAULT: "#2EA043",
          soft: "#1B2C20",
          border: "#2EA04366",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      borderRadius: {
        md: "8px",
        lg: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
