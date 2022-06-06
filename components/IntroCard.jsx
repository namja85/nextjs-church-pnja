import Image from 'next/image';

export default function IntroCard({ name, imgPath, text, bibleNum }) {
  return (
    <div className="relative rounded-lg text-slate-300">
      <div className="flex p-4 rounded-lg overflow-hidden bg-slate-800 ring-1 ring-slate-700">
        {/* <div className="w-32 -m-4 mr-4 h-auto overflow-hidden">
          <img className="object-cover" src={imgPath} alt={name} />
        </div> */}
        <div className="relative w-32 -m-4 mr-4 h-40 overflow-hidden">
          <Image
            src={imgPath}
            alt={name}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex-1 flex items-center">
          <div className="space-y-2">
            <p>{text}</p>
            <p>
              <em className="text-slate-500 font-medium">{bibleNum}</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
