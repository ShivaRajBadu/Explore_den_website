import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";

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
      <Wrapper>
        <div className="flex gap-28 justify-between items-center h-[530px] relative">
          <Image
            src="/icons/top_curve.svg"
            alt="curve"
            width={600}
            height={200}
            className="object-cover absolute top-0 left-[20%]"
          />

          <div className="w-[55%] h-full relative">
            <Image
              src="/images/download_frame.png"
              alt="download frame"
              fill
              sizes="(100vw, 100vh)"
              className="object-cover"
            />
          </div>
          <div className="w-[45%]  ">
            <h1 className="font-semibold  text-[52px] text-pretty text-background">
              Your Next Adventure Awaits – Download Our App!
            </h1>
            <div className="flex gap-4 pt-12">
              <Image
                src="/icons/google-play.svg"
                alt="google play"
                width={0}
                height={0}
                className="cursor-pointer w-[180px] h-auto"
              />
              <Image
                src="/icons/app-store.svg"
                alt="google play"
                width={0}
                height={0}
                className="cursor-pointer w-[180px] h-auto"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default DownloadSection;
