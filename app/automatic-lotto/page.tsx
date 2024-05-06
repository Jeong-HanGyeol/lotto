import ContentHeader from "./ContentHeader";

const AutomaticLotto = () => {
  return (
    <>
      <ContentHeader />
      <BannerContainer />
    </>
  );
};

const BannerContainer = () => {
  return (
    <div className="w-full min-h-24 mt-2 flex justify-center max-w-[1080px] mx-auto bg-white rounded py-2"></div>
  );
};

export default AutomaticLotto;
