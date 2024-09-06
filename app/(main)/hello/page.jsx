export const metadata = {
  title: '인사말 | 평내중앙교회',
  description: '안녕하세요. 평내중앙교회 담임목사 김명호입니다.',
};

export default function Hello() {
  return (
    <div className="container p-4">
      <div className="space-y-4">
        <h1 className="text-slate-900 dark:text-slate-200 text-3xl font-bold tracking-wide my-8">
          인사말
        </h1>
        <hr />
        <h2 className="text-center text-md md:text-lg font-bold">
          &quot;세계선교를 통한 인재양성, 금융권을 통한 선교, 학원가를 통한
          선교!&quot;
        </h2>
      </div>

      <div className="text-sm md:text-lg px-4 sm:px-0 my-16 flex flex-col justify-center text-center space-y-4">
        <p>예수 그리스도의 이름으로 여러분을 환영합니다.</p>
        <p>
          &quot;평내중앙교회&quot;는 지역의 복음화를 위한 다음세대를 준비하기
          위하여
        </p>
        <p>
          &quot;세계선교를 통한 인재양성, 금융권을 통한 선교, 학원가를 통한
          선교&quot;라는 교회의 3대 Vision을 가지고 기도하며 실천하고 있습니다.
        </p>
        <p>하나님의 은혜 가운데 여러분과 이 일들을 이루어 나가고 싶습니다.</p>
        <p className="!mt-16 text-lg space-x-4">
          <span className="font-bold">담임목사</span>
          <span>김명호</span>
        </p>
      </div>
    </div>
  );
}
