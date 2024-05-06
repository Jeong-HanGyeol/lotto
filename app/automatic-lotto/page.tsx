import ContentHeader from "./ContentHeader";
import BannerContainer from "./BannerContainer";
import ExcludingNumber from "./ExcludingNumber";
import BottomBanner from "./BottomBanner";
import { Metadata } from "next";
import { isMobileDevice } from "@/libs/responsive";
import MContentHeader from "./mobile/MContentHeader";
import MExcludingNumber from "./mobile/MExcludingNumber";

export const metadata: Metadata = {
  title: "로또자동생성기",
};

const AutomaticLotto = () => {
  const mobile = isMobileDevice();

  return (
    <div className="bg-gray-200">
      {mobile ? <MContentHeader /> : <ContentHeader />}

      <BannerContainer />

      {mobile ? <MExcludingNumber /> : <ExcludingNumber />}
      <BottomBanner />
    </div>
  );
};

export default AutomaticLotto;
