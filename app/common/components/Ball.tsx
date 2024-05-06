export const Ball = ({ num }: { num: number }) => {
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
