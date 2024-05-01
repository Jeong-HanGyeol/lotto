import LnbMenuItem from "./LnbMenuItem";

const Lnb = () => {
  return (
    <div className="border-b border-blue-600 bg-blue-500 flex justify-center">
      <nav className="flex w-[1080px] items-center justify-between">
        <ul className="flex gap-6 items-center">
          <LnbMenuItem title="홈" link="/" />
          {/* <LnbMenuItem title="로또 자동 추출기" link="/automatic-lotto" /> */}
        </ul>
      </nav>
    </div>
  );
};

export default Lnb;
