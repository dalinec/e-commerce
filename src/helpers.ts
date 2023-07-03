import { INavItem, IBreadCrumbItem, IItem } from './model';

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

export const defaultBreadcrumbItems: IBreadCrumbItem[] = [
  {
    name: 'Products',
    link: '/products',
  },
  {
    name: 'Categories',
    link: '/categories',
  },
];

export const calculateItemsTotal = (items: IItem[]): number => {
  return items
    .map((item) => ({ price: item.price, count: item.count }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};

export const formatPrice = (value: number): string => {
  return value.toFixed(2);
};
