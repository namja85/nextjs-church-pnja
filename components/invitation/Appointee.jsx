import { useRef, useEffect } from 'react';
import styles from '../../pages/notice/invitation.module.css';

export default function Appointee() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  useEffect(() => {
    const observerCallbackFn = (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
        }
      });
    };
    const options = {
      root: null,
      rootMargin: '0px 0px -200px 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallbackFn, options);

    observer.observe(ref1.current);
    observer.observe(ref2.current);
    observer.observe(ref3.current);
    observer.observe(ref4.current);
    observer.observe(ref5.current);
  }, []);

  return (
    <div className={styles.appointeeWrapper}>
      <div className="appointee-inner p-8 bg-gray-50 w-full">
        <div className="py-8">
          <div className="space-y-2">
            <h3
              ref={ref1}
              className="text-center mb-8 opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
            >
              <span className={styles.titleEng}>appointees</span>
              <br />
              <span className={styles.title}>임직자</span>
            </h3>

            <div className="space-y-4">
              <div
                ref={ref2}
                className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
              >
                <h4 className={styles.duty}>명예장로</h4>
                <p className={styles.name}>최준호</p>
              </div>
              <div
                ref={ref3}
                className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
              >
                <h4 className={styles.duty}>명예안수집사</h4>
                <p className={styles.name}>임시철</p>
              </div>
              <div
                ref={ref4}
                className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
              >
                <h4 className={styles.duty}>안수집사</h4>
                <p className={styles.name}>김남길 현경은</p>
              </div>
              <div
                ref={ref5}
                className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
              >
                <h4 className={styles.duty}>권사</h4>
                <p className={styles.name}>김소정 강명옥 김은선 이윤미</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
