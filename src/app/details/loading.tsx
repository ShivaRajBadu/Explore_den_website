import ImageCarouselSkeleton from "@/components/skeletons/ImageCarouselSkeleton";
import TextSkeleton from "@/components/skeletons/TextSkeleton";
import Wrapper from "@/components/Wrapper";
import React from "react";

const loading = () => {
  return (
    <Wrapper>
      <div className="max-w-[1440px] min-h-screen mx-auto  w-full  pt-10 pb-32">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-[40%] max-h-96">
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
            <div className="py-4"></div>
            <TextSkeleton width="w-full " height="h-4" borderRadius="rounded" />
            <div className="py-4"></div>
            <TextSkeleton
              width="w-full "
              height="h-32"
              borderRadius="rounded"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default loading;
