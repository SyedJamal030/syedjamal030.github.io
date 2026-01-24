export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // This is critical
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
