import { Hero } from "../sections/Hero";
import { WorkSection } from "../sections/WorkSection";
import { Footer } from "../sections/Footer";

export const PageContainer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="py-8 md:py-0"></div>
      <WorkSection />
      <Footer />
    </div>
  );
};
