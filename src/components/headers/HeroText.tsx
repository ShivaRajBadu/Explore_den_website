"use client";
import React from "react";
import DownloadBtn from "./DownloadBtn";

const HeroText = () => {
  return (
    <>
      <h1 className="text-center text-textPrimary text-[30px] md:text-[44px] lg:text-[56px] font-semibold capitalize leading-[125%]">
        <span className=" z-10 relative after:absolute  after:z-[-1] after:rounded-[9px] text-background after:top-1 md:after:top-2 after:-left-2 md:after:-left-3 after:w-[110%] after:h-[35px] md:after:h-[48px] lg:after:h-[70px] explore_gradient">
          Explore
        </span>{" "}
        Events, Activity <span className="sm:block">Destination Near You</span>
      </h1>
      <p className=" text-[14px] md:text-[16px] lg:text-[18px] text-textSecondary font-normal max-w-[567px] mx-auto capitalize py-4">
        Swipe, Save, and Explore Exciting Events, Activities, and Destinations
        Near You Today
      </p>
      <DownloadBtn
        className="bg-brand hover:bg-brand/80 duration-300 text-background cursor-pointer text-center mt-3 rounded-lg px-6 py-3 font-semibold text-base"
        value="Download The App"
      />
    </>
  );
};

export default HeroText;
