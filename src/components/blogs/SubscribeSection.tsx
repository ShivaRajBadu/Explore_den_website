import Link from "next/link";
import React from "react";

const SubscribeSection = () => {
  return (
    <div className="bg-brand p-6 lg:p-12 xl:p-16 max-w-[1440px] mx-auto w-[95%] md:w-[90%] lg:gap-5 gap-5 md:gap-10   flex  flex-col lg:flex-row justify-between items-center rounded-[16px]">
      <div className="w-full">
        <h3 className="text-[18px] md:text-[24px] text-background font-semibold">
          Join 2,000+ subscribers
        </h3>
        <p className="text-[#FFF4F6]  py-2 font-normal text-sm md:text-lg">
          Stay in the loop with everything you need to know.
        </p>
      </div>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <input
            className="border-none bg-background w-full py-3 px-4 rounded-[8px] outline-none text-black placeholder:text-textSecondary"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-background w-full  sm:w-auto  text-brand px-6 py-3 text-base font-semibold rounded-[8px] ">
            Subscribe
          </button>
        </div>
        <p className="text-xs md:text-sm font-normal text-[#F5F4F4] py-4">
          We care about your data in our{" "}
          <Link
            className="underline"
            target="_blank"
            prefetch={false}
            href="/privacy-policy"
          >
            privacy policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SubscribeSection;
