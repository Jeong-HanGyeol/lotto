const FooterBottom = ({ path }: { path: boolean }) => {
  return (
    <section
      className={`${
        path ? "text-white" : "text-gray-400"
      } mt-6 pt-6 border-t border-gray-200 flex items-start gap-4 text-xs`}
    >
      <div className="flex gap-4 flex-col">
        <ul className="flex flex-wrap gap-4">
          <InfoItem path={path} border={true} text="JEONG G" />
          <InfoItem path={path} border={true} text="주소 : 대전광역시 동구" />
          <InfoItem
            path={path}
            border={true}
            text="이메일 : whd6023@naver.com"
          />
          <InfoItem path={path} border={false} text="대표자 : 정한결" />
        </ul>
      </div>
    </section>
  );
};

const InfoItem = ({
  text,
  border,
  path,
}: {
  text: string;
  border: boolean;
  path: boolean;
}) => {
  return (
    <li
      className={`${
        border
          ? path
            ? "after:bg-white"
            : "after:bg-gray-300"
          : "after:bg-transparent"
      } relative after:top-1/2 after:-translate-y-1/2 after:-right-2 after:absolute after:w-px after:h-3 `}
    >
      <span>{text}</span>
    </li>
  );
};

export default FooterBottom;
