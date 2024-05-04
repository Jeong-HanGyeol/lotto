const MFooterBottom = () => {
  return (
    <section className="mt-8 pb-6 gap-6 text-gray-400 text-xs">
      <div className="flex gap-4 flex-col">
        <ul className="flex flex-wrap gap-4">
          <InfoItem border={true} text="JEONG G" width="w-full" />
          <InfoItem border={true} text="주소 : 대전광역시 동구" />
          <InfoItem border={true} text="이메일 : whd6023@naver.com" />
          <InfoItem border={false} text="대표자 : 정한결" />
        </ul>
      </div>
    </section>
  );
};

const InfoItem = ({
  text,
  border,
  width,
}: {
  text: string;
  border: boolean;
  width?: string;
}) => {
  return (
    <li
      className={`${
        border ? "after:bg-gray-300" : "after:bg-transparent"
      } ${width} relative after:top-1/2 after:-translate-y-1/2 after:-right-2 after:absolute after:w-px after:h-3 `}
    >
      <span>{text}</span>
    </li>
  );
};

export default MFooterBottom;
