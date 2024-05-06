"use client";
import { usePathname } from "next/navigation";

const PremiumBanner = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="mx-auto w-[283px] h-[52px] px-4 py-2 bg-gray-900 rounded-full mb-4">
        <iframe
          src="https://ads-partners.coupang.com/widgets.html?id=776177&template=carousel&trackingCode=AF1316385&subId=&width=431&height=60&tsource="
          width="100%"
          height="100%"
          // frameborder="0"
          // scrolling="no"
          // referrerpolicy="unsafe-url"
          // browsingtopics
        ></iframe>
      </div>
    );
  } else {
    return <></>;
  }
};

export default PremiumBanner;
