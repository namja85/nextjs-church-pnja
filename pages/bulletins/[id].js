import Head from 'next/head';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import ExternalLinkIcon from '../../components/ExternalLinkIcon';
import WorshipContentBox from '../../components/WorshipContentBox';
import { getBulletinIds, getBulletins } from '../../libs/bulletins';

export default function Bulletin({ id, content }) {
  const { main, praise, wed, imageUrl } = content.default;

  return (
    <div className="container p-4">
      <Head>
        <title>
          주보 - {Math.floor(id / 100)}년 {id % 100}주차 | 평내중앙교회
        </title>
        <meta
          name="description"
          content={`평내중앙교회의 ${Math.floor(id / 100) + 2000}년 ${
            id % 100
          }주차 주보 정보입니다.`}
        />
      </Head>

      <div className="space-y-4">
        <h1 className="text-slate-900 dark:text-slate-200 text-3xl font-bold tracking-wide my-8">
          주보
        </h1>
        <hr />
        <h2 className="text-center">
          평내중앙교회의{' '}
          <strong className="text-lg">
            {Math.floor(id / 100)}년 {id % 100}주차
          </strong>{' '}
          주보 정보입니다.
        </h2>
      </div>

      <div className="mt-16 space-y-8">
        <p className="flex justify-between">
          {imageUrl ? (
            <a href={imageUrl}>
              <span className="text-slate-400 hover:text-slate-300">
                <ExternalLinkIcon />
              </span>
            </a>
          ) : (
            <span></span>
          )}
          <small>{format(new Date(main.시간), 'PPPP', { locale: ko })}</small>
        </p>
        <WorshipContentBox worship={main} />
        <WorshipContentBox worship={praise} />
        <WorshipContentBox worship={wed} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const bulletinIds = getBulletinIds();

  return {
    paths: bulletinIds.map((id) => ({ params: { id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const bulletin = getBulletins().find(({ id }) => id === params.id);

  return {
    props: {
      id: bulletin.id,
      content: JSON.parse(bulletin.content),
    },
  };
}
