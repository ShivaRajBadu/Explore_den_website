import React from "react";
import { notFound } from "next/navigation";

import { placeType, Slug } from "@/types";

import PlaceList from "@/components/category_page/PlaceList";
import { getPlaces } from "@/actions/getPlaces";

const page = async ({ params }: { params: { slug: string } }) => {
  // checking if the slug is valid
  if (!Object.values(Slug).includes(params.slug as Slug)) {
    notFound();
  }
  let slug = params.slug;
  if (params.slug === "popular") {
    slug = "event";
  }

  const datas = await getPlaces({
    limit: 16,
    placeType: slug as placeType,
    pageNumber: 1,
  });

  return <PlaceList initialData={datas!} />;
};

export default page;
