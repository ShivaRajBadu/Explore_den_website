import Image from "next/image";
import React from "react";

const OrganizerSection = () => {
  return (
    <div className="bg-[#F2F2FF] rounded-[19px]  border border-[#F2F2FF]  py-8 text-center">
      <div className="relative w-[72px] h-[72px] rounded-full mx-auto">
        <Image src="/images/author.png" alt="author" fill sizes="100vw" />
      </div>
      <h5 className="text-xs font-normal text-textSecondary pt-4 pb-1">
        Organized By
      </h5>
      <h3 className="text-textPrimary text-[20px] font-semibold">
        City Elite Group
      </h3>
      <div className="flex gap-4 justify-center py-4">
        <Image
          src="/icons/call_with_bg.svg"
          alt="call"
          width={24}
          height={24}
          sizes="100vw"
          className=" cursor-pointer "
        />
        <Image
          src="/icons/gmail_with_bg.svg"
          alt="gmail"
          width={24}
          height={24}
          sizes="100vw"
          className=" cursor-pointer "
        />
        <Image
          src="/icons/website_with_bg.svg"
          alt="website"
          width={24}
          height={24}
          sizes="100vw"
          className=" cursor-pointer "
        />
      </div>
    </div>
  );
};

export default OrganizerSection;
