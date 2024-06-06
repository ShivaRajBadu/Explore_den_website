import Image from "next/image";
import React from "react";

type Props = {
  iconSrc: string;
  text: string;
};

const IconWithText = ({ iconSrc, text }: Props) => {
  return (
    <div className="flex gap-2 items-center ">
      <Image
        src={iconSrc}
        alt={text}
        width={-0}
        height={0}
        sizes="(100vw, 100vh)"
        className="w-auto h-auto"
      />
      <p className="font-medium text-xs md:text-sm text-textSecondary">
        {text}
      </p>
    </div>
  );
};

export default IconWithText;
