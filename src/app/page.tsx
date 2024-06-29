import ActivitiesSection from "@/components/main_page/ActivitiesSection";
import ContactUs from "@/components/main_page/ContactUs";
import DestinationSection from "@/components/main_page/DestinationSection";
import DownloadSection from "@/components/main_page/DownloadSection";
import EventSection from "@/components/main_page/EventSection";
import FindWhatYouLoveSection from "@/components/main_page/FindWhatYouLoveSection";
import PopularSection from "@/components/main_page/PopularSection";
import Headers from "@/components/headers/Headers";
import HeroSection from "@/components/headers/HeroSection";
import Navigation from "@/components/headers/Navigation";
import { Suspense } from "react";
import GridShimmer from "@/components/skeletons/GridShimmer";
import PopularSectionSkeleton from "@/components/skeletons/PopularSectionSkeleton";

export default function Home() {
  return (
    <main>
      {/* <HeaderPart />
       */}
      <Headers background="bg-background">
        <Navigation />
        <HeroSection />
      </Headers>
      <Suspense fallback={<PopularSectionSkeleton />}>
        <PopularSection />
      </Suspense>
      <Suspense fallback={<GridShimmer />}>
        <EventSection />
      </Suspense>
      <FindWhatYouLoveSection />
      <Suspense>
        <ActivitiesSection />
      </Suspense>
      <Suspense>
        <DestinationSection />
      </Suspense>
      <DownloadSection />
      {/* <BlogSection /> */}

      <ContactUs />
    </main>
  );
}
