/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      sm: "640px", // Small screens (phones)
      md: "768px", // Medium screens (tablets)
      lg: "1024px", // Large screens (laptops/desktops)
      xl: "1280px", // Extra large screens
    },
  },
  plugins: [],
};
