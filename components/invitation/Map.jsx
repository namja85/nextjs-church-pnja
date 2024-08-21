import Script from 'next/script';
import BusIcon from '../BusIcon';
import MetroIcon from '../MetroIcon';
import CarIcon from '../CarIcon';
import { useEffect } from 'react';
import styles from '../../pages/notice/invitation.module.css';

const church = {
  lat: 37.647,
  lng: 127.23511,
};

export default function Map() {
  useEffect(() => {
    const map = new window.naver.maps.Map('map', {
      center: new window.naver.maps.LatLng(church.lat, church.lng),
      zoom: 19,
      zoomControl: true,
    });
    new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(church.lat, church.lng),
      map,
    });
  }, []);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>

      <div className={styles.mapWrapper}>
        <div className="map-inner p-8 bg-gray-50 w-full">
          <div>
            <div className="my-12 space-y-2 mt-32">
              <h3 className="text-center mb-8">
                <span className={styles.titleEng}>location</span>
                <br />
                <span className={styles.title}>오시는 길</span>
              </h3>
              <p className={styles.text}>평내중앙교회 3층 본당</p>
              <p className={styles.text}>경기 남양주시 평내로29번길 51-30</p>
              <div id="map" className="w-full h-96 lg:h-[35rem]"></div>
              <div className="divide-y divide-[#e9e5e]">
                <div className="flex py-8">
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
                <div className="flex py-8">
                  <div className="mr-4">
                    <div className={styles.iconCircle}>
                      <MetroIcon />
                    </div>
                  </div>
                  <div>
                    <p className={styles.trafficName}>전철</p>
                    <p className={styles.trafficContent}>
                      경춘선 평내호평역 하차
                    </p>
                  </div>
                </div>
                <div className="flex py-8">
                  <div className="mr-4">
                    <div className={styles.iconCircle}>
                      <CarIcon />
                    </div>
                  </div>
                  <div>
                    <p className={styles.trafficName}>자가용</p>
                    <p className={styles.trafficContent}>
                      주소: 경기 남양주시 평내로29번길 51-30
                      <br /> 주차: 평내주민센터 주차장, 하나프라자 주차장
                      이용가능
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
