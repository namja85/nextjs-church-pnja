import { useRef, useEffect } from 'react';
import BusIcon from '../BusIcon';
import MetroIcon from '../MetroIcon';
import CarIcon from '../CarIcon';
import SectionTitle from './SectionTitle';
import SectionParagraph from './SectionParagraph';
import TrafficCard from './TrafficCard';

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
    <div className="map-wrapper">
      <div className="p-8 bg-gray-50 w-full">
        <div className="py-8 space-y-2">
          <SectionTitle ref={ref1} koTitle="오시는 길" enTitle="location" />
          <SectionParagraph ref={ref2}>평내중앙교회 3층 본당</SectionParagraph>
          <SectionParagraph ref={ref3}>
            경기 남양주시 평내로29번길 51-30
          </SectionParagraph>
          <div
            ref={ref4}
            className="my-8 border border-[#e8dfdf] opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
          >
            <div id="map" className="w-full h-96 lg:h-[35rem]"></div>
          </div>
          <div className="divide-y divide-[#e9e5e]">
            <TrafficCard ref={ref5} name="버스" icon={<BusIcon />}>
              광역: M2352
              <br /> 일반: 1-4, 10-5, 30, 55, 65, 65-1, 93
              <br /> 좌석: 330-1
              <br /> 직행: 1200, 1200-1, 1330-2, 1330-3, 1330-4, 1330-44
              <br /> 평내동주민센터 또는 남양주우체국 하차
            </TrafficCard>
            <TrafficCard ref={ref6} name="전철" icon={<MetroIcon />}>
              경춘선 평내호평역 하차
            </TrafficCard>
            <TrafficCard ref={ref7} name="자가용" icon={<CarIcon />}>
              주소: 경기 남양주시 평내로29번길 51-30
              <br /> 주차: 평내주민센터 주차장, 하나프라자 주차장 이용가능
            </TrafficCard>
          </div>
        </div>
      </div>
    </div>
  );
}
