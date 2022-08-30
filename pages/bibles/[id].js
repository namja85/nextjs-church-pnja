import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getBibleContent, getBibleIds } from '../../libs/bibles';
import biblesInfo from '../../libs/biblesInfo';

export default function Bible({ id, content }) {
  const [startNum, setStartNum] = useState();
  const [endNum, setEndNum] = useState();
  const router = useRouter();
  const [english, num] = id.split('-');
  const find = biblesInfo.find(({ title }) => title.english === english);

  useEffect(() => {
    const { s, e } = router.query;
    setStartNum(s);
    setEndNum(e);
  }, [router]);

  return (
    <article className="prose dark:prose-invert prose-headings:my-32 prose-headings:text-center p-4 mx-auto">
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
    // props: {
    //   id,
    //   content,
    // },
    notFound: true
  };
}

export async function getStaticPaths() {
  const bibleIds = getBibleIds();
  return {
    paths: bibleIds.map((id) => ({ params: { id } })),
    fallback: false,
  };
}
