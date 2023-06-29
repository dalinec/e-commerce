import { INavItem } from './model';

export const navItems: INavItem[] = [
  {
    label: 'All Products',
    href: '/products',
  },
  {
    label: 'Categories',
    href: '/categories',
  },
];

export const getSubstring = (text: string, substringEnd: number): string => {
  return text.length > substringEnd
    ? `${text.substring(0, substringEnd)}...`
    : text;
};
