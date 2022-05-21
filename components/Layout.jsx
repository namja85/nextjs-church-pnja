import Head from 'next/head';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-[430px]">
      <Head>
        <title>평내중앙교회</title>
        <meta
          name="description"
          content="평내중앙교회는 여러분을 환영합니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
