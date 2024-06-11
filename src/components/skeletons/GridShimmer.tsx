import React from "react";
import Wrapper from "../Wrapper";
import CardSkeleton from "./CardSkeleton";
import TextSkeleton from "./TextSkeleton";

const GridShimmer = () => {
  return (
    <Wrapper>
      <div className="py-4 my-4">
        <div className="flex justify-between items-center py-4 md:py-10">
          <TextSkeleton width="w-24" height="h-6" borderRadius="rounded" />
          <TextSkeleton width="w-14" height="h-6" borderRadius="rounded" />
        </div>
        <div className="flex gap-5 flex-nowrap py-2 hide_scrollbar overflow-x-scroll px-1 ">
          {[1, 2, 3, 4].map((event: any) => {
            return (
              <CardSkeleton
                key={event}
                minWidth="min-w-[220px]   md:min-w-[260px] lg:min-w-[350px]"
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default GridShimmer;
