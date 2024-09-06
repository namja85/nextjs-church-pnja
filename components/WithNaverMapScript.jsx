'use client';

import Script from 'next/script';
import { church } from '@/utils/church';

export default function WithNaverMapScript({ children }) {
  const handleScriptOnLoad = () => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(
        church.location.latitude,
        church.location.longitude,
      ),
      zoom: 19,
      zoomControl: true,
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(
        church.location.latitude,
        church.location.longitude,
      ),
      map,
    });
  };

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
        onLoad={handleScriptOnLoad}
      ></Script>

      {children}
    </>
  );
}
