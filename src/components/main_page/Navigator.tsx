"use client";

import { useRouter } from "next/navigation";
import React from "react";

const CardNavigator = ({
  children,
  placeType,
  id,
}: {
  children: React.ReactNode;
  placeType: string;
  id: number;
}) => {
  const router = useRouter();
  const handleNavigation = (e: any) => {
    router.replace(`/details/${placeType}/${id}`);
  };
  return <div onClick={handleNavigation}>{children}</div>;
};

export default CardNavigator;
