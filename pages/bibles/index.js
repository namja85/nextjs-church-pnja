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
      <div>
        <select
          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-slate-300 bg-slate-700 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-300 focus:bg-slate-700 focus:border-blue-600 focus:outline-none"
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
            <div className="flex justify-between items-center p-6 rounded-lg bg-slate-800 shadow shadow-slate-800 hover:ring-1">
              <h4>{bible.korean}</h4>
              <span className="rounded-full hover:bg-sky-400 hover:text-white">
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
    props: {
      biblesData,
    },
  };
}
