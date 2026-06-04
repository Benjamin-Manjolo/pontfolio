import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterColumns = () => {
  return (
    <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal max-w-none min-h-0 min-w-0 outline-0 gap-y-[normal] w-auto p-0 px-8 py-10 md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-12 md:flex md:shrink-0 md:h-min md:justify-center md:max-w-[1080px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-12 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:pt-px md:pb-[35px] md:px-8 md:scroll-mt-[100px] md:scroll-mb-0 md:scroll-mx-0 md:scroll-p-[auto]">
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 outline-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-[39px] md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[39px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <FooterColumn
          title="✨ navigation"
          links={[
            {
              href: "./#case-study",
              label: "Work",
              paragraphClassName:
                "text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 text-start break-normal font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.4px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi",
              linkClassName:
                "box-content caret-black outline-0 break-normal md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-300 hover:border-blue-300",
            },
            {
              href: "./about",
              label: "About",
              paragraphClassName:
                "text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 text-start break-normal font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.4px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi",
              linkClassName:
                "box-content caret-black outline-0 break-normal md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-300 hover:border-blue-300",
            },
            {
              href: "./fun",
              label: "Fun",
              paragraphClassName:
                "text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 text-start break-normal font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.4px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi",
              linkClassName:
                "box-content caret-black outline-0 break-normal md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-300 hover:border-blue-300",
            },
          ]}
        />
        <FooterColumn
          title="🌙 contact"
          links={[
            {
              href: "https://www.linkedin.com/in/benjamin-manjolo-39kurupt/?utm_source=chatgpt.com",
              label: "LinkedIn",
              paragraphClassName:
                "text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 text-start break-normal font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.4px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi",
              linkClassName:
                "box-content caret-black outline-0 break-normal md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-300 hover:border-blue-300",
            },
            {
              href: "mailto:benjaminmanjolo39@gmail.com",
              label: "Email",
              paragraphClassName:
                "text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 text-start break-normal font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.4px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi",
              linkClassName:
                "box-content caret-black outline-0 break-normal md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-300 hover:border-blue-300",
            },
            {
              href: "https://github.com/Benjamin-Manjolo?utm_source=chatgpt.com",
              label: "GitHub",
              paragraphClassName:
                "text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 text-start break-normal font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.4px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi",
              linkClassName:
                "box-content caret-black outline-0 break-normal md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-300 hover:border-blue-300",
            },
            {
              href: "https://x.com/BenjaminManjolo",
              label: "X",
              paragraphClassName:
                "text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 text-start break-normal font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.4px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi",
              linkClassName:
                "box-content caret-black outline-0 break-normal md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-300 hover:border-blue-300",
            },
            {
              href: "https://web.facebook.com/kurupt.november/",
              label: "Facebook",
              paragraphClassName:
                "text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 text-start break-normal font-times md:text-white md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.4px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi",
              linkClassName:
                "box-content caret-black outline-0 break-normal md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-300 hover:border-blue-300",
            },
          ]}
        />
        <FooterColumn
          title="💫 case studies"
          links={[
            {
              href: "./project/documentcenter",
              label: "Document Center",
              paragraphClassName:
                "text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 text-start break-normal font-times md:text-neutral-950 md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.4px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi",
              linkClassName:
                "text-black box-content caret-black outline-0 break-normal md:text-white md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-300 hover:border-blue-300",
            },
            {
              href: "./project/nightswatch",
              label: "Night's Watch",
              paragraphClassName:
                "text-black text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 text-start break-normal font-times md:text-neutral-950 md:font-medium md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.4px] md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi",
              linkClassName:
                "text-black box-content caret-black outline-0 break-normal md:text-white md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:text-blue-300 hover:border-blue-300",
            },
          ]}
        />
      </div>
    </div>
  );
};
