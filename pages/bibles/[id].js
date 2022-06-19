import { getBibleContent, getBibleIds } from '../../libs/bibles';

export default function Bible({ id, content }) {
  return (
    <article className="prose prose-invert container p-4 mx-auto">
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
