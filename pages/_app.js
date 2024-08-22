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
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        {page}
      </Layout>
    ));

  return getLayout(withScript(<Component {...pageProps} />));
}

export default MyApp;
