import styles from '../../pages/notice/invitation.module.css';

export default function Appointee() {
  const appointees = [
    { duty: '명예장로', names: ['최준호'] },
    { duty: '명예안수집사', names: ['임시철'] },
    { duty: '안수집사', names: ['김남길', '현경은'] },
    { duty: '권사', names: ['김소정', '강명옥', '김은선', '이윤미'] },
  ];

  return (
    <div className={styles.appointeeWrapper}>
      <div className="appointee-inner p-8 bg-gray-50 w-full">
        <div className="py-8">
          <div className="space-y-2">
            <h3 className="text-center mb-8">
              <span className={styles.titleEng}>appointees</span>
              <br />
              <span className={styles.title}>임직자</span>
            </h3>

            <div className="space-y-4">
              {appointees.map((appointee) => (
                <div key={appointee.duty}>
                  <h4 className={styles.duty}>{appointee.duty}</h4>
                  <p className={styles.name}>{appointee.names.join(' ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
