import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../pages/notice/invitation.module.css';
import KakaotalkIcon from '../KakaotalkIcon';
import LinkIcon from '../LinkIcon';
import CallIcon from '../CallIcon';

const KAKAOTALK_APP_PRIVATE_KEY = '76c2fffa54d098a656142debad14f3eb';

export default function Footer() {
  const router = useRouter();

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(KAKAOTALK_APP_PRIVATE_KEY);
    }
  }, []);

  const copyUrltoClipboard = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };
  const openKakaotalk = async () => {
    // await copyUrltoClipboard();
    // window.open('kakaotalk://');

    function shareMessage() {
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '딸기 치즈 케익',
          description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
          imageUrl:
            'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      });
    }
    shareMessage();
  };
  const copyUrlLink = async () => {
    await copyUrltoClipboard();
    alert('💌초대장 링크를 복사하였습니다.');
  };
  const makeCall = async () => {
    window.location.href = 'tel:0315957373';
  };

  const goHome = () => {
    router.push('/');
  };
  return (
    <div className={styles.footerWrapper}>
      <div className="footer-inner p-4 w-full">
        <div className="py-8 space-y-4">
          <p className={styles.text} onClick={openKakaotalk}>
            <span className="inline-block w-4 h-4 mr-1">
              <KakaotalkIcon />
            </span>
            <span>카카오톡 공유하기</span>
          </p>
          <p className={styles.text} onClick={copyUrlLink}>
            <span className="inline-block w-4 h-4 mr-1">
              <LinkIcon />
            </span>
            <span>링크주소 복사하기</span>
          </p>
          <p className={styles.text} onClick={makeCall}>
            <span className="inline-block w-4 h-4 mr-1">
              <CallIcon />
            </span>
            <span>대표번호 전화하기</span>
          </p>
          <p className={styles.text} onClick={goHome}>
            <span className="inline-block w-4 h-4 mr-1 mb-1">⛪️</span>
            <span>평내중앙교회</span>
          </p>
        </div>
      </div>
    </div>
  );
}
