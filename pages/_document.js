import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="shortcut icon" href="https://www.pnja.or.kr/favicon.ico"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
        <meta name="msapplication-TileColor" content="#2b5797"></meta>
        <meta name="theme-color" content="#373737"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="평내중앙교회"></meta>
        <meta property="og:description" content="평내중앙교회에 오신 것을 환영합니다."></meta>
        <meta property="og:image" content="https://www.pnja.or.kr/icons/thumbnail.png"></meta>
        <meta property="og:url" content="https://www.pnja.or.kr"></meta>
      </Head>
      <body className="antialiased bg-slate-900 text-slate-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
