import ActivitiesSection from "@/components/ActivitiesSection";
import BlogSection from "@/components/BlogSection";
import Card from "@/components/Card";
import DestinationSection from "@/components/DestinationSection";
import DownloadSection from "@/components/DownloadSection";
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
      <DownloadSection />
      <BlogSection />
    </main>
  );
}
