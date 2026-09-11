import { NextRequest, NextResponse } from "next/server";

export const proxy = (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;
  const authenticated = token ? true : false;

  if (!authenticated && req.nextUrl.pathname.startsWith("/conta")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (authenticated && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/conta", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/conta/:path*", "/login/:path*"],
};
