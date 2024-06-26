"use client";

import { postContactInfo } from "@/actions/postContactInfo";
import React from "react";
import { useFormState } from "react-dom";
import toast from "react-simple-toasts";
import Turnstile from "./Turnstile";
import SendButton from "./SendButton";
import { useSearchParams } from "next/navigation";
const initialState = {
  message: null,
  success: null,
};
const CustomForm = () => {
  const params = useSearchParams();

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
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
  return (
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
          value={params.get("description") || ""}
          required
          placeholder="Enter a description"
        ></textarea>
      </div>
      <div className="h-[65px]">
        <Turnstile />
        {/* <div
          className="cf-turnstile"
          data-Theme="light"
          data-sitekey="0x4AAAAAAAcSeHlw_xq5Ab-R"
        ></div> */}
      </div>
      <SendButton />
    </form>
  );
};

export default CustomForm;
