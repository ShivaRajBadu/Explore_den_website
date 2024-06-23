import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";
import Card from "./Card";
import SectionHeaderWithViewAll from "./SectionHeaderWithViewAll";

import { placeType } from "@/types";
import { getPlaces } from "@/actions/getPlaces";
import { getRandomNumber } from "@/lib/getRandom";

const DestinationSection = async () => {
  const { data: Destinations } = await getPlaces({
    limit: 4,
    placeType: placeType.DESTINATION,
    pageNumber: 1,
  });

  return (
    <div className="my-4 py-4">
      <Wrapper>
        <SectionHeaderWithViewAll
          sectionTitle="Destinations"
          link="/destination"
        />
        <div className="flex gap-5 flex-nowrap hide_scrollbar overflow-x-scroll  py-2 px-1">
          {Destinations.map((destination) => {
            return <Card {...destination} key={destination.id} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default DestinationSection;
