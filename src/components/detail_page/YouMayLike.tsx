"use client";

import React, { useRef, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import { getPlaces } from "@/utils/api/api";
import { placeDataType, placeType } from "@/types";
import { getMorePlaces } from "@/actions/getMorePlaces";

// Dynamically import the Card component
const Card = dynamic(() => import("../main_page/Card"), { ssr: false });

const YouMayLike = async ({ places }: { places: placeDataType[] }) => {
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

  // const places = await getMorePlaces({ limit: 9, pageNumber: 1, placeType });

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
      <div
        ref={scrollContainerRef}
        className="flex gap-5 flex-nowrap py-2 hide_scrollbar overflow-x-scroll px-1"
      >
        {places.map((place) => {
          return <Card key={place.id} {...place} />;
        })}
      </div>
    </div>
  );
};

export default YouMayLike;
