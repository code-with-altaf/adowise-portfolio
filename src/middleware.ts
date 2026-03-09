import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["en", "hi", "es", "fr", "de", "ar", "ur"];

export function middleware(request: NextRequest) {
    const { pathname, hostname } = request.nextUrl;

    // 1. Domain Normalization (Redirect .in to .com)
    if (hostname.includes("adowise.in")) {
        const url = request.nextUrl.clone();
        url.hostname = "adowise.com";
        url.protocol = "https";
        return NextResponse.redirect(url, 301);
    }

    // 2. Locale check
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // 3. Redirect if there is no locale
    const locale = "en";
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - images (local image folder)
         * - favicon.ico (favicon file)
         * - Any files with an extension (e.g. .png, .jpg, .svg, .gif, .webp)
         */
        "/((?!api|_next/static|_next/image|images|sound\\.mp3|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|css|js|xml|txt|mp3)).*)"
    ],
};
