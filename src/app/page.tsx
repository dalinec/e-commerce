import Banner from '@src/features/Home/Banner';
import TopCategories from '@src/features/Home/TopCategories';
import FeaturedProducts from '@src/features/Home/FeaturedProducts';

export default function Home() {
  return (
    <>
      <Banner />
      <TopCategories />
      <FeaturedProducts title='Best Deals for You' />
      <FeaturedProducts title='Most Selling Product' />
      <FeaturedProducts title='Trending Products' />
    </>
  );
}
