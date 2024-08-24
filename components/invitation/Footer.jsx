import { useRouter } from 'next/router';
import styles from '../../pages/notice/invitation.module.css';
import KakaotalkIcon from '../KakaotalkIcon';
import LinkIcon from '../LinkIcon';
import CallIcon from '../CallIcon';

export default function Footer() {
  const router = useRouter();

  const copyUrltoClipboard = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };
  const openKakaotalk = async () => {
    await copyUrltoClipboard();
    window.open('kakaotalk://');
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
