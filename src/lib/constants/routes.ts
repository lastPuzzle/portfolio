import { Home, User, Code } from 'lucide-react';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
} as const;

export const MENU_ITEMS = [
  { icon: Home, label: '홈', href: ROUTES.HOME },
  { icon: User, label: '소개', href: ROUTES.ABOUT },
  { icon: Code, label: '프로젝트', href: ROUTES.PROJECTS },
] as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];
