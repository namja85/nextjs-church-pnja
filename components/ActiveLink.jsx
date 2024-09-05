'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

export default function ActiveLink({ children, href }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link href={href}>
      <span
        className={cn(
          'p-2 hover:text-slate-700 dark:hover:text-slate-300 hover:border-b-2 hover:border-b-sky-400',
          {
            'text-slate-700 dark:text-slate-300 border-b-2 border-b-sky-500':
              active,
          },
        )}
      >
        {children}
      </span>
    </Link>
  );
}
