export default function Hero({ children }) {
  return (
    <div className="pt-16 pb-32 px-16 lg:pt-32 lg:pb-48 lg:px-4">
      <h1 className="text-center leading-relaxed dark:text-slate-100 font-extrabold text-4xl">
        <strong className="font-bold text-sky-500 dark:text-sky-400 lg:text-6xl">
          축제
        </strong>
        가 있는 교회,<br className="lg:hidden"></br>
        <strong className="font-bold text-sky-500 dark:text-sky-400 lg:text-6xl">
          생동
        </strong>
        하는 교회,<br className="lg:hidden"></br>
        <strong className="font-bold text-sky-500 dark:text-sky-400 lg:text-6xl">
          꿈
        </strong>
        을 주는 교회
      </h1>
      <h2 className="mt-6 text-center lg:mt-11">
        <em className="font-medium text-sky-500 dark:text-sky-400">
          하나님 중심
        </em>
        으로 말씀과 은혜가{' '}
        <em className="font-medium text-sky-500 dark:text-sky-400">
          풍성한 사랑
        </em>
        의 공동체
      </h2>
      <div className="mt-6 flex justify-center space-x-4 lg:mt-11">
        {children}
      </div>
    </div>
  );
}
