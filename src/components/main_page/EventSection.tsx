import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";
import Card from "./Card";
import SectionHeaderWithViewAll from "./SectionHeaderWithViewAll";

import { placeType } from "@/types";
import { getPlaces } from "@/actions/getPlaces";
import { getRandomNumber } from "@/lib/getRandom";

const EventSection = async () => {
  const events = await getPlaces({
    limit: 4,
    placeType: placeType.EVENT,
    pageNumber: getRandomNumber(40),
  });

  return (
    <div className="py-4 my-4">
      <Wrapper>
        <SectionHeaderWithViewAll
          sectionTitle="Discover Events"
          link="/event"
        />
        <div className="flex gap-5 flex-nowrap py-2 hide_scrollbar overflow-x-scroll px-1 ">
          {events!.map((event, index) => {
            return <Card {...event} key={index} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default EventSection;
