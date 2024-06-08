import Navigation from "@/components/headers/Navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default layout;
