import MGnb from "./MGnb";
import MNumCreate from "./MNumCreate";
import MLnb from "./Mlnb";

const MobileHeader = () => {
  return (
    <header className="bg-sky-950">
      <MGnb />

      <div className="pt-2">
        <img
          src="/lottoAi.png"
          alt="로또 그림"
          className=" max-w-[230px] mx-auto mt-1"
        />
      </div>

      <div className="pt-2 pb-4 px-4">
        <MNumCreate />
      </div>

      <PremiumBanner />

      <MLnb />
    </header>
  );
};

const PremiumBanner = () => {
  return (
    <div className="mx-auto w-[283px] h-[52px] px-4 py-2 bg-gray-900 rounded-full mb-4">
      <iframe
        src="https://ads-partners.coupang.com/widgets.html?id=776177&template=carousel&trackingCode=AF1316385&subId=&width=431&height=60&tsource="
        width="100%"
        height="100%"
        // frameborder="0"
        // scrolling="no"
        // referrerpolicy="unsafe-url"
        // browsingtopics
      ></iframe>
    </div>
  );
};

export default MobileHeader;
