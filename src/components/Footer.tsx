import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constants/data";

const Footer = () => {
  return (
    <div className="bg-foreground pt-[80px] mt-16 pb-6">
      <Wrapper>
        <div className="flex flex-col gap-20 lg:gap-0 lg:flex-row justify-between">
          <div>
            <Image
              src="/icons/logo_white.svg"
              alt="den"
              width={0}
              height={0}
              priority
              className="w-auto h-auto"
            />
            {/* <p className="font-normal py-6 text-base md:text-lg text-textSecondary">
              ExploreDen is a comprehensive platform for all travel enthusiasts.
              We use an innovative approach to help travelers discover the best
              local destinations, hidden gems, adventures, and events. Our
              mobile app works in being able to help travelers find EADs rapidly
              with left or right swipes on EADs within the app, within seconds,
              without the headache of going through the old school way. Join
              ExploreDen today for curated travel guides and itineraries,
              seamless booking of unique experiences, connecting with fellow
              adventurers, and much more!
            </p> */}
            <p className="font-semibold pb-2 pt-8 text-base md:text-lg text-background">
              Download the app by clicking the link below :
            </p>
            <div className="flex gap-6 py-3 ">
              <Image
                src="/icons/google-play-white.png"
                alt="google play"
                width={0}
                height={0}
                sizes="(100vw, 100vh)"
                className="cursor-pointer w-[120px] h-auto"
              />
              <Image
                src="/icons/app-store-white.png"
                alt="google play"
                width={0}
                height={0}
                sizes="(100vw, 100vh)"
                className="cursor-pointer w-[120px] h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full lg:w-[50%]">
            <div className="w-full md:w-[25%]">
              <h2 className="font-bold text-[20px] text-background">Pages</h2>
              <ul className="py-4 space-y-4">
                {NavLinks.map((link, index) => {
                  return (
                    <li key={link.id}>
                      <Link
                        prefetch={false}
                        className="text-background hover:text-background/70 duration-300 font-normal text-base"
                        href={link.link}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="">
              <h2 className="font-bold text-[20px] text-background">Contact</h2>
              <ul className="py-4 space-y-5">
                <li className="text-background flex items-center gap-4 font-normal text-base ">
                  <Image
                    src="/icons/call.svg"
                    alt="call"
                    width={20}
                    height={20}
                    sizes="(100vw, 100vh)"
                    className="w-auto h-auto"
                  />
                  +61 420633625
                </li>
                <li className="text-background flex items-center gap-4 font-normal text-base">
                  <Image
                    src="/icons/gmail.svg"
                    alt="email"
                    width={20}
                    height={20}
                    sizes="(100vw, 100vh)"
                    className="w-auto h-auto"
                  />
                  <Link
                    href={"mailto:contact@exploreden.com.au"}
                    prefetch={false}
                    target="_blank"
                  >
                    contact@exploreden.com.au
                  </Link>
                </li>
                <li className="text-background  flex items-start gap-4 font-normal text-base">
                  <Image
                    src="/icons/location_white.svg"
                    alt="location"
                    width={20}
                    height={20}
                    sizes="(100vw, 100vh)"
                    className="w-auto h-auto"
                  />
                  21 Framton way Madeley 6065 WA Australia
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[30%]">
              <h2 className="font-bold text-[20px] text-background">
                Social Media
              </h2>
              <div className="flex gap-4 py-4">
                <Image
                  src="/icons/fb.svg"
                  alt="facebook"
                  width={0}
                  height={0}
                  sizes="(100vw, 100vh)"
                  className="cursor-pointer w-[40px] h-auto"
                />
                <Image
                  src="/icons/insta.svg"
                  alt="instagram"
                  width={0}
                  height={0}
                  sizes="(100vw, 100vh)"
                  className="cursor-pointer w-[40px] h-auto"
                />
                <Image
                  src="/icons/linkedin.svg"
                  alt="twitter"
                  width={0}
                  height={0}
                  sizes="(100vw, 100vh)"
                  className="cursor-pointer w-[40px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-5 border border-textSecondary" />
        <div className="flex justify-between text-background">
          <Link
            href={"/privacy-policy"}
            prefetch={false}
            target="_blank"
            className="text-sm font-normal"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/terms-and-conditions"}
            prefetch={false}
            target="_blank"
            className="text-sm font-normal"
          >
            Terms & Conditions
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
