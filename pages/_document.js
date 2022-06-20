import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="https://www.pnja.or.kr/favicon.ico"></link>
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico"></link>
      </Head>
      <body className="antialiased bg-slate-900 text-slate-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
