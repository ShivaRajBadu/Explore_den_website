import React from "react";
type Props = {
  width?: string;
  height?: string;
  borderRadius?: string;
};

const TextSkeleton = ({
  width = "w-32",
  height = "h-2.5",
  borderRadius = "rounded-full",
}: Props) => {
  return (
    <div role="status" className="animate-pulse">
      <div className={` bg-gray-200 ${borderRadius} ${width} ${height} `}></div>
    </div>
  );
};

export default TextSkeleton;
