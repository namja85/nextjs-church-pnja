import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
import ActiveLink from './ActiveLink';
import DarkModeButton from './DarkModeButton';

const routes = [
  { id: 1, name: '인사말', path: '/hello' },
  { id: 2, name: '예배시간안내', path: '/time' },
  // { id: 20, name: '주보', path: '/bulletins' },
  // { id: 2, name: '성경', path: '/bibles' },
  { id: 99, name: '오시는 길', path: '/way-to-come' },
];

export default function Header({ darkMode, toggleDarkMode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClickDarkModeButton = (e) => {
    e.stopPropagation();
    toggleDarkMode();
  };

  const toggle = () => {
    setOpen((open) => !open);
  };
  const close = (e) => {
    setOpen(() => false);
  };

  const handleNavgate = (event) => {
    const { path } = event.target.dataset;
    router.push(path);
  };

  return (
    <>
      <header className="sticky top-0 w-full border-b shadow-sm dark:border-slate-50/[0.06] backdrop-blur z-[999]">
        <div className="max-w-lg mx-auto md:max-w-3xl lg:max-w-5xl">
          <div className="mx-4 py-4 flex justify-between items-center">
            <Link className="cursor-pointer" href={'/'}>
              <div className="relative w-32 aspect-[2/1]">
                <Image
                  src="/logo.png"
                  alt="평내중앙교회로고"
                  style={{
                    objectFit: 'contain',
                  }}
                  fill
                  priority
                />
              </div>
            </Link>

            <Link href="/notice/invitation">
              <span className="text-[1.2rem] font-[600] bg-[linear-gradient(174deg,#3857ff,#fba8ff_80%)] dark:bg-[linear-gradient(174deg,#d857ff,#fba8ff_80%)] text-transparent bg-clip-text cursor-pointer hover:scale-105">
                2024년도 임직감사예배
              </span>
            </Link>

            <div className="lg:hidden">
              <button
                className="hover:cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
                onClick={toggle}
              >
                <span className="sr-only">Navigation</span>
                {!open && <MenuIcon />}
              </button>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <ul className="flex space-x-8">
                {routes.length > 0 &&
                  routes.map((route) => (
                    <li key={route.id}>
                      <ActiveLink href={route.path}>{route.name}</ActiveLink>
                    </li>
                  ))}
              </ul>
              <DarkModeButton
                darkMode={darkMode}
                toggleDarkMode={handleClickDarkModeButton}
              />
            </div>
          </div>
        </div>
      </header>
      {open && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-slate-900/5 dark:bg-slate-900/80 z-[999] backdrop-blur-sm"
          onClick={close}
        >
          <div className="relative w-full h-full max-w-lg mx-auto md:max-w-3xl lg:max-w-5xl">
            <div className="absolute top-4 right-4 flex flex-col w-64 bg-slate-50 dark:bg-slate-800 shadow-lg rounded-lg p-4">
              <div className="flex justify-between items-center border-b border-slate-400/10 pb-4">
                <DarkModeButton
                  darkMode={darkMode}
                  toggleDarkMode={handleClickDarkModeButton}
                />
                <button className="hover:cursor-pointer hover:text-slate-700 dark:hover:text-slate-300">
                  <span className="sr-only">Navigation</span>
                  <CloseIcon />
                </button>
              </div>
              <ul
                className="text-center space-y-8 pt-4"
                onClick={handleNavgate}
              >
                {routes.length > 0 &&
                  routes.map((route) => (
                    <li key={route.id}>
                      <button
                        className="w-full px-8 py-2 hover:text-slate-700 dark:hover:text-slate-300"
                        data-path={route.path}
                      >
                        {route.name}
                      </button>
                    </li>
                  ))}
              </ul>
              <div className="mt-4 flex justify-end">
                <div className="relative w-16 aspect-[2/1]">
                  <Image
                    src="/logo.png"
                    alt="평내중앙교회로고"
                    style={{
                      objectFit: 'contain',
                    }}
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
