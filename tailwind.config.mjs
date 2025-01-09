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
        background: "var(--background)", // Ensure these are defined in your CSS
        foreground: "var(--foreground)", // Ensure these are defined in your CSS
      },
      backgroundImage: {
        'sm-bg': "url('/mobilebg.JPG')", // Background image for small screens
        'md-bg': "url('/stars.svg')", // Background image for larger screens
        'gradient-and-darkstar':
          "url('/Visual1.svg'), linear-gradient(180deg, #000000 0%, #371866 100%)",
        'gradient-and-smview':
          "url('/smview.svg'), linear-gradient(180deg, #000000 0%, #371866 100%)",
      },
    },
    screens: {
      sm: "320px", // Small screens (phones) with minimum width of 320px
      md: "768px", // Medium screens (tablets)
      lg: "1024px", // Large screens (laptops/desktops)
      xl: "1280px", // Extra large screens
    },
  },
  plugins: [],
};
