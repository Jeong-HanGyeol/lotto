"use client";

import { useState, useEffect } from "react";
import {
  getLottoRound,
  getRandomNumbers,
  copyToClipboard,
} from "../../common/util/func";
import { SmallBall } from "../../common/components/Ball";

const MExcludingNumber = () => {
  const [exclude, setExclude] = useState<number[]>([]);

  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [copiedNumbers, setCopiedNumbers] = useState("");

  const generateRandomNumbers = () => {
    if (exclude.length > 39) {
      alert("제외하지 않을 숫자를 6개 이상으로 해야합니다.");
    } else {
      const numbers: number[] = getRandomNumbers(1, 45, 6, exclude);
      setRandomNumbers(numbers);

      setCopiedNumbers(numbers.join(", "));
    }
  };

  return (
    <div>
      <div className="w-full rounded bg-white mx-auto mt-2">
        <div className="rounded-t flex border-gray-300 border-b justify-between">
          <h2 className="py-2 px-3 text-gray-900 text-sm font-medium">
            조합에서 제외할 번호
          </h2>
        </div>
        <div className="py-3 px-4 flex justify-center flex-col items-center gap-8 ">
          <ul className="flex gap-1 flex-wrap justify-center flex-col items-start">
            <li className="flex gap-1">
              <NumberBtn setExclude={setExclude} exclude={exclude} number={1} />
              <NumberBtn setExclude={setExclude} exclude={exclude} number={2} />
              <NumberBtn setExclude={setExclude} exclude={exclude} number={3} />
              <NumberBtn setExclude={setExclude} exclude={exclude} number={4} />
              <NumberBtn setExclude={setExclude} exclude={exclude} number={5} />
              <NumberBtn setExclude={setExclude} exclude={exclude} number={6} />
              <NumberBtn setExclude={setExclude} exclude={exclude} number={7} />
            </li>
            <li className="flex gap-1">
              <NumberBtn setExclude={setExclude} exclude={exclude} number={8} />
              <NumberBtn setExclude={setExclude} exclude={exclude} number={9} />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={10}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={11}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={12}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={13}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={14}
              />
            </li>
            <li className="flex gap-1">
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={15}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={16}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={17}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={18}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={19}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={20}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={21}
              />
            </li>
            <li className="flex gap-1">
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={22}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={23}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={24}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={25}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={26}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={27}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={28}
              />
            </li>
            <li className="flex gap-1">
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={29}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={30}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={31}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={32}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={33}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={34}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={35}
              />
            </li>
            <li className="flex gap-1">
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={36}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={37}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={38}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={39}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={40}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={41}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={42}
              />
            </li>
            <li className="flex gap-1">
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={43}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={44}
              />
              <NumberBtn
                setExclude={setExclude}
                exclude={exclude}
                number={45}
              />
            </li>
          </ul>
          <div className="relative flex px-4 h-12 py-2 border border-blue-500 rounded w-full justify-between items-center">
            <div className="pr-2 text-sm font-bold border-r border-gray-200">
              <p>{getLottoRound() + 1}회</p>
            </div>
            <div className="flex gap-2">
              <div className="flex gap-1">
                {randomNumbers.map((num, i) => (
                  <SmallBall num={num} key={String(num) + i} />
                ))}
              </div>
              {randomNumbers.length > 0 ? (
                <button
                  type="button"
                  className="text-xs text-gray-400"
                  onClick={() => copyToClipboard(copiedNumbers)}
                >
                  복사
                </button>
              ) : null}
            </div>
            <button
              type="button"
              className=" text-sm font-extrabold text-blue-500"
              onClick={generateRandomNumbers}
            >
              번호 생성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NumberBtnProps {
  number: number;
  setExclude: React.Dispatch<React.SetStateAction<number[]>>;
  exclude: number[];
}

const NumberBtn: React.FC<NumberBtnProps> = ({
  number,
  setExclude,
  exclude,
}) => {
  const numberClick = () => {
    setExclude((prevExclude) => {
      // 현재 클릭된 숫자가 이미 exclude 배열에 포함되어 있는지 확인
      const numberIndex = prevExclude.indexOf(number);
      if (numberIndex !== -1) {
        // 포함되어 있다면 해당 숫자를 제거한 새로운 배열을 반환
        return prevExclude.filter((excludeNumber) => excludeNumber !== number);
      } else {
        // 포함되어 있지 않다면 해당 숫자를 추가한 새로운 배열을 반환
        return [...prevExclude, number];
      }
    });
  };

  return (
    <button
      onClick={numberClick}
      className={`${
        exclude.includes(number)
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-500"
      } w-10 h-10 flex items-center justify-center border-2  rounded text-xl font-bold`}
    >
      {number}
    </button>
  );
};

export default MExcludingNumber;
