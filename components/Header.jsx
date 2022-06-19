import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from './MenuIcon';
import ActiveLink from './ActiveLink';

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-slate-50/[0.06] backdrop-blur">
      <div className="max-w-lg mx-auto md:max-w-3xl lg:max-w-5xl">
        <div className="mx-4 py-4 flex justify-between items-center">
          <Link className="cursor-pointer" href={'/'}>
            <a>
              <img className="h-8" src="/logo.png" alt="평내중앙교회로고" />
            </a>
          </Link>
          <div className="lg:hidden">
            <button className="text-slate-400 hover:cursor-pointer hover:text-slate-300">
              <span className="sr-only">Navigation</span>
              <MenuIcon />
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-2">
              <li>
                <ActiveLink href="/bulletins">주보</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/bibles">성경</ActiveLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
