import Image from 'next/image';
import MailIcon from './MailIcon';
import LocationIcon from './LocationIcon';
import useChurch from '../hooks/useChurch';

export default function Footer() {
  const { church } = useChurch();

  return (
    <footer className="border-t border-slate-50/[0.06] py-10 px-4">
      <div className="p-4 max-w-lg mx-auto flex justify-between items-start md:max-w-3xl lg:max-w-5xl">
        <div>
          <p className="space-x-1 flex items-center">
            <LocationIcon />
            <small>
              ({church.zipCode}) {church.address}
            </small>
          </p>
          <p className="space-x-1 flex items-center">
            <MailIcon />
            <small>
              <a href={`mailto:${church.email}`}>{church.email}</a>
            </small>
          </p>
          <p className="mt-4">
            <small>Copyright © 2024 평내중앙교회. All rights reserved.</small>
          </p>
        </div>
        <div className="relative w-28 aspect-[2/1]">
          <Image
            src="/logo.png"
            alt="평내중앙교회로고"
            style={{
              objectFit: 'contain',
            }}
            fill
          />
        </div>
      </div>
    </footer>
  );
}
