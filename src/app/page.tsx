import Footer from "@/components/Footer";
import ActivitiesSection from "@/components/main_page/ActivitiesSection";
import BlogSection from "@/components/main_page/BlogSection";
import ContactUs from "@/components/main_page/ContactUs";
import DestinationSection from "@/components/main_page/DestinationSection";
import DownloadSection from "@/components/main_page/DownloadSection";
import EventSection from "@/components/main_page/EventSection";
import FindWhatYouLoveSection from "@/components/main_page/FindWhatYouLoveSection";
import PopularSection from "@/components/main_page/PopularSection";
import Headers from "@/components/headers/Headers";
import HeroSection from "@/components/headers/HeroSection";
import Navigation from "@/components/headers/Navigation";
export default function Home() {
  return (
    <main>
      <Headers background="bg-[#F6F6F6]">
        <Navigation />
        <HeroSection />
      </Headers>
      <PopularSection />
      <EventSection />
      <FindWhatYouLoveSection />
      <ActivitiesSection />
      <DestinationSection />
      <DownloadSection />
      <BlogSection />
      <ContactUs />
    </main>
  );
}
