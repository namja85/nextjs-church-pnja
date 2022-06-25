import Script from 'next/script';
import Layout from '../components/Layout';
import '../styles/globals.css';
import useDarkMode from './hooks/useDarkMode';

function MyApp({ Component, pageProps }) {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
