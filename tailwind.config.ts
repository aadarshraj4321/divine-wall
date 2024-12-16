import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chakraRoot: '#B71C1C',
        chakraSacral: '#F57C00',
        chakraSolar: '#FFEB3B',
        chakraHeart: '#43A047',
        chakraThroat: '#1E88E5',
        chakraThirdEye: '#8E24AA',
        chakraCrown: '#AB47BC',
      },
    },
  },
  darkMode: 'class',  // This enables dark mode based on the 'dark' class
  plugins: [],
} satisfies Config;
