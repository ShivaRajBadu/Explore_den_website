"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import { initialImages } from "@/constants/data";

const MainCarousel = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(initialImages.length / 2)
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [rotation, setRotation] = useState(0);
  const autoplayRef = useRef<any>(null);

  useEffect(() => {
    const screenWatch = window.matchMedia("(max-width: 1024px)");
    const handleChange = (e: any) => {
      setIsTabletOrMobile(e.matches);
    };

    handleChange(screenWatch); // Initial check
    screenWatch.addEventListener("change", handleChange);

    return () => {
      screenWatch.removeEventListener("change", handleChange);
    };
  }, []);

  const startDrag = (clientX: React.SetStateAction<number>) => {
    setIsDragging(true);
    setStartX(clientX);
    stopAutoplay();
  };

  const onDrag = (clientX: number) => {
    if (isDragging) {
      const newTranslateX = clientX - startX;
      setTranslateX(newTranslateX);
      const newRotation = newTranslateX > 0 ? 15 : -15;
      setRotation(newRotation);
    }
  };

  const endDrag = () => {
    if (isDragging) {
      if (translateX > 100 && rotation === 15) {
        prevImage();
      } else if (translateX < -100) {
        nextImage();
      }
      setTranslateX(0);
      setIsDragging(false);
      setRotation(0);
      startAutoplay();
    }
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      rotateCenterImage();
    }, 2000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const rotateCenterImage = () => {
    setRotation(6);
    setTimeout(() => {
      setRotation(0);
      prevImage();
    }, 700);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const translatePosition = useCallback(
    (index: number) => {
      const baseOffset = isTabletOrMobile ? 170 : 220; // base offset
      const extraOffset = 70; // Extra space

      const positionIndex =
        (index - currentIndex + images.length) % images.length;

      const centerIndex = Math.floor(images.length / 2);

      const commonStyles = {
        top: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        transition: "transform 0.5s ease-in-out",
      };

      if (positionIndex === centerIndex) {
        return {
          ...commonStyles,
          left: "50%",
          transform: `translateX(-50%) translateY(-50%) rotate(${rotation}deg)`,
        };
      } else {
        const offset =
          baseOffset * (positionIndex - centerIndex) +
          extraOffset * Math.sign(positionIndex - centerIndex);
        return {
          ...commonStyles,
          left: `calc(50% + ${offset}px)`,
          transition:
            positionIndex === 0 || positionIndex === images.length - 1
              ? "none"
              : "left 0.8s ease-in-out, transform 1s ease-in-out",
        };
      }
    },
    [isTabletOrMobile, rotation, currentIndex, images.length]
  );

  return (
    <div
      className="relative pt-20 pb-14 lg:pt-24 lg:pb-20 overflow-hidden noselect"
      onMouseMove={(e) => onDrag(e.clientX)}
      onMouseUp={endDrag}
      onTouchEnd={endDrag}
      onTouchMove={(e) => onDrag(e.touches[0].clientX)}
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
        className="relative w-[287px] h-[555px] lg:h-[684px] lg:w-[335px] mx-auto z-10"
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
        const positionIndex =
          (index - currentIndex + images.length) % images.length;
        const centerIndex = Math.floor(images.length / 2);
        const imageHeight =
          positionIndex === centerIndex
            ? "h-[341px] lg:h-[440px]"
            : "h-[216px] lg:h-[315px]";
        const imageWidth =
          positionIndex === centerIndex
            ? "w-[232px] lg:w-[280px]"
            : "w-[147px] lg:w-[196px]";
        return (
          <div
            key={`${image.id}`}
            style={translatePosition(index)}
            className={`absolute z-10 ${
              positionIndex === 0 || positionIndex === images.length - 1
                ? ""
                : "transition-all duration-1000"
            }`}
            onMouseDown={(e) => startDrag(e.clientX)}
            onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          >
            <ImageSlider
              imageProp={image}
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
