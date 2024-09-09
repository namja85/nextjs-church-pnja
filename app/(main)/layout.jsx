'use client';

import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import useDarkMode from '@/hooks/useDarkMode';
import '@/styles/globals.css';
import { Nanum_Gothic } from 'next/font/google';

const nanum_gothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: '800',
  display: 'swap',
  variable: '--font-nanum-gothic',
});

export default function RootLayout({ children }) {
  const [darkMode, toggleDarkMode] = useDarkMode();

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
        className={`antialiased text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 ${nanum_gothic.variable}`}
      >
        <div className="min-h-screen">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
