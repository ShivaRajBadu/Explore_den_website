import React from "react";
import Wrapper from "../Wrapper";
import TextSkeleton from "./TextSkeleton";
import CardSkeleton from "./CardSkeleton";

const PopularSectionSkeleton = () => {
  return (
    <div className="py-4 my-4">
      <Wrapper>
        <div className="flex justify-between items-center py-4 md:py-10">
          <TextSkeleton />
          <TextSkeleton />
        </div>
        <div
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))" }}
          className="flex lg:grid gap-x-6 px-1 py-2 gap-y-12 flex-nowrap hide_scrollbar overflow-x-scroll "
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((popular) => {
            return <CardSkeleton key={popular} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default PopularSectionSkeleton;
