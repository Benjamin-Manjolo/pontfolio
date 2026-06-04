export type ProjectCardProps = {
  href: string;
  bgColor: string;
  logoSrc: string;
  logoAspect?: string;
  companyName: string;
  eyebrow: string;
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  imagePosition?: string;
  imageRight?: boolean;
};

export const ProjectCard = ({
  href,
  bgColor,
  logoSrc,
  companyName,
  eyebrow,
  title,
  description,
  category,
  imageSrc,
  imageRight = true,
}: ProjectCardProps) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group relative flex flex-col md:flex-row items-stretch w-full rounded-[32px] md:rounded-[40px] overflow-hidden min-h-[340px] md:h-[500px] ${bgColor} hover:shadow-lg transition-shadow duration-300`}
    >
      {/* Content side */}
      <div className="relative z-10 flex flex-col justify-between p-8 md:p-10 w-full md:w-[46%] shrink-0">
        {/* Logo + company badge */}
        <div className="flex items-center gap-3 mb-auto">
          <div className="w-10 h-10 shrink-0 rounded-lg overflow-hidden">
            <img
              src={logoSrc}
              alt={companyName}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[18px] font-semibold font-league_spartan text-gray-800">
            {companyName}
          </span>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-6 mt-8 md:mt-0 md:justify-center md:flex-1">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-bold uppercase tracking-[2px] text-gray-500 font-satoshi">
              {eyebrow}
            </p>
            <h2 className="text-3xl md:text-[38px] font-bold leading-tight text-gray-900 font-satoshi">
              {title}
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-base font-medium text-gray-700 font-satoshi leading-relaxed">
              {description}
            </p>
            <p className="text-lg font-bold text-gray-800 font-satoshi">
              {category}
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div className="mt-8">
          <span className="inline-flex items-center gap-2 bg-gray-900 text-white text-[15px] font-medium font-satoshi px-4 py-2.5 rounded-full group-hover:bg-gray-700 transition-colors">
            <span className="w-5 h-5 flex items-center justify-center">
              <img
                src="https://c.animaapp.com/mppvkhajXxTwJ9/assets/icon-8.svg"
                alt=""
                className="w-4 h-4"
              />
            </span>
            view case study
          </span>
        </div>
      </div>

      {/* Image side */}
      <div
        className={`relative flex-1 flex items-center justify-center overflow-hidden ${imageRight ? "" : "md:order-first"}`}
      >
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </a>
  );
};
