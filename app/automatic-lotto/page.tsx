import NumCreate from "./NumCreate";

export default function AutomaticLotto() {
  return (
    <div className="w-[1080px] mx-auto ">
      <div className="mt-14 mb-12">
        <img
          src="/lottoAi.png"
          alt="로또 그림"
          className=" max-h-[224px] mx-auto"
        />
      </div>

      <div className="flex flex-col w-[800px] mx-auto">
        <NumCreate />
      </div>
    </div>
  );
}
