import NumCreate from "./automatic-lotto/NumCreate";

export default function AutomaticLotto() {
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

        <Ad />
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

const Ad = () => {
  return (
    <div className="w-full min-h-[250px] mt-6 flex max-w-[1080px] mx-auto bg-white py-2 rounded-md items-center justify-center">
      <iframe
        src="https://ads-partners.coupang.com/widgets.html?id=776178&template=carousel&trackingCode=AF1316385&subId=&width=728&height=200&tsource="
        width="728"
        height="200"
        // frameborder="0"
        // scrolling="no"
        // referrerpolicy="unsafe-url"
        // browsingtopics
      ></iframe>
    </div>
  );
};
