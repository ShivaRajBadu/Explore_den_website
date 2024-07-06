// import ActivitiesSection from "@/components/main_page/ActivitiesSection";
import ContactUs from "@/components/main_page/ContactUs";
// import DestinationSection from "@/components/main_page/DestinationSection";
import DownloadSection from "@/components/main_page/DownloadSection";
// import EventSection from "@/components/main_page/EventSection";
import FindWhatYouLoveSection from "@/components/main_page/FindWhatYouLoveSection";
// import PopularSection from "@/components/main_page/PopularSection";
import Headers from "@/components/headers/Headers";
import HeroSection from "@/components/headers/HeroSection";
import Navigation from "@/components/headers/Navigation";
import { Suspense } from "react";
import GridShimmer from "@/components/skeletons/GridShimmer";
import PopularSectionSkeleton from "@/components/skeletons/PopularSectionSkeleton";
import dynamic from "next/dynamic";
// import BlogSection from "@/components/main_page/BlogSection";

// Dynamically import components that are below the fold
const PopularSection = dynamic(
  () => import("@/components/main_page/PopularSection"),
  {
    loading: () => <PopularSectionSkeleton />,
  }
);
const EventSection = dynamic(
  () => import("@/components/main_page/EventSection"),
  {
    loading: () => <GridShimmer />,
  }
);
const ActivitiesSection = dynamic(
  () => import("@/components/main_page/ActivitiesSection"),
  {
    loading: () => <GridShimmer />,
  }
);
const DestinationSection = dynamic(
  () => import("@/components/main_page/DestinationSection"),
  {
    loading: () => <GridShimmer />,
  }
);
const BlogSection = dynamic(
  () => import("@/components/main_page/BlogSection"),
  {
    loading: () => <GridShimmer />,
  }
);

export default function Home() {
  return (
    <main>
      <Headers background="bg-background">
        <Navigation />
        <HeroSection />
      </Headers>
      {/* <div className="h-screen bg-green-300"></div> */}
      {/* <div className="h-screen bg-green-300"></div> */}
      <Suspense fallback={<PopularSectionSkeleton />}>
        <PopularSection />
      </Suspense>
      <Suspense fallback={<GridShimmer />}>
        <EventSection />
      </Suspense>
      <FindWhatYouLoveSection />
      <Suspense fallback={<GridShimmer />}>
        <ActivitiesSection />
      </Suspense>
      <Suspense fallback={<GridShimmer />}>
        <DestinationSection />
      </Suspense>
      <DownloadSection />
      <Suspense fallback={<GridShimmer />}>
        <BlogSection />
      </Suspense>
      <ContactUs />
    </main>
  );
}
