import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter", // Custom variable name
  subsets: ["latin"],
});

export const metadata = {
  title: "Voyex",
  description: "Voyex Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-black scroll-container scrollbar-hide`}
      >
        {children}
      </body>
    </html>
  );
}
