# [평내중앙교회 홈페이지](https://pnja.or.kr)

- 배포 URL: https://pnja.or.kr

## 프로젝트 동기

- 제가 섬기는 교회의 홈페이지 제작에 대한 필요성을 개인적으로 느끼고 있을 때, 개인 프로젝트로써 개발 함.

## 프로젝트 설명

### 종속성

1. Next.js

   - v12롤 기반으로 프로젝트 생성 개발 -> v14로 업그레이드. (pages router -> app router로 변경)

2. tailindcss

   - utility class를 바탕으로 개발 스트림라인 전환 없이 속도감 있게 스타일링 적용.

3. Naver Map & Kakakotalk API

   - 평내중앙교회 소재지에 대한 지도 표시와 교회행사 초대장 카카오톡 공유하기 기능 적용

### 기능

1. 성경보기 (상업적 x)

   - 스크래핑을 통해 성경의 모든 구절을 장 단위로 .md 파일 생성 후 각 ssg 혹은 ssr로 구성.
   - [스크래핑 프로젝트: https://github.com/namja85/scraping-bible](https://github.com/namja85/scraping-bible)
   - 성경 참조: http://www.holybible.or.kr

2. 주보보기 (현재 비활성화)

   - 매주 주보를 보여주고 주보내의 성경구절(ex 창1:1-10)을 해당 page(ex 창세기 1장)로 navigation.

3. 인사말
4. 예배시간안내
5. 오시는 길
6. [교회행사 모바일 초대장](https://www.pnja.or.kr/notice/invitation)

### 기타

1. SEO
   - 구글, 네이버, 다음 3개의 검색엔진에서 `평내중앙교회` 검색 시 페이지 상단 표시 달성.

## 배포

- vercel을 통한 호스팅
