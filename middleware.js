import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export default function middleware(req) {
  return NextResponse.redirect(new URL("/login", req.url));
}

// where middleware will run!!!
export const config = {
  matcher: "/userslist/:path*",
};
