import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";
import Card from "./Card";

const EventSection = () => {
  return (
    <div className="py-4 my-4">
      <Wrapper>
        <div className="flex justify-between items-center ">
          <h2 className="text-[22px] md:text-[32px] lg:text-4xl font-semibold text-foreground  py-4 md:py-10">
            Discover Events
          </h2>
          <Link className="text-brand text-sm font-medium" href="/events">
            View all
          </Link>
        </div>
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
