import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        rose: {
          "50": "#fcf3f7",
          "100": "#fae9f1",
          "200": "#f7d3e2",
          "300": "#f2afca",
          "400": "#e97da6",
          "500": "#de5686",
          "600": "#cc3664",
          "700": "#b0264c",
          "800": "#92223f",
          "900": "#7a2138",
          "950": "#4a0d1c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
