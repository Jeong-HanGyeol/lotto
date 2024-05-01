"use client";

import { usePathname } from "next/navigation";

const Body = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const bg = pathname === "/" ? "bg-blue-500" : "bg-gray-200";

  return <div className={bg}>{children}</div>;
};

export default Body;
