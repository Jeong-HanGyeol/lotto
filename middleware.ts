// import { NextRequest, NextResponse, userAgent } from "next/server";

// export function middleware(request: NextRequest) {
//   const { device } = userAgent(request);
//   const viewport = device.type === "mobile" ? "mobile" : "desktop";

//   request.nextUrl.searchParams.set("viewport", viewport);

//   return NextResponse.rewrite(request.nextUrl);
// }

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
