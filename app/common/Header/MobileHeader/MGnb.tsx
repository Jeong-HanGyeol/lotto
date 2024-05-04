const MGnb = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 mt-3 ml-4">
        <button className="relative w-12 h-6 pr-6">
          <LottoIcon />
        </button>
      </div>
      <div className="py-4 text-center">
        <Logo />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <a href="/" className="">
      <span className="font-black text-lg text-white leading-none">
        JEONG G
      </span>
    </a>
  );
};

const LottoIcon = () => {
  return (
    <span className="flex items-center justify-center">
      <span className="bg-white w-5 h-5 rounded-full flex items-center justify-center">
        <span className="rounded-full border border-blue-500 w-4 h-4 flex items-center justify-center text-xs text-blue-500">
          7
        </span>
      </span>
    </span>
  );
};

export default MGnb;
