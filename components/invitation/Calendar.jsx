import { useState, useEffect } from 'react';
import styles from '../../pages/notice/invitation.module.css';

export default function Calendar() {
  const [today, setToday] = useState(new Date());
  const [target, _] = useState(new Date(2024, 8, 29)); // 2024.09.29
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    const diffMillisecond = target.getTime() - today.getTime();
    const diffDay = diffMillisecond / (1000 * 3600 * 24);
    setDiff(Math.ceil(diffDay));
  }, [today, target]);

  return (
    <div className={styles.calendarWrapper}>
      <div className="calendar-inner p-8 w-full">
        <div className="py-8">
          <div className="title">
            <p className={styles.date}>2024.09.29</p>
            <p className={styles.hour}>주일 오후 2시</p>
            <p className="bg-blue-200"></p>
          </div>
          <div className={styles.calendarContent}>
            <table cellSpacing={0} className="leading-8 w-full my-4">
              <thead>
                <tr>
                  <th>일</th>
                  <th>월</th>
                  <th>화</th>
                  <th>수</th>
                  <th>목</th>
                  <th>금</th>
                  <th>토</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
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
                <tr>
                  <td>
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
                <tr>
                  <td>
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
                <tr>
                  <td>
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
                <tr>
                  <td className="relative">
                    <div className={styles.event}>
                      <span className="text-white">29</span>
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
          <div>
            <p className={styles.dday}>
              임직감사예배까지 <span className={styles.pink}>{diff}일</span>{' '}
              남았습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
