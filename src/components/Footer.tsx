import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-foreground pt-[80px] my-16 pb-6">
      <Wrapper>
        <div className="flex flex-col gap-20 lg:gap-0 lg:flex-row justify-between">
          <div>
            <Image
              src="/icons/logo_white.svg"
              alt="den"
              width={0}
              height={0}
              className="w-auto h-auto"
            />
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
                <li>
                  <Link
                    className="text-background font-normal text-base"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background font-normal text-base"
                    href="/activites"
                  >
                    Activities
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background font-normal text-base"
                    href="/destination"
                  >
                    Destination
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background font-normal text-base"
                    href="/event"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background font-normal text-base"
                    href="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background font-normal text-base"
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="font-bold text-[20px] text-background">Contact</h2>
              <ul className="py-4 space-y-4">
                <li>
                  <Link
                    className="text-background flex items-center gap-4 font-normal text-base "
                    href="/"
                  >
                    <Image
                      src="/icons/call.svg"
                      alt="call"
                      width={20}
                      height={20}
                      sizes="(100vw, 100vh)"
                      className="w-auto h-auto"
                    />{" "}
                    (406) 555-0120
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background flex items-center gap-4 font-normal text-base"
                    href="/"
                  >
                    <Image
                      src="/icons/gmail.svg"
                      alt="email"
                      width={20}
                      height={20}
                      sizes="(100vw, 100vh)"
                      className="w-auto h-auto"
                    />
                    exloreden@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background  flex items-center gap-4 font-normal text-base"
                    href="/"
                  >
                    <Image
                      src="/icons/location_white.svg"
                      alt="location"
                      width={20}
                      height={20}
                      sizes="(100vw, 100vh)"
                      className="w-auto h-auto"
                    />
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </Link>
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
      </Wrapper>
    </div>
  );
};

export default Footer;
