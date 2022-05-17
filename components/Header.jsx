import Link from 'next/link';
import Image from 'next/image';

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
              <svg width="24" height="24">
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
