import IntroCard from './IntroCard';

export default function Introduce() {
  const introduces = [
    {
      id: 1,
      name: '평내중앙교회 건물',
      imgPath: '/pnja-church-color.png',
      text: '항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라',
      bibleNum: '살전 5:16-18',
    },
    {
      id: 2,
      name: '평내중앙교회 예배당',
      imgPath: '/pnja-chapel-color.png',
      text: '쉬지 말고 기도하라 범사에 감사하라',
      bibleNum: '살전 5:16-17',
    },
  ];
  return (
    <div className="flex flex-col space-y-8 mb-16 lg:flex-row lg:space-y-0 lg:space-x-8">
      {introduces.length > 0 &&
        introduces.map(({ id, ...props }, index) => (
          <IntroCard {...props} key={id} />
        ))}
    </div>
  );
}
