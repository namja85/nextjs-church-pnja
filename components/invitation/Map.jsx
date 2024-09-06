'use client';

import BusIcon from '../BusIcon';
import MetroIcon from '../MetroIcon';
import CarIcon from '../CarIcon';
import SectionTitle from './SectionTitle';
import SectionParagraph from './SectionParagraph';
import TrafficCard from './TrafficCard';
import WithNaverMapScript from '../WithNaverMapScript';
import useElevateEffect from '../../hooks/useElevateEffect';
import { church } from '@/utils/church';

export default function Map() {
  const { setRef } = useElevateEffect();

  return (
    <WithNaverMapScript>
      <div className="map-wrapper">
        <div className="p-8 bg-gray-50 w-full">
          <div className="py-8 space-y-2">
            <SectionTitle ref={setRef} koTitle="오시는 길" enTitle="location" />
            <SectionParagraph ref={setRef}>
              {church.name} 3층 본당
            </SectionParagraph>
            <SectionParagraph ref={setRef}>{church.address}</SectionParagraph>
            <div
              ref={setRef}
              className="my-8 border border-[#e8dfdf] opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
            >
              <div id="map" className="w-full h-96 lg:h-[35rem]"></div>
            </div>
            <div className="divide-y divide-[#e9e5e]">
              <TrafficCard ref={setRef} name="버스" icon={<BusIcon />}>
                광역: M2352
                <br /> 일반: 1-4, 10-5, 30, 55, 65, 65-1, 93
                <br /> 좌석: 330-1
                <br /> 직행: 1200, 1200-1, 1330-2, 1330-3, 1330-4, 1330-44
                <br /> 평내동주민센터 또는 남양주우체국 하차
              </TrafficCard>
              <TrafficCard ref={setRef} name="전철" icon={<MetroIcon />}>
                경춘선 평내호평역 하차
              </TrafficCard>
              <TrafficCard ref={setRef} name="자가용" icon={<CarIcon />}>
                주소: {church.address}
                <br /> 주차: 평내주민센터 주차장, 하나프라자 주차장 이용가능
              </TrafficCard>
            </div>
          </div>
        </div>
      </div>
    </WithNaverMapScript>
  );
}
