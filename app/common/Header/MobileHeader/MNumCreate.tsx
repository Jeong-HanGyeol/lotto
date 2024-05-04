"use client";

import { useEffect, useState } from "react";

const MNumCreate = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [copiedNumbers, setCopiedNumbers] = useState("");

  const getLottoRound = (): number => {
    // 로또 시작일 (2002-12-07)
    const lottoStartDate: Date = new Date("2002-12-07");

    // 현재 날짜와 시간
    const currentDate: Date = new Date();

    // 밤 11시 30분의 시간을 나타내는 Date 객체 생성
    const cutoffTime: Date = new Date();
    cutoffTime.setHours(23, 30, 0, 0);

    // 만약 현재 시간이 밤 11시 30분 이후라면 다음 회차로 계산
    if (currentDate >= cutoffTime) {
      // 로또는 매주 토요일마다 진행되므로, 경과한 일수를 7로 나누어 몇 주차인지 계산
      const daysPassed: number = Math.floor(
        (currentDate.getTime() - lottoStartDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );
      const currentRound: number = Math.ceil(daysPassed / 7) + 1;

      return currentRound;
    } else {
      // 아직 밤 11시 30분 이전이면 현재 회차로 계산
      const daysPassed: number = Math.floor(
        (currentDate.getTime() - lottoStartDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );
      const currentRound: number = Math.ceil(daysPassed / 7);
      return currentRound;
    }
  };

  const [newRound, setNewRound] = useState(getLottoRound() + 1);

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
    <div className="bg-white rounded-full h-10 shadow-md flex items-center justify-between px-4">
      <div className="flex items-center">
        <div className="pr-2 text-sm font-bold border-r border-gray-200">
          <p>{newRound}회</p>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto gap-2">
        <div className="flex gap-1 items-center">
          {randomNumbers.map((num, i) => (
            <Ball num={num} key={String(num) + i} />
          ))}
        </div>
        {randomNumbers.length > 0 ? (
          <button
            type="button"
            className="text-xs text-gray-400"
            onClick={copyToClipboard}
          >
            복사
          </button>
        ) : null}
      </div>

      <button
        type="button"
        className="text-sm font-extrabold text-blue-500"
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
      className={`${getColor()} flex justify-center items-center text-white w-6 h-6 rounded-full text-xs`}
    >
      {num}
    </span>
  );
};

export default MNumCreate;
