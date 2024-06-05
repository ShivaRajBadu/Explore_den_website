import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        brand: "rgba(var(--brand), <alpha-value>)",
        blue: "rgba(var(--blue), <alpha-value>)",
        subTitle: "rgba(var(--sub-title), <alpha-value>)",
        "background-purple": "rgba(var(--background-purple), <alpha-value>)",
        background: "rgba(var(--background), <alpha-value>)",
        foreground: "rgba(var(--foreground) , <alpha-value>)",
        textPrimary: "rgba(var(--text-primary) , <alpha-value>)",
        textSecondary: "rgba(var(--text-secondary) , <alpha-value>)",
        icongreen: "rgba(var(--icon-green) , <alpha-value>)",
        iconblue: "rgba(var(--icon-blue) , <alpha-value>)",
        iconpurple: "rgba(var(--icon-purple) , <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
