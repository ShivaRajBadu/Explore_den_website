import React from "react";
import { notFound } from "next/navigation";

import { placeType, Slug } from "@/types";

import PlaceList from "@/components/category_page/PlaceList";
import { getPlaces } from "@/actions/getPlaces";
import Wrapper from "@/components/Wrapper";
import Filter from "@/components/Filter";
import { filterOptions } from "@/lib/filterOptionMapping";
import { getCategories } from "@/actions/getCategory";

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
  let query;
  const dateTimeQuery = searchParams["filter.dataTime"] || null;
  const categoryQuery = searchParams["filter.category"] || null;
  let slug = params.slug;

  if (params.slug === "popular") {
    slug = "destination";
  }

  // const placeTypeGet =
  //   slug == "activity" ? placeType.DESTINATION : (slug as placeType);

  let filterOption;

  if (categoryQuery) {
    filterOption = await getCategories();

    filterOption = filterOption.map((item: string) => {
      return { value: item, label: item };
    });
  } else {
    filterOption = filterOptions[slug as Slug];
  }

  const datas = await getPlaces({
    limit: 16,
    placeType: categoryQuery ? null : (slug as placeType),
    pageNumber: 1,
    filter: categoryQuery || dateTimeQuery,
    isCategory: categoryQuery ? true : false,
  });

  query = categoryQuery || dateTimeQuery;

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
      {datas.data.length > 0 ? (
        <PlaceList
          key={query}
          isCategory={categoryQuery ? true : false}
          initialData={datas!}
          query={query}
        />
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
