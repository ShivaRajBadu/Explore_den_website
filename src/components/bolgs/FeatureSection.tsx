import React from "react";
import BlogCard from "../main_page/BlogCard";
import Image from "next/image";
import Link from "next/link";
const FeatureSection = () => {
  return (
    <div>
      <h1 className="text-textPrimary text-4xl pt-8 font-semibold">
        Featured Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  xl:grid-rows-2  gap-x-10 gap-y-8 py-10">
        <Link
          href="/blogs/1"
          prefetch={false}
          className={` card_shadow pb-2 xl:col-span-2 xl:row-span-2 block  hover:rounded-[16px] cursor-pointer`}
        >
          <Image
            src="/images/blog.jpg"
            alt="blog"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="w-full object-cover h-[380px] lg:h-[330px] xl:h-[390px] rounded-2xl"
          />

          <div className="px-2">
            <h2 className="font-semibold text-base md:text-[20px] text-textPrimary pt-6">
              UX review presentations
            </h2>
            <p className="font-normal line-clamp-2 overflow-ellipsis text-sm md:text-base text-textSecondary my-3">
              How do you create compelling presentations that wow your
              colleagues and impress your
            </p>
            <div className="flex gap-6 items-start pt-4 cursor-pointer">
              <Image
                src="/images/author.png"
                alt="author"
                width={0}
                height={0}
                className="w-[36px] h-[36px]"
              />
              <div>
                <h3 className="font-medium text-sm text-textPrimary">
                  Oiliva Rhye
                </h3>
                <p className="text-textSecondary font-normal text-sm">
                  20 Jan 2024
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="/blogs/1"
          prefetch={false}
          className={` card_shadow xl:col-span-2  duration-300 flex flex-col xl:flex-row  gap-6  hover:rounded-[16px] cursor-pointer`}
        >
          <div>
            <Image
              src="/images/blog.jpg"
              alt="blog"
              width={0}
              height={0}
              sizes="(100vw, 100vh)"
              className="w-full object-cover h-[380px] lg:h-[330px] xl:h-[280px]   rounded-2xl"
            />
          </div>
          <div className="px-2 xl:w-[60%]">
            <h2 className="font-semibold text-base md:text-[20px] text-textPrimary pt-6">
              UX review presentations
            </h2>
            <p className="font-normal line-clamp-3 overflow-ellipsis text-sm md:text-base text-textSecondary my-3">
              How do you create compelling presentations that wow your
              colleagues and impress your
            </p>
            <div className="flex gap-6 items-start pt-4 cursor-pointer">
              <Image
                src="/images/author.png"
                alt="author"
                width={0}
                height={0}
                className="w-[36px] h-[36px]"
              />
              <div>
                <h3 className="font-medium text-sm text-textPrimary">
                  Oiliva Rhye
                </h3>
                <p className="text-textSecondary font-normal text-sm">
                  20 Jan 2024
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/blogs/1"
          prefetch={false}
          className={` card_shadow  xl:col-span-2 flex flex-col xl:flex-row gap-6  hover:rounded-[16px] cursor-pointer`}
        >
          <div>
            <Image
              src="/images/blog.jpg"
              alt="blog"
              width={0}
              height={0}
              sizes="(100vw, 100vh)"
              className="w-full object-cover h-[380px] lg:h-[330px] xl:h-[280px] rounded-2xl"
            />
          </div>
          <div className="px-2 xl:w-[60%]">
            <h2 className="font-semibold text-base md:text-[20px] text-textPrimary pt-6">
              UX review presentations
            </h2>
            <p className="font-normal line-clamp-3 overflow-ellipsis text-sm md:text-base text-textSecondary my-3">
              How do you create compelling presentations that wow your
              colleagues and impress your
            </p>
            <div className="flex gap-6 items-start pt-4 cursor-pointer">
              <Image
                src="/images/author.png"
                alt="author"
                width={0}
                height={0}
                className="w-[36px] h-[36px]"
              />
              <div>
                <h3 className="font-medium text-sm text-textPrimary">
                  Oiliva Rhye
                </h3>
                <p className="text-textSecondary font-normal text-sm">
                  20 Jan 2024
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeatureSection;
