import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Noto Serif"', ...defaultTheme.fontFamily.serif],
      },
    },
    fontSize: {
      xs: ["8pt", "10pt"],
      sm: ["9pt", "12pt"],
      base: ["10pt", "14pt"],
      lg: ["12pt", "16pt"],
      xl: ["32pt", "36pt"],
    },
    spacing: {
      0: "0in",
      1: "0.0625in",
      2: "0.125in",
      3: "0.1875in",
      4: "0.25in",
      8: "0.5in",
      16: "1in",
    },
  },
  plugins: [],
};
