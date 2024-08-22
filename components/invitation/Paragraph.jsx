import { useRef, useEffect } from 'react';
import styles from '../../pages/notice/invitation.module.css';

export default function Paragraph() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  useEffect(() => {
    const observerCallbackFn = (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = 0.8;
          e.target.style.transform = "translateY(0)"
        }
      });
    };
    const options = {
      root: null,
      rootMargin: '0px 0px -200px 0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(observerCallbackFn, options);

    observer.observe(ref1.current);
    observer.observe(ref2.current);
    observer.observe(ref3.current);
    observer.observe(ref4.current);
    observer.observe(ref5.current);
    observer.observe(ref6.current);
  }, []);

  return (
    <div className={styles.paragraphWrapper}>
      <div className="paragraph-inner p-8 bg-gray-50 w-full">
        <div className="mt-32">
          <div className="py-8 sm:px-1">
            <h3 ref={ref1} className="opacity-0 text-4xl text-center mb-8 translate-y-[20px] transition-all duration-500 ease-in">
              🪻
            </h3>
            <p ref={ref2} className={styles.text}>
              &ldquo;사람이 마음으로 자기의 길을
              <br /> 계획할지라도 그의 걸음을 인도하시는 이는
              <br /> 여호와시니라&rdquo;
              <br />
              <sub>잠언 16장 9절</sub>
            </p>
          </div>
          <div className="mt-32 py-8 space-y-2">
            <h3 ref={ref3} className="opacity-0 text-center mb-8 translate-y-[20px] transition-all duration-500 ease-in">
              <span className={styles.titleEng}>invitation</span>
              <br />
              <span className={styles.title}>초대합니다</span>
            </h3>
            <p ref={ref4} className={styles.text}>
              우리 주 예수 그리스도의
              <br /> 이름으로 문안드립니다.
            </p>
            <p ref={ref5} className={styles.text}>
              주님의 몸 된 교회를
              <br /> 건강하게 세워갈 충성된 일꾼들이
              <br /> 장로, 안수집사, 권사로 세워지는
              <br /> 임직식을 갖고자 합니다.
            </p>
            <p ref={ref6} className={styles.text}>
              부디오셔서 격려와 축복으로
              <br /> 함께 해주시길 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
