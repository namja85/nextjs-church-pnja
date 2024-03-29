import Head from 'next/head';
import { useEffect } from 'react';

const church = {
  lat: 37.647,
  lng: 127.23511,
};

export default function WayToCome() {
  useEffect(() => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(church.lat, church.lng),
      zoom: 19,
      zoomControl: true,
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(church.lat, church.lng),
      map,
    });
  }, []);

  return (
    <div className="container p-4">
      <Head>
        <title>오시는 길 | 평내중앙교회</title>
      </Head>

      <div className="mt-8">
        <h1 className="text-3xl font-bold tracking-wide my-8 flex items-center">
          평내중앙교회
        </h1>
        <p className="mb-2">(12223) 경기도 남양주시 평내로29번길 51-30</p>
        <div className="rounded-2xl border border-slate-900/5 overflow-hidden dark:border-sky-600 shadow dark:shadow-slate-800">
          <div id="map" className="w-full h-96 lg:h-[35rem]"></div>
        </div>
      </div>
      <div className="my-16">
        <h1 className="text-3xl font-bold tracking-wide my-8">오시는 방법</h1>
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-900/5 shadow dark:ring-1 p-4">
          <div className="flex-1 p-4">
            <h4 className="text-xl font-semibold mb-4">버스</h4>
            <div className="space-y-1">
              <p className="ml-4 relative before:absolute before:content-['-'] before:-left-3">
                <span className="font-bold">광역</span>: M2352
              </p>
              <p className="ml-4 relative before:absolute before:content-['-'] before:-left-3">
                <span className="font-bold">일반</span>: 1-4, 10-5, 30, 55, 65,
                65-1, 93
              </p>
              <p className="ml-4 relative before:absolute before:content-['-'] before:-left-3">
                <span className="font-bold">좌석</span>: 330-1
              </p>
              <p className="ml-4 relative before:absolute before:content-['-'] before:-left-3">
                <span className="font-bold">직행</span>: 1200, 1200-1,
                1330-2, 1330-3, 1330-4, 1330-44
              </p>
              <p className="ml-4 relative before:absolute before:content-['-'] before:-left-3">
                <span className="font-bold">정거장</span>: 평내동주민센터,
                남양주우체국
              </p>
            </div>
          </div>
          <div className="flex-1 p-4">
            <h4 className="text-xl font-semibold mb-4">전철</h4>
            <div className="space-y-1">
              <p className="ml-4 relative before:absolute before:content-['-'] before:-left-3">
                <span className="font-bold">노선</span>: 경춘선
              </p>
              <p className="ml-4 relative before:absolute before:content-['-'] before:-left-3">
                <span className="font-bold">역명</span>: 평내호평역
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
