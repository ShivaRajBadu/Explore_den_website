import React from "react";
import BlogCard from "../main_page/BlogCard";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types";
import { timeAgo } from "@/utils";
const FeatureSection = ({ featuredBlogs }: { featuredBlogs: Blog[] }) => {
  return (
    <div>
      <h1 className="text-textPrimary text-4xl pt-8 font-semibold">
        Featured Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  xl:grid-rows-2  gap-x-10 gap-y-8 py-10">
        <Link
          href={`/blogs/${featuredBlogs[0].id}`}
          prefetch={false}
          className={` card_shadow pb-2 xl:col-span-2 xl:row-span-2 block  hover:rounded-[16px] cursor-pointer`}
        >
          <img
            src={featuredBlogs[0].mainImageUrl}
            alt="blog"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="w-full object-cover h-[380px] lg:h-[330px] xl:h-[390px] rounded-2xl"
          />

          <div className="px-2">
            <h2 className="font-semibold text-base md:text-[20px] text-textPrimary pt-6">
              {featuredBlogs[0].title}
            </h2>
            <p className="font-normal line-clamp-2 overflow-ellipsis text-sm md:text-base text-textSecondary my-3">
              {featuredBlogs[0].subTitle}
            </p>
            <div className="flex gap-6 items-start pt-4 cursor-pointer">
              <Image
                src={
                  featuredBlogs[0].author.profilePic
                    ? featuredBlogs[0].author.profilePic
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsaZl8BAAFkAJhpH4zuwAAAABJRU5ErkJggg=="
                }
                alt="author"
                width={0}
                height={0}
                className="w-[36px] h-[36px] rounded-full"
              />
              <div>
                <h3 className="font-medium text-sm text-textPrimary">
                  {featuredBlogs[0].author.name}
                </h3>
                <p className="text-textSecondary font-normal text-sm">
                  {timeAgo(
                    featuredBlogs[0].publishedAt
                      ? featuredBlogs[0].publishedAt
                      : featuredBlogs[0].createdAt
                  )}
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={`/blogs/${featuredBlogs[1].id}`}
          prefetch={false}
          className={` card_shadow xl:col-span-2  duration-300 flex flex-col xl:flex-row  gap-6  hover:rounded-[16px] cursor-pointer`}
        >
          <div>
            <img
              src={featuredBlogs[1].mainImageUrl}
              alt="blog"
              width={0}
              height={0}
              sizes="(100vw, 100vh)"
              className="w-full object-cover h-[380px] lg:h-[330px] xl:h-[280px]   rounded-2xl"
            />
          </div>
          <div className="px-2 xl:w-[60%]">
            <h2 className="font-semibold text-base md:text-[20px] text-textPrimary pt-6">
              {featuredBlogs[1].title}
            </h2>
            <p className="font-normal line-clamp-3 overflow-ellipsis text-sm md:text-base text-textSecondary my-3">
              {featuredBlogs[1].subTitle}
            </p>
            <div className="flex gap-6 items-start pt-4 cursor-pointer">
              <img
                src={
                  featuredBlogs[1].author.profilePic
                    ? featuredBlogs[1].author.profilePic
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsaZl8BAAFkAJhpH4zuwAAAABJRU5ErkJggg=="
                }
                alt="author"
                width={0}
                height={0}
                className="w-[36px] h-[36px] rounded-full"
              />
              <div>
                <h3 className="font-medium text-sm text-textPrimary">
                  {featuredBlogs[1].author.name}
                </h3>
                <p className="text-textSecondary font-normal text-sm">
                  {timeAgo(
                    featuredBlogs[1].publishedAt
                      ? featuredBlogs[1].publishedAt
                      : featuredBlogs[1].createdAt
                  )}
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href={`/blogs/${featuredBlogs[2].id}`}
          prefetch={false}
          className={` card_shadow  xl:col-span-2 flex flex-col xl:flex-row gap-6  hover:rounded-[16px] cursor-pointer`}
        >
          <div>
            <img
              src={featuredBlogs[2].mainImageUrl}
              alt="blog"
              width={0}
              height={0}
              sizes="(100vw, 100vh)"
              className="w-full object-cover h-[380px] lg:h-[330px] xl:h-[280px] rounded-2xl"
            />
          </div>
          <div className="px-2 xl:w-[60%]">
            <h2 className="font-semibold text-base md:text-[20px] text-textPrimary pt-6">
              {featuredBlogs[2].title}
            </h2>
            <p className="font-normal line-clamp-3 overflow-ellipsis text-sm md:text-base text-textSecondary my-3">
              {featuredBlogs[2].subTitle}
            </p>
            <div className="flex gap-6 items-start pt-4 cursor-pointer">
              <img
                src={
                  featuredBlogs[2].author.profilePic
                    ? featuredBlogs[2].author.profilePic
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsaZl8BAAFkAJhpH4zuwAAAABJRU5ErkJggg=="
                }
                alt="author"
                width={0}
                height={0}
                className="w-[36px] h-[36px] rounded-full"
              />
              <div>
                <h3 className="font-medium text-sm text-textPrimary">
                  {featuredBlogs[2].author.name}
                </h3>
                <p className="text-textSecondary font-normal text-sm">
                  {timeAgo(
                    featuredBlogs[2].publishedAt
                      ? featuredBlogs[2].publishedAt
                      : featuredBlogs[2].createdAt
                  )}
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
