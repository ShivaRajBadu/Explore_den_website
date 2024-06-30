import { Imagetype } from "@/types";
import Image from "next/image";
import React from "react";

const Model = ({
  images,
  setOpen,
  initialIndex,
}: {
  images: Imagetype[];
  setOpen: any;
  initialIndex: number;
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const prevImage = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="fixed z-40 px-2 md:px-10 inset-0 w-full h-full bg-black/70 flex justify-center items-center">
      {/* close button svg */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
        className="absolute right-4 top-4  border-2 cursor-pointer border-[#A1A1AA] rounded-full p-2 w-min"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 4.5L4.5 16.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 4.5L16.5 16.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* left arrow */}
      <button
        disabled={currentIndex === 0}
        onClick={prevImage}
        className="bg-background border-2 cursor-pointer border-[#A1A1AA] rounded-full p-2 w-min disabled:cursor-not-allowed disabled:opacity-50"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8208 19.5L8.3208 12L15.8208 4.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="w-[90%] md:w-[80%] aspect-[9/16] md:aspect-video mx-auto shadow-lg">
        <div className="relative z-50 w-full h-full rounded-lg overflow-hidden">
          <img
            src={images[currentIndex].imageUrl}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* right arrow */}
      <button
        disabled={currentIndex === images.length - 1}
        onClick={nextImage}
        className="bg-background border-2 cursor-pointer border-[#A1A1AA] rounded-full p-2 w-min disabled:cursor-not-allowed disabled:opacity-50"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          className="rotate-180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8208 19.5L8.3208 12L15.8208 4.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Model;
