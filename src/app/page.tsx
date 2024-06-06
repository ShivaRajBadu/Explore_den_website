import ActivitiesSection from "@/components/ActivitiesSection";
import BlogSection from "@/components/BlogSection";
import Card from "@/components/Card";
import ContactUs from "@/components/ContactUs";
import DestinationSection from "@/components/DestinationSection";
import DownloadSection from "@/components/DownloadSection";
import EventSection from "@/components/EventSection";
import FindWhatYouLoveSection from "@/components/FindWhatYouLoveSection";
import Footer from "@/components/Footer";
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
      <ContactUs />
      <Footer />
      <div className="ht-24 h-[100px]"></div>
    </main>
  );
}
