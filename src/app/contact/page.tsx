import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React, { Suspense } from "react";

import ContactImage from "../../../public/images/contact_image.png";
import CustomForm from "@/components/contact_page/CustomForm";
import Navigation from "@/components/headers/Navigation";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};
const page = () => {
  return (
    <>
      <Navigation />
      <Wrapper>
        <div className="flex  gap-10 py-20  ">
          <div className="w-full lg:w-1/2">
            <h1 className="text-textPrimary text-4xl font-semibold">
              Get In Touch
            </h1>
            <Suspense
              fallback={
                <div className="h-[60vh] flex justify-center items-center">
                  loading....
                </div>
              }
            >
              <CustomForm />
            </Suspense>
          </div>
          <div className="hidden lg:block w-1/2 relative h-[677px]">
            <Image
              src={ContactImage}
              alt="contact PNG"
              fill
              sizes="(100vw, 100vh)"
              placeholder="blur"
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default page;
