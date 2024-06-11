import CardSkeleton from "@/components/skeletons/CardSkeleton";
import ImageCarouselSkeleton from "@/components/skeletons/ImageCarouselSkeleton";
import TextSkeleton from "@/components/skeletons/TextSkeleton";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto  w-full md:w-[90%]">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-[40%]">
            <ImageCarouselSkeleton />
          </div>
          <div className="w-full lg:w-[60%] px-4">
            <TextSkeleton width="w-full " height="h-8" borderRadius="rounded" />
            <div className="py-4"></div>
            <TextSkeleton width="w-full " height="h-4" borderRadius="rounded" />
            <div className="py-4"></div>
            <TextSkeleton
              width="w-full "
              height="h-32"
              borderRadius="rounded"
            />
            <div className="py-4"></div>
            <TextSkeleton
              width="w-full "
              height="h-32"
              borderRadius="rounded"
            />
          </div>
        </div>
        <div className="px-4">
          {/* <YouMayLike places={suggestion} /> */}
          {/* <ReviewSection /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
