import Filter from "@/components/Filter";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { notFound } from "next/navigation";

import { Slug } from "@/types";
import { filterOptions } from "@/lib/filterOptionMapping";
import Card from "@/components/main_page/Card";

const page = ({ params }: { params: { slug: string } }) => {
  // checking if the slug is valid
  if (!Object.values(Slug).includes(params.slug as Slug)) {
    notFound();
  }

  return (
    <Wrapper>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-textPrimary text-4xl font-semibold capitalize">
          {params.slug}
        </h1>
        <Filter
          options={filterOptions[params.slug as Slug]}
          contentWidth="w-[180px]"
          contentPadding="px-4 py-3"
        />
      </div>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}
        className="grid gap-x-5 gap-y-12 my-6 py-6"
      >
        {Array.from({ length: 16 }).map((_, index) => {
          return <Card cardType={params.slug} key={index} />;
        })}
      </div>
      <div className="flex justify-center pb-12 pt-5">
        <button className="border border-brand text-brand font-semibold text-base  px-16 py-3 rounded-lg">
          View More
        </button>
      </div>
    </Wrapper>
  );
};

export default page;
