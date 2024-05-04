import MFooterTop from "./MFooterTop";
import MFooterBottom from "./MFooterBottom";

const MobileFooter = () => {
  return (
    <footer className="px-3 bg-gray-200">
      <div className="">
        <MFooterTop />
        <MFooterBottom />
      </div>
    </footer>
  );
};

export default MobileFooter;
