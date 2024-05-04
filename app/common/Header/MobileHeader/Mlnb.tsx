import MLnbMenuItem from "./MLnbMenuItem";

const MLnb = () => {
  return (
    <nav className="h-12 px-4 overflow-auto bg-blue-500">
      <ul>
        <MLnbMenuItem title="홈" link="/" />
      </ul>
    </nav>
  );
};

export default MLnb;
