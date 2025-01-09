import { Inter } from "next/font/google";  // Correct import for Inter font
import "./globals.css";

// Load the Inter font
const inter = Inter({
  weight: "400", // Specify the desired font weight, e.g., 400 for regular
  subsets: ["latin"], // Include latin subset
  variable: true, // Enable variable font for optimal loading
});

export const metadata = {
  title: "Voyex",
  description: "Voyex is the ultimate superapp for discovering AI tools and building custom workflows tailored to your needs. Effortlessly find, use, and query the right tools to create your own mini agency by simply describing your use case.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${inter.variable} antialiased scroll-container scrollbar-hide overflow-hidden md:bg-[url('/stars.svg.svg')] sm:bg-sm-bg bg-black w-full h-full bg-cover bg-no-repeat bg-fixed bg-center bg-origin-content`}
      >
        {children} {/* Content layer */}
      </body>
    </html>
  );
}
