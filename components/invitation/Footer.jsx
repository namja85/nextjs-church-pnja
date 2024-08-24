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
          title: '2024년도 임직감사예배에 초대합니다.',
          description: '⛪️ 평내중앙교회\n📅 2024.9.29 주일 오후2시',
          imageUrl: 'https://pnja.or.kr/share-thumbnail.jpg',
          imageWidth: 600,
          imageHeight: 938,
          link: {
            mobileWebUrl: 'https://pnja.or.kr/notice/invitation',
            webUrl: 'https://pnja.or.kr/notice/invitation',
          },
        },
        buttons: [
          {
            title: '💌초대장',
            link: {
              mobileWebUrl: 'https://pnja.or.kr/notice/invitation',
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
