import React from "react";
import Image from "next/image";

const ProgramInfo = () => {
  return (
    <div className="space-y-6 py-4">
      <div className="flex gap-4 items-start">
        <div className="bg-iconblue/20  w-[52px] h-[52px] rounded-xl grid place-content-center">
          <Image
            src="/icons/location.svg"
            alt="location"
            width={0}
            height={0}
            className="w-7 h-7"
          />
        </div>
        <div>
          <h4 className="text-base font-semibold text-subTitle">Event Venue</h4>
          <p className=" text-textSecondary text-sm font-normal">
            Name of the venue
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <div className="bg-icongreen/20  w-[52px] h-[52px] rounded-xl grid place-content-center">
          <Image
            src="/icons/clock.svg"
            alt="location"
            width={0}
            height={0}
            className="w-7 h-7"
          />
        </div>
        <div>
          <h4 className="text-base font-semibold text-subTitle">Event Date</h4>
          <p className=" text-textSecondary text-sm font-normal">
            23th August 2024 . 12:30 PM NPT
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <div className="bg-iconpurple/20  w-[52px] h-[52px] rounded-xl grid place-content-center">
          <Image
            src="/icons/ticket.svg"
            alt="location"
            width={0}
            height={0}
            className="w-7 h-7"
          />
        </div>
        <div>
          <h4 className="text-base font-semibold text-subTitle">
            Event Ticket
          </h4>
          <p className=" text-textSecondary text-sm font-normal">
            1st August - 22nd August ($50)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramInfo;
