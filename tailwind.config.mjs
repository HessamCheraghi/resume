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
      xs: "8pt",
      sm: "9pt",
      base: "10pt",
      lg: "12pt",
      xl: "32pt",
    },
    spacing: {
      0: "0in",
      1: "0.0625in",
      2: "0.125in",
      4: "0.25in",
      8: "0.5in",
      16: "1in",
    },
  },
  plugins: [],
};
