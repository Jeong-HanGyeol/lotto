"use client";

import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import MobileFooter from "./MobileFooter";
import { usePathname } from "next/navigation";

const Footer = ({ mobile }: { mobile: boolean }) => {
  const pathname = usePathname();

  if (mobile) {
    return <MobileFooter />;
  }
  return (
    <footer
      className={`${
        pathname === "/" ? "bg-blue-500" : "bg-gray-200"
      } pt-24 pb-12 `}
    >
      <div className="w-[1080px] mx-auto">
        <FooterTop path={pathname === "/"} />
        <FooterBottom path={pathname === "/"} />
      </div>
    </footer>
  );
};

export default Footer;
