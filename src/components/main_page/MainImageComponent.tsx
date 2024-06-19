"use client";

import { useState } from "react";
import Image from "next/image";
import { getPlaceHolderImageUrl } from "@/lib/getPlaceHolderUrl";

const MainImageComponent = ({
  imageUrl,
  defaultImageUrl,
}: {
  imageUrl: string;
  defaultImageUrl: string;
}) => {
  const [src, setSrc] = useState(imageUrl);

  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        className="object-cover"
        fill
        alt="explore den logo"
        sizes="(100vw, 100vh)"
        onError={() => setSrc(defaultImageUrl)}
        placeholder="blur"
        blurDataURL={getPlaceHolderImageUrl(src)}
      />
    </div>
  );
};

export default MainImageComponent;
