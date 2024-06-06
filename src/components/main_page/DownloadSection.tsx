import Image from "next/image";
import React from "react";

const DownloadSection = () => {
  return (
    <div className="bg-brand text-background relative mt-24 ">
      <Image
        src="/icons/bottom_curve.svg"
        alt="curve"
        width={0}
        height={0}
        className="object-cover w-[220px] h-[156px] absolute bottom-0 right-0"
      />
      <div className="max-w-[1440px] w-full lg:w-[90%] mx-auto">
        <div className="flex gap-4 lg:gap-28 justify-between items-center h-[300px] md:h-[380px] lg:h-[530px] relative">
          <Image
            src="/icons/top_curve.svg"
            alt="curve"
            width={0}
            height={0}
            className="object-cover w-[250px] sm:w-[300px] md:w-[400px] lg:w-[550px] xl:w-[600px]  absolute top-0 left-[20%] "
          />

          <div className="w-[50%] h-full relative">
            <Image
              src="/images/download_frame.png"
              alt="download frame"
              fill
              sizes="(100vw, 100vh)"
              className="object-cover"
            />
          </div>
          <div className="w-[40%]  ">
            <h1 className="font-semibold text-center  text-[22px] md:text-[32px] lg:text-[38px] xl:text-[52px] text-pretty text-background">
              Your Next Adventure Awaits – Download Our App!
            </h1>
            <div className="flex flex-col justify-center items-center md:flex-row gap-4 pt-6 md:pt-12">
              <Image
                src="/icons/google-play.svg"
                alt="google play"
                width={0}
                height={0}
                className="cursor-pointer w-[100px] md:w-[130px] lg:w-[180px] h-auto"
              />
              <Image
                src="/icons/app-store.svg"
                alt="google play"
                width={0}
                height={0}
                className="cursor-pointer w-[100px] md:w-[130px] lg:w-[180px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
