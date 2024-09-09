'use client';

import Main from '@/components/Main';
import '@/styles/globals.css';
import { Gowun_Dodum, Crimson_Pro } from 'next/font/google';
import localFont from 'next/font/local';

const gowun_dodum = Gowun_Dodum({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-gowun-dodum',
});

const crimson_pro = Crimson_Pro({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-crimson-pro',
});

const puradak = localFont({
  src: 'PuradakGentleGothicR.woff2',
  weight: 'normal',
  display: 'swap',
  variable: '--font-puradak',
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="shortcut icon"
          href="https://www.pnja.or.kr/favicon.ico"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="msapplication-TileColor" content="#2b5797"></meta>
        <meta name="theme-color" content="#373737"></meta>
      </head>

      <body
        className={`antialiased text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 ${gowun_dodum.variable} ${crimson_pro.variable} ${puradak.variable}`}
      >
        <div className="min-h-screen">
          <Main>{children}</Main>
        </div>
      </body>
    </html>
  );
}
