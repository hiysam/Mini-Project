import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: false
    })

    if(req.nextUrl.pathname.startsWith('/login') && token){
        return NextResponse.redirect(new URL('/', req.url))
    }
    if(req.nextUrl.pathname.startsWith('/product') && !token){
        return NextResponse.redirect(new URL('/login/login', req.url))
    }
    if(req.nextUrl.pathname.startsWith('') && !token){
        return NextResponse.redirect(new URL('/login/login', req.url))
    }
    return NextResponse.next()
}

export const config ={
    matcher:[
        '/login',
        '/product',
        '/product/:path*'
    ]
}