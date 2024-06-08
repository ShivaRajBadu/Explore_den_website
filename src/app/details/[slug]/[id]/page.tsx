import AddressSection from "@/components/detail_page/AddressSection";
import ImageCarousel from "@/components/detail_page/customCarousel/ImageCarousel";
import Details from "@/components/detail_page/Details";
import ProgramInfo from "@/components/detail_page/ProgramInfo";
import ReviewSection from "@/components/detail_page/review/reviewSection";
import YouMayLike from "@/components/detail_page/YouMayLike";
import Navigation from "@/components/headers/Navigation";

import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const images = [
    "/images/blog.jpg",
    "/images/image_2.jpg",
    "/images/image.png",
  ];
  return (
    <div className="max-w-[1440px] mx-auto  w-full md:w-[90%]">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-[40%]">
          <ImageCarousel images={images} />
        </div>
        <div className="w-full lg:w-[60%] px-4">
          <Details />
        </div>
      </div>
      <div className="px-4">
        <YouMayLike />
        <ReviewSection />
      </div>
    </div>
  );
};

export default page;
