const mainWorshipDate = '2023-04-09T11:00:00';
const praiseWorshipDate = '2023-04-09T13:30:00';
const wedWorshipDate = '2023-04-12T19:00:00';

const worships = {
  imageUrl: '',
  main: {
    제목: '주일낮예배',
    구절: '하나님은 영이시니 예배하는 자가 신령과 진정으로 예배할지니라 (요 4:24)',
    시간: mainWorshipDate,
    인도: '이동근 목사',
    차례: {
      전주: ['김지혜 반주'],
      묵상기도: ['다같이'],
      기원: ['인도자'],
      찬송1: ['다같이', '160장'],
      교독문: ['다같이', '133. 부활절(1)'],
      신앙고백: ['다같이'],
      찬송2: ['다같이', '161장'],
      기도: ['김영식장로'],
      교회소식: ['인도자'],
      성경봉독: ['인도자', '눅 24:1-12'],
      헌금봉헌: ['헌금위원', "'주님께 영광' 찬양대 특송"],
      봉헌기도: ['인도자'],
      강론: ['이동근 목사', '"말씀을 기억하라"'],
      찬송3: ['다같이', '171장'],
      축도: ['인도자'],
    },
  },
  praise: {
    제목: '주일찬양예배',
    구절: '할렐루야 새 노래로 여호와께 노래하며 성도의 희중에서 찬양할지어다 (시 149:1)',
    시간: praiseWorshipDate,
    인도: '이동근 목사',
    차례: {
      전주: ['김지혜 반주'],
      묵도: ['다같이'],
      기원: ['인도자'],
      찬송1: ['다같이', '경배와 찬양'],
      기도: ['현경은 집사'],
      성경봉독: ['인도자', '요 20:19-29'],
      강론: ['이동근 목사', '"보지 못하고 믿는자"'],
      찬송2: ['다같이', '164장'],
      축도: ['인도자'],
    },
  },
  wed: {
    제목: '수요일예배',
    시간: wedWorshipDate,
    인도: '',
    차례: {
      묵도: ['다같이'],
      찬송1: ['다같이', ''],
      성경봉독: ['인도자', ''],
      강론: ['인도자', ''],
      찬송2: ['다같이', ''],
      주기도문: ['다같이'],
    },
  },
};

export default worships;
