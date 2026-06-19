import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import {locales, defaultLocale} from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Always show the locale segment in the URL: /en /ko /vi
  localePrefix: 'always'
});

// Lightweight, type-safe navigation APIs that keep the active locale segment.
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
