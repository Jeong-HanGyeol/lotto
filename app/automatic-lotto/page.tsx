import ContentHeader from "./ContentHeader";
import BannerContainer from "./BannerContainer";
import ExcludingNumber from "./ExcludingNumber";
import BottomBanner from "./BottomBanner";
import { Metadata } from "next";
import { isMobileDevice } from "@/libs/responsive";
import MContentHeader from "./mobile/MContentHeader";
import MExcludingNumber from "./mobile/MExcludingNumber";
import MBannerContainer from "./mobile/MBannerContainer";
import { RightSideAd, LeftSideAd } from "./SideAd";

export const metadata: Metadata = {
  title: "로또자동생성기",
  description:
    "로또 번호 자동 생성기입니다. 버튼을 눌러 간편하게 6개의 숫자 조합을 만들며 제외 하고 싶은 번호들을 선택하면 해당 번호를 제외시키고 조합을 만들 수 있습니다.",
  openGraph: {
    title: "로또자동생성기 - JEONG G",
    description:
      "로또 번호 자동 생성기입니다. 버튼을 눌러 간편하게 6개의 숫자 조합을 만들며 제외 하고 싶은 번호들을 선택하면 해당 번호를 제외시키고 조합을 만들 수 있습니다.",
    url: "https://www.jeongg.com/automatic-lotto",
  },
};

const AutomaticLotto = () => {
  const mobile = isMobileDevice();

  return (
    <div className="bg-gray-200">
      {mobile ? <MContentHeader /> : <ContentHeader />}

      <div className="relative">
        {mobile ? null : <LeftSideAd />}
        {mobile ? null : <RightSideAd />}

        {mobile ? <MBannerContainer /> : <BannerContainer />}

        {mobile ? <MExcludingNumber /> : <ExcludingNumber />}
        <BottomBanner />
      </div>
    </div>
  );
};

export default AutomaticLotto;
