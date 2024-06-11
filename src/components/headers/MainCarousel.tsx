"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

const MainCarousel = () => {
  // const initialImages = [
  //   "/images/slider_image_1.png",
  //   "/images/slider_image_2.png",
  //   "/images/slider_image_3.png",
  //   "/images/slider_image_4.jpg",
  //   "/images/slider_image_5.jpg",
  //   "/images/slider_image_6.jpg",
  //   "/images/slider_image_7.jpg",
  //   "/images/slider_image_8.jpg",
  //   "/images/slider_image_9.jpg",
  // ];
  const initialImages = [
    {
      id: 1,
      title: "Lorem   porttitor enim. Nulla facilisi. Mauris atrices.",

      image: "https://picsum.photos/200/300?random=1",
      type: "hiking",
      distance: "3.89KM",
      timeInDays: 3,
    },
    {
      id: 2,
      title: "dapibus purus sed, porttitor enim. Nulla facilisi.",
      image: "https://picsum.photos/200/300?random=2",
      type: "hotel",
      distance: "1.89KM",
      timeInDays: 2,
    },
    {
      id: 3,
      title: "elit. Donec at purus aliquam, dapibus purus sed,",
      image: "https://picsum.photos/200/300?random=3",
      type: "park",
      distance: "7KM",
      timeInDays: 5,
    },
    {
      id: 4,
      title: "ipsum dolor sit amet, consectetur adipiscing",
      image: "https://picsum.photos/200/300?random=4",
      type: "beach",
      distance: "2.4KM",
      timeInDays: 8,
    },
    {
      id: 5,
      title: " nibh ut dolor tincidunt ul",
      image: "https://picsum.photos/200/300?random=5",
      type: "Natural",
      distance: "10.3KM",
      timeInDays: 10,
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet consectetur",
      image: "https://picsum.photos/200/300?random=6",
      type: "Concert",
      distance: "18.8KM",
      timeInDays: 3,
    },
    {
      id: 7,
      title: "adipisicing elit. Exercitationem, eaque?",
      image: "https://picsum.photos/200/300?random=7",
      type: "hotel",
      distance: "49KM",
      timeInDays: 9,
    },
    {
      id: 8,
      title: " nibh ut dolor tincidunt ul",
      image: "https://picsum.photos/200/300?random=8",
      type: "hotel",
      distance: "3.4KM",
      timeInDays: 2,
    },
    {
      id: 9,
      title: "ipsum dolor sit amet, consectetur adipiscing",
      image: "https://picsum.photos/200/300?random=9",
      type: "hotel",
      distance: "5KM",
      timeInDays: 1,
    },
  ];

  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(initialImages.length / 2)
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  const [rotation, setRotation] = useState(0);

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
    }
  };

  const nextImage = () => {
    setImages((prevImage) => {
      const newImages = [...prevImage];
      const firstImage = newImages.shift();

      newImages.push(firstImage!);
      return newImages;
    });
  };

  const prevImage = () => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const lastImage = newImages.pop();

      newImages.unshift(lastImage!);
      return newImages;
    });
  };

  const translatePosition = useCallback(
    (index: number) => {
      const baseOffset = isTabletOrMobile ? 170 : 220; // base offset
      const extraOffset = 70; // Extra space

      const commonStyles = {
        top: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        transition: "transform 0.5s ease-in-out",
      };

      if (index === currentIndex) {
        return {
          ...commonStyles,
          left: "50%",
          transform: `translateX(-50%) translateY(-50%) rotate(${rotation}deg)`,
        };
      } else if (index === currentIndex - 1 || index === currentIndex + 1) {
        const offset = baseOffset + extraOffset;
        return {
          ...commonStyles,
          left: `calc(50% ${
            index < currentIndex ? `- ${offset}px` : `+ ${offset}px`
          })`,
        };
      } else {
        const offset = baseOffset * Math.abs(currentIndex - index) + 70;
        return {
          ...commonStyles,
          left: `calc(50% ${
            index < currentIndex ? `- ${offset}px` : `+ ${offset}px`
          })`,
        };
      }
    },
    [isTabletOrMobile, rotation]
  );

  return (
    <div
      className="relative pt-20 pb-14 lg:pt-24  lg:pb-20  overflow-hidden noselect"
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
        className="relative w-[287px]  h-[555px] lg:h-[684px] lg:w-[335px] mx-auto z-0"
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
            key={`${image.image}`}
            style={translatePosition(index)}
            className="absolute z-10"
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
