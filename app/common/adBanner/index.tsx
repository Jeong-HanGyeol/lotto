import { useEffect } from "react";

const AdSense = (props) => {
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
