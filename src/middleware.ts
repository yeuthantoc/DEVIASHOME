import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

// next-intl handles locale detection, the /en /ko /vi prefixes and emits
// the hreflang alternate links automatically.
export default createMiddleware(routing);

export const config = {
  // Skip API routes, Next internals and any path with a file extension.
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
};
