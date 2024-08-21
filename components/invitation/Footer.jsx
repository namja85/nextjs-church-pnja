import { useRouter } from 'next/router';
import styles from '../../pages/notice/invitation.module.css';

export default function Footer() {
  const router = useRouter();

  const openKakaotalk = () => {
    window.open('kakaotalk://');
  };
  const copyUrlLink = () => {
    function copyCurrentUrlToClipboard() {
      const url = window.location.href;
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    copyCurrentUrlToClipboard();
  };

  const goHome = () => {
    router.push('/');
  };
  return (
    <div className={styles.footerWrapper}>
      <div className="footer-inner p-4 w-full">
        <div className="my-8 space-y-4">
          <p className={styles.text} onClick={openKakaotalk}>
            카카오톡 공유하기
          </p>
          <p className={styles.text} onClick={copyUrlLink}>
            링크주소 복사하기
          </p>
          <p className={styles.text} onClick={goHome}>
            평내중앙교회
          </p>
        </div>
      </div>
    </div>
  );
}
