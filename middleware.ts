import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth');
  const isAuthenticated = authCookie?.value === 'true';
  const isAuthPage = request.nextUrl.pathname === '/';
  const isAdminPage = request.nextUrl.pathname.startsWith('/dashboard/admin');
  const isDashboardPage = request.nextUrl.pathname === '/dashboard';

  // If not authenticated and trying to access protected routes
  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If authenticated and trying to access login page
  if (isAuthenticated && isAuthPage) {
    // If coming from admin page, redirect back to admin
    if (request.headers.get('referer')?.includes('/admin')) {
      return NextResponse.redirect(new URL('/dashboard/admin', request.url));
    }
    // Otherwise, redirect to main dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard', '/dashboard/admin']
}; 