"use client";

import { randomNumber } from "@/lib/randomNumber";
import { Imagetype } from "@/types";
import { useEffect, useRef, useState } from "react";
import ModalOpen from "../review/ModalOpen";

const ImageCarousel = ({ images }: { images: Imagetype[] }) => {
  const randomIndex = randomNumber();
  if (images.length === 0) {
    images = [
      {
        id: 3,
        imageKey: "random images",
        imageUrl: `https://picsum.photos/200/300?random=${randomIndex}`,
        datetimeAdded: "Now",
      },
      {
        id: 3,
        imageKey: "random images",
        imageUrl: `https://picsum.photos/200/300?random=${randomIndex}`,
        datetimeAdded: "Now",
      },
    ];
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    thumbnailsRef.current[currentIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [currentIndex]);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      {/* main image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <ModalOpen
          images={images}
          className="w-full h-full "
          currentIndex={currentIndex}
        >
          <img
            key={images[currentIndex].imageKey}
            src={images[currentIndex].imageUrl}
            className="object-cover h-full w-full cursor-pointer "
            alt="explore den logo"
            sizes="(100vw, 100vh)"
          />
          {/* <MainImageComponent
            key={images[currentIndex].imageUrl}
            imageUrl={images[currentIndex].imageUrl}
            defaultImageUrl={`https://picsum.photos/200/300?random=${randomIndex}`}
          /> */}
        </ModalOpen>
      </div>
      <div className="flex items-center gap-6 mt-10 justify-center">
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
        {/* thumb images */}
        <div className="flex gap-4 overflow-x-scroll hide_scrollbar">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                thumbnailsRef.current[index] = el;
              }}
              onClick={() => setCurrentIndex(index)}
              className={`relative cursor-pointer  w-full min-w-[60px] h-[64px]  rounded-md overflow-hidden ${
                currentIndex === index
                  ? "border-2 border-brand"
                  : "border-2 border-transparent"
              }`}
            >
              <img
                src={image.imageUrl}
                sizes="(100vw, 100vh)"
                className="object-cover w-full h-full"
                alt="carousel image"
              />
            </div>
          ))}
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
    </div>
  );
};

export default ImageCarousel;
