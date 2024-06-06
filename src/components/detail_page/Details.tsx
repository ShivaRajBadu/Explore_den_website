import React from "react";
import ProgramInfo from "./ProgramInfo";
import AddressSection from "./AddressSection";
import OrganizerSection from "./OrganizerSection";
import SocialMedia from "./SocialMedia";
import YouMayLike from "./YouMayLike";

const Details = () => {
  return (
    <div>
      <h1 className="text-textPrimary text-4xl font-semibold pb-4">
        Painting Workshops near Morphett Vale,Australia
      </h1>
      <ProgramInfo />
      <div className="py-6">
        <h2 className="text-[24px] font-semibold text-textPrimary pb-3">
          General Info
        </h2>
        <p>
          📅 Dates and times: select your date & time directly in the ticket
          selector ⏳ Duration: approx. 45 minutes–1 hour 📍 Location: Fever
          Exhibition and Experience Centre, 62 Dawson Street Brunswick 👤 Age
          requirement: all ages are welcome! However, children ages 3 and above
          will get the most out of this exhibition. Children ages 16 and under
          must be accompanied by an adult. Age check may be required ♿
          Accessibility: the venue is wheelchair accessible ❓ Please consult
          the FAQs of this experience here
        </p>
      </div>
      <div className="py-6">
        <h2 className="text-[24px] font-semibold text-textPrimary pb-3">
          Description
        </h2>
        <p>
          Get closer to dinosaurs than ever before in Jurassic World: The
          Exhibition! Based on one of the biggest blockbusters in cinema
          history, the exhibition immerses audiences of all ages in scenes
          inspired by the beloved movies. Now, the park that was only a promise
          comes to life… right before your eyes. Walk through the Jurassic World
          iconic gates as an honoured guest and gaze in wonder at a towering
          Brachiosaurus; come face-to-face with a Velociraptor; and get a rare
          up-close look at the most vicious dinosaur of them all, Tyrannosaurus
          Rex. Don’t miss the awe-inspiring journey and remember, if something
          chases you… run! Get your tickets for Jurassic World: The
          Exhibition in Melbourne!
        </p>
      </div>
      <AddressSection />
      <OrganizerSection />
      <SocialMedia />
    </div>
  );
};

export default Details;
