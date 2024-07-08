import React from "react";
import BlogHeading from "./BlogHeading";
import QuillEditor from "./QuillEditor";
import ShareSection from "./ShareSection";
import { getBlog } from "@/actions/getBlogs";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

const BlogContent = async ({ id }: { id: string }) => {
  const blog = await getBlog(parseInt(id));

  if (!blog) {
    notFound();
  }
  return (
    <div className="py-10 min-h-screen">
      <BlogHeading blog={blog} />
      <div className="lg:w-[80%] xl:w-[70%] mx-auto py-12">
        {/* <div
            className="py-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div> */}
        <QuillEditor content={blog.content} />
        <ShareSection />
      </div>
    </div>
  );
};

export default BlogContent;

export async function generateMetadata(
  {
    params: { id },
  }: {
    params: { id: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const response: any = await fetch(`${baseUrl}/blogs/${id}`);
  // const blog = await response.json();
  const blog = await getBlog(parseInt(id));

  const previousImages = (await parent).openGraph?.images || [];
  if (!blog)
    return {
      title: "Exploreden Blog",
      openGraph: {
        title: "Exploreden Blog",
        description:
          "ExploreDen is a comprehensive platform for all travel enthusiasts. We use an innovative approach to help travelers discover the best local destinations, hidden gems, adventures, and events. Our mobile app works in being able to help travelers find EADs rapidly with left or right swipes on EADs within the app, within seconds, without the headache of going through the old school way.",
        images: previousImages,
      },
    };
  return {
    title: blog ? blog.title : "",
    openGraph: {
      title: blog ? blog.title : "Exploreden Blog",
      description: blog
        ? blog.subTitle
        : "ExploreDen is a comprehensive platform for all travel enthusiasts. We use an innovative approach to help travelers discover the best local destinations, hidden gems, adventures, and events. Our mobile app works in being able to help travelers find EADs rapidly with left or right swipes on EADs within the app, within seconds, without the headache of going through the old school way.",
      images: [blog.mainImageUrl, ...previousImages],
    },
  };
}
