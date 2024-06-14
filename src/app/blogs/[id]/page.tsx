import Wrapper from "@/components/Wrapper";
import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Wrapper>
      <div className="text-3xl font-semibold text-center py-8 min-h-screen flex justify-center items-center">
        Under Construction
      </div>
    </Wrapper>
  );
};

export default page;
