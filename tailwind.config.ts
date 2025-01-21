import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream : "#FFF3E3",
        myColor : "#B88E2F",
        gray:"#666666",
        light :"#FCF8F3",
        cream2 : "#F9F1E7",
        grey: "#F4F5F7",
        textColor : "#9F9F9F",
      },
      screens : {
        'xs' : "480px",
        'sm' : "640px",
        'md' : "768px",
        'lg' : "1024px",
        'xl' : "1280px",
        '2xl' : "1536px",
      }
    },
  },
  plugins: [],
} satisfies Config;
