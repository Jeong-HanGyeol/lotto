"use client";

import React, { useEffect, useRef } from "react";

interface AdFitProps {
  width: string;
  height: string;
  id: string;
  name: string;
}

function KakaoAdFit({ width, height, id, name }: AdFitProps) {
  // 최초 1회만 광고를 불러오기 위한 변수
  const adRef = useRef<boolean>(false);

  useEffect(() => {
    // 로딩된 광고가 있으면, 추가 로딩 X
    if (adRef.current) {
      return;
    }

    const ins = document.createElement("ins");
    const script = document.createElement("script");

    ins.className = "kakao_ad_area";
    ins.style.display = "none;";

    ins.setAttribute("data-ad-width", width);
    ins.setAttribute("data-ad-height", height);
    ins.setAttribute("data-ad-unit", id);

    script.async = true;
    script.type = "text/javascript";
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";

    document.querySelector(`.${name}`)?.appendChild(ins);
    document.querySelector(`.${name}`)?.appendChild(script);

    // 광고 로딩 여부 상태 변경
    adRef.current = true;
  }, []);

  return (
    <>
      <div className={name}></div>
    </>
  );
}

export default React.memo(KakaoAdFit);
