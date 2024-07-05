import Wrapper from "@/components/Wrapper";
import React from "react";
import Image from "next/image";
import ShareSection from "@/components/bolgs/ShareSection";
import { Metadata, ResolvingMetadata } from "next";
import { baseUrl } from "@/constants/data";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Wrapper>
      <div className="py-10">
        <div className="w-[90%] mx-auto">
          <p className="bg-[#FFF4F6] rounded-2xl px-4 my-2 py-1 text-center w-max mx-auto text-sm text-brand font-medium">
            8 min read
          </p>
          <h1 className="text-textPrimary  text-center py-2 text-[48px] font-semibold capitalize">
            UX Review Presentations
          </h1>
          <p className="text-textSecondary text-center text-base py-2 font-normal  mx-auto text-balance">
            Lorem ipsum dolor sit amet consectetur. Adipiscing vulputate in
            tortor ultrices facilisis ornare cursus. Dui eu orci bibendum
            molestie ut arcu ut. Semper morbi eget ac nibh scelerisque arcu.
            Massa leo libero.
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
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
            purus. Non massa enim vitae duis mattis. Vel in ultricies vel
            fringilla.
          </p>
          <ShareSection />
        </div>
      </div>
    </Wrapper>
  );
};

export default page;

export async function generateMetadata(
  {
    params: { id },
  }: {
    params: { id: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await fetch(`${baseUrl}/blogs/${id}`).then((res) => res.json());
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.mainImageUrl, ...previousImages],
    },
  };
}
