import { Blog } from "@/types";
import { timeAgo } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({
  isOverflowCard = true,
  blog,
}: {
  isOverflowCard?: boolean;
  blog: Blog;
}) => {
  const overflowClasses = isOverflowCard
    ? "min-w-[220px] md:min-w-[340px] lg:min-w-[360px] max-w-[33%]"
    : "w-full min-w-[300px]";
  return (
    <Link
      href={`/blogs/${blog.id}`}
      prefetch={false}
      className={`${overflowClasses}   card_shadow pb-2  hover:rounded-[16px] cursor-pointer`}
    >
      <div>
        <img
          src={blog.mainImageUrl ? blog.mainImageUrl : "/images/blog.jpg"}
          alt="blog"
          width={0}
          height={0}
          sizes="(100vw, 100vh)"
          className="w-full object-cover h-[280px] rounded-2xl bg-gray-100"
        />
      </div>
      <div className="px-2">
        <h2 className="font-semibold text-base md:text-[20px] line-clamp-2 text-textPrimary pt-6">
          {blog.title}
        </h2>
        <p className="font-normal line-clamp-2 overflow-ellipsis text-sm md:text-base text-textSecondary my-3">
          {blog.subTitle}
        </p>
        <div className="flex gap-6 items-start pt-4 cursor-pointer">
          <img
            src={
              blog.author.profilePic
                ? blog.author.profilePic
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsaZl8BAAFkAJhpH4zuwAAAABJRU5ErkJggg=="
            }
            alt="author"
            width={0}
            height={0}
            className="w-[36px] h-[36px] rounded-full"
          />
          <div>
            <h3 className="font-medium text-sm text-textPrimary">
              {blog.author.name}
            </h3>
            <p className="text-textSecondary font-normal text-sm">
              {timeAgo(blog.publishedAt ? blog.publishedAt : blog.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
