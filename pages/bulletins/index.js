import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import WorshipContentBox from '../../components/WorshipContentBox';
import worships from '../../posts/bulletins/_2222';

export default function Bulletins() {
  const { main, praise, wed } = worships;
  return (
    <div className="container flex flex-col space-y-8 p-4">
      <p className="text-right">
        <small>{format(main.시간, 'PPPP', { locale: ko })}</small>
      </p>
      <WorshipContentBox worship={main} />
      <WorshipContentBox worship={praise} />
      <WorshipContentBox worship={wed} />
    </div>
  );
}
