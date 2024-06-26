import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Tag from "./Tag";
import { getCategories } from "@/actions/getCategory";
import findSvg from "../../../public/icons/find.svg";

const FindWhatYouLoveSection = async () => {
  const data = await getCategories();

  return (
    <div className="bg-background-purple pt-[72px] mt-24 mb-10">
      <Wrapper>
        <div className="flex  items-center justify-between">
          <div className="w-full lg:w-[40%]">
            <h2 className="text-4xl font-semibold text-textPrimary py-3">
              We help you find what you love
            </h2>
            <p className="font-normal text-lg text-subTitle ">
              Find event curate events specially for your intrest
            </p>
            <div className="flex flex-wrap gap-4 my-10 w-full ">
              {data.map((tag: string) => (
                <Tag text={tag} key={tag} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:w-[60%]">
            <Image
              src={findSvg}
              alt="find"
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
