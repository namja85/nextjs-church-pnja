import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout';
import useDarkMode from '../hooks/useDarkMode';
import '../styles/globals.css';

function withScript(page) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      {page}
    </>
  );
}

function MyApp({ Component, pageProps }) {
  const [darkMode, toggleDarkMode] = useDarkMode();

  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <Head>
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
        </Head>
        <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          {page}
        </Layout>
      </>
    ));

  return getLayout(withScript(<Component {...pageProps} />));
}

export default MyApp;
