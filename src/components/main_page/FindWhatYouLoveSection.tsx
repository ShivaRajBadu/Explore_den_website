import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Tag from "./Tag";
import { tags } from "@/constants/data";

const FindWhatYouLoveSection = () => {
  return (
    <div className="bg-background-purple pt-[72px] mt-24 mb-10">
      <Wrapper>
        <div className="flex  items-end justify-between">
          <div className="w-full lg:w-[40%]">
            <h2 className="text-4xl font-semibold text-textPrimary py-3">
              We help you find what you love
            </h2>
            <p className="font-normal text-lg text-subTitle ">
              Find event curate events specially for your intrest
            </p>
            <div className="flex flex-wrap gap-4 my-10 w-full ">
              {tags.map((tag) => (
                <Tag text={tag.name} key={tag.id} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:w-[60%]">
            <Image
              src="/icons/find.svg"
              alt="fin"
              width={0}
              height={0}
              className="w-auto h-auto ml-auto mr-0"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FindWhatYouLoveSection;
