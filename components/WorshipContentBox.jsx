import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export default function WorshipContentBox({ worship }) {
  return (
    <div className="p-4 ring-1 rounded-lg space-y-8">
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
          return (
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
