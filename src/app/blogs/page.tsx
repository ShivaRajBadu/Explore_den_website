import BlogCard from "@/components/main_page/BlogCard";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <h1 className="text-textPrimary text-4xl font-semibold">
        Featured Blogs
      </h1>
      <div className="flex gap-6">
        <BlogCard />
        <div>
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <div>
        <h2 className="text-textPrimary text-4xl font-semibold">All Blogs</h2>
        <div
          style={{ gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))" }}
          className="grid gap-8  my-6 py-6"
        >
          {Array.from({ length: 16 }).map((_, index) => {
            return <BlogCard key={index} isOverflowCard={false} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
