import Link from "next/link";
import React from "react";

const SectionHeaderWithViewAll = ({
  sectionTitle,
  link,
}: {
  sectionTitle: string;
  link: string;
}) => {
  return (
    <div className="flex justify-between items-center ">
      <h2 className="text-[22px] md:text-[32px] lg:text-4xl font-semibold text-foreground  py-4 md:py-10">
        {sectionTitle}
      </h2>
      <Link
        prefetch={false}
        className="text-brand hover:text-brand/70 duration-300 text-sm font-medium"
        href={link}
      >
        View all
      </Link>
    </div>
  );
};

export default SectionHeaderWithViewAll;
