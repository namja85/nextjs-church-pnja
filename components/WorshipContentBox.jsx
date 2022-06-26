import Link from 'next/link';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import biblesInfo from '../libs/biblesInfo';

function parseToPath(bible) {
  const [_, short, jang, num1, num2] = bible.match(
    /([가-힣]{1,2})\s?(\d+):(\d+)(?:-(\d+))?/,
  );
  const findBible = biblesInfo.find(({ title }) => title.short === short);
  const path = findBible.title.english + '-' + jang;
  return path;
}

export default function WorshipContentBox({ worship }) {
  return (
    <div className="p-4 bg-white dark:bg-slate-800  shadow border border-slate-900/5 dark:ring-1 rounded-lg space-y-8">
      <h2 className="font-extrabold text-4xl text-center tracking-widest">
        {worship.제목}
      </h2>
      {worship.구절 ? (
        <p className="text-center">
          <small className="italic">{worship.구절}</small>
        </p>
      ) : null}
      <p className="flex justify-between">
        <span className="flex-1 text-center">
          {format(worship.시간, 'a hh:mm', { locale: ko })}
        </span>
        <span className="flex-[2]"></span>
        <span className="flex-1 text-center">인도: {worship.인도}</span>
      </p>
      <div className="flex flex-col space-y-1">
        {Object.keys(worship.차례).map((key) => {
          const [name, content] = worship.차례[key];
          return key === '성경봉독' ? (
            <Link key={key} href={`/bibles/${parseToPath(content)}`}>
              <a>
                <p className="flex justify-between hover:font-bold hover:text-slate-300">
                  <span className="flex-1 text-center tracking-widest">
                    {key}
                  </span>
                  <span className="flex-[2] text-center">{content}</span>
                  <span className="flex-1 text-center tracking-widest">
                    {name}
                  </span>
                </p>
              </a>
            </Link>
          ) : (
            <p key={key} className="flex justify-between">
              <span className="flex-1 text-center tracking-widest">{key}</span>
              <span className="flex-[2] text-center">{content}</span>
              <span className="flex-1 text-center tracking-widest">{name}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
