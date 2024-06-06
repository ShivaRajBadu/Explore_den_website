import AddressSection from "@/components/detail_page/AddressSection";
import ImageCarousel from "@/components/detail_page/customCarousel/ImageCarousel";
import Details from "@/components/detail_page/Details";
import ProgramInfo from "@/components/detail_page/ProgramInfo";
import ReviewSection from "@/components/detail_page/review/reviewSection";
import YouMayLike from "@/components/detail_page/YouMayLike";

import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const images = [
    "/images/blog.jpg",
    "/images/image_2.jpg",
    "/images/image.png",
  ];
  return (
    <Wrapper>
      <div className="flex gap-12">
        <div className="w-[40%]">
          <ImageCarousel images={images} />
        </div>
        <div className="w-[60%]">
          <Details />
        </div>
      </div>
      <YouMayLike />
      <ReviewSection />
    </Wrapper>
  );
};

export default page;
