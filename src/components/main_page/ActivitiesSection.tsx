import React from "react";

import Link from "next/link";
import Card from "./Card";
import Wrapper from "../Wrapper";
import SectionHeaderWithViewAll from "./SectionHeaderWithViewAll";

const ActivitiesSection = () => {
  return (
    <div className="my-4 py-4">
      <Wrapper>
        <SectionHeaderWithViewAll
          sectionTitle="Discover Activities"
          link="/activity"
        />
        <div className="flex gap-5 flex-nowrap py-2 hide_scrollbar overflow-x-scroll px-1 ">
          {[1, 2, 3, 4].map((event: any) => {
            return <Card cardType="activity" key={event} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default ActivitiesSection;
