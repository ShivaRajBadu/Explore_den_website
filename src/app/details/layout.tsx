import Navigation from "@/components/headers/Navigation";
import React from "react";

const DetailsPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default DetailsPageLayout;