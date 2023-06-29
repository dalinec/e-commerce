export interface INavItem {
  label: string;
  href: string;
}

export interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: IRating;
  slug: string;
  mainImage: string;
  category?: ICategory;
  gallery?: string[];
}

export interface ICategory {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface IFeaturedItems {
  topCategories: ICategory[];
  bestDeals: IProduct[];
  mostSellingProducts: IProduct[];
  trendingProducts: IProduct[];
}
