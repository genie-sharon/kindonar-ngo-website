import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./store/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-blush": "#FFF6F7",
        "powder-pink": "#FCEEEF",
        "warm-rose-mist": "#F9E3E6",
        "pearl-white": "#FFFDFC",
        "cloud-cream": "#FAF7F5",
        "rich-cocoa": "#2B1E22",
        "soft-mauve-gray": "#5C4A50",
        "dusty-rose-slate": "#8C747B",
        "elegant-rose": "#E88C9A",
        "deep-rose": "#D96C83",
        "champagne-gold": "#D9B88F",
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
      backgroundImage: {
        "blush-gradient": "linear-gradient(180deg, #FFF6F7 0%, #FFFDFC 100%)",
        "rose-gradient": "linear-gradient(180deg, #F9E3E6 0%, transparent 100%)",
        "champagne-glow": "radial-gradient(ellipse at top, rgba(217,184,143,0.15) 0%, transparent 70%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "drift": "drift 20s linear infinite",
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        drift: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-100%)" } },
      },
    },
  },
  plugins: [],
};

export default config;
