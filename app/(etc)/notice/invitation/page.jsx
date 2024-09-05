import Head from 'next/head';
import Hero from '@/components/invitation/Hero';
import Paragraph from '@/components/invitation/Paragraph';
import Appointee from '@/components/invitation/Appointee';
import Calendar from '@/components/invitation/Calendar';
import Map from '@/components/invitation/Map';
import Footer from '@/components/invitation/Footer';

export const metadata = {
  title: '임직감사예배 | 평내중앙교회',
  description: '2024년도 평내중앙교회 임직감사예배에 초대합니다.',
};

export default function Invitation() {
  return (
    <div className="container mx-auto font-dodum">
      <Head>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="💌평내중앙교회 초대장이 왔어요."
        ></meta>
        <meta
          property="og:description"
          content="임직감사예배에 당신을 초대합니다."
        ></meta>
        <meta
          property="og:image"
          content="https://www.pnja.or.kr/invitation.jpg"
        ></meta>
        <meta
          property="og:url"
          content="https://www.pnja.or.kr/notice/invitation"
        ></meta>
      </Head>

      <div className="mx-auto max-w-md shadow-md">
        <Hero />
        <Paragraph />
        <Appointee />
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
