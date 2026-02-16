import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect the /portfolio route
  if (request.nextUrl.pathname.startsWith('/portfolio')) {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token') || request.headers.get('x-portfolio-token');
    
    // Replace 'dev-access-2024' with your preferred secret
    if (token !== process.env.PORTFOLIO_TOKEN && token !== 'dev-access-2024') {
      return new NextResponse('Unauthorized: Access to the Strategic Lab is restricted.', { status: 401 });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/portfolio/:path*',
};
