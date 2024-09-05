import Image from 'next/image';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import Link from 'next/link';

export default function BulletinCard({ id, content }) {
  const { main } = content;
  const images = [
    {
      src: '/bulletin-thumnail1.png',
      alt: '평내중앙교회 썸네일 1번 이미지',
    },
    {
      src: '/bulletin-thumnail2.png',
      alt: '평내중앙교회 썸네일 2번 이미지',
    },
    {
      src: '/bulletin-thumnail3.png',
      alt: '평내중앙교회 썸네일 3번 이미지',
    },
    {
      src: '/bulletin-thumnail4.png',
      alt: '평내중앙교회 썸네일 4번 이미지',
    },
  ];
  const image = getThumnailImage();

  function getThumnailImage() {
    return images[Math.floor(id % images.length)];
  }

  return (
    <Link href={`/bulletins/${id}`}>
      <div className="flex justify-center">
        <div className="border w-80 border-slate-900/5 dark:border-0 dark:ring-1 rounded-2xl shadow place-self-center overflow-hidden">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="p-4 space-y-4 bg-white dark:bg-slate-800">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold">
                {Math.floor(id / 100)}년 {id % 100}주차
              </h4>
              <small>
                {format(new Date(main.시간), 'PPPP', { locale: ko })}
              </small>
            </div>
            <div>
              <p className="text-lg text-center min-h-[60px]">
                <em>
                  {main.차례.강론[1]} ({main.차례.성경봉독[1]})
                </em>
              </p>
              <p className="mt-4 text-right">
                <strong>{main.차례.강론[0]}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
