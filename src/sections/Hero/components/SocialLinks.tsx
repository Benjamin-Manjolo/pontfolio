const socialLinks = [
  {
    href: "mailto:benjaminmanjolo39@gmail.com",
    src: "https://c.animaapp.com/mppvkhajXxTwJ9/assets/icon-3.svg",
    alt: "Email",
  },
  {
    href: "https://www.linkedin.com/in/benjamin-manjolo-39kurupt/?utm_source=chatgpt.com",
    src: "https://c.animaapp.com/mppvkhajXxTwJ9/assets/icon-2.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/Benjamin-Manjolo?utm_source=chatgpt.com",
    src: "https://c.animaapp.com/mppvkhajXxTwJ9/assets/icon-1.svg",
    alt: "GitHub",
  },
  {
    href: "https://x.com/BenjaminManjolo",
    src: "https://c.animaapp.com/mppvkhajXxTwJ9/assets/icon-6.svg",
    alt: "X",
  },
  {
    href: "https://web.facebook.com/kurupt.november/",
    src: "https://c.animaapp.com/mppvkhajXxTwJ9/assets/icon-4.svg",
    alt: "Facebook",
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      {socialLinks.map((link) => (
        <a
          key={link.alt}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
          aria-label={link.alt}
        >
          <img
            src={link.src}
            alt={link.alt}
            className="w-full h-full object-contain"
          />
        </a>
      ))}
    </div>
  );
};
