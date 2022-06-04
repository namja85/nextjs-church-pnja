import {
  getMainWorshipDateTime,
  getPraiseWorshipDateTime,
  getWedWorshipDateTime,
} from '../../libs/date';

const date = new Date('2022/06/05');

const worships = {
  imageUrl:
    'https://drive.google.com/file/d/1G0C7RnJVWu5-J9xmKQEdMKS7E1e6cJL0/view',
  main: {
    제목: '주일낮예배',
    구절: '하나님은 영이시니 예배하는 자가 신령과 진정으로 예배할지니라 (요 4:24)',
    시간: getMainWorshipDateTime(date),
    인도: '김정안 목사',
    차례: {
      전주: ['김지혜 반주'],
      묵상기도: ['다같이'],
      기원: ['인도자'],
      찬송1: ['다같이', '1장'],
      교독문: ['다같이', '23. 시편 43편'],
      신앙고백: ['다같이'],
      찬송2: ['다같이', '40장'],
      기도: ['김영식 장로'],
      교회소식: ['인도자'],
      성경봉독: ['인도자', '창 32:7-12'],
      찬양: ['찬양대'],
      헌금봉헌: ['헌금위원', '211장 1, 2절'],
      봉헌기도: ['인도자'],
      강론: ['김정안 목사', '날 만나라'],
      찬송3: ['다같이', '338장'],
      축도: ['인도자'],
    },
  },
  praise: {
    제목: '주일찬양예배',
    구절: '할렐루야 새 노래로 여호와께 노래하며 성도의 희중에서 찬양할지어다 (시 149:1)',
    시간: getPraiseWorshipDateTime(date),
    인도: '김정안 목사',
    차례: {
      전주: ['김지혜 반주'],
      묵도: ['다같이'],
      기원: ['인도자'],
      찬송1: ['다같이', '438장'],
      기도: ['안정님 권사'],
      성경봉독: ['인도자', '출 9:1-12'],
      강론: ['김정안 목사', 'Toss'],
      찬송2: ['다같이', '370장'],
      축도: ['인도자'],
    },
  },
  wed: {
    제목: '수요일예배',
    시간: getWedWorshipDateTime(date),
    인도: '김정안 목사',
    차례: {
      묵도: ['다같이'],
      찬송1: ['다같이', '151장'],
      성경봉독: ['인도자', '요 13:34-35'],
      강론: ['김정안 목사', '십자가, 우리 세계의 중심'],
      찬송2: ['다같이', '510장'],
      주기도문: ['다같이'],
    },
  },
};

export default worships;
