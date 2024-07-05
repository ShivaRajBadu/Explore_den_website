import Link from "next/link";
import React from "react";
import Image from "next/image";
const ShareSection = () => {
  return (
    <div className="flex justify-between items-center py-8 border-t">
      <button
        style={{
          boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        }}
        className="flex gap-2 items-center border rounded-lg px-4 py-2 border-[#D8D4D5] "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2128_4196)">
            <path
              d="M4.16602 12.5003H3.33268C2.89065 12.5003 2.46673 12.3247 2.15417 12.0122C1.84161 11.6996 1.66602 11.2757 1.66602 10.8337V3.33366C1.66602 2.89163 1.84161 2.46771 2.15417 2.15515C2.46673 1.84259 2.89065 1.66699 3.33268 1.66699H10.8327C11.2747 1.66699 11.6986 1.84259 12.0112 2.15515C12.3238 2.46771 12.4993 2.89163 12.4993 3.33366V4.16699M9.16602 7.50033H16.666C17.5865 7.50033 18.3327 8.24652 18.3327 9.16699V16.667C18.3327 17.5875 17.5865 18.3337 16.666 18.3337H9.16602C8.24554 18.3337 7.49935 17.5875 7.49935 16.667V9.16699C7.49935 8.24652 8.24554 7.50033 9.16602 7.50033Z"
              stroke="#463F41"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2128_4196">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Copy link
      </button>
      <div className="flex gap-4 py-1">
        <Link href={"facebookPage"} prefetch={false} target="_blank">
          <Image
            width={34}
            height={34}
            src="/icons/social_media/fb.svg"
            alt="facebook"
            className="cursor-pointer"
          />
        </Link>

        <Link href={"twitterPage"} prefetch={false} target="_blank">
          <Image
            width={34}
            height={34}
            src="/icons/social_media/twitter.svg"
            alt="twitter"
            className="cursor-pointer"
          />
        </Link>

        <Link href={"linkedinPage"} prefetch={false} target="_blank">
          <Image
            width={34}
            height={34}
            src="/icons/social_media/linkedin.svg"
            alt="linkedin"
            className="cursor-pointer"
          />
        </Link>
        <Link href={"instagramPage"} prefetch={false} target="_blank">
          <Image
            width={34}
            height={34}
            src="/icons/social_media/instagram.svg"
            alt="instagram"
            className="cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default ShareSection;
