const mainWorshipDate = '2022-11-27T11:00:00';
const praiseWorshipDate = '2022-11-27T13:30:00';
const wedWorshipDate = '2022-11-30T19:00:00';

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
      찬송1: ['다같이', '27장'],
      교독문: ['다같이', '48. 시편 106편'],
      신앙고백: ['다같이'],
      찬송2: ['다같이', '505장'],
      기도: ['이창구안수집사'],
      교회소식: ['인도자'],
      성경봉독: ['인도자', '빌 1:27-29'],
      찬양: ['찬양대'],
      헌금봉헌: ['헌금위원', '216장'],
      봉헌기도: ['인도자'],
      강론: ['최재우 목사', '복음신앙의 협력자'],
      찬송3: ['다같이', '620장'],
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
      찬송1: ['다같이', '191장'],
      기도: ['김지혜 집사'],
      성경봉독: ['인도자', '엡 3:14-19'],
      강론: ['최재우 목사', '바울의 삼대기원'],
      찬송2: ['다같이', '197장'],
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