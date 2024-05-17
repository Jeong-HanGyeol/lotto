"use client";

import { useEffect } from "react";

type AdSenseProps = {
  "data-ad-slot": string;
  style: React.CSSProperties;
};

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

const AdSense: React.FC<AdSenseProps> = (props) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      data-ad-client="ca-pub-9491404746252298"
      {...props}
    ></ins>
  );
};
export default AdSense;
