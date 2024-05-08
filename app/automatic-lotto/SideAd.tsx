import KakaoAdFit from "../common/components/KakaoAdFit";

export const LeftSideAd = () => {
  return (
    <div className="absolute left-1/2 -translate-x-[750px] overflow-hidden flex items-center w-[160px]">
      <KakaoAdFit
        width="160"
        height="600"
        id="DAN-LcgnTsLAx0hpRw9I"
        name="leftSideAd"
      />
    </div>
  );
};

export const RightSideAd = () => {
  return (
    <div className="absolute right-1/2 translate-x-[750px] overflow-hidden flex items-center w-[160px]">
      <KakaoAdFit
        width="160"
        height="600"
        id="DAN-dkwfFr6RDLv9Bawm"
        name="rightSideAd"
      />
    </div>
  );
};
