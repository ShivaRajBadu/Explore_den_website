import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";
import BlogCard from "./BlogCard";
import SectionHeaderWithViewAll from "./SectionHeaderWithViewAll";

const BlogSection = () => {
  return (
    <div className="py-6 my-6">
      <Wrapper>
        <SectionHeaderWithViewAll sectionTitle=" Blogs" link="/blogs" />
        <div className="flex gap-5 flex-nowrap hide_scrollbar overflow-x-scroll py-6 px-1 ">
          {[1, 2, 3].map((event: any) => {
            return <BlogCard key={event} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogSection;
