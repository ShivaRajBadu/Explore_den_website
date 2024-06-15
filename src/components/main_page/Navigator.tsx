"use client";

import { useRouter } from "next/navigation";
import React from "react";

const CardNavigator = ({
  children,
  placeType,
  id,
  isFromDetails = false,
}: {
  children: React.ReactNode;
  placeType: string;
  id: number;
  isFromDetails?: boolean;
}) => {
  const router = useRouter();
  const handleNavigation = (e: any) => {
    if (isFromDetails) {
      e.stopPropagation();
      router.replace(`/details/${placeType}/${id}`);
    } else {
      router.push(`/details/${placeType}/${id}`);
    }
  };
  return <div onClick={handleNavigation}>{children}</div>;
};

export default CardNavigator;
