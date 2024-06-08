import Navigation from "@/components/headers/Navigation";
import InterNationalPhone from "@/components/InterNationalPhone";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";

const page = () => {
  async function sendInfo(formData: FormData) {
    "use server";
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      message: formData.get("description"),
    };
    console.log(rawFormData);
  }
  return (
    <div>
      <Navigation />
      <Wrapper>
        <div className="flex  gap-10 py-20  ">
          <div className="w-full lg:w-1/2">
            <h1 className="text-textPrimary text-4xl font-semibold">
              Get In Touch
            </h1>
            <form className="w-full py-10" action={sendInfo}>
              <div className="w-full pb-10">
                <label
                  className="text-textPrimary text-sm font-medium block pb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full block px-3 py-2 rounded-[8px]  border border-[#D8D4D5] text-sm placeholder:text-[#7A7174] text-textPrimary outline-none"
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
                  className="w-full block px-3 py-2 rounded-[8px]  border border-[#D8D4D5] text-sm placeholder:text-[#7A7174] text-textPrimary outline-none"
                  type="email"
                  id="name"
                  name="email"
                  required
                  placeholder="oilviea2@gmail.com"
                />
              </div>
              <InterNationalPhone />

              <div className="w-full pb-12">
                <label
                  className="text-textPrimary text-sm font-medium block pb-2"
                  htmlFor="name"
                >
                  Description
                </label>
                <textarea
                  className="w-full block px-3 py-2 rounded-[8px]  border border-[#D8D4D5] text-sm placeholder:text-[#7A7174] text-textPrimary outline-none"
                  name="description"
                  id="Description"
                  rows={7}
                  required
                  placeholder="Enter a description"
                ></textarea>
              </div>
              <button
                className="bg-brand text-background w-full block text-base font-semibold py-3 rounded-[8px]"
                type="submit"
              >
                Submit
              </button>
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
