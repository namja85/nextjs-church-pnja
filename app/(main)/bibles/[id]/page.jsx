import { getBibleContent } from '@/libs/bibles';
import biblesInfo from '@/libs/biblesInfo';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params: { id } }) {
  const decodedId = decodeURIComponent(id);
  const [english, num] = decodedId.split('-');
  const find = biblesInfo.find(({ title }) => title.english === english);

  return {
    title: `성경 - ${find.title.korean} ${num}장 | 평내중앙교회`,
    description: `성경 (${find.title.korean} ${num}장) 정보를 제공합니다.`,
  };
}

export default async function Bible({ params: { id } }) {
  const decodedId = decodeURIComponent(id);
  const content = await getBibleContent(decodedId);

  if (!content) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert prose-headings:my-32 prose-headings:text-center p-4 mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  );
}
