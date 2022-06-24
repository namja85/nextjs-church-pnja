import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-slate-50/[0.06] py-10 px-4">
      <div className="p-4 max-w-lg mx-auto flex justify-between items-center md:max-w-3xl lg:max-w-5xl">
        <div>
          <p>
            <small>(12223) 경기도 남양주시 평내로29번길 51-30</small>
          </p>
          <p>
            <small>Copyright © 2022 평내중앙교회. All rights reserved.</small>
          </p>
        </div>
        <div className="relative w-28 aspect-[2/1]">
          <Image
            src="/logo.png"
            layout="fill"
            objectFit="contain"
            alt="평내중앙교회로고"
          />
        </div>
      </div>
    </footer>
  );
}
