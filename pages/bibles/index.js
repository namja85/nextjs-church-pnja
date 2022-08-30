import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import ArrowRightIcon from '../../components/ArrowRightIcon';
import { getBiblesData } from '../../libs/bibles';

export default function BibleList({ biblesData }) {
  const [filterSelect, setFilterSelect] = useState('');
  const bibleList = [
    '전체',
    ...new Set(biblesData.map(({ korean }) => korean.replace(/\s\d+장$/, ''))),
  ];

  function onChange(e) {
    setFilterSelect(e.target.value);
  }

  return (
    <div className="container flex flex-col space-y-8 p-4">
      <Head>
        <title>성경 | 평내중앙교회</title>
        <meta name="description" content="구약, 신약 성경 정보를 제공합니다." />
      </Head>

      <div>
        <select
          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal dark:text-slate-300 dark:bg-slate-700 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-700 focus:bg-slate-50 focus:border-blue-300 dark:focus:text-slate-300 dark:focus:bg-slate-700 dark:focus:border-blue-600 focus:outline-none"
          onChange={onChange}
        >
          {bibleList.map((bible) => (
            <option key={bible} value={bible}>
              {bible}
            </option>
          ))}
        </select>
      </div>
      {biblesData
        .filter((bible) =>
          filterSelect === '전체' ? true : bible.korean.includes(filterSelect),
        )
        .map((bible) => (
          <Link href={`/bibles/${bible.english}`} key={bible.english}>
            <div className="flex justify-between items-center p-6 rounded-lg border border-slate-900/5 dark:border-0 bg-white shadow dark:bg-slate-800 dark:shadow-slate-800 hover:ring-1">
              <h4>{bible.korean}</h4>
              <span className="rounded-full dark:hover:bg-sky-400 hover:text-slate-700 dark:hover:text-slate-300">
                <ArrowRightIcon />
              </span>
            </div>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const biblesData = getBiblesData();
  return {
    // props: {
    //   biblesData,
    // },
    notFound: true
  };
}
