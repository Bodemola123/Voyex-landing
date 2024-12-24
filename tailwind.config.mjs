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
        background: "var(--background)",  // Ensure these are defined in your CSS
        foreground: "var(--foreground)",  // Ensure these are defined in your CSS
      },
    },
    screens: {
      sm: "380px", // Small screens (phones) with minimum width of 380px
      md: "768px", // Medium screens (tablets)
      lg: "1024px", // Large screens (laptops/desktops)
      xl: "1280px", // Extra large screens
    },
  },
  plugins: [],
};
