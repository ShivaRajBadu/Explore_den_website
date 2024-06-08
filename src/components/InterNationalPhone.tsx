"use client";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
const InterNationalPhone = () => {
  return (
    <div className="w-full pb-10">
      <label
        className="text-textPrimary text-sm font-medium block pb-2"
        htmlFor="phoneNumber"
      >
        Phone Number
      </label>
      <PhoneInput
        className="w-full "
        defaultCountry="au"
        name="phoneNumber"
        required
        inputClassName="w-full rounded-[8px] py-2  border border-[#D8D4D5] text-sm placeholder:text-[#7A7174] text-textPrimary outline-none"
      />
    </div>
  );
};

export default InterNationalPhone;
