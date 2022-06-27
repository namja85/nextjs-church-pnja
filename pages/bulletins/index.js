import Head from 'next/head';
import BulletinCard from '../../components/BulletinCard';
import { getBulletins } from '../../libs/bulletins';

export default function Bulletins({ bulletins }) {
  return (
    <div className="container p-4">
      <Head>
        <title>주보 | 평내중앙교회</title>
        <meta
          name="description"
          content="매주 평내중앙교회의 최신 주보를 공유합니다. 그리고 지난 주보의 정보를 얻을 수 있습니다."
        />
      </Head>

      <div className="space-y-4">
        <h1 className="text-slate-900 dark:text-slate-200 text-5xl font-bold tracking-wide my-8 text-center">
          주보
        </h1>
        <h2 className="text-center">
          평내중앙교회의 최신 주보와 지난 주보의 정보를 확인 할 수 있습니다.
        </h2>
      </div>

      <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bulletins.length > 0 &&
          bulletins.map(({ id, content }) => (
            <BulletinCard key={id} id={id} content={content.default} />
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const bulletins = getBulletins().map(({ id, content }) => ({
    id,
    content: JSON.parse(content),
  }));
  return {
    props: {
      bulletins,
    },
  };
}
