import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0057FF",
          purple: "#7B2FFF",
          cyan: "#00D4FF",
        },
        dark: {
          900: "#06080F",
          800: "#0A0D16",
          700: "#0D1117",
          600: "#111827",
          500: "#1A2235",
          border: "#1E2A3A",
          border2: "#263040",
        },
        text: {
          white: "#F0F6FF",
          muted: "#6B7A99",
          dim: "#4A5568",
        }
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #0057FF, #7B2FFF)',
        'gradient-cyan': 'linear-gradient(135deg, #00D4FF, #0057FF)',
        'gradient-warm': 'linear-gradient(135deg, #FF6B35, #F7C948)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-jakarta)'],
        mono: ['var(--font-grotesk)'],
      },
    },
  },
  plugins: [],
};

export default config;
