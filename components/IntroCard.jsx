import Image from 'next/image';

export default function IntroCard({ name, imgPath, text, bibleNum }) {
  return (
    <div className="relative rounded-lg lg:flex-1">
      <div className="flex p-4 rounded-lg overflow-hidden bg-white shadow-xl dark:bg-slate-800 ring-1 ring-slate-900/5 dark:ring-slate-700">
        {/* <div className="w-32 -m-4 mr-4 h-auto overflow-hidden">
          <img className="object-cover" src={imgPath} alt={name} />
        </div> */}
        <div className="relative w-32 -m-4 mr-4 h-40 overflow-hidden">
          <Image
            src={imgPath}
            alt={name}
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
        <div className="flex-1 flex items-center">
          <div className="space-y-2">
            <p className="text-slate-600">{text}</p>
            <p>
              <em className="text-slate-700 dark:text-slate-500 font-medium">
                {bibleNum}
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
