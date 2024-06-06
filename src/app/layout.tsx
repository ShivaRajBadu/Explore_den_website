import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Headers from "@/components/headers/Headers";
import DownloadSection from "@/components/main_page/DownloadSection";
import Footer from "@/components/Footer";

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
        {/* <Headers /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
