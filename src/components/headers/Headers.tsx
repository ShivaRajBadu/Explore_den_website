"use client";

import React from "react";

const Headers = ({
  children,
  background,
}: {
  children: React.ReactNode;
  background: string;
}) => {
  return (
    <>
      <header
        className={`${background} min-h-screen mx-auto w-full relative z-50  `}
      >
        {children}
      </header>
    </>
  );
};

export default Headers;
