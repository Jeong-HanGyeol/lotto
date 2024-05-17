import AdSense from "./AdSense";

export const BottomBanner = () => {
  return (
    <div className="w-full min-h-[250px] flex max-w-[1080px] mx-auto py-2 rounded bg-white mt-6 items-center justify-center">
      <AdSense
        data-ad-slot="5642639411"
        style={{
          display: "inline-block",
          width: "970px",
          height: "250px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export const MBottomBanner = () => {
  return (
    <div className="w-full min-h-[250px] flex max-w-[1080px] mx-auto py-2 rounded bg-white mt-6 items-center justify-center">
      <AdSense
        data-ad-slot="9395796569"
        style={{
          display: "inline-block",
          width: "300px",
          height: "250px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};
