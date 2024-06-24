import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="my-14 md:py-14">
      <div className="max-w-[1440px] w-full md:w-[90%] mx-auto">
        <div className="bg-brand text-background px-4  md:rounded-[40px] text-center py-[72px]">
          <h1 className="font-semibold text-[28px] md:text-5xl capitalize py-4">
            Have any Queries? Contact Us
          </h1>
          <p className="font-normal  text-sm md:text-lg py-2 max-w-[70%] md:max-w-[50%] text-balance mb-10 mx-auto">
            Our team is here to help you find the best travel experiences. Get
            in touch for recommendations, support, or any inquiries you may
            have.
          </p>
          <Link
            prefetch={false}
            href="/contact"
            className="bg-background block w-max mx-auto text-brand text-center hover:scale-[1.02] duration-100  rounded-lg px-6 py-3 font-semibold text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
