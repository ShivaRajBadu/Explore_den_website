import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";
import BlogCard from "./BlogCard";
import SectionHeaderWithViewAll from "./SectionHeaderWithViewAll";
import { getAllBlogs } from "@/actions/getBlogs";
import { Blog } from "@/types";

const BlogSection = async () => {
  const blogs = await getAllBlogs({
    limit: 3,
    page: 1,
    order: "DESC",
  });
  return (
    <div className="py-6 my-6">
      <Wrapper>
        <SectionHeaderWithViewAll sectionTitle=" Blogs" link="/blogs" />
        <div className="flex gap-5 flex-nowrap hide_scrollbar overflow-x-scroll py-6 px-1 ">
          {blogs.data.map((blog: Blog) => {
            return <BlogCard blog={blog} key={blog.id} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogSection;
