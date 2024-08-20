import Head from 'next/head';
import Calendar from '../../components/invitation/Calendar';

export default function Invitation() {
  return (
    <div className="container p-4">
      <Head>
        <title>임직감사예배 | 평내중앙교회</title>
        <meta
          name="description"
          content="2024년도 평내중앙교회 임직감사예배에 초대합니다."
        />
      </Head>

      <div className="max-w-md">
        <Calendar />
      </div>
    </div>
  );
}

Invitation.getLayout = function getLayout(page) {
  return page;
};
