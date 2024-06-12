import React from "react";
import ProgramInfo from "./ProgramInfo";
import AddressSection from "./AddressSection";
import OrganizerSection from "./OrganizerSection";
import SocialMedia from "./SocialMedia";

import { placeDataType } from "@/types";

const Details = (place: placeDataType) => {
  return (
    <div>
      <h1 className="text-textPrimary text-[24px] md:text-[32px] lg:text-4xl font-semibold pb-4">
        {place.name}
      </h1>
      <ProgramInfo event={place.event} address={place.address} />
      <div className="py-6">
        <h2 className="text-[24px] font-semibold text-textPrimary pb-3">
          General Info
        </h2>
        <p>ALL general info</p>
      </div>
      <div className="py-6">
        <h2 className="text-[24px] font-semibold text-textPrimary pb-3">
          Description
        </h2>
        <p>{place.description}</p>
      </div>
      <AddressSection
        address={place.address}
        location={place.location}
        website={place.website}
      />
      {/* <OrganizerSection /> */}
      <SocialMedia
        facebookPage={place.facebookPage}
        twitterPage={place.twitterPage}
        instagramPage={place.instagramPage}
        youtubePage={place.youtubePage}
        linkedinPage={place.linkedinPage}
        tiktokPage={place.tiktokPage}
      />
    </div>
  );
};

export default Details;
