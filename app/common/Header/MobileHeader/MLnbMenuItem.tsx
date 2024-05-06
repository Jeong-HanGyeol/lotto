"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MLnbMenuItem = ({ title, link }: { title: string; link: string }) => {
  const pathname = usePathname();

  const active = pathname === link ? true : false;

  return (
    <li className="inline-block first-of-type:ml-0 ml-6">
      <Link href={link}>
        <div
          className={`${
            active
              ? "border-white text-white"
              : "border-b-transparent text-blue-200"
          } pt-3 pb-2.5 flex items-center border-b-4 text-base leading-6 box-border hover:border-white hover:text-white`}
        >
          {title}
        </div>
      </Link>
    </li>
  );
};

export default MLnbMenuItem;
