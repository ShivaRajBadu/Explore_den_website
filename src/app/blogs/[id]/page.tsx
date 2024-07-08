import Wrapper from "@/components/Wrapper";
import React, { Suspense } from "react";
import Image from "next/image";
import ShareSection from "@/components/blogs/ShareSection";
import { Metadata, ResolvingMetadata } from "next";
import { getBlog } from "@/actions/getBlogs";
import { notFound } from "next/navigation";

import QuillEditor from "@/components/blogs/QuillEditor";
import { baseUrl } from "@/constants/data";
import { timeAgo } from "@/utils";
import BlogHeading from "@/components/blogs/BlogHeading";
import BlogContent from "@/components/blogs/BlogContent";
import BlogSkeleton from "@/components/skeletons/BlogSkeleton";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Wrapper>
      <div className="min-h-screen">
        <Suspense fallback={<BlogSkeleton />}>
          <BlogContent id={id} />
        </Suspense>
      </div>
    </Wrapper>
  );
};

export default page;
