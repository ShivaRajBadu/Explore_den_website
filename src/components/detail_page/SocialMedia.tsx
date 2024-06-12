import Image from "next/image";
import Link from "next/link";
import React from "react";

type SocialMediaProps = {
  facebookPage: string;
  instagramPage: string;
  twitterPage: string;
  linkedinPage: string;
  youtubePage: string;
  tiktokPage: string;
};
const SocialMedia = ({
  facebookPage,
  instagramPage,
  twitterPage,
  linkedinPage,
  youtubePage,
  tiktokPage,
}: SocialMediaProps) => {
  return (
    <div className="py-6">
      <h3 className="text-[24px] font-semibold text-textPrimary pb-3 ">
        Social Media Links
      </h3>
      <div className="flex gap-4 py-1">
        {facebookPage && (
          <Link href={facebookPage} prefetch={false} target="_blank">
            <Image
              width={34}
              height={34}
              src="/icons/social_media/fb.svg"
              alt="facebook"
              className="cursor-pointer"
            />
          </Link>
        )}
        {youtubePage && (
          <Link href={youtubePage} prefetch={false} target="_blank">
            <Image
              width={34}
              height={34}
              src="/icons/social_media/youtube.svg"
              alt="youtube"
              className="cursor-pointer"
            />
          </Link>
        )}
        {twitterPage && (
          <Link href={twitterPage} prefetch={false} target="_blank">
            <Image
              width={34}
              height={34}
              src="/icons/social_media/twitter.svg"
              alt="twitter"
              className="cursor-pointer"
            />
          </Link>
        )}
        {linkedinPage && (
          <Link href={linkedinPage} prefetch={false} target="_blank">
            <Image
              width={34}
              height={34}
              src="/icons/social_media/linkedin.svg"
              alt="linkedin"
              className="cursor-pointer"
            />
          </Link>
        )}
        {instagramPage && (
          <Link href={instagramPage} prefetch={false} target="_blank">
            <Image
              width={34}
              height={34}
              src="/icons/social_media/instagram.svg"
              alt="instagram"
              className="cursor-pointer"
            />
          </Link>
        )}
        {tiktokPage && (
          <Link href={tiktokPage} prefetch={false} target="_blank">
            <Image
              width={34}
              height={34}
              src="/icons/social_media/tiktok.svg"
              alt="tiktok"
              className="cursor-pointer"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
