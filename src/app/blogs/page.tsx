import { getAllBlogs, getFeaturedBlogs } from "@/actions/getBlogs";
import AllBlogsSection from "@/components/blogs/AllBlogsSection";
import FeatureSection from "@/components/blogs/FeatureSection";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = async ({ searchParams }: { searchParams: any }) => {
  const dateTimeQuery = searchParams["filter.dataTime"] || null;
  const order = dateTimeQuery === "recent" ? "DESC" : "ASC";

  const [allBlogsData, featuredBlogs] = await Promise.all([
    getAllBlogs({
      limit: 8,
      page: 1,
      order: order,
    }),
    getFeaturedBlogs(),
  ]);

  if (allBlogsData.data.length === 0) {
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
      <FeatureSection featuredBlogs={featuredBlogs} />
      {allBlogsData.data.length > 0 && (
        <AllBlogsSection key={order} initialBlogs={allBlogsData} />
      )}
    </Wrapper>
  );
};

export default page;
