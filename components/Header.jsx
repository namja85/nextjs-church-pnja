import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from './MenuIcon';

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-slate-50/[0.06] backdrop-blur">
      <div className="max-w-lg mx-auto">
        <div className="mx-4 py-4 flex justify-between items-center">
          <Link className="cursor-pointer" href={'/'}>
            <a>
              <img className="h-8" src="/logo.png" alt="평내중앙교회로고" />
            </a>
          </Link>
          <div>
            <button className="text-slate-400 hover:cursor-pointer hover:text-slate-300">
              <span className="sr-only">Navigation</span>
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
