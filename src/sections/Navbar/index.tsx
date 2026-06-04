import { NavbarLogo } from './components/NavbarLogo';
import { DesktopMenu } from './components/DesktopMenu';

interface NavbarProps {
  onNavigate: (path: string) => void;
}

export const Navbar = ({ onNavigate }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F9F8F5]/90 backdrop-blur-sm">
      <div className="max-w-[1080px] mx-auto px-8 py-3 flex items-center justify-between">
        <NavbarLogo />
        <DesktopMenu onNavigate={onNavigate} />
      </div>
    </nav>
  );
};
