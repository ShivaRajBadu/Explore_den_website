import { Blog } from "@/types";
import { timeAgo } from "@/utils";
import React from "react";

const BlogHeading = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <p className="bg-[#FFF4F6] rounded-2xl px-4 my-2 py-1 text-center w-max mx-auto text-sm text-brand font-medium">
          {blog.readingMinute} min read
        </p>
        <h1 className="text-textPrimary  text-center py-2 text-[48px] font-semibold capitalize">
          {blog.title ? blog.title : ""}
        </h1>
        <p className="text-textSecondary text-center text-base py-2 font-normal  mx-auto text-balance">
          {blog.subTitle ? blog.subTitle : ""}
        </p>
        <div className="flex justify-center gap-6 items-start py-8 w-max mx-auto ">
          <img
            src={
              blog.author.profilePic
                ? blog.author.profilePic
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsaZl8BAAFkAJhpH4zuwAAAABJRU5ErkJggg=="
            }
            alt="author"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="w-[56px] h-[56px] rounded-full"
          />
          <div>
            <h3 className="font-medium text-lg text-textPrimary">
              {blog.author.name}
            </h3>
            <p className="text-textSecondary font-normal text-base">
              {timeAgo(blog.publishedAt ? blog.publishedAt : blog.createdAt)}
            </p>
          </div>
        </div>
      </div>
      <div>
        {blog.mainImageUrl && (
          <img
            src={blog.mainImageUrl}
            alt="blog"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="w-full object-cover h-[600px] rounded-lg"
          />
        )}
      </div>
    </>
  );
};

export default BlogHeading;
