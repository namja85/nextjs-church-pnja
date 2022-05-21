export default function Hero({ children }) {
  return (
    <div className="pt-16 pb-32 px-16">
      <h1 className="flex flex-col items-center space-y-4 text-slate-100 font-extrabold text-4xl">
        <span>
          <span className="font-bold text-sky-400">축제</span>가 있는 교회,
        </span>
        <span>
          <span className="font-bold text-sky-400">생동</span>하는 교회,
        </span>
        <span>
          <span className="font-bold text-sky-400">꿈</span>을 주는 교회
        </span>
      </h1>
      <p className="mt-6 text-center">
        <span className="font-medium text-sky-400">하나님 중심</span>으로 말씀과
        은혜가 <span className="font-medium text-sky-400">풍성한 사랑</span>의
        공동체
      </p>
      <div className="mt-6 flex justify-center space-x-4">{children}</div>
    </div>
  );
}