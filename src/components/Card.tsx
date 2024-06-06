import React from "react";
import Image from "next/image";
import IconWithText from "./IconWithText";

const Card = ({ cardType }: { cardType: string }) => {
  const cardTypeColor = cardType === "event" ? "text-brand" : "text-blue";
  return (
    <div className="min-w-[220px] md:min-w-[260px] lg:min-w-[290px] w-full cursor-pointer card_shadow  rounded-2xl  duration-300 ">
      <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] xl:h-[380px] rounded-2xl overflow-hidden ">
        <Image
          src="/images/image_2.jpg"
          className="object-cover"
          fill
          alt="explore den logo"
          sizes="(100vw, 100vh)"
        />
        <p
          className={`backdrop-blur-[6px] capitalize bg-white/80 rounded px-2 py-1 absolute top-4 right-4  text-[10px] font-medium ${cardTypeColor}`}
        >
          {cardType}
        </p>
      </div>
      <div className="pt-5 px-2 pb-2">
        <h2 className="font-semibold text-lg md:text-xl pb-2">
          Trees Adventure: Yeodene Park
        </h2>
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
