import "./globals.css";

export const metadata = {
  title: "Voyex",
  description:
    "Voyex is the ultimate superapp for discovering AI tools and building custom workflows tailored to your needs. Effortlessly find, use, and query the right tools to create your own mini agency by simply describing your use case.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased scroll-container scrollbar-hide overflow-hidden md:bg-[url('/stars.svg.svg')] sm:bg-[#0a0a0b] w-full h-full bg-cover bg-no-repeat bg-fixed bg-center bg-origin-content"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {children} {/* Content layer */}
      </body>
    </html>
  );
}
