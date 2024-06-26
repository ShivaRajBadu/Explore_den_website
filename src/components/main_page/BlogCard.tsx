import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ isOverflowCard = true }: { isOverflowCard?: boolean }) => {
  const overflowClasses = isOverflowCard
    ? "min-w-[220px] md:min-w-[340px] lg:min-w-[360px]"
    : "w-full min-w-[300px]";
  return (
    <Link
      href="/blogs/1"
      prefetch={false}
      className={`${overflowClasses} card_shadow pb-2  hover:rounded-[16px] cursor-pointer`}
    >
      <div>
        <Image
          src="/images/blog.jpg"
          alt="blog"
          width={0}
          height={0}
          sizes="(100vw, 100vh)"
          className="w-full object-cover h-[280px] rounded-2xl"
        />
      </div>
      <div className="px-2">
        <h2 className="font-semibold text-base md:text-[20px] text-textPrimary pt-6">
          UX review presentations
        </h2>
        <p className="font-normal line-clamp-2 overflow-ellipsis text-sm md:text-base text-textSecondary my-3">
          How do you create compelling presentations that wow your colleagues
          and impress your
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
  );
};

export default BlogCard;
