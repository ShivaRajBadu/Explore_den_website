import SubscribeSection from "@/components/bolgs/SubscribeSection";
import Navigation from "@/components/headers/Navigation";
import React from "react";

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
