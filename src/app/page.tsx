import ActivitiesSection from "@/components/ActivitiesSection";
import Card from "@/components/Card";
import DestinationSection from "@/components/DestinationSection";
import EventSection from "@/components/EventSection";
import FindWhatYouLoveSection from "@/components/FindWhatYouLoveSection";
import Headers from "@/components/headers/Headers";
import PopularSection from "@/components/PopularSection";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <Headers />
      <PopularSection />
      <EventSection />
      <FindWhatYouLoveSection />
      <ActivitiesSection />
      <DestinationSection />
    </main>
  );
}
