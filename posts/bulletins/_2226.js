import {
  getMainWorshipDateTime,
  getPraiseWorshipDateTime,
  getWedWorshipDateTime,
} from '../../libs/date';

const date = new Date('2022/06/26');

const worships = {
  imageUrl: 'https://drive.google.com/file/d/1HQ1VY6yWR0zBGFdyQFA_ckAPwDEjLqpJ/view?usp=drivesdk',
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
      교독문: ['다같이', '26. 시편 50편'],
      신앙고백: ['다같이'],
      찬송2: ['다같이', '268장'],
      기도: ['이창구안수집사'],
      교회소식: ['인도자'],
      성경봉독: ['인도자', '왕하 6:14-19'],
      찬양: ['찬양대'],
      헌금봉헌: ['헌금위원', '211장 1, 2절'],
      봉헌기도: ['인도자'],
      강론: ['김정안 목사', '그의 눈을 열어주소서'],
      찬송3: ['다같이', '406장'],
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
      찬송1: ['다같이', '379장'],
      기도: ['윤은혜 집사'],
      성경봉독: ['인도자', '마 25:21,23'],
      강론: ['김정안 목사', '나무들 사이의 공간을 봅니다!!'],
      찬송2: ['다같이', '325장'],
      축도: ['인도자'],
    },
  },
  wed: {
    제목: '수요일예배',
    시간: getWedWorshipDateTime(date),
    인도: '김정안 목사',
    차례: {
      묵도: ['다같이'],
      찬송1: ['다같이', '260장'],
      성경봉독: ['인도자', '수 14:6-15'],
      강론: ['김정안 목사', '담대할 수 있는 이유'],
      찬송2: ['다같이', '347장'],
      주기도문: ['다같이'],
    },
  },
};

export default worships;
