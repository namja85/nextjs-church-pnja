export default function Hero({ children }) {
  return (
    <div className="pt-16 pb-32 px-16 lg:pt-32 lg:pb-48 lg:px-4">
      <h1 className="font-main font-black text-center mb-16 flex flex-col space-y-4 lg:flex-row lg:justify-center lg:items-center lg:space-y-0 lg:space-x-2">
        <span className="text-3xl lg:text-5xl">세계로 선교하는</span>
        <span className="text-5xl tracking-widest lg:text-[4rem]">평내중앙교회</span>
      </h1>
      <div className="font-myeongjo text-center leading-relaxed dark:text-slate-100 font-bold text-lg">
        <p className="md:mr-16">말씀이 살아 역사하는 교회</p>
        <p className="">찬양과 기도가 뜨거운 교회</p>
        <p className="md:ml-32">사랑과 감사로 지역을 섬기는 교회</p>
        {/* <strong className="font-bold text-sky-500 dark:text-sky-400 lg:text-6xl">
          말씀
        </strong>
        이 살아 역사하는 교회,<br className="lg:hidden"></br>
        <strong className="font-bold text-sky-500 dark:text-sky-400 lg:text-6xl">
          찬양과 기도
        </strong>
        가 뜨거운 교회,<br className="lg:hidden"></br>
        <strong className="font-bold text-sky-500 dark:text-sky-400 lg:text-6xl">
          사랑과 감사
        </strong>
        로 지역을 섬기는 교회 */}
      </div>
      {/* <h2 className="mt-6 text-center lg:mt-11">
        <em className="font-medium text-sky-500 dark:text-sky-400">
          하나님 중심
        </em>
        으로 말씀과 은혜가{' '}
        <em className="font-medium text-sky-500 dark:text-sky-400">
          풍성한 사랑
        </em>
        의 공동체
      </h2> */}
      <div className="mt-6 flex justify-center space-x-4 lg:mt-11">
        {children}
      </div>
    </div>
  );
}
