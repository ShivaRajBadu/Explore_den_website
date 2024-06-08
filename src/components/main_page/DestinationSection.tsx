import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";
import Card from "./Card";
import SectionHeaderWithViewAll from "./SectionHeaderWithViewAll";

const DestinationSection = () => {
  return (
    <div className="my-4 py-4">
      <Wrapper>
        <SectionHeaderWithViewAll
          sectionTitle="Destinations"
          link="/destination"
        />
        <div className="flex gap-5 flex-nowrap hide_scrollbar overflow-x-scroll  py-2 px-1">
          {[1, 2, 3, 4].map((event: any) => {
            return <Card cardType="destination " key={event} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default DestinationSection;
