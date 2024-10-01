import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const publicRouters = ['/login']

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const token = cookies().get('token');
    const isPublicPath = publicRouters.includes(path);

    if (token && isPublicPath) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    if (!token && !isPublicPath) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.svg$).*)'],
}