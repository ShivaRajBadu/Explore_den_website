import React from "react";
import Wrapper from "../Wrapper";
import Card from "./Card";
import Link from "next/link";
import SectionHeaderWithViewAll from "./SectionHeaderWithViewAll";

const PopularSection = () => {
  const popularEvents: any = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="py-4 my-4">
      <Wrapper>
        <SectionHeaderWithViewAll sectionTitle="Popular" link="/popular" />
        <div
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))" }}
          className="flex lg:grid gap-x-6 px-1 py-2 gap-y-12 flex-nowrap hide_scrollbar overflow-x-scroll "
        >
          {popularEvents.map((event: any) => {
            return <Card cardType="event" key={event} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default PopularSection;
