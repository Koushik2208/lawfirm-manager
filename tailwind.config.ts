import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#F3F4F6", // Light grey for backgrounds
        foreground: "#1E293B", // Dark grey for primary text
        card: {
          DEFAULT: "#E5E7EB", // Light neutral for cards
          foreground: "#374151", // Dark neutral for text on cards
        },
        popover: {
          DEFAULT: "#F9FAFB", // Slightly brighter neutral for popups
          foreground: "#111827", // Text color for popovers
        },
        primary: {
          DEFAULT: "#1E40AF", // Navy for primary elements
          foreground: "#E0F2FE", // Light color for text on primary
        },
        secondary: {
          DEFAULT: "#64748B", // Muted blue-grey for secondary elements
          foreground: "#F8FAFC", // Light text for secondary
        },
        muted: {
          DEFAULT: "#D1D5DB", // Soft grey for muted elements
          foreground: "#4B5563", // Subtle text color
        },
        accent: {
          DEFAULT: "#F59E0B", // Gold for highlights and CTAs
          foreground: "#92400E", // Dark text on accents
        },
        destructive: {
          DEFAULT: "#DC2626", // Red for errors or warnings
          foreground: "#7F1D1D", // Dark text on red backgrounds
        },
        border: "#E5E7EB", // Light grey for borders
        input: "#F3F4F6", // Input background color
        ring: "#3B82F6", // Ring color for focus states
        chart: {
          "1": "#3B82F6", // Primary chart color
          "2": "#60A5FA", // Secondary chart color
          "3": "#93C5FD", // Tertiary chart color
          "4": "#BFDBFE", // Additional chart color
          "5": "#DBEAFE", // Additional chart color
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
