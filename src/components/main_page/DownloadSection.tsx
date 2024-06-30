import Image from "next/image";
import React from "react";
import downloadImageFrame from "../../../public/images/download_frame.png";

const DownloadSection = () => {
  return (
    <div className="bg-brand  text-background relative mt-10 ">
      <Image
        src="/icons/bottom_curve.svg"
        alt="curve"
        width={0}
        height={0}
        className="object-contain w-[70px] h-[50px] md:w-[100px] md:h-[70px] lg:w-[200px] lg:h-[150px] absolute z-0 bottom-0 right-0"
      />
      <div className="max-w-[1440px] w-full xl:w-[90%] mx-auto">
        <div className="flex gap-4 lg:gap-10 xl:gap-28 justify-between items-center h-[164px] sm:h-[260px] md:h-[360px] lg:h-[480px] xl:h-[530px] relative">
          <Image
            src="/icons/top_curve.svg"
            alt="curve"
            width={0}
            height={0}
            className="object-cover w-[150px]  md:w-[300px] md:left-[25%] lg:w-[550px] xl:w-[600px]  absolute top-0 left-[20%] "
          />

          {/* <div className="w-full h-full relative"> */}
          <img
            src="images/download_frame.png"
            alt="download frame"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="object-cover w-[55%] h-full"
          />
          {/* </div> */}
          <div className="w-[60%] pr-2 xl:pr-0">
            <h1 className="font-semibold   text-[15px] sm:text-[28px]  md:text-[30px] lg:text-[38px] xl:text-[44px] text-pretty  text-background">
              Your Next Adventure Awaits – Download Our App!
            </h1>
            <div className="flex   items-center gap-2  md:gap-4 pt-3 md:pt-12">
              <Image
                src="/icons/google-play.svg"
                alt="google play"
                width={0}
                height={0}
                className="cursor-pointer w-[60px] sm:w-[90px] md:w-[130px] lg:w-[160px] xl:w-[180px] h-auto"
              />
              <Image
                src="/icons/app-store.svg"
                alt="google play"
                width={0}
                height={0}
                className="cursor-pointer w-[60px] sm:w-[90px] md:w-[130px] lg:w-[160px] xl:w-[180px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
