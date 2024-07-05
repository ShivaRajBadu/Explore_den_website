import { getPlace, getPlaces } from "@/actions/getPlaces";
import ImageCarousel from "@/components/detail_page/customCarousel/ImageCarousel";
import Details from "@/components/detail_page/Details";

import ReviewSection from "@/components/detail_page/review/reviewSection";
import YouMayLike from "@/components/detail_page/YouMayLike";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const place = await getPlace(parseInt(params.id));

  if (!place) {
    return notFound();
  }

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen  w-full md:w-[90%] my-6">
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

export async function generateMetadata(
  { params }: { params: { id: string; slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const place = await getPlace(parseInt(params.id));
  const previousImages = (await parent).openGraph?.images || [];

  const placeImage = place
    ? place?.images.length > 0
      ? place?.images[0].imageUrl
      : ""
    : "";
  const title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: title,
    openGraph: {
      title: place ? place.name : "Exploreden Place",
      description: place
        ? place.description
        : "ExploreDen is a comprehensive platform for all travel enthusiasts. We use an innovative approach to help travelers discover the best local destinations, hidden gems, adventures, and events. Our mobile app works in being able to help travelers find EADs rapidly with left or right swipes on EADs within the app, within seconds, without the headache of going through the old school way. Join ExploreDen today for curated travel guides and itineraries, seamless booking of unique experiences, connecting with fellow adventurers, and much more! Contact",
      images: [placeImage, ...previousImages],
    },
  };
}
