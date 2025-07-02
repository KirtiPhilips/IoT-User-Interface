import { ROUTES } from '~/pages/routes';
import { ReactNode } from 'react';

export type RouteType = {
  id: string;
  name: string;
  href: string;
};

export const routes: RouteType[] = [
  { id: 'dashboard', name: 'Dashboard', href: ROUTES.Dashboard },
  {
    id: 'Toggles',
    name: 'Toggles',
    href: `${ROUTES.GenericPage}?title=toggles`,
  },
  {
    id: 'Bucket',
    name: 'Bucket',
    href: `${ROUTES.GenericPage}?title=bucket`,
  },
  {
    id: 'MSK',
    name: 'MSK',
    href: `${ROUTES.GenericPage}?title=msk`,
  },
  {
    id: 'Admin',
    name: 'Admin',
    href: `${ROUTES.GenericPage}?title=admin`,
  }
];
