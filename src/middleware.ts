import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

// In middleware auth mode, each page is protected by default.
// Exceptions are configured via the `unauthenticatedPaths` option.
export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: [
      '/',
      '/about',
      '/courses',
      '/success-stories',
      '/contact',
      '/signin',
      '/signup',
      '/login',
      '/callback',
      '/logout',
      '/unauthorized',
    ],
  },
});

// Match against pages that require authentication
export const config = {
  matcher: [
    '/',
    '/student/:path*',
    '/teacher/:path*',
    '/admin/:path*',
    '/about',
    '/courses',
    '/success-stories',
    '/contact',
    '/callback',
    '/unauthorized',
  ],
};