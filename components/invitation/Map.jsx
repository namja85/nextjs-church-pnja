import { useRef, useEffect } from 'react';
import BusIcon from '../BusIcon';
import MetroIcon from '../MetroIcon';
import CarIcon from '../CarIcon';
import styles from '../../pages/notice/invitation.module.css';

const church = {
  lat: 37.647,
  lng: 127.23511,
};

export default function Map() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

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
    observer.observe(ref6.current);
    observer.observe(ref7.current);
  }, []);

  useEffect(() => {
    if (naver?.maps?.Map) {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(church.lat, church.lng),
        zoom: 19,
        zoomControl: true,
      });
      new naver.maps.Marker({
        position: new naver.maps.LatLng(church.lat, church.lng),
        map,
      });
    }
  }, []);

  return (
    <div className={styles.mapWrapper}>
      <div className="map-inner p-8 bg-gray-50 w-full">
        <div className="py-8 space-y-2">
          <h3
            ref={ref1}
            className="text-center mb-8 opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
          >
            <span className={styles.titleEng}>location</span>
            <br />
            <span className={styles.title}>오시는 길</span>
          </h3>
          <div
            ref={ref2}
            className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
          >
            <p className={styles.text}>평내중앙교회 3층 본당</p>
          </div>
          <div
            ref={ref3}
            className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
          >
            <p className={styles.text}>경기 남양주시 평내로29번길 51-30</p>
          </div>
          <div
            ref={ref4}
            className="my-8 border border-[#e8dfdf] opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
          >
            <div id="map" className="w-full h-96 lg:h-[35rem]"></div>
          </div>
          <div className="divide-y divide-[#e9e5e]">
            <div
              ref={ref5}
              className="flex py-8 opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
            >
              <div className="mr-4">
                <div className={styles.iconCircle}>
                  <BusIcon />
                </div>
              </div>
              <div>
                <p className={styles.trafficName}>버스</p>
                <p className={styles.trafficContent}>
                  광역: M2352
                  <br /> 일반: 1-4, 10-5, 30, 55, 65, 65-1, 93
                  <br /> 좌석: 330-1
                  <br /> 직행: 1200, 1200-1, 1330-2, 1330-3, 1330-4, 1330-44
                  <br /> 평내동주민센터 또는 남양주우체국 하차
                </p>
              </div>
            </div>
            <div
              ref={ref6}
              className="flex py-8 opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
            >
              <div className="mr-4">
                <div className={styles.iconCircle}>
                  <MetroIcon />
                </div>
              </div>
              <div>
                <p className={styles.trafficName}>전철</p>
                <p className={styles.trafficContent}>경춘선 평내호평역 하차</p>
              </div>
            </div>
            <div
              ref={ref7}
              className="flex py-8 opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
            >
              <div className="mr-4">
                <div className={styles.iconCircle}>
                  <CarIcon />
                </div>
              </div>
              <div>
                <p className={styles.trafficName}>자가용</p>
                <p className={styles.trafficContent}>
                  주소: 경기 남양주시 평내로29번길 51-30
                  <br /> 주차: 평내주민센터 주차장, 하나프라자 주차장 이용가능
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
