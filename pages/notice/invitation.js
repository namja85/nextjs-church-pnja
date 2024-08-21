import Head from 'next/head';
import Hero from '../../components/invitation/Hero';
import Paragraph from '../../components/invitation/Paragraph';
import Calendar from '../../components/invitation/Calendar';
import Map from '../../components/invitation/Map';
import Footer from '../../components/invitation/Footer';

export default function Invitation() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>임직감사예배 | 평내중앙교회</title>
        <meta
          name="description"
          content="2024년도 평내중앙교회 임직감사예배에 초대합니다."
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="임직감사예배 초대장✉️"></meta>
        <meta
          property="og:description"
          content="2024.09.29 오전 11시 평내중앙교회 3층 본당"
        ></meta>
        <meta
          property="og:image"
          content="https://www.pnja.or.kr/thumbnail.png"
        ></meta>
        <meta
          property="og:url"
          content="https://www.pnja.or.kr/notice/invitation"
        ></meta>
      </Head>

      <div className="mx-auto max-w-md shadow-md">
        <Hero />
        <Paragraph />
        <Calendar />
        <Map />
        <Footer />
      </div>
    </div>
  );
}

Invitation.getLayout = function getLayout(page) {
  return page;
};
