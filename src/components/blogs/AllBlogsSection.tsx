import React from "react";
import BlogCard from "../main_page/BlogCard";
import Filter from "../Filter";
import { Blog } from "@/types";

const AllBlogsSection = ({ allBlogs }: { allBlogs: Blog[] }) => {
  return (
    <div className="py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-textPrimary text-4xl font-semibold">All Blogs</h2>
        <Filter
          options={[
            { value: "All", label: "All" },
            { value: "recent", label: "Recent" },
          ]}
          contentPadding="px-2 py-1"
          contentWidth="min-w-[100px]"
        />
      </div>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))" }}
        className="grid gap-8  my-6 py-6"
      >
        {allBlogs.map((_, index) => {
          return (
            <BlogCard
              blog={allBlogs[index]}
              key={index}
              isOverflowCard={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllBlogsSection;
