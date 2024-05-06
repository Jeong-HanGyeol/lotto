import ContentHeader from "./ContentHeader";

const AutomaticLotto = () => {
  return (
    <div className="bg-gray-200">
      <ContentHeader />
      <BannerContainer />
    </div>
  );
};

const BannerContainer = () => {
  return (
    <div className="w-full min-h-[106px] mt-2 flex justify-center max-w-[1080px] mx-auto bg-white rounded py-2"></div>
  );
};

export default AutomaticLotto;
