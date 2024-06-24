import Image from "next/image";
import React from "react";

type Props = {
  iconSrc: string;
  text: string;
};

const IconWithText = ({ iconSrc, text }: Props) => {
  let align = "items-center";
  if (iconSrc.includes("location")) {
    align = "items-start";
  }
  return (
    <div className={`flex gap-2  ${align}`}>
      <Image
        src={iconSrc}
        alt={text}
        width={-0}
        height={0}
        sizes="(100vw, 100vh)"
        className="w-auto h-auto"
      />
      <p className="font-medium line-clamp-2 text-xs md:text-sm text-textSecondary">
        {text}
      </p>
    </div>
  );
};

export default IconWithText;
