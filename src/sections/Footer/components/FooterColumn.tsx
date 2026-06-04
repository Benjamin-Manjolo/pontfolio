export type FooterColumnLink = {
  href: string;
  label: string;
  paragraphClassName: string;
  linkClassName: string;
};

export type FooterColumnProps = {
  title: string;
  links: FooterColumnLink[];
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 outline-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:caret-transparent md:gap-x-6 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-6 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 outline-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <p className="text-black text-base box-content caret-black leading-[normal] min-h-0 min-w-0 outline-0 text-start text-wrap font-times md:text-white md:text-2xl md:aspect-auto md:box-border md:caret-transparent md:leading-[33.6px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-lustria">
          {props.title}
        </p>
      </div>
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 outline-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        {props.links.map((link) => (
          <div
            className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 outline-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            key={`${link.href}-${link.label}`}
          >
            <p className={link.paragraphClassName}>
              <a href={link.href} className={link.linkClassName}>
                {link.label}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
