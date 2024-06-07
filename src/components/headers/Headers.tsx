import Image from "next/image";
import Navigation from "./Navigation";
import CalendarIcon from "../icons/Calendar";
import Wrapper from "../Wrapper";
import BookmarkIcon from "../icons/Bookmark";
import ActivityIcon from "../icons/Activity";
import CompassIcon from "../icons/Compass";
import GalleryIcon from "../icons/Gallery";
import UserIcon from "../icons/User";
import ImageSlider from "./ImageSlider";
import MainCarousel from "./MainCarousel";

const Headers = () => {
  return (
    <header className="mx-auto w-full relative z-0 min-h-screen bg-[#F6F6F6]">
      <Navigation />
      <Image
        className="absolute z-[-1] inset-0 w-full h-full"
        src="/pattern.svg"
        alt="image"
        fill
        sizes="(100vw, 100vh)"
      />
      <Wrapper>
        <div className="text-center relative pt-32">
          <h1 className="text-center text-textPrimary text-[32px] md:text-[48px] lg:text-[64px] font-semibold capitalize leading-[125%]">
            <span className=" z-10 relative after:absolute  after:z-[-1] after:rounded-[9px] text-background after:top-2 after:-left-2 md:after:-left-3 after:w-[110%] after:h-[35px] md:after:h-[52px] lg:after:h-[80px] explore_gradient">
              Explore
            </span>{" "}
            Events, Activity{" "}
            <span className="sm:block">Destination Near You</span>
          </h1>
          <p className=" text-[16px] md:text-[18px] lg:text-[20px] text-textSecondary font-normal max-w-[567px] mx-auto capitalize py-4">
            Swipe, Save, and Explore Exciting Events, Activities, and
            Destinations Near You Today
          </p>
          <button className="bg-brand text-background cursor-pointer text-center mt-6 rounded-lg px-6 py-3 font-semibold text-base">
            Download The App
          </button>
          {/* icons */}
          <div className="hidden xl:block">
            <div className="absolute top-[50px] left-[215px]">
              <CalendarIcon />
            </div>
            <div className="absolute top-[215px] left-[100px]">
              <BookmarkIcon />
            </div>
            <div className="absolute bottom-[20px] left-[215px]">
              <ActivityIcon />
            </div>
            <div className="absolute top-[50px] right-[215px]">
              <CompassIcon />
            </div>
            <div className="absolute top-[215px] right-[100px]">
              <GalleryIcon />
            </div>
            <div className="absolute bottom-[20px] right-[215px]">
              <UserIcon />
            </div>
          </div>
        </div>
      </Wrapper>
      <MainCarousel />
    </header>
  );
};

export default Headers;
