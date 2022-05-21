import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import WorshipContentBox from '../../components/WorshipContentBox';
import worships from '../../posts/bulletins/_2221';

export default function index() {
  const { main, praise, wed } = worships;
  return (
    <div className="flex flex-col space-y-8 pt-4 pb-4">
      <p className="text-right">
        <small>{format(main.시간, 'PPPP', { locale: ko })}</small>
      </p>
      <WorshipContentBox worship={main} />
      <WorshipContentBox worship={praise} />
      <WorshipContentBox worship={wed} />
    </div>
  );
}
