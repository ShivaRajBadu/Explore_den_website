import React from "react";
import Image from "next/image";
import IconWithText from "./IconWithText";
import Link from "next/link";
import { placeDataType } from "@/types";
import { randomNumber } from "@/lib/randomNumber";

const Card = (params: placeDataType) => {
  const cardTypeColor =
    params.placeType === "event" ? "text-brand" : "text-blue";

  return (
    <Link
      draggable={false}
      prefetch={false}
      href={`details/${params.placeType}/${params.id}`}
      className="min-w-[220px] relative  md:min-w-[260px] lg:min-w-[290px] w-full cursor-pointer card_shadow  rounded-2xl  duration-300 "
    >
      <div
        draggable={false}
        className="relative  w-full h-[250px] md:h-[300px] lg:h-[350px] xl:h-[380px] rounded-2xl overflow-hidden "
      >
        <Image
          src={`https://picsum.photos/200/300?random=${randomNumber()}`}
          className="object-cover"
          fill
          alt="explore den logo"
          sizes="(100vw, 100vh)"
        />
        <p
          className={`backdrop-blur-[6px] capitalize bg-white/80 rounded px-2 py-1 absolute top-4 right-4  text-[10px] font-medium ${cardTypeColor}`}
        >
          {params.placeType}
        </p>
      </div>
      <div className="pt-5 px-2 pb-2">
        <h2 className="font-semibold text-lg md:text-xl pb-2 line-clamp-2">
          {params.name}
        </h2>
        <IconWithText iconSrc="/icons/location.svg" text={params.address} />
        {params.placeType === "event" && (
          <div className="flex gap-8 items-center py-3">
            <IconWithText
              iconSrc="/icons/clock.svg"
              text={params.event?.startDate!}
            />
            <IconWithText
              iconSrc="/icons/ticket.svg"
              text={params.event?.eventType!}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
