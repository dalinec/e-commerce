import Banner from '@src/features/Home/Banner';
import TopCategories from '@src/features/Home/TopCategories';
import FeaturedProducts from '@src/features/Home/FeaturedProducts';
import { client } from '@utils/sanity.client';
import { groq } from 'next-sanity';
import { IFeaturedItems } from '@src/model';

const getAllFeaturedItemsQueries = groq`
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        },
        "bestDeals": bestDeals[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        }
    }
`;

const getFeaturedItems = () => {
  return client.fetch(getAllFeaturedItemsQueries);
};

export const revalidate = 60;

export default async function Home() {
  const featuredItems: IFeaturedItems[] = await getFeaturedItems();
  return (
    <>
      <Banner />
      <TopCategories categories={featuredItems[0].topCategories} />
      <FeaturedProducts
        title='Best Deals for You'
        products={featuredItems[0].bestDeals}
      />
      <FeaturedProducts
        title='Most Selling Product'
        products={featuredItems[0].mostSellingProducts}
      />
      <FeaturedProducts
        title='Trending Products'
        products={featuredItems[0].trendingProducts}
      />
    </>
  );
}
