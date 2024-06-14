"use client";
import InterNationalPhone from "@/components/InterNationalPhone";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

import Turnstile from "./Turnstile";
import { postContactInfo } from "@/actions/postContactInfo";

import SendButton from "./SendButton";
import { useFormState } from "react-dom";
import toast from "react-simple-toasts";

const initialState = {
  message: null,
  success: null,
};
const page = () => {
  const [state, formAction] = useFormState(postContactInfo, initialState);
  if (state.error) {
    toast(state.error, {
      className: "bg-red-500 text-white px-4 py-6 font-semibold rounded-md",
      position: "center",
      clickClosable: true,
    });
  }

  if (state.success) {
    toast(state.success, {
      className: "bg-green-500 text-white px-4 py-6 font-semibold rounded-md",
      position: "center",
      clickClosable: true,
    });
  }

  return (
    <div>
      <Wrapper>
        <div className="flex  gap-10 py-20  ">
          <div className="w-full lg:w-1/2">
            <h1 className="text-textPrimary text-4xl font-semibold">
              Get In Touch
            </h1>
            <form className="w-full py-10" action={formAction}>
              <div className="w-full pb-10">
                <label
                  className="text-textPrimary text-sm font-medium block pb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full focus:border-brand block px-3 py-2 rounded-[8px]  border border-[#D8D4D5] text-sm placeholder:text-[#7A7174] text-textPrimary outline-none"
                  type="text"
                  required
                  id="name"
                  name="name"
                  placeholder="Oilviea"
                />
              </div>
              <div className="w-full pb-10">
                <label
                  className="text-textPrimary text-sm font-medium block pb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full block focus:border-brand px-3 py-2 rounded-[8px]  border border-[#D8D4D5] text-sm placeholder:text-[#7A7174] text-textPrimary outline-none"
                  type="email"
                  id="name"
                  name="email"
                  required
                  placeholder="oilviea2@gmail.com"
                />
              </div>

              <div className="w-full pb-4">
                <label
                  className="text-textPrimary text-sm font-medium block pb-2"
                  htmlFor="name"
                >
                  Description
                </label>
                <textarea
                  className="w-full focus:border-brand block px-3 py-2 rounded-[8px]  border border-[#D8D4D5] text-sm placeholder:text-[#7A7174] text-textPrimary outline-none"
                  name="description"
                  id="Description"
                  rows={7}
                  required
                  placeholder="Enter a description"
                ></textarea>
              </div>
              <div className="h-[65px]">
                <Turnstile />
              </div>
              <SendButton />
            </form>
          </div>
          <div className="hidden lg:block w-1/2 relative h-[677px]">
            <Image
              src="/images/contact_image.png"
              alt="contact PNG"
              fill
              sizes="(100vw, 100vh)"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default page;
