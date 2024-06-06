import DownloadSection from "@/components/main_page/DownloadSection";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <DownloadSection />
    </section>
  );
}
