interface DesktopMenuProps {
  onNavigate: (path: string) => void;
}

export const DesktopMenu = ({ onNavigate }: DesktopMenuProps) => {
  const navLinks = [
    { label: 'work', href: '/' },
    { label: 'about', href: '/about' },
    { label: 'fun', href: '/fun' },
  ];

  return (
    <div className="flex items-center gap-2">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(event) => {
            event.preventDefault();
            onNavigate(link.href);
          }}
          className="px-3 py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-colors font-satoshi"
        >
          {link.label}
        </a>
      ))}
      <a
        href="https://tally.so/r/J9o1Gd"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 transition-colors text-white text-[15px] font-medium rounded-full font-satoshi"
      >
        book a consultation
      </a>
    </div>
  );
};
