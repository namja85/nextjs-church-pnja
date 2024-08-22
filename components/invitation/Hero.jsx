import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../pages/notice/invitation.module.css';

export default function Hero() {
  const titleRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          headerRef.current.style.opacity = 0;
        } else {
          headerRef.current.style.opacity = 1;
        }
      });
    });
    observer.observe(titleRef.current);
  }, []);

  return (
    <div className={styles.heroWrapper}>
      <div
        ref={headerRef}
        className="opacity-0 fixed h-4 text-xs font-bold z-20 w-full text-center border-b shadow-md bg-gray-200 text-gray-600"
      >
        2024년도 임직감사예배 - 평내중앙교회
      </div>
      <div className="hero-inner p-8 relative bg-gray-50 w-full h-[1000px]">
        <div ref={titleRef} className={styles.title}>
          <h1>임직감사예배</h1>
          <p>2024.09.29 주일 오후 2시</p>
          <p>평내중앙교회 3층 본당</p>
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
