import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { "brand-navy": "#17324d", "brand-blue": "#0b78c1", "brand-green": "#16a34a", "brand-mist": "#eef7ff" },
      boxShadow: { soft: "0 12px 30px rgba(23,50,77,.10)" }
    }
  },
  plugins: []
};
export default config;
