import Image from "next/image";
import React from "react";

const ImageSlider = ({
  imageSrc,
  height = "h-[440px]",
  width = "w-[280px]",
}: {
  imageSrc: string;
  height?: string;
  width?: string;
}) => {
  const addAnimation =
    height === "h-[341px] lg:h-[440px]" && width === "w-[232px] lg:w-[280px]"
      ? "transition-all duration-500"
      : "";
  return (
    <div
      draggable="false"
      className="relative border  rounded-[19px] shadow-lg   p-1"
    >
      <div
        draggable="false"
        className={`relative ${height} ${width} ${addAnimation} rounded-[19px] overflow-hidden `}
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
};

export default ImageSlider;
