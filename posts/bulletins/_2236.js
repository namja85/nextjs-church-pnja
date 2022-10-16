const mainWorshipDate = '2022-09-04T11:00:00';
const praiseWorshipDate = '2022-09-04T13:30:00';
const wedWorshipDate = '2022-09-07T19:00:00';

const worships = {
  imageUrl: '',
  main: {
    제목: '주일낮예배',
    구절: '하나님은 영이시니 예배하는 자가 신령과 진정으로 예배할지니라 (요 4:24)',
    시간: mainWorshipDate,
    인도: '김정안 목사',
    차례: {
      전주: ['김지혜 반주'],
      묵상기도: ['다같이'],
      기원: ['인도자'],
      찬송1: ['다같이', '2장'],
      교독문: ['다같이', '36. 시편 90편'],
      신앙고백: ['다같이'],
      찬송2: ['다같이', '85장'],
      기도: ['이창구안수집사'],
      교회소식: ['인도자'],
      성경봉독: ['인도자', '딤전 4:5-10'],
      찬양: ['찬양대'],
      헌금봉헌: ['헌금위원', '216장 1,2,4절'],
      봉헌기도: ['인도자'],
      강론: ['김정안 목사', '경건은 역동적이다'],
      찬송3: ['다같이', '354장'],
      축도: ['인도자'],
    },
  },
  praise: {
    제목: '주일찬양예배',
    구절: '할렐루야 새 노래로 여호와께 노래하며 성도의 희중에서 찬양할지어다 (시 149:1)',
    시간: praiseWorshipDate,
    인도: '김정안 목사',
    차례: {
      전주: ['김지혜 반주'],
      묵도: ['다같이'],
      기원: ['인도자'],
      찬송1: ['다같이', '314장'],
      기도: ['이동환 집사'],
      성경봉독: ['인도자', '출 4:24-26'],
      강론: ['김정안 목사', '능력보다 더 중요한 것'],
      찬송2: ['다같이', '312장'],
      축도: ['인도자'],
    },
  },
  wed: {
    제목: '수요일예배',
    시간: wedWorshipDate,
    인도: '김정안 목사',
    차례: {
      묵도: ['다같이'],
      찬송1: ['다같이', '435장'],
      성경봉독: ['인도자', '마 21:1-5'],
      강론: ['김정안 목사', '주님 손에 맡겨드리리'],
      찬송2: ['다같이', '213장'],
      주기도문: ['다같이'],
    },
  },
};

export default worships;