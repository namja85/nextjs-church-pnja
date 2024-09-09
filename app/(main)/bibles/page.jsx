import { getBiblesData } from '@/libs/bibles';
import BibleList from '@/components/BibleList';

export async function generateMetadata() {
  return {
    title: '성경 | 평내중앙교회',
    description: '구약, 신약 성경 정보를 제공합니다.',
  };
}

export default function BibleListPage() {
  const biblesData = getBiblesData();
  const bibleList = [
    '전체',
    ...new Set(biblesData.map(({ korean }) => korean.replace(/\s\d+장$/, ''))),
  ];

  return (
    <div className="container flex flex-col space-y-8 p-4">
      <BibleList biblesData={biblesData} bibleList={bibleList} />
    </div>
  );
}
