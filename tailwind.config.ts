import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text:"var(--text)",
        background:"var(--background)",
        primary:"var(--primary)",
        secondary:"var(--secondary)",
        accent:"var(--accent)",
        grey:"var(--grey)",
        fade:"var(--fade)",
      },
    },
  },
  plugins: [],
};
export default config;
