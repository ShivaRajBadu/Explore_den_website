import Image from "next/image";
import React, { memo } from "react";
type ImageProp = {
  id: number;
  title: string;

  image: string;
  type: string;
  distance: string;
  timeInDays: number;
};
type Props = {
  imageProp: ImageProp;
  height?: string;
  width?: string;
};

const ImageSlider = memo(
  ({
    height = "h-[440px]",
    width = "w-[280px]",
    imageProp: { id, title, image, type, distance, timeInDays },
  }: Props) => {
    const applyAnimation = height === "h-[341px] lg:h-[440px]" ? "fade-in" : "";

    return (
      <div
        draggable="false"
        className={`relative border w-full  rounded-[19px] shadow-lg p-1 ${applyAnimation}  `}
      >
        <div
          draggable="false"
          className={`relative ${height} ${width} rounded-[19px] overflow-hidden`}
        >
          <Image
            draggable="false"
            src={image}
            alt="image"
            fill
            sizes="(100vw, 100vh)"
          />
        </div>
        {applyAnimation && (
          <div className="absolute bottom-1 rounded-b-[19px] left-1/2 -translate-x-1/2 w-[95%] h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
        )}
        {applyAnimation && (
          <div className="absolute w-full bottom-3 left-0 px-4 text-background">
            <p className="text-[8px] bg-brand px-2 py-[2px] font-bold mb-2 rounded-full w-min">
              {type}
            </p>
            <h3 className="text-base font-medium leading-5 pb-2">{title}</h3>
            <p className="text-[10px] font-normal">
              Distance: {distance}, Time: After {timeInDays} days
            </p>
          </div>
        )}
      </div>
    );
  }
);

ImageSlider.displayName = "ImageSlider";

export default ImageSlider;
