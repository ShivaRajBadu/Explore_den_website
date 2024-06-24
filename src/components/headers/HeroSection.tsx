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
import DownloadBtn from "./DownloadBtn";
import HeroText from "./HeroText";

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
          <HeroText />

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
            <div className="absolute icon_animation top-[3px] right-[235px]">
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
