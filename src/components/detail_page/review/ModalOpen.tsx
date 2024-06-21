"use client";
import Model from "@/components/Model";
import { Imagetype } from "@/types";
import React, { useEffect } from "react";

const ModalOpen = ({
  children,
  images,
  currentIndex,
  className,
}: {
  children: React.ReactNode;
  images: Imagetype[];
  currentIndex: number;
  className?: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const modalToggle = (value: boolean) => {
    setOpen(value);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <div className={className} onClick={() => modalToggle(true)}>
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
