import React from "react";

import Card from "./Card";
import Wrapper from "../Wrapper";
import SectionHeaderWithViewAll from "./SectionHeaderWithViewAll";

import { placeType } from "@/types";
import { getPlaces } from "@/actions/getPlaces";
import { getRandomNumber } from "@/lib/getRandom";

const ActivitiesSection = async () => {
  const Activities = await getPlaces({
    limit: 4,
    placeType: placeType.DESTINATION,
    pageNumber: 1,
  });
  return (
    <div className="my-4 py-4">
      <Wrapper>
        <SectionHeaderWithViewAll
          sectionTitle="Discover Activities"
          link="/activity"
        />
        <div className="flex gap-5 flex-nowrap py-2 hide_scrollbar overflow-x-scroll px-1 ">
          {Activities.map((activity) => {
            return <Card {...activity} key={activity.id} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default ActivitiesSection;
