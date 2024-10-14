/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mono": ["Xanh Mono", "monospace"],
        "roboto": ["Roboto Flex", "sans-serif"],
        "syne" : ["Syne", "sans-serif"]
      },
      colors: {
        background: "var(--background)",
        background_darker: "var(--background-darker)",
        primary: "var(--primary)",
        primary_tint: "var(--primary-tint)",
        border: "var(--border)",
        warning: "var(--warning)",
        grey_surface: "var(--grey-surface)",
        grey_inactive: "var(--grey-inactive)",

      },
    },
  },
  plugins: [],
};
