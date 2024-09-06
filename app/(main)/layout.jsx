'use client';

import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import useDarkMode from '@/hooks/useDarkMode';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link
          rel="shortcut icon"
          href="https://www.pnja.or.kr/favicon.ico"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="msapplication-TileColor" content="#2b5797"></meta>
        <meta name="theme-color" content="#373737"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="평내중앙교회"></meta>
        <meta
          property="og:description"
          content="평내중앙교회에 오신 것을 환영합니다."
        ></meta>
        <meta
          property="og:image"
          content="https://www.pnja.or.kr/thumbnail.png"
        ></meta>
        <meta property="og:url" content="https://www.pnja.or.kr"></meta>

        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="antialiased text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900">
        <div className="min-h-screen">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
