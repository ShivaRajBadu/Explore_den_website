import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Headers from "@/components/headers/Headers";

import Footer from "@/components/Footer";
import Navigation from "@/components/headers/Navigation";
import HeroSection from "@/components/headers/HeroSection";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explore Den",
  description: "Explore Den",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
