"use client";

import { useState } from "react";

const TopBannerAd = () => {
  const [adHide, setAdHide] = useState(false);
  const adCancel = () => {
    setAdHide(true);
  };

  return (
    <div
      className={`${
        adHide ? "hidden" : "flex"
      }  bg-sky-950 h-24  items-center justify-center`}
    >
      <iframe
        src="https://ads-partners.coupang.com/widgets.html?id=776155&template=carousel&trackingCode=AF1316385&subId=&width=970&height=96&tsource="
        width="970"
        height="96"
        // frameborder="0"
        // scrolling="no"
        // referrerpolicy="unsafe-url"
        // browsingtopics
      ></iframe>
      <button className="w-6 h-6 ml-2.5 " onClick={adCancel}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="M18.545 4L20 5.455 13.454 12 20 18.545 18.545 20 12 13.454 5.455 20 4 18.545 10.545 12 4 5.455 5.455 4 12 10.545 18.545 4z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default TopBannerAd;
