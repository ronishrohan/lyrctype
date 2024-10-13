/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
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
