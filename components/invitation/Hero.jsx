import Image from 'next/image';
import styles from '../../pages/notice/invitation.module.css';

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className="hero-inner p-8 relative bg-gray-50 w-full h-[1000px]">
        <div className={styles.title}>
          <h1>임직감사예배</h1>
          <p>2024.09.29 오전11시</p>
          <p>평내중앙교회 3층 본당</p>
        </div>
        <Image
          src={'/church.jpg'}
          alt={'평내중앙교회 건물'}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
