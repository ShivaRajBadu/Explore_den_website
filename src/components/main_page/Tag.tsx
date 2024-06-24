import Link from "next/link";
import React from "react";

const Tag = ({ text }: { text: string }) => {
  const params = new URLSearchParams();

  params.set("filter.category", text);
  return (
    <Link
      prefetch={false}
      href={`/category?${params.toString()}`}
      className="px-3 py-2 rounded  border border-brand bg-background "
    >
      {text}
    </Link>
  );
};

export default Tag;
