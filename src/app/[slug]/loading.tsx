import CardSkeleton from "@/components/skeletons/CardSkeleton";
import TextSkeleton from "@/components/skeletons/TextSkeleton";
import Wrapper from "@/components/Wrapper";
import React from "react";

const loading = () => {
  return (
    <Wrapper>
      <div className=" my-4 min-h-screen">
        <div className="flex justify-between items-center">
          <TextSkeleton width="w-16" borderRadius="rounded-xl" />
          <TextSkeleton width="w-32" borderRadius="rounded-xl" />
        </div>
        <div
          style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}
          className="grid gap-x-5 gap-y-12 my-6 py-6"
        >
          {[1, 2, 3, 4, , 5, 6].map((event: any) => {
            return <CardSkeleton key={event} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default loading;
