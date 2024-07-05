import HeroSection from "@/components/headers/HeroSection";
import Navigation from "@/components/headers/Navigation";
import DownloadSection from "@/components/main_page/DownloadSection";

import Headers from "@/components/headers/Headers";
export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Headers background="bg-background">
        <Navigation />
      </Headers>
      {children}
      <DownloadSection />
    </section>
  );
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: any;
}) {
  const title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: title,
  };
}
