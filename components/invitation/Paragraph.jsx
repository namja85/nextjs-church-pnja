import styles from '../../pages/notice/invitation.module.css';

export default function Paragraph() {
  return (
    <div className={styles.paragraphWrapper}>
      <div className="paragraph-inner p-8 bg-gray-50 w-full">
        <div>
          <div className="my-12">
            <h3 className="text-4xl text-center mb-8">🪻</h3>
            <p className={styles.text}>
              &ldquo;사람의 마음으로 자기의 길을 계획할지라도 그의 걸음을
              인도하시는 이는 여호와시니라&rdquo;
              <sub>잠언 16장 9절</sub>
            </p>
          </div>
          <div className="my-12 space-y-2 mt-32">
            <h3 className="text-center mb-8">
              <span className={styles.titleEng}>invitation</span>
              <br />
              <span className={styles.title}>초대합니다</span>
            </h3>
            <p className={styles.text}>
              우리 주 예수 그리스도의
              <br /> 이름으로 문안드립니다.
            </p>
            <p className={styles.text}>
              주님의 몸 된 교회를
              <br /> 건강하게 세워갈 충성된 일꾼들이
              <br /> 장로, 안수집사, 권사로 세워지는
              <br /> 임직식을 갖고자 합니다.
            </p>
            <p className={styles.text}>
              부디오셔서 격려와 축복으로
              <br /> 함께 해주시길 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
