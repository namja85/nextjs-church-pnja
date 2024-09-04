import { useRef, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import AppointeeName from './AppoiteeName';

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
    <div className="appointee-wrapper">
      <div className="p-8 bg-gray-50 w-full">
        <div className="py-8">
          <div className="space-y-2">
            <SectionTitle ref={ref1} koTitle="임직자" enTitle="appointees" />

            <div className="space-y-4">
              <AppointeeName ref={ref2} duty="명예장로" names={['최준호']} />
              <AppointeeName
                ref={ref3}
                duty="명예안수집사"
                names={['임시철']}
              />
              <AppointeeName
                ref={ref4}
                duty="안수집사"
                names={['김남길', '현경은']}
              />
              <AppointeeName
                ref={ref5}
                duty="권사"
                names={['김소정', '강명옥', '김은선', '이윤미']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
