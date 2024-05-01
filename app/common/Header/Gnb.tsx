const Gnb = () => {
  return (
    <div className="h-10 pl-28 bg-sky-950 flex items-center relative">
      <Logo />

      <nav>
        <ul className="flex h-10">
          <MenuItem />
        </ul>
      </nav>
    </div>
  );
};

const Logo = () => {
  return (
    <a
      href="/"
      className="absolute top-0 left-0 bg-blue-500 w-28 h-10 flex items-center justify-center"
    >
      <span className="font-black text-lg text-white">JEONG G</span>
    </a>
  );
};

const MenuItem = () => {
  return (
    <li className="flex items-center pr-3 bg-blue-500">
      <span className="flex items-center justify-center">
        <span className="bg-white w-5 h-5 rounded-full flex items-center justify-center">
          <span className="rounded-full border border-blue-500 w-4 h-4 flex items-center justify-center text-xs text-blue-500">
            7
          </span>
        </span>
        <span className="ml-2 text-xs text-white">로또</span>
      </span>
    </li>
  );
};

export default Gnb;
