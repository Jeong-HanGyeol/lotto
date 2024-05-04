const MHome = () => {
  return (
    <div className="bg-gray-200 py-2">
      <Ad />
    </div>
  );
};

const Ad = () => {
  return (
    <div className="w-full min-h-24 flex items-center justify-center ">
      <iframe
        src="https://ads-partners.coupang.com/widgets.html?id=776178&template=carousel&trackingCode=AF1316385&subId=&width=728&height=200&tsource="
        width="320"
        height="100"
        // frameborder="0"
        // scrolling="no"
        // referrerpolicy="unsafe-url"
        // browsingtopics
      ></iframe>
    </div>
  );
};

export default MHome;
