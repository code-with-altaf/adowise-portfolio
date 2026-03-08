import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["en", "hi", "es", "fr", "de", "ar"];

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = "en";
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
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
