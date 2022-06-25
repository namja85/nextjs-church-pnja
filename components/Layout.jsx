import Head from 'next/head';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Layout({ darkMode, toggleDarkMode, children }) {
  return (
    <div className="min-h-screen min-w-[430px]">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
