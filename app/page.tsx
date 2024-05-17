import MHome from "./MHome";
import NumCreate from "./NumCreate";
import { isMobileDevice } from "@/libs/responsive";
import { Metadata } from "next";
import { BottomBanner } from "./common/components/BottomBanner";

export const metadata: Metadata = {
  title: "로또간편추첨기",
  description:
    "로또번호 간편 생성기입니다. 버튼을 눌러 간편하게 6개의 숫자 조합을 만들어 볼 수 있습니다. 뿐만 아니라 다양한 로또 관련 정보들을 얻어 가세요!",
  applicationName: "JEONG G",
  openGraph: {
    title: "로또간편추첨기 - JEONG G",
    description:
      "로또번호 간편 생성기입니다. 버튼을 눌러 간편하게 6개의 숫자 조합을 만들어 볼 수 있습니다. 뿐만 아니라 다양한 로또 관련 정보들을 얻어 가세요!",
    url: "https://www.jeongg.com",
  },
};

export default function Home() {
  const mobile = isMobileDevice();

  if (mobile) {
    return <MHome />;
  }

  return (
    <div className="bg-blue-500">
      <div className="w-[1080px] mx-auto ">
        <div className="pt-14 mb-12">
          <img
            src="/lottoAi.png"
            alt="로또 그림"
            className=" max-h-[224px] mx-auto"
          />
        </div>

        <div className="flex flex-col w-[800px] mx-auto gap-6">
          <NumCreate />

          <PremiumBanner />
        </div>

        <BottomBanner />
      </div>
    </div>
  );
}

const PremiumBanner = () => {
  return (
    <div className="mx-auto w-[511px] h-[60px] px-10 bg-gray-900 rounded-full">
      <iframe
        src="https://ads-partners.coupang.com/widgets.html?id=776177&template=carousel&trackingCode=AF1316385&subId=&width=431&height=60&tsource="
        width="431"
        height="60"
        // frameborder="0"
        // scrolling="no"
        // referrerpolicy="unsafe-url"
        // browsingtopics
      ></iframe>
    </div>
  );
};
