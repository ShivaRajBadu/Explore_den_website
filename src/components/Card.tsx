import React from "react";
import Image from "next/image";
import IconWithText from "./IconWithText";

const Card = ({ cardType }: { cardType: string }) => {
  const cardTypeColor = cardType === "event" ? "text-brand" : "text-blue";
  return (
    <div className="min-w-[300px] w-full">
      <div className="relative w-full h-[380px] rounded-2xl overflow-hidden ">
        <Image
          src="/images/image_2.jpg"
          className="object-cover"
          fill
          alt="explore den logo"
          sizes="(100vw, 100vh)"
        />
        <p
          className={`backdrop-blur-[6px] capitalize bg-white/80 rounded px-2 py-1 absolute top-4 right-4  text-xs font-medium ${cardTypeColor}`}
        >
          {cardType}
        </p>
      </div>
      <div className="pt-5">
        <h2 className="font-semibold text-xl pb-2">Dance Opera House</h2>
        <IconWithText
          iconSrc="/icons/location.svg"
          text="Conference Venue Melbourne"
        />
        {cardType === "event" && (
          <div className="flex gap-8 items-center py-3">
            <IconWithText iconSrc="/icons/clock.svg" text="23th June 2024" />
            <IconWithText iconSrc="/icons/ticket.svg" text="Free" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
