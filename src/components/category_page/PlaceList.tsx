"use client";

import React, { useMemo } from "react";
import Wrapper from "../Wrapper";
import Filter from "../Filter";

import { DataWithMetadata, placeDataType, placeType, Slug } from "@/types";
import { filterOptions } from "@/lib/filterOptionMapping";
import Card from "../main_page/Card";
import { getPlaces } from "@/actions/getPlaces";
import CardSkeleton from "../skeletons/CardSkeleton";

const PlaceList = ({
  initialData,
  query,
  isCategory,
}: {
  initialData: DataWithMetadata;
  query: string;
  isCategory?: boolean;
}) => {
  // filter out places without images
  const placesWithImages = useMemo(() => {
    return initialData.data.filter((place) => place.images.length > 0);
  }, [initialData.data]);

  const [places, setPlaces] = React.useState<placeDataType[]>(placesWithImages);

  const [pageNumber, setPageNumber] = React.useState(1);
  const [error, setError] = React.useState<null | string>(null);

  const [loading, setLoading] = React.useState(false);
  const [haveMoreData, setHaveMoreData] = React.useState(
    initialData.links.next !== undefined
  );

  const loadMoreData = async () => {
    setLoading(true);
    try {
      const newData = await getPlaces({
        limit: 16,
        placeType: initialData.data[0].placeType as placeType,
        pageNumber: pageNumber + 1,
        filter: query,
        isCategory: isCategory,
      });
      if (newData) {
        if (newData.links.next === undefined) {
          setHaveMoreData(false);
        } else {
          setHaveMoreData(true);
        }
        // filter out places without images
        const filteredData = newData.data.filter(
          (place) => place.images.length > 0
        );
        setPlaces((prev) => [...prev, ...filteredData]);
        setPageNumber((prev) => prev + 1);
      }
    } catch (error) {
      setError(`Something went wrong. Please try again later.
        ${error}
        `);
    }
    setLoading(false);
  };

  const skeletonCards = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, index) => (
        <CardSkeleton key={index} />
      )),
    []
  );

  return (
    <>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}
        className="grid gap-x-5 gap-y-12 my-6 py-6"
      >
        {places!.map((data) => {
          return <Card {...data} key={data.id} />;
        })}
        {loading && skeletonCards}
      </div>
      {error && <div className="text-red-500 text-center py-4">{error}</div>}
      <div className="flex justify-center pb-12 pt-5">
        <button
          disabled={loading || !haveMoreData}
          onClick={loadMoreData}
          className={`border border-brand text-brand font-semibold text-base px-16 py-3 rounded-lg duration-500 ${
            loading || !haveMoreData
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-brand/70 hover:text-background"
          }`}
        >
          {loading ? "Loading..." : "View More"}
        </button>
      </div>
    </>
  );
};

export default PlaceList;
