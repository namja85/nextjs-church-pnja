import {
  getMainWorshipDateTime,
  getPraiseWorshipDateTime,
  getWedWorshipDateTime,
} from '../../libs/date';

const date = new Date('2022/07/10');

const worships = {
  imageUrl:
    'https://drive.google.com/file/d/1IZC9p44-tGp991F8WsYZzyCL7fh0kf9V/view?usp=drivesdk',
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
      교독문: ['다같이', '28. 시편 63편'],
      신앙고백: ['다같이'],
      찬송2: ['다같이', '446장'],
      기도: ['김영식장로'],
      교회소식: ['인도자'],
      성경봉독: ['인도자', '마 4:21-24'],
      찬양: ['찬양대'],
      헌금봉헌: ['헌금위원', '216장'],
      봉헌기도: ['인도자'],
      강론: ['김정안 목사', '들을 수 있게 전하는 사명'],
      찬송3: ['다같이', '520장'],
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
      찬송1: ['다같이', '91장'],
      기도: ['김지혜 집사'],
      성경봉독: ['인도자', '왕하 17:32-34'],
      강론: ['김정안 목사', '주님께만 반응하기'],
      찬송2: ['다같이', '539장'],
      축도: ['인도자'],
    },
  },
  wed: {
    제목: '수요일예배',
    시간: getWedWorshipDateTime(date),
    인도: '김정안 목사',
    차례: {
      묵도: ['다같이'],
      찬송1: ['다같이', '436장'],
      성경봉독: ['인도자', '사 28:11-15'],
      강론: ['김정안 목사', '참으로 상쾌한 삶'],
      찬송2: ['다같이', '446장'],
      주기도문: ['다같이'],
    },
  },
};

export default worships;
