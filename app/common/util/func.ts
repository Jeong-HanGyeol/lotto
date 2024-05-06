export const getLottoRound = (): number => {
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
      (currentDate.getTime() - lottoStartDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const currentRound: number = Math.ceil(daysPassed / 7) + 1;

    return currentRound;
  } else {
    // 아직 밤 11시 30분 이전이면 현재 회차로 계산
    const daysPassed: number = Math.floor(
      (currentDate.getTime() - lottoStartDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const currentRound: number = Math.ceil(daysPassed / 7);
    return currentRound;
  }
};

export const getRandomNumbers = (
  min: number,
  max: number,
  count: number,
  exclude?: number[]
): number[] => {
  const numbers = new Set<number>();
  const range = max - min + 1;

  // 배열에서 제외할 값들을 Set에 추가
  const excludeSet = new Set<number>(exclude);

  // 필요한 개수만큼 랜덤값 생성
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * range) + min;
    if (!excludeSet.has(randomNumber)) {
      numbers.add(randomNumber);
    }
  }

  return Array.from(numbers).sort((a, b) => a - b);
};

export const copyToClipboard = async (copiedNumbers: string) => {
  try {
    console.log(copiedNumbers);
    await navigator.clipboard.writeText(copiedNumbers);
    alert(copiedNumbers);
  } catch (error) {
    console.error("복사 실패:", error);
  }
};
