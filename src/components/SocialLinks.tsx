import React from "react";
import Image from "next/image";
import Link from "next/link";
const SocialLinks = () => {
  return (
    <div className="w-full md:w-[35%]">
      <h2 className="font-bold text-[20px] text-background">Social Media</h2>
      <div className="flex items-center gap-4 py-4">
        <Link
          prefetch={false}
          target="_blank"
          href={"https://www.facebook.com/people/ExploreDen/61554941020324/"}
        >
          <Image
            src="/icons/fb.svg"
            alt="facebook"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="cursor-pointer w-[40px] h-auto"
          />
        </Link>

        <Link
          href={"https://www.instagram.com/official_exploreden/"}
          prefetch={false}
          target="_blank"
        >
          <Image
            src="/icons/insta.svg"
            alt="instagram"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="cursor-pointer w-[40px] h-auto"
          />
        </Link>
        <Link href={"https://x.com/Akash_N30"} prefetch={false} target="_blank">
          <Image
            src="/icons/social_media/x.svg"
            alt="twitter"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="cursor-pointer w-[25px] h-auto"
          />
        </Link>
        <Link
          href={"https://www.tiktok.com/@exploreden_official?lang=en"}
          prefetch={false}
          target="_blank"
        >
          <Image
            src="/icons/social_media/tiktok.svg"
            alt="twitter"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="cursor-pointer w-[25px] h-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
