"use client";

import { useState } from "react";
import {
  getLottoRound,
  getRandomNumbers,
  copyToClipboard,
} from "./common/util/func";
import { Ball } from "./common/components/Ball";

const NumCreate = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [copiedNumbers, setCopiedNumbers] = useState("");

  const generateRandomNumbers = () => {
    const numbers: number[] = getRandomNumbers(1, 45, 6);
    setRandomNumbers(numbers);

    setCopiedNumbers(numbers.join(", "));
  };

  return (
    <div className="bg-white rounded-full h-16 shadow-md flex items-center justify-between px-7">
      <div className="flex items-center">
        <div className="pl-10 pr-20 text-sm font-bold border-r border-gray-200">
          <p>{getLottoRound() + 1}회</p>
        </div>
        <div className="flex items-center justify-between px-14 gap-10">
          <div className="flex gap-4 items-center">
            {randomNumbers.map((num, i) => (
              <Ball num={num} key={String(num) + i} />
            ))}
          </div>
          {randomNumbers.length > 0 ? (
            <button
              type="button"
              className="text-sm text-gray-400"
              onClick={() => copyToClipboard(copiedNumbers)}
            >
              복사
            </button>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        className="text-xl font-extrabold text-blue-500"
        onClick={generateRandomNumbers}
      >
        번호 생성
      </button>
    </div>
  );
};

export default NumCreate;
