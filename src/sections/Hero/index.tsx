import { HeroBackground } from "@/sections/Hero/components/HeroBackground";
import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <main className="relative content-center items-center box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-center min-h-[auto] min-w-[auto] order-1 outline-[3px] gap-y-8 w-full pt-0 pb-[22px] px-[15px] md:order-none md:pt-[74px] md:px-8">
      <HeroBackground />
      <HeroContent />
    </main>
  );
};
