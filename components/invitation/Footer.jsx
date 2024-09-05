import Script from 'next/script';
import { useRouter } from 'next/router';
import KakaotalkIcon from '../KakaotalkIcon';
import LinkIcon from '../LinkIcon';
import CallIcon from '../CallIcon';
import useChurch from '../../hooks/useChurch';

export default function Footer() {
  const { church } = useChurch();
  const router = useRouter();

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
          description: '2024.09.29 주일 오후 2시\n평내중앙교회 3층 본당',
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
    window.location.href = `tel:${church.phone}`;
  };

  const goHome = () => {
    router.push('/');
  };

  const handleScriptOnReady = () => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAOTALK_APP_KEY);
    }
  };

  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
        crossOrigin="anonymous"
        onReady={handleScriptOnReady}
      ></Script>

      <div className="footer-wrapper bg-[#f2eeee] text-[#434343]">
        <div className="footer-inner p-4 w-full">
          <div className="py-8 space-y-4">
            <p
              className="text-[0.8rem] flex justify-center items-center cursor-pointer hover:scale-105 active:scale-105"
              onClick={openKakaotalk}
            >
              <span className="inline-block w-4 h-4 mr-1">
                <KakaotalkIcon />
              </span>
              <span>카카오톡 공유하기</span>
            </p>
            <p
              className="text-[0.8rem] flex justify-center items-center cursor-pointer hover:scale-105 active:scale-105"
              onClick={copyUrlLink}
            >
              <span className="inline-block w-4 h-4 mr-1">
                <LinkIcon />
              </span>
              <span>링크주소 복사하기</span>
            </p>
            <p
              className="text-[0.8rem] flex justify-center items-center cursor-pointer hover:scale-105 active:scale-105"
              onClick={makeCall}
            >
              <span className="inline-block w-4 h-4 mr-1">
                <CallIcon />
              </span>
              <span>대표번호 전화하기</span>
            </p>
            <p
              className="text-[0.8rem] flex justify-center items-center cursor-pointer hover:scale-105 active:scale-105"
              onClick={goHome}
            >
              <span className="inline-block w-4 h-4 mr-1 mb-1">⛪️</span>
              <span>평내중앙교회</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
