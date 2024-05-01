const NumCreate = () => {
  return (
    <div className="bg-white rounded-full h-16 shadow-md flex items-center justify-between px-7">
      <div className="flex items-center">
        <div className="pl-10 pr-20 text-sm font-bold border-r border-gray-200">
          <p>2000회</p>
        </div>
        <div className="flex items-center justify-between px-14 gap-10">
          <div className="flex gap-4 items-center">
            <span
              className={
                "flex justify-center items-center text-white w-8 h-8 rounded-full bg-red-500"
              }
            >
              7
            </span>
            <span
              className={
                "flex justify-center items-center text-white w-8 h-8 rounded-full bg-red-500"
              }
            >
              7
            </span>
            <span
              className={
                "flex justify-center items-center text-white w-8 h-8 rounded-full bg-red-500"
              }
            >
              7
            </span>
            <span
              className={
                "flex justify-center items-center text-white w-8 h-8 rounded-full bg-red-500"
              }
            >
              7
            </span>
            <span
              className={
                "flex justify-center items-center text-white w-8 h-8 rounded-full bg-red-500"
              }
            >
              7
            </span>
            <span
              className={
                "flex justify-center items-center text-white w-8 h-8 rounded-full bg-red-500"
              }
            >
              7
            </span>
          </div>
          <button type="button" className="text-sm text-gray-400">
            복사
          </button>
        </div>
      </div>

      <button type="button" className="text-xl font-extrabold text-blue-500">
        번호 생성
      </button>
    </div>
  );
};

export default NumCreate;
