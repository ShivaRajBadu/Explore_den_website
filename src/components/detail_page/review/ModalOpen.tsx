"use client";
import Model from "@/components/Model";
import { Imagetype } from "@/types";
import React from "react";

const ModalOpen = ({
  children,
  images,
  currentIndex,
}: {
  children: React.ReactNode;
  images: Imagetype[];
  currentIndex: number;
}) => {
  const [open, setOpen] = React.useState(false);
  const modalToggle = (value: boolean) => {
    console.log("called");
    console.log(value);
    setOpen(value);
  };
  return (
    <div className="badu" onClick={() => modalToggle(true)}>
      {children}
      {open && (
        <Model
          setOpen={modalToggle}
          images={images}
          initialIndex={currentIndex}
        />
      )}
    </div>
  );
};

export default ModalOpen;
