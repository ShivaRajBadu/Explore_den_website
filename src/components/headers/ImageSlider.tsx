import Image from "next/image";
import React, { memo } from "react";

const ImageSlider = memo(
  ({
    imageSrc,
    height = "h-[440px]",
    width = "w-[280px]",
  }: {
    imageSrc: string;
    height?: string;
    width?: string;
  }) => {
    const applyAnimation = height === "h-[341px] lg:h-[440px]" ? "fade-in" : "";

    return (
      <div
        draggable="false"
        className={`relative border  rounded-[19px] shadow-lg p-1 ${applyAnimation}  `}
      >
        <div
          draggable="false"
          className={`relative ${height} ${width} rounded-[19px] overflow-hidden`}
        >
          <Image
            draggable="false"
            src={imageSrc}
            alt="image"
            fill
            sizes="(100vw, 100vh)"
          />
        </div>
      </div>
    );
  }
);

export default ImageSlider;
