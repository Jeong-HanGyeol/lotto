import TopBannerAd from "./TopBannerAd";
import Gnb from "./Gnb";
import Lnb from "./Lnb";
import MobileHeader from "./MobileHeader";

const Header = ({ mobile }: { mobile: boolean }) => {
  if (mobile) {
    return <MobileHeader />;
  }
  return (
    <header>
      <TopBannerAd />
      <Gnb />
      <Lnb />
    </header>
  );
};

export default Header;
