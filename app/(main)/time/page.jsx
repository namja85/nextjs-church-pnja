export const metadata = {
  title: '예배시간안내 | 평내중앙교회',
  description: '평내중앙교회 예배시간을 안내합니다.',
};

export default function Hello() {
  return (
    <div className="container p-4">
      <div className="space-y-4">
        <h1 className="text-slate-900 dark:text-slate-200 text-3xl font-bold tracking-wide my-8">
          예배시간안내
        </h1>
        <hr />
        <h2 className="text-center text-md">
          <span className="font-bold mr-2">요4:23</span>아버지께 참되게 예배하는
          자들은 영과 진리로 예배할 때가 오나니 곧 이 때라 아버지께서는 자기에게
          이렇게 예배하는 자들을 찾으시느니라
        </h2>
      </div>

      <div className="my-16 flex flex-col items-center">
        <table className="w-full table-auto border-collapse border-t-2 border-b-2 border-slate-500">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-center p-2">예배</th>
              <th className="text-center p-2">장소</th>
              <th className="text-center p-2">시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center p-2">주일1부예배</td>
              <td className="text-center p-2">주일 오전 9시</td>
              <td className="text-center p-2">3층 본당</td>
            </tr>
            <tr>
              <td className="text-center p-2">주일2부예배</td>
              <td className="text-center p-2">주일 오전 11시</td>
              <td className="text-center p-2">3층 본당</td>
            </tr>
            <tr>
              <td className="text-center p-2">주일3부예배(찬양예배)</td>
              <td className="text-center p-2">주일 오후 2시</td>
              <td className="text-center p-2">3층 본당</td>
            </tr>
            <tr>
              <td className="text-center p-2">수요기도회</td>
              <td className="text-center p-2">수요일 오후 7시</td>
              <td className="text-center p-2">3층 본당</td>
            </tr>
            <tr>
              <td className="text-center p-2">금요기도회</td>
              <td className="text-center p-2">금요일 오후 9시</td>
              <td className="text-center p-2">3층 본당</td>
            </tr>
            <tr>
              <td className="text-center p-2">새벽기도회</td>
              <td className="text-center p-2">화~금 오전 5시</td>
              <td className="text-center p-2">3층 본당</td>
            </tr>
            <tr>
              <td className="text-center p-2">주일학교예배</td>
              <td className="text-center p-2">주일 오전 11시</td>
              <td className="text-center p-2">1층 교육관</td>
            </tr>
            <tr>
              <td className="text-center p-2">중고등부모임</td>
              <td className="text-center p-2">(예정)</td>
              <td className="text-center p-2">2층 중고등부실</td>
            </tr>
            <tr>
              <td className="text-center p-2">청년부모임</td>
              <td className="text-center p-2">(예정)</td>
              <td className="text-center p-2">2층 청년부실</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
