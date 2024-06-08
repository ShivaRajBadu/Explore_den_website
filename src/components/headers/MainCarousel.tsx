"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

const MainCarousel = () => {
  const images = [
    "/images/slider_image_1.png",
    "/images/slider_image_2.png",
    "/images/slider_image_3.png",
    "/images/slider_image_4.jpg",
    "/images/slider_image_5.jpg",
    "/images/slider_image_6.jpg",
    "/images/slider_image_7.jpg",
    "/images/slider_image_8.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(images.length / 2)
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1024px)");
    const handleChange = (e: any) => {
      setIsTabletOrMobile(e.matches);
    };

    handleChange(mql); // Initial check
    mql.addEventListener("change", handleChange);

    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, []);

  const startDrag = (clientX: React.SetStateAction<number>) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const onDrag = (clientX: number) => {
    if (isDragging) {
      setTranslateX(clientX - startX);
    }
  };

  const endDrag = () => {
    if (isDragging) {
      if (translateX > 50) {
        prevImage();
      } else if (translateX < -50) {
        nextImage();
      }
      setTranslateX(0);
      setIsDragging(false);
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const translatePosition = (index: number) => {
    const baseOffset = isTabletOrMobile ? 170 : 220; // Base offset in px
    const extraOffset = 70; // Extra space for the first left and right images in px

    if (index === currentIndex) {
      return {
        left: "50%",
        top: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        zIndex: 1,
      };
    } else if (index === currentIndex - 1 || index === currentIndex + 1) {
      const offset = baseOffset + extraOffset;
      return {
        left: `calc(50% ${
          index < currentIndex ? `- ${offset}px` : `+ ${offset}px`
        })`,
        top: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        zIndex: 0,
      };
    } else {
      const offset = baseOffset * Math.abs(currentIndex - index) + 70;
      return {
        left: `calc(50% ${
          index < currentIndex ? `- ${offset}px` : `+ ${offset}px`
        })`,
        top: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        zIndex: 0,
      };
    }
  };

  return (
    <div
      className="relative pt-24 pb-14 lg:pt-36  lg:pb-20  overflow-hidden noselect"
      onMouseMove={(e) => onDrag(e.clientX)}
      onTouchMove={(e) => onDrag(e.touches[0].clientX)}
      onMouseUp={endDrag}
      onTouchEnd={endDrag}
    >
      {/* background wave */}
      <Image
        draggable="false"
        className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
        src="/icons/wave.svg"
        height={600}
        width={600}
        alt="wave"
        sizes="(90vw, 90vh)"
      />
      {/* mobile markup */}
      <div
        draggable="false"
        className="relative w-[287px] mb-8 lg:mb-12  h-[555px] lg:h-[684px] lg:w-[335px] mx-auto z-0"
      >
        <Image
          draggable="false"
          src="/mobile_markup.png"
          alt="markup"
          fill
          priority
          sizes="(100vw, 100vh)"
        />
      </div>
      {images.map((image, index) => {
        const imageHeight =
          index === currentIndex
            ? "h-[341px] lg:h-[440px]"
            : "h-[216px] lg:h-[315px]";
        const imageWidth =
          index === currentIndex
            ? "w-[232px] lg:w-[280px]"
            : "w-[147px] lg:w-[196px]";
        return (
          <div
            key={index}
            style={translatePosition(index)}
            className="absolute z-10"
            onMouseDown={(e) => startDrag(e.clientX)}
            onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          >
            <ImageSlider
              imageSrc={image}
              height={imageHeight}
              width={imageWidth}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MainCarousel;
