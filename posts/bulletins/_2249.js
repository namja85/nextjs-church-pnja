const mainWorshipDate = '2022-12-04T11:00:00';
const praiseWorshipDate = '2022-12-04T13:30:00';
const wedWorshipDate = '2022-12-07T19:00:00';

const worships = {
  imageUrl: '',
  main: {
    제목: '주일낮예배',
    구절: '하나님은 영이시니 예배하는 자가 신령과 진정으로 예배할지니라 (요 4:24)',
    시간: mainWorshipDate,
    인도: '최재우 목사',
    차례: {
      전주: ['김지혜 반주'],
      묵상기도: ['다같이'],
      기원: ['인도자'],
      찬송1: ['다같이', '26장'],
      교독문: ['다같이', '49. 시편 108편'],
      신앙고백: ['다같이'],
      찬송2: ['다같이', '96장'],
      기도: ['김영식장로'],
      교회소식: ['인도자'],
      성경봉독: ['인도자', '마 17:1-8'],
      찬양: ['찬양대'],
      헌금봉헌: ['헌금위원', '213장'],
      봉헌기도: ['인도자'],
      강론: ['최재우 목사', '오직 예수'],
      찬송3: ['다같이', '260장'],
      축도: ['인도자'],
    },
  },
  praise: {
    제목: '주일찬양예배',
    구절: '할렐루야 새 노래로 여호와께 노래하며 성도의 희중에서 찬양할지어다 (시 149:1)',
    시간: praiseWorshipDate,
    인도: '최재우 목사',
    차례: {
      전주: ['김지혜 반주'],
      묵도: ['다같이'],
      기원: ['인도자'],
      찬송1: ['다같이', '310장'],
      기도: ['이동환 집사'],
      성경봉독: ['인도자', '고전 15:10'],
      강론: ['최재우 목사', '오직 하나님의 은혜'],
      찬송2: ['다같이', '305장'],
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
