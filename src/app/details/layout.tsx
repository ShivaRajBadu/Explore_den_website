import { getPlace } from "@/actions/getPlaces";
import Navigation from "@/components/headers/Navigation";
import { Metadata, ResolvingMetadata } from "next";
import NextTopLoader from "nextjs-toploader";
import React from "react";

const DetailsPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <NextTopLoader color="#EB3A66" initialPosition={0.15} height={5} />
      <Navigation />
      {children}
    </div>
  );
};

export default DetailsPageLayout;
