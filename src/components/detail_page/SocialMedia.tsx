import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="py-6">
      <h3 className="text-[24px] font-semibold text-textPrimary pb-3 ">
        Social Media Links
      </h3>
      <div className="flex gap-4 py-1">
        <Image
          width={34}
          height={34}
          src="/icons/social_media/fb.svg"
          alt="facebook"
          className="cursor-pointer"
        />
        <Image
          width={34}
          height={34}
          src="/icons/social_media/youtube.svg"
          alt="facebook"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
