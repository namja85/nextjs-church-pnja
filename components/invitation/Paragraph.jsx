import SectionTitle from './SectionTitle';
import SectionParagraph from './SectionParagraph';
import useElevateEffect from '../../hooks/useElevateEffect';

export default function Paragraph() {
  const { setRef } = useElevateEffect();

  return (
    <div className="paragraph-wrapper">
      <div className="p-8 bg-gray-50 w-full">
        <div className="mt-32">
          <div className="py-8 sm:px-1">
            <h3
              ref={setRef}
              className="opacity-0 text-4xl text-center mb-8 translate-y-[20px] transition-all duration-500 ease-in"
            >
              🪻
            </h3>

            <SectionParagraph ref={setRef}>
              &ldquo;사람이 마음으로 자기의 길을
              <br /> 계획할지라도 그의 걸음을 인도하시는 이는
              <br /> 여호와시니라&rdquo;
              <br />
              <sub>잠언 16장 9절</sub>
            </SectionParagraph>
          </div>
          <div className="mt-32 py-8 space-y-2">
            <SectionTitle
              ref={setRef}
              koTitle="초대합니다"
              enTitle="invitation"
            />

            <SectionParagraph ref={setRef}>
              우리 주 예수 그리스도의
              <br /> 이름으로 문안드립니다.
            </SectionParagraph>

            <SectionParagraph ref={setRef}>
              주님의 몸 된 교회를
              <br /> 건강하게 세워갈 충성된 일꾼들이
              <br /> 장로, 안수집사, 권사로 세워지는
              <br /> 임직식을 갖고자 합니다.
            </SectionParagraph>

            <SectionParagraph ref={setRef}>
              부디오셔서 격려와 축복으로
              <br /> 함께 해주시길 바랍니다.
            </SectionParagraph>
          </div>
        </div>
      </div>
    </div>
  );
}
