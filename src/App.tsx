import { useEffect, useState } from 'react';
import { AboutPage } from '@/pages/AboutPage';
import { FunPage } from '@/pages/FunPage';
import { KumaBookApp } from '@/pages/KumaBookApp';
import { Navbar } from '@/sections/Navbar';
import { PageContainer } from '@/components/PageContainer';

const getCurrentPath = () => {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path === '' ? '/' : path.toLowerCase();
};

const normalizePath = (value: string) => {
  const path = value.replace(/\/+$/, '');
  return path === '' ? '/' : path.toLowerCase();
};

export const App = () => {
  const [path, setPath] = useState<string>(getCurrentPath());

  useEffect(() => {
    const onPopState = () => setPath(getCurrentPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to: string) => {
    const normalized = normalizePath(to);
    if (normalized !== path) {
      window.history.pushState(null, '', normalized);
      setPath(normalized);
    }
  };

  const renderPage = () => {
    switch (path) {
      case '/about':
        return <AboutPage />;
      case '/fun':
        return <FunPage />;
      case '/project/kumabookapp':
      case '/kuma-book-app':
      case '/kumabookapp':
        return <KumaBookApp />;
      default:
        return <PageContainer />;
    }
  };

  return (
    <body className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-stone-50 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <Navbar onNavigate={navigate} />
      {renderPage()}
      <div className="absolute box-border caret-transparent h-0 outline-[3px] w-0 z-0 overflow-hidden left-0 bottom-0">
        <img
          src="https://c.animaapp.com/mppvkhajXxTwJ9/assets/icon-9.svg"
          alt="Icon"
          className="box-border caret-transparent inline outline-[3px] align-baseline"
        />
      </div>
      <iframe
        src="https://framer.com/edit?framerSiteId=017c2b7db7bdceb6acd0cc40557d31736a703291336e2e780ee724e26f67f0d3&source=www.ceciliakimdesign.com&features=%7B%22editorBarDisableFrameAncestorsSecurity%22%3Afalse%2C%22onPageLocalizationSupport%22%3Afalse%2C%22onPageMoveTool%22%3Afalse%7D&loadStart=1779995850137"
        className="fixed box-border caret-transparent hidden h-[1000px] outline-[3px] align-baseline w-screen z-[2147483647] left-0 top-0"
      ></iframe>
    </body>
  );
};
