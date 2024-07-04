import Wrapper from "@/components/Wrapper";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Wrapper>
      <div className="py-10">
        <div className="w-[90%] mx-auto">
          <p className="bg-[#FFF4F6] rounded-2xl px-4 my-2 py-1 text-center w-max mx-auto text-sm text-brand font-medium">
            8 min read
          </p>
          <h1 className="text-textPrimary  text-center py-2 text-[48px] font-semibold capitalize">
            UX Review Presentations
          </h1>
          <p className="text-textSecondary text-center text-base py-2 font-normal  mx-auto text-balance">
            Lorem ipsum dolor sit amet consectetur. Adipiscing vulputate in
            tortor ultrices facilisis ornare cursus. Dui eu orci bibendum
            molestie ut arcu ut. Semper morbi eget ac nibh scelerisque arcu.
            Massa leo libero.
          </p>
          <div className="flex justify-center gap-6 items-start py-8 w-max mx-auto cursor-pointer">
            <Image
              src="/images/author.png"
              alt="author"
              width={0}
              height={0}
              sizes="(100vw, 100vh)"
              className="w-[56px] h-[56px]"
            />
            <div>
              <h3 className="font-medium text-lg text-textPrimary">
                Oiliva Rhye
              </h3>
              <p className="text-textSecondary font-normal text-base">
                20 Jan 2024
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/images/blog.jpg"}
            alt="blog"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="w-full object-cover h-[600px] rounded-lg"
          />
        </div>
        <div className="w-[70%] mx-auto py-12">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
            purus. Non massa enim vitae duis mattis. Vel in ultricies vel
            fringilla.
          </p>
          <div>
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
                <g clip-path="url(#clip0_2128_4196)">
                  <path
                    d="M4.16602 12.5003H3.33268C2.89065 12.5003 2.46673 12.3247 2.15417 12.0122C1.84161 11.6996 1.66602 11.2757 1.66602 10.8337V3.33366C1.66602 2.89163 1.84161 2.46771 2.15417 2.15515C2.46673 1.84259 2.89065 1.66699 3.33268 1.66699H10.8327C11.2747 1.66699 11.6986 1.84259 12.0112 2.15515C12.3238 2.46771 12.4993 2.89163 12.4993 3.33366V4.16699M9.16602 7.50033H16.666C17.5865 7.50033 18.3327 8.24652 18.3327 9.16699V16.667C18.3327 17.5875 17.5865 18.3337 16.666 18.3337H9.16602C8.24554 18.3337 7.49935 17.5875 7.49935 16.667V9.16699C7.49935 8.24652 8.24554 7.50033 9.16602 7.50033Z"
                    stroke="#463F41"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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

              <Link href={""} prefetch={false} target="_blank">
                <Image
                  width={34}
                  height={34}
                  src="/icons/social_media/youtube.svg"
                  alt="youtube"
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

              <Link href={"tiktokPage"} prefetch={false} target="_blank">
                <Image
                  width={34}
                  height={34}
                  src="/icons/social_media/tiktok.svg"
                  alt="tiktok"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
