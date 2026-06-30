import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import ConditionalWrapper from "./components/layout/ConditionalWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Radio Budi Luhur",
  description: "Radionya Generasi Cerdas Berbudi Luhur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Skip to Content Link for Accessibility */}
        <a
          href="#main_content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:bg-[#FFDD00] focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:font-bold focus:shadow-xl transition-all"
        >
          Skip to Content
        </a>

        {/* 1. Navbar, Main, dan Footer dibungkus di ConditionalWrapper untuk menyembunyikannya di /studio */}
        <ConditionalWrapper>
          {children}
        </ConditionalWrapper>
      </body>
    </html>
  );
}
