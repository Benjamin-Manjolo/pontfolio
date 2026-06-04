import { FooterColumns } from "@/sections/Footer/components/FooterColumns";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <div className="relative box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:contents md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static [align-items:normal] bg-none box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal outline-0 gap-y-[normal] w-auto py-0 md:relative md:content-center md:items-center md:aspect-auto md:bg-[linear-gradient(0deg,rgb(77,96,67)_-43.3206%,rgb(0,0,0)_100%)] md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:pt-10 md:pb-20 md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black shrink h-auto outline-0 w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[369px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[0%] md:top-0">
            <div className="static bg-none bg-auto box-content caret-black shrink h-auto opacity-100 outline-0 w-auto left-auto top-auto md:absolute md:aspect-auto md:bg-[url(data:image/svg+xml,<svg%20xmlns=\%22http://www.w3.org/2000/svg\%22%20xmlns:xlink=\%22http://www.w3.org/1999/xlink\%22%20viewBox=\%220%200%201136%20617\%22><g%20transform=\%22translate%28-9.565%20-2.091)] md:bg-size-[100%_100%] md:box-border md:caret-transparent md:shrink-0 md:h-[617px] md:left-[calc(50%_-_568px)] md:opacity-40 md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[calc(12.3431%_-_308.5px)] md:w-[1136px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
          </div>
          <FooterColumns />
          <FooterCopyright />
        </div>
      </div>
    </div>
  );
};
