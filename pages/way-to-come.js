import Head from 'next/head';
import { useRef, useEffect } from 'react';

const church = {
  lat: 37.64700,
  lng: 127.23511,
};

export default function WayToCome() {
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(church.lat, church.lng),
      zoom: 19,
      zoomControl: true,
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(church.lat, church.lng),
      map: mapRef.current
    });
  }, []);

  return (
    <div className="container p-4">
      <Head>
        <title>평내중앙교회 | 오시는 길</title>

        <script
          defer
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
        ></script>
      </Head>

      <div>
        <h1>위치</h1>
        <p>(12223) 경기도 남양주시 평내로29번길 51-30</p>
        <div id="map" className="w-full h-96 bg-pink-300"></div>
      </div>
      <div className="mt-4">
        <h3>오시는 방법</h3>
        <div>
          <div>
            <h4>버스</h4>
            <div>
              <p>
                <span>광역</span>: M2323
              </p>
              <p>
                <span>일반</span>: 1-4, 10-5, 30, 55, 65, 65-1, 93
              </p>
              <p>
                <span>좌석</span>: 330-1
              </p>
              <p>
                <span>직행</span>: 1000-1, 1200, 1200-1, 1330-2, 1330-3, 1330-4,
                1330-44
              </p>
              <p>평내동주민센터, 남양주우체국</p>
            </div>
          </div>
          <div>
            <h4>지하철</h4>
            <div>
              <p>
                <span>노선</span>: 경춘선
              </p>
              <p>
                <span>평내호평역</span>
              </p>
              <p>
                <span>좌석</span>: 330-1
              </p>
              <p>
                <span>직행</span>: 1000-1, 1200, 1200-1, 1330-2, 1330-3, 1330-4,
                1330-44
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
