import React from "react";
import Wrapper from "../Wrapper";
import Card from "./Card";
import Link from "next/link";

const PopularSection = () => {
  const popularEvents: any = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="py-4 my-4">
      <Wrapper>
        <div className="flex justify-between items-center ">
          <h2 className="text-[22px] md:text-[32px] lg:text-4xl font-semibold text-foreground  py-4 md:py-10">
            Popular
          </h2>
          <Link className="text-brand text-sm font-medium" href="/events">
            View all
          </Link>
        </div>
        <div
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))" }}
          className="flex lg:grid gap-x-6 px-1 py-2 gap-y-12 flex-nowrap hide_scrollbar overflow-x-scroll "
        >
          {popularEvents.map((event: any) => {
            return <Card cardType="activity" key={event} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default PopularSection;
