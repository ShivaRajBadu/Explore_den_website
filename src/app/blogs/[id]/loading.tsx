import TextSkeleton from "@/components/skeletons/TextSkeleton";
import Wrapper from "@/components/Wrapper";
import React from "react";

const loading = () => {
  return (
    <Wrapper>
      <div className=" my-4 min-h-screen py-10">
        <TextSkeleton
          width="w-40 h-6 mb-10 text-center mx-auto"
          borderRadius="rounded-xl"
        />
        <TextSkeleton
          width="w-[50%] h-6 mb-10 text-center mx-auto"
          borderRadius="rounded-xl"
        />
        <TextSkeleton
          width="w-[60%] h-14 text-center mx-auto"
          borderRadius="rounded-xl"
        />
        <div className="animate-pulse flex space-x-4 mx-auto w-max mt-10">
          <div className="rounded-full bg-gray-200 h-14 w-14"></div>
          <div className="flex-1 space-y-3 py-2">
            <div className="h-3 w-24 bg-gray-200 rounded"></div>
            <div className="h-3 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="bg-gray-300 rounded-2xl  mt-16 h-[600px]"></div>
        <div className="bg-gray-300 rounded-2xl  mt-16 h-[100px]"></div>
      </div>
    </Wrapper>
  );
};

export default loading;
