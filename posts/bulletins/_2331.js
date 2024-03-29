const mainWorshipDate = '2023-07-30T11:00:00';
const praiseWorshipDate = '2023-07-30T13:30:00';
const wedWorshipDate = '2023-08-02T19:00:00';

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
      찬송1: ['다같이', '우리가 교회입니다'],
      교독문: ['다같이', '23. 시편 43편'],
      신앙고백: ['다같이'],
      찬송2: ['다같이', '391장'],
      기도: ['김영식장로'],
      교회소식: ['인도자'],
      성경봉독: ['인도자', '삼하 24:10-15'],
      //헌금봉헌: ['헌금위원', "그럼에도 불구하고"],
      특송: ['다음세대', "주기도문 송"],
      봉헌기도: ['인도자'],
      강론: ['이동근 목사', '"내가 해야 할 일과 맡겨야 할일"'],
      찬송3: ['다같이', '393장'],
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
      기도: ['이동환 집사'],
      성경봉독: ['인도자', '레 26:13'],
      강론: ['이동근 목사', '"일을 위한 일을 하지 말라"'],
      찬송2: ['다같이', '85장'],
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
