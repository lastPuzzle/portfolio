import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  EXPERIENCE: '/experience',
  PROJECTS: '/projects',
  CONTACT: '/contact',
} as const;

export const MENU_ITEMS = [
  { icon: Home, label: '홈', href: ROUTES.HOME },
  { icon: User, label: '소개', href: ROUTES.ABOUT },
  { icon: Briefcase, label: '경험', href: ROUTES.EXPERIENCE },
  { icon: Code, label: '프로젝트', href: ROUTES.PROJECTS },
  { icon: Mail, label: '연락처', href: ROUTES.CONTACT },
] as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];
