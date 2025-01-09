import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter", // Custom variable name
  subsets: ["latin"],
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
