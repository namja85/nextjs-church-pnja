import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import ExternalLinkIcon from '../../components/ExternalLinkIcon';
import WorshipContentBox from '../../components/WorshipContentBox';
import worships from '../../posts/bulletins/_2223';

export default function Bulletins() {
  const { main, praise, wed } = worships;
  return (
    <div className="container flex flex-col space-y-8 p-4">
      <p className="flex justify-between">
        <a href={worships.imageUrl}>
          <span className="text-slate-400 hover:text-slate-300">
            <ExternalLinkIcon />
          </span>
        </a>
        <small>{format(main.시간, 'PPPP', { locale: ko })}</small>
      </p>
      <WorshipContentBox worship={main} />
      <WorshipContentBox worship={praise} />
      <WorshipContentBox worship={wed} />
    </div>
  );
}
