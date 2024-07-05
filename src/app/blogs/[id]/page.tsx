import Wrapper from "@/components/Wrapper";
import React from "react";
import Image from "next/image";
import ShareSection from "@/components/bolgs/ShareSection";
import { Metadata, ResolvingMetadata } from "next";
import { getBlog } from "@/actions/getBlog";
import { notFound } from "next/navigation";

import QuillEditor from "@/components/bolgs/QuillEditor";

export async function generateMetadata(
  {
    params: { id },
  }: {
    params: { id: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await getBlog(parseInt(id));
  const previousImages = (await parent).openGraph?.images || [];
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

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const blog = await getBlog(parseInt(id));
  if (!blog) {
    notFound();
  }

  return (
    <Wrapper>
      <div className="py-10">
        <div className="w-[90%] mx-auto">
          <p className="bg-[#FFF4F6] rounded-2xl px-4 my-2 py-1 text-center w-max mx-auto text-sm text-brand font-medium">
            {blog.readingMinute} min read
          </p>
          <h1 className="text-textPrimary  text-center py-2 text-[48px] font-semibold capitalize">
            {blog.title}
          </h1>
          <p className="text-textSecondary text-center text-base py-2 font-normal  mx-auto text-balance">
            {blog.subTitle}
          </p>
          <div className="flex justify-center gap-6 items-start py-8 w-max mx-auto cursor-pointer">
            <Image
              src="/images/author.png"
              alt="author"
              width={0}
              height={0}
              sizes="(100vw, 100vh)"
              className="w-[56px] h-[56px]"
            />
            <div>
              <h3 className="font-medium text-lg text-textPrimary">
                Oiliva Rhye
              </h3>
              <p className="text-textSecondary font-normal text-base">
                20 Jan 2024
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/images/blog.jpg"}
            alt="blog"
            width={0}
            height={0}
            sizes="(100vw, 100vh)"
            className="w-full object-cover h-[600px] rounded-lg"
          />
        </div>
        <div className="lg:w-[80%] xl:w-[70%] mx-auto py-12">
          {/* <div
            className="py-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div> */}
          <QuillEditor content={blog.content} />
          <ShareSection />
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
