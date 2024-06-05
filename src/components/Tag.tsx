import React from "react";

const Tag = ({ text }: { text: string }) => {
  return (
    <p className="px-3 py-2 rounded  border border-brand bg-background ">
      {text}
    </p>
  );
};

export default Tag;
