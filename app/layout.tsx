import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./common/Header";
import Footer from "./common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "로또 간편 추첨기",
  description:
    "로또 자동 추첨기, 당첨내역, 역대 당첨 번호 등 다양한 로또 관련 정보들을 확인할 수 있습니다!",
  keywords: [
    "lotto",
    "로또 자동 추첨",
    "로또 자동 추출기",
    "로또 번호 추출기",
    "로또 번호 생성기",
    "로또 1등 상금",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blue-500">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
