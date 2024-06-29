import React from "react";
import Wrapper from "../Wrapper";
import Card from "./Card";

import SectionHeaderWithViewAll from "./SectionHeaderWithViewAll";

import { placeType } from "@/types";
import { getPlaces } from "@/actions/getPlaces";
import { getRandomNumber } from "@/lib/getRandom";

const PopularSection = async () => {
  const { data: populars } = await getPlaces({
    limit: 8,
    placeType: placeType.DESTINATION,
    pageNumber: getRandomNumber(20),
  });

  return (
    <div className="py-4 my-4">
      <Wrapper>
        <SectionHeaderWithViewAll sectionTitle="Popular" link="/popular" />
        <div
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(315px,1fr))" }}
          className="flex lg:grid gap-x-6 px-1 py-2 gap-y-12 flex-nowrap hide_scrollbar overflow-x-scroll "
        >
          {populars!.map((popular, index) => {
            return <Card params={popular} key={popular.id} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default PopularSection;
