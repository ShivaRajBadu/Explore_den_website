import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";

import Script from "next/script";
import Provider from "@/components/Provider";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Explore Den",
    template: "%s | Explore Den",
  },
  description:
    " ExploreDen is a comprehensive platform for all travel enthusiasts. We use an innovative approach to help travelers discover the best local destinations, hidden gems, adventures, and events. Our mobile app works in being able to help travelers find EADs rapidly with left or right swipes on EADs within the app, within seconds, without the headache of going through the old school way. Join ExploreDen today for curated travel guides and itineraries, seamless booking of unique experiences, connecting with fellow adventurers, and much more! Contact",
  keywords: ["Travel", "Exploration", "Destination", "Events", "Activities"],
  metadataBase: new URL("https://exploreden.com.au/"),
  openGraph: {
    title: "ExploreDen",
    description:
      "ExploreDen is a comprehensive platform for all travel enthusiasts. We use an innovative approach to help travelers discover the best local destinations, hidden gems, adventures, and events. Our mobile app works in being able to help travelers find EADs rapidly with left or right swipes on EADs within the app, within seconds, without the headache of going through the old school way. Join ExploreDen today for curated travel guides and itineraries, seamless booking of unique experiences, connecting with fellow adventurers, and much more! Contact",
    url: "https://exploreden.com.au/",
    siteName: "Exploreden.com.au",
    images: [
      {
        url: "/icons/logo.svg",
        alt: "openGraph image",
      },
      {
        url: "/icons/logo_white.svg",
        alt: "openGraph image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <NextTopLoader color="#EB3A66" initialPosition={0.15} height={5} />
        <Provider>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
