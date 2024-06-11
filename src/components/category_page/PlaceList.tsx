"use client";

import React from "react";
import Wrapper from "../Wrapper";
import Filter from "../Filter";

import { placeDataType, placeType, Slug } from "@/types";
import { filterOptions } from "@/lib/filterOptionMapping";
import Card from "../main_page/Card";
import { getPlaces } from "@/actions/getPlaces";

const PlaceList = ({ initialData }: { initialData: placeDataType[] }) => {
  const filterOption = filterOptions[initialData[0].placeType as Slug];

  const [places, setPlaces] = React.useState<placeDataType[]>(initialData);

  const [pageNumber, setPageNumber] = React.useState(1);

  const [selectedFilter, setSelectedFilter] = React.useState(filterOption[0]);

  const [loading, setLoading] = React.useState(false);

  const filterHandler = (value: { value: string; label: string }) => {
    setSelectedFilter(value);
  };
  const loadMoreData = async () => {
    setLoading(true);
    const newPlaces = await getPlaces({
      limit: 16,
      placeType: initialData[0].placeType as placeType,
      pageNumber: pageNumber + 1,
    });

    if (newPlaces) {
      setPlaces((prev) => [...prev, ...newPlaces]);
      setPageNumber((prev) => prev + 1);
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-textPrimary text-4xl font-semibold capitalize">
          {initialData[0].placeType}
        </h1>
        <Filter
          options={filterOption}
          selectedFilter={selectedFilter}
          setSelectedFilter={filterHandler}
          contentWidth="w-[180px]"
          contentPadding="px-4 py-3"
        />
      </div>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}
        className="grid gap-x-5 gap-y-12 my-6 py-6"
      >
        {places!.map((data) => {
          return <Card {...data} key={data.id} />;
        })}
      </div>
      <div className="flex justify-center pb-12 pt-5">
        <button
          disabled={loading}
          onClick={loadMoreData}
          className="border disabled:cursor-not-allowed border-brand text-brand font-semibold text-base  px-16 py-3 rounded-lg hover:bg-brand/70 hover:text-background duration-500"
        >
          {loading ? "Loading..." : "View More"}
        </button>
      </div>
    </Wrapper>
  );
};

export default PlaceList;
