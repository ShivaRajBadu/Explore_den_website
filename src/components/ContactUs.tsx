import React from "react";
import Wrapper from "./Wrapper";

const ContactUs = () => {
  return (
    <div className="my-14 py-14">
      <div className="max-w-[1440px] w-full md:w-[90%] mx-auto">
        <div className="bg-brand text-background px-4  md:rounded-[40px] text-center py-[72px]">
          <h1 className="font-semibold text-[28px] md:text-5xl capitalize py-4">
            Have any Qureies ? Contact Us
          </h1>
          <p className="font-normal  text-sm md:text-lg py-2 max-w-[70%] md:max-w-[40%] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Semper at elit gravida quam
            diam phasellus..
          </p>
          <button className="bg-background text-brand text-center mt-6 rounded-lg px-6 py-3 font-semibold text-base">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
