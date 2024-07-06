import { getAllBlogs, getFeaturedBlogs } from "@/actions/getBlogs";
import AllBlogsSection from "@/components/blogs/AllBlogsSection";
import FeatureSection from "@/components/blogs/FeatureSection";
import BlogCard from "@/components/main_page/BlogCard";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = async () => {
  const [featuredBlogsData, allBlogsData] = await Promise.all([
    getFeaturedBlogs(),
    getAllBlogs({
      limit: 12,
      page: 1,
      order: "DESC",
    }),
  ]);
  if (featuredBlogsData.length === 0 && allBlogsData.data.length === 0) {
    return (
      <Wrapper>
        <div className="flex justify-center text-center flex-col items-center h-screen">
          <p className="text-brand text-4xl font-bold pb-8">Oops !</p>
          <p className="text-textSecondary text-xl">
            No Blogs Found, Will Be Added Soon.
            <br />
            Please check back later
          </p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {featuredBlogsData.length > 0 && (
        <FeatureSection featuredBlogs={featuredBlogsData} />
      )}
      {allBlogsData.data.length > 0 && (
        <AllBlogsSection allBlogs={allBlogsData.data} />
      )}
    </Wrapper>
  );
};

export default page;
