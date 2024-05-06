"use client";
import { usePathname } from "next/navigation";

const LottoAi = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <div className="pt-2">
        <img
          src="/lottoAi.png"
          alt="로또 그림"
          className=" max-w-[230px] mx-auto mt-1"
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default LottoAi;
