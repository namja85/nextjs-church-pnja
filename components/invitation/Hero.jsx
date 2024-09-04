import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Hero() {
  const router = useRouter();
  const titleRef = useRef(null);
  const headerRef = useRef(null);

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className="hero-wrapper">
      {false && <div ref={headerRef}>2024년도 임직감사예배 - 평내중앙교회</div>}
      <div className="p-8 relative bg-gray-50 w-full h-[680px]">
        <div className="absolute top-0 left-0 w-full h-full p-4 z-20">
          <div className="border w-full h-[650px] border-[#fff] border-top border-b-0 box-border">
            <div className="mt-7 text-center">
              <Image
                src={'/church-logo.png'}
                alt={'평내중앙교회 교단 로고'}
                width={24}
                height={24}
                priority
              />
            </div>
          </div>
          <div className="px-0 py-[28px] border border-t-0 border-bottom border-[hsla(0,0%,71%,0.7)]">
            <p
              className="text-[0.8rem] text-[#524548] text-center cursor-pointer hover:scale-105 active:scale-105"
              onClick={goHome}
            >
              <span className="inline-block w-4 h-4 mr-1 mb-1">⛪️</span>
              <span>평내중앙교회</span>
            </p>
          </div>
        </div>
        <div
          ref={titleRef}
          className="absolute top-0 left-1/2 w-full -translate-x-1/2 translate-y-[100px] z-10"
        >
          <h1 className="font-puradak text-[2.5rem] leading-[1.8rem] tracking-[5px] text-[#524548] text-center mb-[3rem]">
            임직감사예배
          </h1>
          <div className="mt-[2rem] px-0 py-[2rem]">
            <p className="text-[1rem] font-[800] leading-[1.8rem] tracking-[3px] text-[#524548] text-center">
              2024.09.29 주일 오후 2시
            </p>
            <p className="text-[1rem] font-[800] leading-[1.8rem] tracking-[3px] text-[#524548] text-center">
              평내중앙교회 3층 본당
            </p>
          </div>
        </div>
        <Image
          src={'/church.jpg'}
          alt={'평내중앙교회 건물'}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
