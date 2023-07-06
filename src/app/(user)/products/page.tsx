'use client';

import Hero from '@src/components/Hero/Hero';
import AllProducts from '@src/features/products';
import { IProduct } from '@src/model';
import { client } from '@utils/sanity.client';
import { groq } from 'next-sanity';

const getAllProductsQueries: string = groq`
  *[_type == "product"] {
    "id":_id,
    name,
    description,
    price,
    rating,
    "slug":slug.current,
    "mainImage":mainImage.asset->url
  }
`;

const getProducts = () => {
  return client.fetch(getAllProductsQueries);
};

export const revalidate = 60;

const ProductsPage = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <>
      <Hero
        heading='The best quality Products'
        description='Affordability, Durability, Fast and Convenient Delivery, Free Shipping and more!'
        imageUrl='/bags.jpg'
        btnLabel='View All Categories'
        btnLink='/categories'
      />
      <AllProducts products={products} />
    </>
  );
};

export default ProductsPage;
