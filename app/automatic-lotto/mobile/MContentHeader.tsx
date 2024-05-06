const MContentHeader = () => {
  return (
    <div className="pt-2">
      <div className="bg-white ">
        <div className="pt-2.5 px-3 pb-3">
          <h1 className="flex items-center flex-wrap text-gray-900 text-sm font-bold">
            로또 자동 생성기
          </h1>
          <p className="text-gray-500 mt-2 text-xs break-words whitespace-pre-line">
            로또 번호 자동 생성기입니다. <br />
            버튼을 눌러 간편하게 6개의 숫자 조합은 만들며 제외 하고 싶은
            번호들을 선택하면 해당 번호를 제외시키고 조합을 만들 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MContentHeader;
