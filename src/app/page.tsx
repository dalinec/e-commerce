import Banner from '@src/features/Home/Banner';
import TopCategories from '@src/features/Home/TopCategories';
import FeaturedProducts from '@src/features/Home/FeaturedProducts';
import { featureItems } from '@mocks/featured';

export default function Home() {
  return (
    <>
      <Banner />
      <TopCategories categories={featureItems.topCategories} />
      <FeaturedProducts
        title='Best Deals for You'
        products={featureItems.bestDeals}
      />
      <FeaturedProducts
        title='Most Selling Product'
        products={featureItems.mostSellingProducts}
      />
      <FeaturedProducts
        title='Trending Products'
        products={featureItems.trendingProducts}
      />
    </>
  );
}
