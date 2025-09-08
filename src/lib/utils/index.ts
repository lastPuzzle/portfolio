export { cn } from './cn';
export { getCookie, setCookie, getServerCookie } from './cookies';
export { categoryLabels, categoryColors } from './categoryLabels';

export const getCategoryVariant = (
  category: string
):
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'orange'
  | 'pink'
  | 'indigo'
  | 'cyan'
  | 'teal'
  | 'emerald'
  | 'violet'
  | 'rose'
  | 'amber'
  | 'default' => {
  switch (category) {
    case 'web':
      return 'secondary';
    case 'mobile':
      return 'success';
    case 'desktop':
      return 'info';
    case 'ai':
      return 'orange';
    case 'other':
      return 'default';
    case 'app-commerce':
      return 'pink';
    case 'platform':
      return 'indigo';
    case 'app-marketing':
      return 'cyan';
    case 'platform-marketing':
      return 'teal';
    case 'event':
      return 'warning';
    case 'platform-commerce':
      return 'emerald';
    case 'app-travel':
      return 'violet';
    case 'web-marketing':
      return 'rose';
    case 'web-commerce':
      return 'amber';
    default:
      return 'default';
  }
};
