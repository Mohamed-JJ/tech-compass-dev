import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AmbientGlow } from "@/components/AmbientGlow";
import { AiWidget } from "@/components/AiWidget";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Fondex IT Solutions | We Architect & Ship Scalable Software",
  description: "Expert software engineers and designers building scalable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased font-outfit`} suppressHydrationWarning>
        <AmbientGlow />
        <AiWidget />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
