import React from "react";
import Wrapper from "../Wrapper";
import CompassIcon from "../icons/Compass";
import CalendarIcon from "../icons/Calendar";
import BookmarkIcon from "../icons/Bookmark";
import ActivityIcon from "../icons/Activity";
import GalleryIcon from "../icons/Gallery";
import UserIcon from "../icons/User";
import MainCarousel from "./MainCarousel";

import Image from "next/image";
import { getPlaces } from "@/actions/getPlaces";
import { placeDataType, placeType } from "@/types";

const HeroSection = async () => {
  const { data } = await getPlaces({
    pageNumber: 1,
    limit: 10,
    placeType: placeType.DESTINATION,
  });
  //  filter out places without images

  const filterData = data.filter((place: placeDataType) => {
    return place.images.length > 0;
  });

  return (
    <>
      <Image
        className="absolute z-[-1] inset-0 w-full h-full"
        src="/pattern.svg"
        alt="image"
        fill
        sizes="(100vw, 100vh)"
      />
      <Wrapper>
        <div className="text-center relative pt-10  md:pt-16 lg:pt-20">
          <h1 className="text-center text-textPrimary text-[30px] md:text-[44px] lg:text-[56px] font-semibold capitalize leading-[125%]">
            <span className=" z-10 relative after:absolute  after:z-[-1] after:rounded-[9px] text-background after:top-1 md:after:top-2 after:-left-2 md:after:-left-3 after:w-[110%] after:h-[35px] md:after:h-[48px] lg:after:h-[70px] explore_gradient">
              Explore
            </span>{" "}
            Events, Activity{" "}
            <span className="sm:block">Destination Near You</span>
          </h1>
          <p className=" text-[14px] md:text-[16px] lg:text-[18px] text-textSecondary font-normal max-w-[567px] mx-auto capitalize py-4">
            Swipe, Save, and Explore Exciting Events, Activities, and
            Destinations Near You Today
          </p>
          <button className="bg-brand hover:bg-brand/80 duration-300 text-background cursor-pointer text-center mt-3 rounded-lg px-6 py-3 font-semibold text-base">
            Download The App
          </button>
          {/* icons */}
          <div className="hidden xl:block">
            <div className="absolute icon_animation top-[0px] left-[235px]">
              <CalendarIcon />
            </div>
            <div className="absolute top-[153px] icon_animation left-[160px]">
              <BookmarkIcon />
            </div>
            <div className="absolute icon_animation bottom-[30px] left-[235px]">
              <ActivityIcon />
            </div>
            <div className="absolute icon_animation top-[0px] right-[235px]">
              <CompassIcon />
            </div>
            <div className="absolute icon_animation top-[153px] right-[160px]">
              <GalleryIcon />
            </div>
            <div className="absolute icon_animation bottom-[40px] right-[235px]">
              <UserIcon />
            </div>
          </div>
        </div>
      </Wrapper>
      <MainCarousel data={filterData} />
    </>
  );
};

export default HeroSection;
