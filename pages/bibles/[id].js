import Head from 'next/head';
import { getBibleContent, getBibleIds } from '../../libs/bibles';
import biblesInfo from '../../libs/biblesInfo';

export default function Bible({ id, content }) {
  const [english, num] = id.split('-');
  const find = biblesInfo.find(({ title }) => title.english === english);

  return (
    <article className="prose dark:prose-invert container p-4 mx-auto">
      <Head>
        <title>
          성경 - {find.title.korean} {num}장 | 평내중앙교회
        </title>
        <meta
          name="description"
          content={`성경 (${find.title.korean} ${num}장) 정보를 제공합니다.`}
        />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  );
}
// export async function getServerSideProps(context) {
//   console.log('context', context);
//   const { bible: bibleName } = context.params;
//   const biblesData = getBiblesData(bibleName);

//   return {
//     props: {
//       biblesData,
//     },
//   };
// }

export async function getStaticProps({ params }) {
  const { id } = params;
  const content = await getBibleContent(id);
  return {
    props: {
      id,
      content,
    },
  };
}

export async function getStaticPaths() {
  const bibleIds = getBibleIds();
  return {
    paths: bibleIds.map((id) => ({ params: { id } })),
    fallback: false,
  };
}
