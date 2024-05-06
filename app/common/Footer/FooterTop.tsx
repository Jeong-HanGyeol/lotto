const FooterTop = ({ path }: { path: boolean }) => {
  return (
    <section className="flex justify-between">
      <strong
        className={`${
          path ? "text-white" : "text-gray-500"
        } font-extrabold pb-4 text-2xl`}
      >
        <a href="/">JEONG G</a>
      </strong>

      <div className="ml-3">
        <strong
          className={`${
            path ? "text-white" : "text-gray-900"
          } font-medium pb-4 block text-sm`}
        >
          Products
        </strong>
        <nav className="flex gap-1 flex-col">
          <a
            href="/"
            className={`${
              path ? "text-white" : "text-gray-500"
            } text-sm inline-block`}
          >
            로또
          </a>
        </nav>
      </div>
    </section>
  );
};

export default FooterTop;
