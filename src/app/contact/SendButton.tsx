"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const SendButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-brand disabled:cursor-not-allowed  text-background mt-4 w-full block text-base font-semibold py-3 rounded-[8px]"
      type="submit"
    >
      Submit
    </button>
  );
};
export default SendButton;
