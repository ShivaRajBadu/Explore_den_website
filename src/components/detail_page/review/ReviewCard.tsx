import Image from "next/image";
import React from "react";
import Stars from "./Stars";

const ReviewCard = () => {
  return (
    <div className="py-8 border-b">
      <div className="flex  gap-4">
        <div className="relative w-[48px] h-[48px] rounded-full">
          <Image
            src="/images/author.png"
            alt="image"
            fill
            sizes="(100vw, 100vh)"
          />
        </div>
        <div>
          <h3 className="text-textPrimary text-lg font-medium pb-[2px]">
            Courtney Henry
          </h3>
          <div className="flex  gap-4 items-center">
            <Stars rating={4} starSize="16" />
            <p className="font-normal text-xs text-textSecondary">2 mins ago</p>
          </div>
        </div>
      </div>
      <p className="text-textSecondary text-lg font-normal py-4">
        Consequat velit qui adipisicing sunt do rependerit ad laborum tempor
        ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit
        esse aliqua
      </p>
      <div className="flex  gap-4">
        <div className="relative rounded-full w-[63px] h-[73px]">
          <Image
            src="/images/image_3.png"
            alt="image"
            fill
            className="object-contain"
            sizes="(100vw, 100vh)"
          />
        </div>
        <div className="relative rounded-full w-[63px] h-[73px]">
          <Image
            src="/images/image_3.png"
            alt="image"
            fill
            className="object-contain"
            sizes="(100vw, 100vh)"
          />
          <div className="absolute cursor-pointer left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.399902"
                width="16"
                height="16"
                rx="8"
                fill="black"
                fillOpacity="0.75"
              />
              <path
                d="M5.5874 5.35521C5.5874 4.99854 5.96949 4.77271 6.28199 4.94437L11.0903 7.58896C11.1639 7.62939 11.2253 7.68885 11.2681 7.76112C11.3108 7.83339 11.3334 7.91582 11.3334 7.99979C11.3334 8.08376 11.3108 8.16619 11.2681 8.23846C11.2253 8.31073 11.1639 8.37019 11.0903 8.41062L6.28199 11.0552C6.2106 11.0945 6.13023 11.1144 6.04878 11.1131C5.96733 11.1119 5.88763 11.0894 5.81751 11.0479C5.7474 11.0064 5.68931 10.9474 5.64896 10.8766C5.60861 10.8059 5.58739 10.7258 5.5874 10.6444V5.35521Z"
                stroke="white"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
