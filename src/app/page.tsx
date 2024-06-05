import Card from "@/components/Card";
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
    </main>
  );
}
