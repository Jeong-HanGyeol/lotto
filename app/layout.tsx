import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { isMobileDevice } from "@/libs/responsive";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "",
    // template: "%s - JEONG G",
  },
  keywords: [
    "lotto",
    "로또 자동 추첨",
    "로또 자동 추출기",
    "로또 번호 추출기",
    "로또 번호 생성기",
    "로또 자동 생성기",
    "로또 1등 상금",
  ],
  verification: {
    google: "tFATRVSYguzkvSry8h8eUDsnPBpJ66f-vZsrefzajPU",
    other: {
      "naver-site-verification": ["79d9fe3c6e681ab43ece54ab664879333fd656c1"],
    },
  },
  openGraph: {
    siteName: "JEONG G",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mobile = isMobileDevice();

  return (
    <html lang="ko">
      <head>
        <meta property="og:image" content="https://www.jeongg.com/og.png" />

        <script
          async
          custom-element="amp-ad"
          src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
        ></script>

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9491404746252298"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Header mobile={mobile} />
        {children}
        <Footer mobile={mobile} />
      </body>
    </html>
  );
}
