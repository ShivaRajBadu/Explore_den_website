import React from "react";
import Wrapper from "./Wrapper";

const ContactUs = () => {
  return (
    <div className="my-14 py-14">
      <Wrapper>
        <div className="bg-brand text-background  rounded-[40px] text-center py-[72px]">
          <h1 className="font-semibold text-5xl capitalize py-4">
            Have any Qureies ? Contact Us
          </h1>
          <p className="font-normal text-lg py-2 max-w-[40%] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Semper at elit gravida quam
            diam phasellus..
          </p>
          <button className="bg-background text-brand text-center mt-6 rounded-lg px-6 py-3 font-semibold text-base">
            Contact Us
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactUs;
