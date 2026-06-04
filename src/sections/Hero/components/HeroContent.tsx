import { HeroIntro } from "@/sections/Hero/components/HeroIntro";
import { HeroPortrait } from "@/sections/Hero/components/HeroPortrait";

export const HeroContent = () => {
  return (
    <div className="relative content-center items-center box-border caret-transparent gap-x-[19px] flex flex-col shrink-0 h-min justify-center max-w-[1080px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[19px] w-full z-[1] pl-2.5 pr-5 pt-[26px] pb-[21px] md:gap-x-0 md:flex-row md:gap-y-0 md:pt-11">
      <HeroIntro />
      <HeroPortrait />
    </div>
  );
};
