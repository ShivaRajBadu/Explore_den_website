import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="py-6 my-6">
      <Wrapper>
        <div className="flex justify-between items-center ">
          <h2 className="text-4xl font-semibold text-foreground py-10">Blog</h2>
          <Link className="text-brand text-sm font-medium" href="/events">
            View all
          </Link>
        </div>
        <div className="flex gap-10 flex-nowrap hide_scrollbar overflow-x-scroll ">
          {[1, 2, 3].map((event: any) => {
            return <BlogCard key={event} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogSection;
