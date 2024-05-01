"use client";

import { useState } from "react";

const NumCreate = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [copiedNumbers, setCopiedNumbers] = useState("");

  const getRandomNumbers = (
    min: number,
    max: number,
    count: number
  ): number[] => {
    const numbers = new Set<number>();
    while (numbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  const generateRandomNumbers = () => {
    const numbers: number[] = getRandomNumbers(1, 45, 6);
    setRandomNumbers(numbers);

    setCopiedNumbers(numbers.join(", "));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copiedNumbers);
      alert(copiedNumbers);
    } catch (error) {
      console.error("복사 실패:", error);
    }
  };

  return (
    <div className="bg-white rounded-full h-16 shadow-md flex items-center justify-between px-7">
      <div className="flex items-center">
        <div className="pl-10 pr-20 text-sm font-bold border-r border-gray-200">
          <p>2000회</p>
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
              onClick={copyToClipboard}
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

const Ball = ({ num }: { num: number }) => {
  const getColor = () => {
    if (num >= 1 && num <= 10) {
      return "bg-yellow-500";
    } else if (num >= 11 && num <= 20) {
      return "bg-blue-500";
    } else if (num >= 21 && num <= 30) {
      return "bg-red-500";
    } else if (num >= 31 && num <= 40) {
      return "bg-gray-500";
    } else {
      return "bg-green-500";
    }
  };

  return (
    <span
      className={`${getColor()} flex justify-center items-center text-white w-8 h-8 rounded-full`}
    >
      {num}
    </span>
  );
};

export default NumCreate;
