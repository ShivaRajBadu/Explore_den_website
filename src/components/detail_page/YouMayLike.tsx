"use client";

import React, { useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { placeDataType, placeType } from "@/types";
import { getNeighbouringPlaces, getPlaces } from "@/actions/getPlaces";
import { usePathname } from "next/navigation";
import CardSkeleton from "../skeletons/CardSkeleton";
import { useQuery } from "@tanstack/react-query";

// Dynamically import the Card component
const Card = dynamic(() => import("../main_page/Card"), { ssr: false });

const YouMayLike = () => {
  const pathName = usePathname();

  // const slug = pathName.split("/")[2];
  const placeId = parseInt(pathName.split("/")[3]);
  const {
    data: YouMayLike,
    isLoading,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["YouMayLike", placeId],
    queryFn: () => getNeighbouringPlaces(placeId),
    refetchOnWindowFocus: false,
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="my-20">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl text-textPrimary font-semibold">
          You May Also Like
        </h2>
        <div className="flex gap-4 my-6">
          {/* left arrow */}
          <button
            onClick={scrollLeft}
            className="bg-background border-2 cursor-pointer border-[#A1A1AA] rounded-full p-2 w-min disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8208 19.5L8.3208 12L15.8208 4.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* right arrow */}
          <button
            onClick={scrollRight}
            className="bg-background border-2 cursor-pointer border-[#A1A1AA] rounded-full p-2 w-min disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 25 24"
              className="rotate-180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8208 19.5L8.3208 12L15.8208 4.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          style={{ overflow: "hidden" }}
          className="flex gap-5   py-2  min-h-[400px]"
        >
          {isLoading || isFetching ? (
            Array.from({ length: 8 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          ) : isError ? (
            <div className="text-center text-textPrimary text-lg">
              Error loading data.
            </div>
          ) : (
            <div
              ref={scrollContainerRef}
              className="flex gap-5  py-2 hide_scrollbar overflow-x-scroll px-1 min-h-[400px]"
            >
              {YouMayLike?.map((place) => (
                <Card key={place.id} params={place} isFromDetails={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YouMayLike;
