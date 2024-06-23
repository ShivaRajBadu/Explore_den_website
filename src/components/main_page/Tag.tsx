import Link from "next/link";
import React from "react";

const Tag = ({
  text,
}: {
  text: { id: number; label: string; value: string };
}) => {
  const params = new URLSearchParams();

  params.set("filter.category", text.value);
  return (
    <Link
      prefetch={false}
      href={`/category?${params.toString()}`}
      className="px-3 py-2 rounded  border border-brand bg-background "
    >
      {text.label}
    </Link>
  );
};

export default Tag;
