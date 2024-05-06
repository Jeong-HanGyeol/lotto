import ContentHeader from "./ContentHeader";
import BannerContainer from "./BannerContainer";
import ExcludingNumber from "./ExcludingNumber";
import BottomBanner from "./BottomBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로또자동생성기",
};

const AutomaticLotto = () => {
  return (
    <div className="bg-gray-200">
      <ContentHeader />
      <BannerContainer />
      <ExcludingNumber />
      <BottomBanner />
    </div>
  );
};

export default AutomaticLotto;
