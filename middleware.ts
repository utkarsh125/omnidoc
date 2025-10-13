import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// Define protected routes (routes that require authentication)
const protectedRoutes = ['/dashboard', '/documents', '/collaborative', '/word-assistant', '/notifications'];
// Define auth routes (routes that should redirect if already authenticated)
const authRoutes = ['/signin', '/signup'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;

  // Check if current route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  if (isProtectedRoute) {
    if (!token) {
      // Redirect to signin if no token
      const url = new URL('/signin', request.url);
      url.searchParams.set('redirect', pathname);
      return NextResponse.redirect(url);
    }

    try {
      // Verify token
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
      }
      jwt.verify(token, process.env.JWT_SECRET);
      return NextResponse.next();
    } catch (error: any) {
      // Handle expired or invalid tokens
      const response = NextResponse.redirect(new URL('/signin', request.url));
      
      if (error.name === 'TokenExpiredError') {
        // Clear expired cookie
        response.cookies.delete('token');
        // Set query params to show "Session expired" message
        const url = new URL('/signin', request.url);
        url.searchParams.set('expired', 'true');
        url.searchParams.set('redirect', pathname);
        return NextResponse.redirect(url);
      }
      
      // Invalid token - clear it
      response.cookies.delete('token');
      return response;
    }
  }

  // Redirect authenticated users away from auth pages
  if (isAuthRoute && token) {
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
      }
      jwt.verify(token, process.env.JWT_SECRET);
      return NextResponse.redirect(new URL('/dashboard', request.url));
    } catch {
      // Token invalid/expired, allow access to auth pages
      const response = NextResponse.next();
      response.cookies.delete('token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (handled separately)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)).*)',
  ],
};

