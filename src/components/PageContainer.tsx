import { Hero } from "../sections/Hero";
import { WorkSection } from "../sections/WorkSection";
import { Footer } from "../sections/Footer";

export const PageContainer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WorkSection />
      <Footer />
    </div>
  );
};
