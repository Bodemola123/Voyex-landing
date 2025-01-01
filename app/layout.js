import { Inter } from "next/font/google";
import "./globals.css";
import ShootingStars from "@/components/common/ShootingStars";
import Snowfall from "@/components/common/SnowFall";
import Animate from "@/components/common/animate";
import StarBackground from "@/components/common/StarBackground";


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
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      </head>
      <body
        className={`${inter.variable} antialiased scroll-container scrollbar-hide w-full overflow-hidden`}
      >
        <StarBackground/>
        <Animate/>
        <Snowfall/>
        {children}
      </body>
    </html>
  );
}
