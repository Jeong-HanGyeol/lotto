import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-transparent">
      <div className="w-[1080px] mx-auto">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
