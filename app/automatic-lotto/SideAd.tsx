import AdSense from "@/app/common/components/AdSense";

export const LeftSideAd = () => {
  return (
    <div className="absolute left-1/2 -translate-x-[750px] overflow-hidden flex items-center w-[160px]">
      <AdSense
        data-ad-slot="4988033299"
        style={{
          display: "inline-block",
          width: "300px",
          height: "600px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export const RightSideAd = () => {
  return (
    <div className="absolute right-1/2 translate-x-[750px] overflow-hidden flex items-center w-[160px]">
      <AdSense
        data-ad-slot="3251359925"
        style={{
          display: "inline-block",
          width: "300px",
          height: "600px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};
