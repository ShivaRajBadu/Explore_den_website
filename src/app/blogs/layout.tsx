import SubscribeSection from "@/components/bolgs/SubscribeSection";
import Navigation from "@/components/headers/Navigation";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      {children}
      <SubscribeSection />
    </div>
  );
};

export default layout;
