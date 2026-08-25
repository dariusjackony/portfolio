import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Providers from "./provider";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Darius Jackony",
  description:
    "I am Jackony Darius, a full-stack developer specializing in React, Next.js, React Native, and Django.",
  keywords: [
    "Darius Jackony",
    "React Developer",
    "Next.js",
    "React Native",
    "Web Developer Uganda",
  ],
  icons: {
    icon: "/logo.png",
  },
};
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
       className={inter.variable}
      suppressHydrationWarning
    >
      <body>
        
        <Providers>
          <Script
          src="https://app.fastbots.ai/embed.js"
          data-bot-id="cmt92yuzm038ro11pqj5cesz4"
          strategy="afterInteractive"
        />
          <Navbar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
