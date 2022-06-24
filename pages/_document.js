import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="https://www.pnja.or.kr/favicon.ico"></link>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>
        <link rel="apple-touch-icon-precomposed" href="/icons/apple-touch-icon.png"></link>

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
