import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="">
      <Image
        src="/icons/logo.svg"
        alt="explore den logo"
        width={0}
        height={0}
        priority
        className="w-auto h-auto"
      />
    </Link>
  );
};

export default Logo;
