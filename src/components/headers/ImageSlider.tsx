import { randomNumber } from "@/lib/randomNumber";
import { placeDataType } from "@/types";
import Image from "next/image";
import React, { memo } from "react";

type Props = {
  imageProp: placeDataType;
  height?: string;
  width?: string;
};

const ImageSlider = memo(
  ({ height = "h-[440px]", width = "w-[280px]", imageProp }: Props) => {
    const isCenterImage = height === "h-[341px] lg:h-[440px]";
    const applyAnimation = isCenterImage ? "fade-in" : "";
    const imageUrl =
      imageProp.images.length > 0
        ? imageProp.images[0].imageUrl
        : `https://picsum.photos/200/300?random=${randomNumber()}`;

    return (
      <div
        draggable="false"
        className={`relative border w-full  rounded-[19px] shadow-lg p-1 ${applyAnimation}  `}
      >
        <div
          draggable="false"
          className={`relative ${height} ${width} bg-[#f90062]/40 rounded-[19px] overflow-hidden`}
        >
          <img
            draggable="false"
            src={imageUrl}
            alt="ExploreDen images"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>

        {isCenterImage && (
          <div className="absolute bottom-1 rounded-b-[19px] left-1/2 -translate-x-1/2 w-[95%] h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
        )}
        {isCenterImage && (
          <div className="absolute w-full bottom-3 left-0 px-4 text-background">
            <p className="text-[8px] bg-brand px-2 py-[2px] font-bold mb-2 rounded-full w-min">
              {imageProp.category}
            </p>
            <h3 className="text-base font-medium leading-5 pb-2">
              {imageProp.name}
            </h3>
            {/* <p className="text-[10px] font-normal">
              Distance: {distance}, Time: After {timeInDays} days
            </p> */}
          </div>
        )}
      </div>
    );
  }
);

ImageSlider.displayName = "ImageSlider";

export default ImageSlider;
