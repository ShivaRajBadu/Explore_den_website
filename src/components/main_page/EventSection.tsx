import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";
import Card from "./Card";
import SectionHeaderWithViewAll from "./SectionHeaderWithViewAll";

const EventSection = () => {
  return (
    <div className="py-4 my-4">
      <Wrapper>
        <SectionHeaderWithViewAll
          sectionTitle="Discover Events"
          link="/event"
        />
        <div className="flex gap-5 flex-nowrap py-2 hide_scrollbar overflow-x-scroll px-1 ">
          {[1, 2, 3, 4].map((event: any) => {
            return <Card cardType="event" key={event} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default EventSection;
