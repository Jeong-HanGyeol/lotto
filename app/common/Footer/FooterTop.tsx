const FooterTop = () => {
  return (
    <section className="flex justify-between">
      <strong className="font-extrabold text-white pb-4 text-2xl">
        <a href="/">JEONG G</a>
      </strong>

      <div className="ml-3">
        <strong className="font-bold text-white pb-4 block">Products</strong>
        <nav className="flex gap-1 flex-col">
          <a href="/" className="text-white text-sm inline-block">
            로또
          </a>
        </nav>
      </div>
    </section>
  );
};

export default FooterTop;
