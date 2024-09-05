import { useRef, useState, useEffect } from 'react';

export default function Calendar() {
  const [today, setToday] = useState(new Date());
  const [target, _] = useState(new Date(2024, 8, 29)); // 2024.09.29
  const [diff, setDiff] = useState(null);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

  useEffect(() => {
    const observerCallbackFn = (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
        }
      });
    };
    const options = {
      root: null,
      rootMargin: '0px 0px -200px 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallbackFn, options);

    observer.observe(ref1.current);
    observer.observe(ref2.current);
    observer.observe(ref3.current);
    observer.observe(ref4.current);
    observer.observe(ref5.current);
    observer.observe(ref6.current);
    observer.observe(ref7.current);
    observer.observe(ref8.current);
  }, []);

  useEffect(() => {
    const diffMillisecond = target.getTime() - today.getTime();
    const diffDay = diffMillisecond / (1000 * 3600 * 24);
    setDiff(Math.ceil(diffDay));
  }, [today, target]);

  return (
    <div className="calendar-wrapper bg-[#f6f5f5]">
      <div className="p-8 w-full">
        <div className="py-8">
          <div
            ref={ref1}
            className="title opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
          >
            <p className="text-[1.4rem] leading-[1.8rem] tracking-[3px] opacity-80 font-crimson text-[#524548] text-center">
              2024.09.29
            </p>
            <p className="text-[0.9rem] tracking-[1px] text-[#524548] text-center mb-5">
              주일 오후 2시
            </p>
          </div>
          <div className="border border-[#e8dfdf] border-l-0 border-r-0 px-4 py-0">
            <table
              cellSpacing={0}
              className="text-center leading-8 w-full my-4"
            >
              <thead>
                <tr
                  ref={ref2}
                  className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
                >
                  <th className="text-[#c6472b]">일</th>
                  <th>월</th>
                  <th>화</th>
                  <th>수</th>
                  <th>목</th>
                  <th>금</th>
                  <th>토</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  ref={ref3}
                  className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
                >
                  <td className="text-[#c6472b]">
                    <span>1</span>
                  </td>
                  <td>
                    <span>2</span>
                  </td>
                  <td>
                    <span>3</span>
                  </td>
                  <td>
                    <span>4</span>
                  </td>
                  <td>
                    <span>5</span>
                  </td>
                  <td>
                    <span>6</span>
                  </td>
                  <td>
                    <span>7</span>
                  </td>
                </tr>
                <tr
                  ref={ref4}
                  className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
                >
                  <td className="text-[#c6472b]">
                    <span>8</span>
                  </td>
                  <td>
                    <span>9</span>
                  </td>
                  <td>
                    <span>10</span>
                  </td>
                  <td>
                    <span>11</span>
                  </td>
                  <td>
                    <span>12</span>
                  </td>
                  <td>
                    <span>13</span>
                  </td>
                  <td>
                    <span>14</span>
                  </td>
                </tr>
                <tr
                  ref={ref5}
                  className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
                >
                  <td className="text-[#c6472b]">
                    <span>15</span>
                  </td>
                  <td>
                    <span>16</span>
                  </td>
                  <td>
                    <span>17</span>
                  </td>
                  <td>
                    <span>18</span>
                  </td>
                  <td>
                    <span>19</span>
                  </td>
                  <td>
                    <span>20</span>
                  </td>
                  <td>
                    <span>21</span>
                  </td>
                </tr>
                <tr
                  ref={ref6}
                  className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
                >
                  <td className="text-[#c6472b]">
                    <span>22</span>
                  </td>
                  <td>
                    <span>23</span>
                  </td>
                  <td>
                    <span>24</span>
                  </td>
                  <td>
                    <span>25</span>
                  </td>
                  <td>
                    <span>26</span>
                  </td>
                  <td>
                    <span>27</span>
                  </td>
                  <td>
                    <span>28</span>
                  </td>
                </tr>
                <tr
                  ref={ref7}
                  className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
                >
                  <td className="relative">
                    <div className="absolute w-full h-full flex justify-center items-center">
                      <span className="text-white flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#cec3c3]">
                        29
                      </span>
                    </div>
                    <span>29</span>
                  </td>
                  <td>
                    <span>30</span>
                  </td>
                  <td>
                    <span></span>
                  </td>
                  <td>
                    <span></span>
                  </td>
                  <td>
                    <span></span>
                  </td>
                  <td>
                    <span></span>
                  </td>
                  <td>
                    <span></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            ref={ref8}
            className="opacity-0 translate-y-[20px] transition-all duration-500 ease-in"
          >
            <p className="text-[0.9rem] tracking-[1px] text-[#524548] text-center mt-5">
              임직감사예배까지 <span className="text-[#c6472b]">{diff}일</span>{' '}
              남았습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
