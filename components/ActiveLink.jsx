import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

export default function ActiveLink({ children, href }) {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link href={href}>
      <a>
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
      </a>
    </Link>
  );
}
