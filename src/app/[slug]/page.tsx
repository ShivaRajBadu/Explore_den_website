import React from "react";
import { notFound } from "next/navigation";

import { placeType, Slug } from "@/types";

import PlaceList from "@/components/category_page/PlaceList";
import { getPlaces } from "@/actions/getPlaces";
import Wrapper from "@/components/Wrapper";
import Filter from "@/components/Filter";
import { filterOptions } from "@/lib/filterOptionMapping";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: any;
}) => {
  // checking if the slug is valid
  if (!Object.values(Slug).includes(params.slug as Slug)) {
    notFound();
  }
  const query = searchParams["filter.dataTime"] || null;

  let slug = params.slug;
  if (params.slug === "popular") {
    slug = "event";
  }

  const filterOption = filterOptions[slug as Slug];

  const datas = await getPlaces({
    limit: 16,
    placeType: slug as placeType,
    pageNumber: 1,
    filter: query,
  });

  return (
    <Wrapper>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-textPrimary text-4xl font-semibold capitalize">
          {slug}
        </h1>
        <Filter
          options={filterOption}
          contentWidth="w-[180px]"
          contentPadding="px-4 py-3"
        />
      </div>
      {datas ? (
        <PlaceList initialData={datas!} query={query} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1>No Data Found Please change filter</h1>
        </div>
      )}
    </Wrapper>
  );
};

export default page;
