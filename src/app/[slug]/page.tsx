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
    placeType: placeType.DESTINATION,
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
      {datas.length > 0 ? (
        <PlaceList key={query} initialData={datas!} query={query} />
      ) : (
        <div className="flex justify-center text-center flex-col items-center h-screen">
          <p className="text-brand text-4xl font-bold pb-8">Oops !</p>
          <p className="text-textSecondary text-xl">
            No Data Found, Please change filter
          </p>
        </div>
      )}
    </Wrapper>
  );
};

export default page;
