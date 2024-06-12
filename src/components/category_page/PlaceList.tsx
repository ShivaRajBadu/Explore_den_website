"use client";

import React from "react";
import Wrapper from "../Wrapper";
import Filter from "../Filter";

import { placeDataType, placeType, Slug } from "@/types";
import { filterOptions } from "@/lib/filterOptionMapping";
import Card from "../main_page/Card";
import { getPlaces } from "@/actions/getPlaces";
import CardSkeleton from "../skeletons/CardSkeleton";

const PlaceList = ({
  initialData,
  query,
}: {
  initialData: placeDataType[];
  query: string;
}) => {
  const [places, setPlaces] = React.useState<placeDataType[]>(initialData);

  const [pageNumber, setPageNumber] = React.useState(1);

  const [loading, setLoading] = React.useState(false);

  const loadMoreData = async () => {
    setLoading(true);
    const newPlaces = await getPlaces({
      limit: 16,
      placeType: initialData[0].placeType as placeType,
      pageNumber: pageNumber + 1,
      filter: query,
    });

    if (newPlaces) {
      setPlaces((prev) => [...prev, ...newPlaces]);
      setPageNumber((prev) => prev + 1);
    }
    setLoading(false);
  };

  return (
    <>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}
        className="grid gap-x-5 gap-y-12 my-6 py-6"
      >
        {places!.map((data) => {
          return <Card {...data} key={data.id} />;
        })}
        {loading &&
          Array.from({ length: 16 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
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
    </>
  );
};

export default PlaceList;
