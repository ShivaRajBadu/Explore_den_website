import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Card from "./Card";

const EventSection = () => {
  const popularEvents: any = [1, 2, 3, 4];
  return (
    <div className="py-4 my-4">
      <Wrapper>
        <div className="flex justify-between items-center ">
          <h2 className="text-4xl font-semibold text-foreground py-10">
            Discover Events
          </h2>
          <Link className="text-brand text-sm font-medium" href="/events">
            View all
          </Link>
        </div>
        <div
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))" }}
          className="grid gap-6 "
        >
          {popularEvents.map((event: any) => {
            return <Card cardType="event" key={event} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default EventSection;
