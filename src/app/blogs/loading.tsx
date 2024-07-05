import CardSkeleton from "@/components/skeletons/CardSkeleton";
import TextSkeleton from "@/components/skeletons/TextSkeleton";
import Wrapper from "@/components/Wrapper";
import { Metadata } from "next";
import React from "react";

const loading = () => {
  return (
    <Wrapper>
      <div className=" my-4 min-h-screen">
        <div className="flex justify-between items-center">
          <TextSkeleton width="w-48 h-6" borderRadius="rounded-xl" />
        </div>
        <div className=" animate-pulse  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  xl:grid-rows-2  gap-x-10 gap-y-8 py-10">
          <div className="bg-gray-300 rounded-2xl xl:col-span-2 xl:row-span-2 h-[600px]"></div>
          <div className="bg-gray-300  rounded-2xl  xl:col-span-2"></div>
          <div className="bg-gray-300 rounded-2xl  xl:col-span-2"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default loading;
