
import NextAuth from 'next-auth';
import authConfig from '@/lib/auth.config';
import {
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
    authRoutes,
    apiAuthPrefix,
} from '@/routes';


const { auth } = NextAuth(authConfig);

export default auth((req => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
      return Promise.resolve();
    }

    if (isAuthRoute) {
      if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }
      return Promise.resolve();
    }

    if (!isLoggedIn && !isPublicRoute) {
      return Response.redirect(new URL('/auth/login', nextUrl));
    }

    return Promise.resolve();
  }
));

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
