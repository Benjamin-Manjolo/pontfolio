import { SocialLinks } from "./SocialLinks";

export const HeroIntro = () => {
  return (
    <div className="flex flex-col gap-10 flex-1">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl text-gray-800/80 leading-tight font-lustria">
          👋 Hi there!{" "}
          <strong className="font-bold">I&#39;m Benjamin Manjolo.</strong>
        </h1>
        <div className="space-y-3 max-w-[560px]">
          <p className="text-2xl md:text-3xl font-semibold text-neutral-700 leading-snug font-satoshi tracking-[-0.3px]">
            Innovator, Software Engineer & AI Product Builder
          </p>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-satoshi tracking-[-0.3px] max-w-[520px]">
            Building technology that solves real-world African challenges.
          </p>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};
