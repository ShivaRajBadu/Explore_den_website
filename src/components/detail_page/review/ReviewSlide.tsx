import React from "react";

const ReviewSlide = ({
  reviewNumber,
  slideWidth,
}: {
  reviewNumber: number;
  slideWidth: number;
}) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <p className="text-textSecondary text-base font-medium">{reviewNumber}</p>
      <div className="bg-[#E7E4E5] rounded-[80px] w-full h-2 relative">
        <div
          style={{ width: `${slideWidth}%` }}
          className="bg-brand  h-2 rounded-[4px] absolute"
        ></div>
      </div>
    </div>
  );
};

export default ReviewSlide;
