import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRODUCTION_SITE_URL = "https://plabcoach.com";

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");

  // Keep staging and Vercel preview deployments out of search results.
  if (configuredSiteUrl !== PRODUCTION_SITE_URL) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
