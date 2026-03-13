import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lucas Guptill - Full Stack Developer",
  description:
    "Junior Full Stack Developer specializing in C#, Java, Next.js, React, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-[#03040a] font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
