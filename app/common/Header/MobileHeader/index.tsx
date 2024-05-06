import MGnb from "./MGnb";
import MNumCreate from "./MNumCreate";
import MLnb from "./Mlnb";
import LottoAi from "./LottoAi";
import PremiumBanner from "./PremiumBanner";

const MobileHeader = () => {
  return (
    <header className="bg-sky-950">
      <MGnb />

      <LottoAi />

      <div className="pt-2 pb-4 px-4">
        <MNumCreate />
      </div>

      <PremiumBanner />

      <MLnb />
    </header>
  );
};

export default MobileHeader;
