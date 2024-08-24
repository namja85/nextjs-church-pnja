import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../pages/notice/invitation.module.css';

export default function Hero() {
  const router = useRouter();
  const titleRef = useRef(null);
  const headerRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((e) => {
  //       if (e.isIntersecting) {
  //         headerRef.current.style.opacity = 0;
  //       } else {
  //         headerRef.current.style.opacity = 1;
  //       }
  //     });
  //   });
  //   observer.observe(titleRef.current);
  // }, []);

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.heroWrapper}>
      {false && (
        <div
          ref={headerRef}
          className="opacity-0 fixed h-4 text-xs font-bold z-20 w-full text-center border-b shadow-md bg-gray-200 text-gray-600"
        >
          2024년도 임직감사예배 - 평내중앙교회
        </div>
      )}
      <div className="hero-inner p-8 relative bg-gray-50 w-full h-[680px]">
        <div className="absolute top-0 left-0 w-full h-full p-4 z-20">
          <div className={styles.borderTop}>
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
          <div className={styles.borderBottom}>
            <p className={styles.text} onClick={goHome}>
              <span className="inline-block w-4 h-4 mr-1 mb-1">⛪️</span>
              <span>평내중앙교회</span>
            </p>
          </div>
        </div>
        <div ref={titleRef} className={styles.title}>
          <h1>임직감사예배</h1>
          <div>
            <p>2024.09.29 주일 오후 2시</p>
            <p>평내중앙교회 3층 본당</p>
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
