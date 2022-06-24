import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
import ActiveLink from './ActiveLink';

const routes = [
  { id: 1, name: '주보', path: '/bulletins' },
  { id: 2, name: '성경', path: '/bibles' },
  { id: 3, name: '오시는 길', path: '/way-to-come' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggle = () => {
    setOpen((open) => !open);
  };
  const close = () => {
    setOpen(() => false);
  };

  const handleNavgate = (event) => {
    const { path } = event.target.dataset;
    router.push(path);
  };

  return (
    <>
      <header className="sticky top-0 w-full border-b border-slate-50/[0.06] backdrop-blur z-[999]">
        <div className="max-w-lg mx-auto md:max-w-3xl lg:max-w-5xl">
          <div className="mx-4 py-4 flex justify-between items-center">
            <Link className="cursor-pointer" href={'/'}>
              <a>
                <div className="relative w-32 aspect-[2/1]">
                  <Image
                    src="/logo.png"
                    alt="평내중앙교회로고"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </a>
            </Link>

            <div className="lg:hidden">
              <button
                className="text-slate-400 hover:cursor-pointer hover:text-slate-300"
                onClick={toggle}
              >
                <span className="sr-only">Navigation</span>
                {!open && <MenuIcon />}
              </button>
            </div>
            <div className="hidden lg:block">
              <ul className="flex space-x-2">
                {routes.length > 0 &&
                  routes.map((route) => (
                    <li key={route.id}>
                      <ActiveLink href={route.path}>{route.name}</ActiveLink>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
      {open && (
        <div
          className="max-w-lg mx-auto md:max-w-3xl lg:max-w-5xl fixed top-0 left-0 right-0 bottom-0 bg-slate-900/80 z-[999] backdrop-blur-sm"
          onClick={close}
        >
          <div className="absolute top-8 right-8 flex flex-col w-64 bg-slate-800 shadow-lg rounded-lg p-4">
            <div className="flex justify-end border-b border-slate-400/10 pb-4">
              <button className="text-slate-400 hover:cursor-pointer hover:text-slate-300">
                <span className="sr-only">Navigation</span>
                <CloseIcon />
              </button>
            </div>
            <ul className="text-center space-y-8 pt-4" onClick={handleNavgate}>
              {routes.length > 0 &&
                routes.map((route) => (
                  <li key={route.id}>
                    <button
                      className="w-full px-8 py-2 hover:text-white"
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
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
