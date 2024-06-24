import { getPlace, getPlaces } from "@/actions/getPlaces";
import ImageCarousel from "@/components/detail_page/customCarousel/ImageCarousel";
import Details from "@/components/detail_page/Details";

import ReviewSection from "@/components/detail_page/review/reviewSection";
import YouMayLike from "@/components/detail_page/YouMayLike";
import { notFound } from "next/navigation";

import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const place = await getPlace(parseInt(params.id));

  if (!place) {
    return notFound();
  }

  return (
    <div className="max-w-[1440px] mx-auto  w-full md:w-[90%] my-6">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-[40%]">
          <ImageCarousel images={place.images} />
        </div>
        <div className="w-full lg:w-[60%] px-4">
          <Details {...place} />
        </div>
      </div>
      <div className="px-4">
        <YouMayLike />
        <ReviewSection reviews={place.reviews} />
      </div>
    </div>
  );
};

export default page;
