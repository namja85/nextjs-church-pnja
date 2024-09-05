'use client';

import SectionTitle from './SectionTitle';
import AppointeeName from './AppoiteeName';
import useElevateEffect from '../../hooks/useElevateEffect';

export default function Appointee() {
  const { setRef } = useElevateEffect();

  return (
    <div className="appointee-wrapper">
      <div className="p-8 bg-gray-50 w-full">
        <div className="py-8">
          <div className="space-y-2">
            <SectionTitle ref={setRef} koTitle="임직자" enTitle="appointees" />

            <div className="space-y-4">
              <AppointeeName ref={setRef} duty="명예장로" names={['최준호']} />
              <AppointeeName
                ref={setRef}
                duty="명예안수집사"
                names={['임시철']}
              />
              <AppointeeName
                ref={setRef}
                duty="안수집사"
                names={['김남길', '현경은']}
              />
              <AppointeeName
                ref={setRef}
                duty="권사"
                names={['김소정', '강명옥', '김은선', '이윤미']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
