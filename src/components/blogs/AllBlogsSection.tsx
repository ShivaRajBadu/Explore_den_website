"use client";

import React, { useMemo } from "react";
import BlogCard from "../main_page/BlogCard";
import Filter from "../Filter";
import { Blog, BlogWithMeta } from "@/types";
import { getAllBlogs } from "@/actions/getBlogs";
import CardSkeleton from "../skeletons/CardSkeleton";

const AllBlogsSection = ({ initialBlogs }: { initialBlogs: BlogWithMeta }) => {
  const [blogs, setBlogs] = React.useState<Blog[]>(initialBlogs.data);
  const [pageNumber, setPageNumber] = React.useState(2);
  const [error, setError] = React.useState<null | string>(null);

  const [loading, setLoading] = React.useState(false);
  const [haveMoreData, setHaveMoreData] = React.useState(
    initialBlogs.meta.hasNextPage
  );
  const loadMoreData = async () => {
    setLoading(true);
    try {
      const newData = await getAllBlogs({
        limit: 2,
        page: pageNumber,
        order: "ASC",
      });
      if (newData) {
        if (!newData.meta.hasNextPage) {
          setHaveMoreData(false);
        } else {
          setHaveMoreData(true);
        }
        setBlogs((prev) => [...prev, ...newData.data]);
        setPageNumber((prev) => prev + 1);
      }
    } catch (error) {
      setError(`Something went wrong. Please try again later.
        ${error}
        `);
    }
    setLoading(false);
  };
  const skeletonCards = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, index) => (
        <CardSkeleton key={index} />
      )),
    []
  );

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
        {blogs.map((blog, index) => {
          return <BlogCard blog={blog} key={index} isOverflowCard={false} />;
        })}
        {loading && skeletonCards}
      </div>
      {error && <div className="text-red-500 text-center py-4">{error}</div>}
      <div className="flex justify-center pb-12 pt-5">
        <button
          disabled={loading || !haveMoreData}
          onClick={loadMoreData}
          className={`border border-brand text-brand font-semibold text-base px-16 py-3 rounded-lg duration-500 ${
            loading || !haveMoreData
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-brand/70 hover:text-background"
          }`}
        >
          {loading ? "Loading..." : "View More"}
        </button>
      </div>
    </div>
  );
};

export default AllBlogsSection;
